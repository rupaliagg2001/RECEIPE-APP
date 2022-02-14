import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <main className="main">
            <div className="container">
                <section className="wrapper">
                    <div className="heading">
                        <h1 className="text text-large">Sign In</h1>
                        <p className="text text-normal">
                            New user?{" "}
                            <span>
                                <Link to="/signup" className="text text-links">
                                    Create an account
                                </Link>
                            </span>
                        </p>
                    </div>
                    <form name="login" className="form">
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
                                name="email"
                                className="input-field"
                                placeholder="Email Address"
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
                            />
                        </div>
                        <div className="input-control">
                            <input
                                type="button"
                                name="submit"
                                className="input-submit"
                                value="Login"
                                disabled
                            />
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
};

export default Login;
