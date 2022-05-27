import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import "./CreateEvent.style.css"; 

const CreateEvent = () => {

    const [events, setEvents] = useState([]);
    const [eventName, setEventName] = useState("");
    const [eventCost, setEventCost] = useState("");
    const [eventOrganizer, setEventOrganizer] = useState("");
    const [eventInvites, setEventInvites] = useState("");
    const [eventType, setEventType] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventLocation, setEventLocation] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newEvent = {
            eventName,
            eventType,
            eventDate,
            eventLocation,
            eventCost,
            eventOrganizer,
            eventInvites,  
        };

        try {
          const res = await axios.post("/events", newEvent);
          setEvents([...events, res.data]);
          alert("You added a new event");
        } catch (err) {
          alert("Something went wrong!");
          console.log(err);
        }
    };

    return (
        <div >
            <Navbar />
            <div className="container">
                <div className="app-wrapper">
                    <h2 className="title">Create an event</h2>
                    <form  className="form-wrapper" onSubmit={handleSubmit}>

                        <div className="dropbox">
                            <p>Enter the name of the event:</p>
                            <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)}/>
                        </div>

                        <div className="dropbox">
                            <p>Enter the type of the event:</p>
                            <input type="text" value={eventType} onChange={(e) => setEventType(e.target.value)}/>
                        </div>

                        <div className="calendar">
                            <p>Choose the date of the event:</p>
                            <input type="date" onChange={(e) => setEventDate(e.target.value)} />
                        </div>

                        <div className="dropbox">
                            <p>Enter the Location of the event:</p>
                            <input type="text" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)}/>
                        </div>

                        <div className="dropbox">
                            <p>Enter the cost per person:</p>
                            <input type="text" value={eventCost} onChange={(e) => setEventCost(e.target.value)}/>
                        </div>

                        <div className="dropbox">
                            <p>Enter the organizer mail:</p>
                            <input type="text" value={eventOrganizer} onChange={(e) => setEventOrganizer(e.target.value)}/>
                        </div>

                        <div className="dropbox">
                            <p>Enter the invited people email addresses:</p>
                            <input type="text" value={eventInvites} onChange={(e) => setEventInvites(e.target.value)}/>
                        </div>

                        <div >
                            <button type="submit" className="submit">Create event</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default CreateEvent;