import React, { useState } from 'react';

const Forms = () => {

    const [enterValue, setEnterValue] = useState();
    const [fullName, setFullName] = useState();

    const inputEvent = (event) => {
        setEnterValue(event.target.value)
    }

    const clickMebutton = () => {
        setFullName(enterValue);
    }

    return (
        <div className="main-div">
            <h1 className="h1-div">Hello {fullName}</h1>
            <input onChange={inputEvent} value= {enterValue} className="input-div" placeholder="Enter your name" />
            <div>
            <button onClick={clickMebutton} className="button-div">Click me 👍</button>
            </div>
        </div>
    )
}

export default Forms;