import React, { useState } from 'react';
import '../../assets/App.css'

const Partner =  () => {


  return (
    <>
   <section className="theme-block partner">
            <hgroup>
                <h2 className="theme_hd">Our Trusted Partners</h2>
            </hgroup>
            <div className="row partner-row">
                <div className="col">
                    <img src="img/partner_logo.png" className="img-fluid partner-img" />
                </div>
                <div className="col">
                    <img src="img/partner_logo2.png" className="img-fluid partner-img" />
                </div>
                <div className="col">
                    <img src="img/partner_logo3.png" className="img-fluid partner-img" />
                </div>
                <div className="col">
                    <img src="img/partner_logo4.png" className="img-fluid partner-img" />
                </div>
                <div className="col">
                    <img src="img/partner_logo5.png" className="img-fluid partner-img" />
                </div>
            </div>
        </section>
    </>
    
  );
}

export default Partner;