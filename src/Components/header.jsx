import React, { Fragment } from 'react';

function Header() {
    return (
        <Fragment>
            <header className="header header_style1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-lg-10">
                            <div className="logo">
                                <a href="/"><img src="Assets/images/logo.png" alt="#" /></a>
                            </div>
                            <div className="main_menu float-right">
                                <div className="menu">
                                    <ul className="clearfix">
                                        <li className="active"><a href="/">Home</a></li>
                                        <li><a href="/">About</a></li>
                                        <li><a href="/">Service</a></li>
                                        <li><a href="/">Screenshots</a></li>
                                        <li><a href="/">Pricing</a></li>
                                        <li><a href="/">Team</a></li>
                                        <li><a href="/">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-2">
                            <div className="right_bt"><a className="bt_main" href="/">Get Support</a> </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;
