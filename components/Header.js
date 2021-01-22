import AppLogo from "./AppLogo";
import React from "react";

export default function Header() {
    return (
        <header className="header_color">
            <div className="centralize pt-4 pb-3">
                <div className="row">
                    <div className="col-12 p-0">
                        <nav className="navbar navbar-expand-md navbar-light p-0">
                            <AppLogo/>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active pr-2">
                                        <a className="nav-link" href="#">Features <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item pr-2">
                                        <a className="nav-link" href="#">Pricing</a>
                                    </li>
                                    <li className="nav-item dropdown pr-2">
                                        <a className="nav-link dropdown-toggle" href="https://example.com" id="dropdown01"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Demo</a>
                                        <div className="dropdown-menu" aria-labelledby="dropdown01">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li className="nav-item pr-2">
                                        <a className="nav-link" href="#">Pricing</a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav ml-auto flex_center">
                                    <li className="nav-item-right pr-3">
                                        <a className="nav-link" href="#">Contact us 24/7<span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item-right pr-3">
                                        <a className="nav-link" href="#">Sign In <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn my-2 my-sm-0 signup_button" type="submit">Get Started</button>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 p-0">
                        <form className="form-inline my-2 my-lg-4">
                            <input className="col-4 p-6 form-control app_search" type="text" placeholder="Is your website registered with Wordpress?"
                                   aria-label="Search"/>
                            <button className="btn my-2 my-sm-0 app_search_button" type="submit">Check Domain</button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}
