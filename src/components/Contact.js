import React from 'react'

const Contact = () => (
    <section id="main">
                        <h2>Get In Touch</h2>
                        <p>Send me a message below!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form name="contact" method="POST" enctype="text/plain" data-netlify="true" data-netlify-recaptcha="true">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="_replyto" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                        <div data-netlify-recaptcha="true"></div>
                                    </div>
                                <ul className="actions ">
                                    <li><button type="submit">Submit</button></li>
                                </ul>
                                </form>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        7 1/2 Marvin St Apt 6<br />
                                        Clinton, NY 13323<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        315-527-8538
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:contact@keithmarble.tech?Subject=Let's Work Together!">contact@keithmarble.tech</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
)

export default Contact