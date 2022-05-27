import React, { useState } from "react";
import valitation from "./Validation";
import './LoginForm.style.css';
import Navbar from "../Navbar/Navbar";

const RegistrationForm = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
    });
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(valitation(values));
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="app-wrapper">
                    <div>
                        <h2 className="title"> Log in to your account</h2>
                    </div>
                    <form className="form-wrapper">
                        <div classname="email">
                            <label className="label">Email</label>
                            <input className="input" type="email" name="email" value={values.email} onChange={handleChange}></input>
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div classname="password">
                            <label className="label">Password</label>
                            <input className="input" type="password" name="password" value={values.password} onChange={handleChange}></input>
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>
                        <div>
                            <button className="submit-button" onClick={handleFormSubmit}>Login</button>
                        </div>

                    </form>


                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
