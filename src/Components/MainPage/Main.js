import React from "react";
import Banner from "../Banner/Banner";
import { SliderData } from '../Banner/data.js';
import Navbar from "../Navbar/Navbar";
const Main = () => {
return(
    <>
        <Navbar />
        <Banner slides={SliderData} />
    </>
);
}
export default Main;
