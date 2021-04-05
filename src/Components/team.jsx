import React from 'react';

import Mapa from './mapa';

function Team() {
    return (
        <Fragment>
            <section id="banner_parallax" class="inner_page_banner slide_banner1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="full">
                                <div class="slide_cont">
                                    <h2>Team</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="layout_padding">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="full text_align_center">
                                <div class="heading_main center_head_border heading_style_1">
                                    <h2>Our Team</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                            <div class="full team_blog">
                                <div class="team_member_img">
                                    <img src="images/t1.png" alt="#" />
                                </div>
                                <div class="team_imform">
                                    <p class="team_mem_name">JD Adams</p>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                            <div class="full team_blog">
                                <div class="team_member_img">
                                    <img src="images/t2.png" alt="#" /
                                    ></div>
                                <div class="team_imform">
                                    <p class="team_mem_name">Rinkal oberol</p>
                                    <p>Developer</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                            <div class="full team_blog">
                                <div class="team_member_img">
                                    <img src="images/t3.png" alt="#" />
                                </div>
                                <div class="team_imform">
                                    <p class="team_mem_name">Jason Deol</p>
                                    <p>Seo</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                            <div class="full team_blog">
                                <div class="team_member_img">
                                    <img src="images/t4.png" alt="#" />
                                </div>
                                <div class="team_imform">
                                    <p class="team_mem_name">Michellel Nathan</p>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                            architecto beatae vitae dicta sunt explicabo.
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

export default Team;