import React from 'react';

const Contact = () =>  {
    return (
        <div className="contact" id="contact">
            <h3 className="contact-heading">Send us a message and we'll return serve.</h3>
            <img className="contact-image" alt="two_table_tennis_paddles_on_table"/>
            <div>
                <form id="contactform" method="POST" action="contactform.php">
                    <div className="form-row form-error" style={{display: "none"}}/>
                    <div className="form-row">
                        <label for="contact-form-name">Name:</label>
                        <input id="contact-form-name" className="form-input" type="text" name="name" required/>
                    </div>
                    <div class="form-row">
                        <label for="contact-form-email">Email:</label>
                        <input id="contact-form-email" className="form-input" type="email" name="email" required/>
                    </div>
                    <div class="form-row">
                        <label for="contact-form-phone">Phone:</label>
                        <input id="contact-form-phone" className="form-input" type="tel" name="phone" required/>
                    </div>
                    <div class="form-row">
                        <label for="contact-form-message">Message:</label>
                        <textarea id="contact-form-message" className="form-input" name="message" required/>
                    </div>
                    <button type="submit">Submit</button>
                </form>


            </div>

        </div>
    );
};

export default Contact;