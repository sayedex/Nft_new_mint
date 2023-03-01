import React from 'react'

// import {FaFacebook} from "react-icons/fa";
// import {AiFillFacebook, AiFillTwitterCircle, AiFillInstagram} from "react-icons/ai";

const Footer = () => {
    return (
        <div
            className="flex flex-col justify-center gap-3 py-12 text-center text-sm uppercase text-black dark:text-white  md:flex-row">
            <a  rel="noreferrer" >All rights reserved 2023 ©  </a>
            <a  rel="noreferrer" target="_blank" href="">OpenSea</a>
            <a  rel="noreferrer" target="_blank"  href="">Etherscan</a>
    
        </div>
    )
}

export default Footer
