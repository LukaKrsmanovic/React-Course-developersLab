import React from "react"
import ReactDOM from "react-dom"
import Student from "./Student"

const App = () => {
    // return React.createElement("div", {id: "student-container"}, [
    //     React.createElement("h1", {id: "title"}, "Students"),
    //     React.createElement(Student, {name: "Rade", fakultet: "PMF"}),
    //     React.createElement(Student, {name: "Luka", fakultet: "ETF"})
    // ]);
    return (
        <div>
            <h1 id="title">Students</h1>
            <Student name="Rade" fakultet="PMF"></Student>
            <Student name="Luka" fakultet="ETF"></Student>
        </div>
    )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));