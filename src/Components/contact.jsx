import React from 'react';

import Mapa from './mapa';

function Contact() {
    return (
        <Fragment>
            <section class="contact_section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-6" style="padding:0;">
                            <div class="full">
                                <Mapa></Mapa>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6" style="padding:0;">
                            <div class="full">
                                <div class="contact_form white_heading_border">
                                    <div class="contact_form_inner">
                                        <div class="full_heading white_fonts heading_main heading_style_1">
                                            <h2>Contact <span>us</span></h2>
                                        </div>
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                            beatae vitae dicta sunt explicabo.
                                        </p>
                                        <div class="form_contact">
                                            <form action="index.html">
                                                <fieldset>
                                                    <div class="field">
                                                        <input type="text" name="name" placeholder="Your name" required="" />
                                                    </div>
                                                    <div class="field">
                                                        <input type="text" name="name" placeholder="Your phone" required="" />
                                                    </div>
                                                    <div class="field">
                                                        <input type="email" name="email" placeholder="Email" required="" />
                                                    </div>
                                                    <div class="field">
                                                        <textarea name="messager" placeholder="Messager" required=""></textarea>
                                                    </div>
                                                    <div class="field">
                                                        <button class="field_bt">Send</button>
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