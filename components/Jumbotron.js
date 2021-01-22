import AppLine from "./title_line";
import React from "react";

export default function JumboTron() {
    return (
        <section id="hero_bg" className="jumbotron_component">
            <div className="centralize" data-aos="fade-up">
                <div className="row">
                    <div className="mt-5 ml__15 col-xl-5 col-lg-6 pt-lg-0 order-2 order-lg-1">
                        <div className="d-flex flex-column mt-4">
                            <span className="app_title">Convert your<br/> Wordpress sites to<br/> mobile applications</span>
                            <AppLine/>
                            <span className="app_subtitle_big">Take your website to the next level of users</span><br/>
                            <div className="mr-5">
                            <span className="app_subtitle_small mt-3 pr-5">We convert your Wordpress website into powerful native mobile apps.
                                With focus on Woocommerce and News sites, all templates comes with support for Android & iOS systems.</span>
                            </div>
                            <br/>
                            <div className="row mt-2">
                                <button className="ml-3 mr-4 btn my-2 my-sm-0 signup_button_light" type="submit">SIGN UP
                                    FREE
                                </button>
                                <button className="btn my-2 my-sm-0 signup_button_outline" type="submit">REQUEST DEMO
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" phone_asset mr__15 col-xl-7 col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="150">
                        <img src="assets/img/phone_asset.svg" alt=""/>
                        <div className="phone_asset_item item_cyan"></div>
                        <div className="phone_asset_item item_purple"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
