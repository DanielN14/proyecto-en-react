import React, { Fragment } from 'react';

import Mapa from './mapa';

function Contact() {
    return (
        <Fragment>
            <section className="contact_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6" style={{ padding: '0' }}>
                            <div className="full">
                                <Mapa />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6" style={{ padding: '0' }}>
                            <div className="full">
                                <div className="contact_form white_heading_border">
                                    <div className="contact_form_inner">
                                        <div className="full_heading white_fonts heading_main heading_style_1">
                                            <h2>Contact <span>us</span></h2>
                                        </div>
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                            beatae vitae dicta sunt explicabo.
                                        </p>
                                        <div className="form_contact">
                                            <form action="/">
                                                <fieldset>
                                                    <div className="field">
                                                        <input type="text" name="name" placeholder="Your name" required="" />
                                                    </div>
                                                    <div className="field">
                                                        <input type="text" name="name" placeholder="Your phone" required="" />
                                                    </div>
                                                    <div className="field">
                                                        <input type="email" name="email" placeholder="Email" required="" />
                                                    </div>
                                                    <div className="field">
                                                        <textarea name="messager" placeholder="Messager" required=""></textarea>
                                                    </div>
                                                    <div className="field">
                                                        <button className="field_bt">Send</button>
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Contact;