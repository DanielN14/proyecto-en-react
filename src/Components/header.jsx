import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';


function Header() {

    return (
        <Fragment>
            <header className="header header_style1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-lg-10">
                            <div className="logo">
                                <NavLink to={"/"}><img src="Assets/images/logo.png" alt="#" /></NavLink>
                            </div>
                            <div className="main_menu float-right">
                                <div className="menu">
                                    <ul className="clearfix">
                                        <li><NavLink exact to={"/"} activeStyle={{ color: "#1e72bc" }}>Home</NavLink></li>
                                        <li><NavLink to={"/about"} activeStyle={{ color: "#1e72bc" }}>About</NavLink></li>
                                        <li><NavLink to={"/service"} activeStyle={{ color: "#1e72bc" }} >Service</NavLink></li>
                                        <li><NavLink to={"/screenshots"} activeStyle={{ color: "#1e72bc" }}>Screenshots</NavLink></li>
                                        <li><NavLink to={"/pricing"} activeStyle={{ color: "#1e72bc" }}>Pricing</NavLink></li>
                                        <li><NavLink to={"/team"} activeStyle={{ color: "#1e72bc" }}>team</NavLink></li>
                                        <li><NavLink to={"/contact"} activeStyle={{ color: "#1e72bc" }}>Contact</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-2">
                            <div className="right_bt">
                                <NavLink to={"/"} className="bt_main">Get Support</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );

}

export default Header;
