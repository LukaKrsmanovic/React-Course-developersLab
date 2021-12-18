import React from "react";

export default function Student(props) {
    // return React.createElement("div", {}, [
    //     React.createElement("h2", {}, props.name),
    //     React.createElement("h3", {}, "Fakultet: " + props.fakultet),
    //     React.createElement("hr")
    // ]);
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>Fakultet: {props.fakultet}</h3>
            <hr></hr>
        </div>
    );
};
