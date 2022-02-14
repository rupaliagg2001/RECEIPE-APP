import React from "react";
import Recipe from "./Recipe";

const Home = ({ data, setData }) => {
    return (
        <div className="home">
            {/* {console.log(data.recipes)} */}
            {data.recipes?.map((recipe) => (
                <Recipe key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};

export default Home;
