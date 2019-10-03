import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

library.add(fab);

const Footer = () => {
   return (

   <>
       <footer className="footer">
           <h2 className="footer__heading">Remixer</h2>
           <div className="footer__socials">
               
               <a className="footer__socials__icon" rel="noopener noreferrer" target="_blank" href="https://github.com/gianna-miranda"><FontAwesomeIcon className="footer__socials__icon--size" icon={['fab' , 'github-square']} /><span className="footer__socials__label">Github</span></a>
           </div>

           <nav className="footer__nav">
               <div className="footer__info">
                   {/* <a className="footer__info__icon" href="/"><FontAwesomeIcon className="footer__info__icon--size" icon={faPhoneAlt} /><span className="footer__info__label">(704) 313 5600</span></a>
                   <a className="footer__info__icon footer__info__icon--divider"rel=" noopener noreferrer" target="_blank" href="https://www.google.com/gmail/"><FontAwesomeIcon className="footer__info__icon--size" icon={faEnvelope} /><span className="footer__info__label">gigismail.gmail</span></a> */}
                   {/* <a className="footer__info__icon" rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps"><FontAwesomeIcon className="footer__info__icon--size" icon={faMapMarkerAlt} /><span className="footer__info__label">Ecuador</span></a> */}
               </div>
           </nav>

           <div className="copyright">
               <p className="copyright__text">Copyright &copy; 2019 Remixer.io</p>
               <p className="copyright__updated">Lastest Changes October 3, 2019</p>
           </div>
       </footer>
   </>

   )
}
export default Footer;