import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Choose.style.css';
import { Link } from 'react-router-dom';
import CreateEvent from '../CreateEvent/CreateEvent';

const Choose = () => {
    return (
        <div >
            <Navbar />
            <div className="back">
                <h1 className="title-choose">Choose if you want to create an event or see available ones!</h1>
                <div className="buttons-div">
                    <Link to="/CreateEvent">
                        <button className="buttons">Create Event</button>
                    </Link>
                    <button className="buttons">See Events</button>
                </div>


            </div>
        </div>

    )
}
export default Choose;