import React, { Fragment } from 'react';

import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <Fragment>
            <header className="header header_style1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-lg-10">
                            <div className="logo">
                                <Link to={"/home"}><img src="Assets/images/logo.png" alt="#" /></Link>
                            </div>
                            <div className="main_menu float-right">
                                <div className="menu">
                                    <ul className="clearfix">
                                        <li className="active"><NavLink to={"/home"}>Home</NavLink></li>
                                        <li><NavLink to={"/about"}>About</NavLink></li>
                                        <li><NavLink to={"/service"} >Service</NavLink></li>
                                        <li><NavLink to={"/screenshots"} >Screenshots</NavLink></li>
                                        <li><NavLink to={"/pricing"}>Pricing</NavLink></li>
                                        <li><NavLink to={"/team"} >team</NavLink></li>
                                        <li><NavLink to={"/contact"} >Contact</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-2">
                            <div className="right_bt">
                                <Link to={"/home"} className="bt_main">Get Support</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;
