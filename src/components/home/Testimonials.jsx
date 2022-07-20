import React, { useState } from 'react';
import '../../assets/App.css'

const Testimonials =  () => {


  return (
    <>
    <section className="theme-block testimonials">
            <hgroup>
                <h4 className="text-center">Testimonials</h4>
                <h2 className="theme_hd">We Care About Our Customers <br /> Experience Too </h2>
            </hgroup>

            <div className="row testi">
                <div className="owl-carousel owl-theme" id="testm">
                    <div className="item">
                        <header className="testmm">
                            <span>ES</span>
                            <hgroup>
                                <h4>Edwerd Smith</h4>
                                <p>Challan Services</p>
                            </hgroup>
                        </header>
                        <p className="testm-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="item">
                        <header className="testmm">
                            <span>ES</span>
                            <hgroup>
                                <h4>Edwerd Smith</h4>
                                <p>Challan Services</p>
                            </hgroup>
                        </header>
                        <p className="testm-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="item">
                        <header className="testmm">
                            <span>ES</span>
                            <hgroup>
                                <h4>Edwerd Smith</h4>
                                <p>Challan Services</p>
                            </hgroup>
                        </header>
                        <p className="testm-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="item">
                        <header className="testmm">
                            <span>ES</span>
                            <hgroup>
                                <h4>Edwerd Smith</h4>
                                <p>Challan Services</p>
                            </hgroup>
                        </header>
                        <p className="testm-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>


                </div>
            </div>

        </section>
    </>
    
  );
}

export default Testimonials;