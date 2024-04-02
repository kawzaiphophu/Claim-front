import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';



function SendEmail() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_o3m1ttg', 'template_dpy0h7g', form.current, {
                publicKey: 'PKTl2xkh77r7ByAGd',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <form ref={form} onSubmit={sendEmail} className="p-4 border rounded w-100">
            <div className="mb-3">
                <label htmlFor="user_name" className="form-label text-light">Name</label>
                <input type="text" 
                className="form-control" 
                id="user_name" 
                name="user_name" 
                placeholder='Your Name'
                required />
            </div>
            <div className="mb-3">
                <label htmlFor="user_email" className="form-label text-light">Email</label>
                <input type="email" 
                className="form-control" 
                id="user_email" 
                name="user_email" 
                placeholder='Your Email'
                required />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label text-light">Message</label>
                <textarea className="form-control" 
                id="message" 
                name="message" 
                rows="3"
                placeholder='Description'
                 required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
        </form>
    )
}

export default SendEmail