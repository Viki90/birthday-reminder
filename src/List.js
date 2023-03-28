import React from "react";

const List = ({ people }) => {
    return (
        <div>
            {people.map((person) => {
                const {id, name, age, image } = person;
                return (
                    <div key={id} className="person">
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name} name</h4>
                            <p>{age} year</p>
                        </div>
                    </div>
                );
            })}
            
        </div>
    );
};

export default List;