import React from "react";

const Card = (props) => {
    const { hero } = props;

    return (
        <li className="card">
            <div className="data-container">
                <ul>
                    <li>Name: {hero.localized_name}</li>
                    <li>Attribute: {hero.primary_attr}</li>
                    <li>Type: {hero.attack_type}</li>
                </ul>
            </div>
        </li>
    );
};

export default Card;