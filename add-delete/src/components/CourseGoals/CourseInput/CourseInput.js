import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
    // const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [val, setVal] = useState();

    const goalInputChangeHandler = (event) => {
        setVal(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddGoal(val);
        setVal(() => "");
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control ${!isValid ? "invalid" : ""}`}>
                <label>Course Goal</label>
                <input
                    type="text"
                    value={val}
                    onChange={goalInputChangeHandler}
                />
            </div>
            <Button type="submit" onClick={() => {}}>
                Add Goal
            </Button>
        </form>
    );
};

export default CourseInput;
