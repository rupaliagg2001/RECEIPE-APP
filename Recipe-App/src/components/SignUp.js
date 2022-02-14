import React, { useState } from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const SignUp = ({ data, setData }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password) return;

        const user = {};
        user.id = uuid();
        user.name = name;
        user.email = email;
        localStorage.setItem("user", JSON.stringify(user));
        if (data.users.find((user) => user.name === name)) {
            alert("User already exists");
            return;
        }
        data.users.push(user);
    };

    return (
        <main className="main">
            <div className="container">
                <section className="wrapper">
                    <div className="heading">
                        <h1 className="text text-large">Sign Up</h1>
                        <p className="text text-normal">
                            <span>
                                <Link to="/login" className="text text-links">
                                    Already have an account?
                                </Link>
                            </span>
                        </p>
                    </div>
                    <form className="form" method="POST">
                        <div className="input-control">
                            <label
                                htmlFor="name"
                                className="input-label"
                                hidden
                            >
                                Name
                            </label>
                            <input
                                name="name"
                                className="input-field"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="input-control">
                            <label
                                htmlFor="email"
                                className="input-label"
                                hidden
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="input-field"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-control">
                            <label
                                htmlFor="password"
                                className="input-label"
                                hidden
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="input-field"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="input-control">
                            <input
                                type="button"
                                name="submit"
                                className="input-submit"
                                value="Sign Up"
                                onClick={handleSubmit}
                            />
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
};

export default SignUp;
