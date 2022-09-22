import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css'

const ContactUs = () => {


    const form = useRef();
    const [done,setDone]=useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0n3vhld', 'template_ugz7quo', form.current, 'user_MpkLYFFhU7Ss6EpV6G21K')
        .then((result) => {
            setDone(true);
            alert("Your Message Was Send")
        }, (error) => {
            console.log(error.text);
        });
    };


  return (
    <div className='contact-form' id='Contact'>
        <div className="w-left">
            <div className="awsome">
                <span>Get in Touch</span>
                <span>Contact Me</span>
                <div className='blur s-blurl' style={{background : "#ABF1FF94"}}></div>
            </div>
        </div>
        <div className='c-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user_name' placeholder='Enter Your Name' />
                <input type="email" name="user_email" className="email" placeholder="Enter Your Email"/>
                <textarea type="text" name="message" className="message" placeholder="Enter Your Message"></textarea>
                <input type="submit" value="send" className="button"/>
                <span>{done && "Thanks for Contact Me"}</span>
                <div className='blur c-blurl' style={{background : "var(--purple)"}}></div>


            </form>
        </div>
    </div>
  )
}

export default ContactUs