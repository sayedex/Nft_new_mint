import React from 'react'

// import {FaFacebook} from "react-icons/fa";
// import {AiFillFacebook, AiFillTwitterCircle, AiFillInstagram} from "react-icons/ai";

const Footer = () => {
    return (
        <footer
            className="flex flex-col justify-center gap-3 py-12 text-center text-sm uppercase text-black dark:text-white  md:flex-row">
            <a href="/">All rights reserved 2023 ©</a>
            <a target="_blank" href="">OpenSea</a>
            <a
                target="_blank"
                href="">Etherscan</a>
    
        </footer>
    )
}

export default Footer
