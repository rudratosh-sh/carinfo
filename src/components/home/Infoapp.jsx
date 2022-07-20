import React, { useState } from 'react';
import '../../assets/App.css'

const Infoapp =  () => {


  return (
    <>
  <section className="theme-block info-app">
            <div className="row inf-app">
                <div className="col">
                    <figure className="info-fg">
                        <img src="img/iphone.png" className="info-mg" />
                        <img src="img/oneplus.png" className="info-mg" />
                        <img src="img/car.png" className="info-mg" />
                    </figure>
                </div>
                <div className="col dsp">
                    <hgroup>
                        <h2 className="theme_hd">Get the CarInfo App</h2>
                        <p className="theme_txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                    </hgroup>
                    <article className="text-center">
                        <img src="img/Appstore-Button.png" className="str" />
                        <img src="img/Playstore-Button.png" className="str" />
                    </article>
                </div>
            </div>
        </section>
    </>
    
  );
}

export default Infoapp;