import React, { useState } from 'react';
import '../../assets/App.css'

const Mainbanner =  () => {

  return (
    <>
       <div className="theme-block main_banner">
            <div className="fadeOut owl-carousel owl-theme mb">
                <div className="item">
                    <div className="row flex-align-center">
                        <div className="col-6">
                            <h1 className="banner_hd">Perfect Way To Buy & Sell Car On Our Platform</h1>
                            <h4 className="banner_sub_hd">Shop from 5,000+ Certified Cars</h4>
                            <a href="#" className="btn btn-primary btn-theme">Find A Car</a>
                        </div>
                        <div className="col-6 img_cntr_bnr">
                            <img src="img/banner1.svg" className="img-fluid" />
                        </div>
                    </div>

                </div>
                <div className="item">
                    <div className="row flex-align-center">
                        <div className="col-6">
                            <h1 className="banner_hd">Perfect Way To Buy & Sell Car On Our Platform</h1>
                            <h4 className="banner_sub_hd">Shop from 5,000+ Certified Cars</h4>
                            <a href="#" className="btn btn-primary btn-theme">Find A Car</a>
                        </div>
                        <div className="col-6 img_cntr_bnr">
                            <img src="img/banner1.svg" className="img-fluid"  />
                        </div>
                    </div>

                </div>
                <div className="item">
                    <div className="row flex-align-center">
                        <div className="col-6">
                            <h1 className="banner_hd">Perfect Way To Buy & Sell Car On Our Platform</h1>
                            <h4 className="banner_sub_hd">Shop from 5,000+ Certified Cars</h4>
                            <a href="#" className="btn btn-primary btn-theme">Find A Car</a>
                        </div>
                        <div className="col-6 img_cntr_bnr">
                            <img src="img/banner1.svg" className="img-fluid" />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </>
    
  );
}

export default Mainbanner;
