import React, { useState } from 'react';
import '../../assets/App.css'


const CarSlider = () => {
    return (
        <div className="theme-block main_banner inner_page_bnr">
        <div className="fadeOut owl-carousel owl-theme mb">
          <div className="item">
            <div className="row flex-align-center">
              <div className="col-6">
                <h1 className="banner_hd">Buying your dream car? Check Now!</h1>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row flex-align-center">
              <div className="col-6">
                <h1 className="banner_hd">Buying your dream car? Check Now!</h1>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row flex-align-center">
              <div className="col-6">
                <h1 className="banner_hd">Buying your dream car? Check Now!</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CarSlider;