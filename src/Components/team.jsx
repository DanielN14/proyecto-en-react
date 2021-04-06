import React, { Fragment } from 'react';

import Mapa from './mapa';

function Team() {
    return (
        <Fragment>
            <section id="banner_parallax" className="inner_page_banner slide_banner1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <div className="slide_cont">
                                    <h2>Team</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="full text_align_center">
                                <div className="heading_main center_head_border heading_style_1">
                                    <h2>Our Team</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                            <div className="full team_blog">
                                <div className="team_member_img">
                                    <img src="Assets/images/t1.png" alt="#" />
                                </div>
                                <div className="team_imform">
                                    <p className="team_mem_name">JD Adams</p>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                            <div className="full team_blog">
                                <div className="team_member_img">
                                    <img src="Assets/images/t2.png" alt="#" /
                                    ></div>
                                <div className="team_imform">
                                    <p className="team_mem_name">Rinkal oberol</p>
                                    <p>Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                            <div className="full team_blog">
                                <div className="team_member_img">
                                    <img src="Assets/images/t3.png" alt="#" />
                                </div>
                                <div className="team_imform">
                                    <p className="team_mem_name">Jason Deol</p>
                                    <p>Seo</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                            <div className="full team_blog">
                                <div className="team_member_img">
                                    <img src="Assets/images/t4.png" alt="#" />
                                </div>
                                <div className="team_imform">
                                    <p className="team_mem_name">Michellel Nathan</p>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6" style={{padding:'0'}}>
                            <div className="full">
                                <Mapa />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6" style={{padding:'0'}}>
                            <div className="full">
                                <div className="contact_form white_heading_border">
                                    <div className="contact_form_inner">
                                        <div className="full_heading white_fonts heading_main heading_style_1">
                                            <h2>Contact <span>us</span></h2>
                                        </div>
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                            architecto beatae vitae dicta sunt explicabo.
                                        </p>
                                        <div className="form_contact">
                                            <form action="index.html">
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

export default Team;