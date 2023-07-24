import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer=()=>{
    return(
        <div className="footer">
            <p><FaInstagram/> 2023 Muhmmad Sameer . Feel free to Copy</p>
            <div className="footerLink">
                <a>Linkdin</a>
                <a>Facebook</a>
                <a>Instagram</a>
                <a>Twitting</a>
                <a>Github</a>

            </div>
        </div>
    )
}
export default Footer;