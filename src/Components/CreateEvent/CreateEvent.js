import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./CreateEvent.style.css"; 
import valitation from "./Validation";
const CreateEvent = () => {

    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",
    });
    const [select, setSelect] = useState();
    const [date, setDate] = useState();
    const [locations, setLocation] = useState();
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }
    const handleClick = () => {
        console.log("reusit");
    }

    return (
        <div >
            <Navbar />
            <div className="container">
                <div className="app-wrapper">
                    <h2 className="title">Create an event</h2>
                    <form className="form-wrapper">
                        <div className="name">
                            <label className="label">Full Name</label>
                            <input className="input" type="text" name="fullname" value={values.fullname} onChange={handleChange}></input>
                            {errors.fullname && <p className="error">{errors.fullname}</p>}
                        </div>
                        <div className="dropbox">
                            <p>Select the type of the event!</p>
                            <select value={select} onChange={e => setSelect(e.target.value)}>
                                <option value="Fotbal">Fotbal</option>
                                <option value="Tennis">Tennis</option>
                                <option value="Bascketball">Bascketball</option>
                                <option value="Handball">Handball</option>
                            </select>
                        </div>
                        <div className="calendar">
                            <p>Choose the date of the event!</p>
                            <input type="date" onChange={e => setDate(e.target.value)} />
                        </div>
                        <div className="dropbox">
                            {/* ToDo: add the locations from googleMaps */}
                            <p>Select the location of the event</p>
                            <select value={locations} onChange={e => setSelect(e.target.value)}>
                                <option value="Davia" >Davia Sport</option>
                                <option value="Arena" >Friend's Arena</option>
                                <option value="Tonomat" >Tonomatul de fotbal</option>
                                <option value="Banu" >Banu sport</option>
                                <option value="Carlo" >Arena Carlo</option>
                            </select>
                        </div>
                        <div >
                            <button className="submit" onClick={handleClick}>Create event</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default CreateEvent;