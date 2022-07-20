import React, { useState } from 'react';
import '../../assets/App.css'

const News =  () => {


  return (
    <>
 <section className="theme-block news">
            <hgroup>
                <h2 className="theme_hd">Car News</h2>
            </hgroup>
            <article className="news-grid first-news ">
                <section className="grid-item item1"><img src="img/news_car.png" className="img-fluid" />
                    <aside>
                        <img src="img/play_btn.svg" className="img-play" />
                        <hgroup className="dtl">
                            <h4>BMW i4 Review: Performance Sports Sedan In An Electric Guise</h4>
                            <span className="date">24 July, 2022</span>
                        </hgroup>
                    </aside>
                </section>
            </article>
            <article className="news-grid ">
                <section className="grid-item item1"><img src="img/news2.png" className="img-fluid" />
                    <aside>
                        <hgroup className="dtl">
                            <h4>Bajaj Pulsar N160 Launched In India</h4>
                            <span className="date">24 July, 2022</span>
                            <p className="dtl-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <a href="btn btn-outline-primary btn-white">Read More</a>
                        </hgroup>
                    </aside>
                </section>
            </article>
            <article className="news-grid ">
                <section className="grid-item item1"><img src="img/news3.png" className="img-fluid" />
                    <aside>
                        <hgroup className="dtl">
                            <h4>Bajaj Pulsar N160 Launched In India</h4>
                            <span className="date">24 July, 2022</span>
                            <p className="dtl-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <a href="btn btn-outline-primary btn-white">Read More</a>
                        </hgroup>
                    </aside>
                </section>
            </article>
            <article className="news-grid ">
                <section className="grid-item item1"><img src="img/news3.png" className="img-fluid" />
                    <aside>
                        <hgroup className="dtl">
                            <h4>Bajaj Pulsar N160 Launched In India</h4>
                            <span className="date">24 July, 2022</span>
                            <p className="dtl-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <a href="btn btn-outline-primary btn-white">Read More</a>
                        </hgroup>
                    </aside>
                </section>
            </article>
            <article className="news-grid ">
                <section className="grid-item item1"><img src="img/news3.png" className="img-fluid" />
                    <aside>
                        <hgroup className="dtl">
                            <h4>Bajaj Pulsar N160 Launched In India</h4>
                            <span className="date">24 July, 2022</span>
                            <p className="dtl-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <a href="btn btn-outline-primary btn-white">Read More</a>
                        </hgroup>
                    </aside>
                </section>
            </article>
            <article className="news-grid ">
                <section className="grid-item item1"><img src="img/news3.png" className="img-fluid" />
                    <aside>
                        <hgroup className="dtl">
                            <h4>Bajaj Pulsar N160 Launched In India</h4>
                            <span className="date">24 July, 2022</span>
                            <p className="dtl-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <a href="btn btn-outline-primary btn-white">Read More</a>
                        </hgroup>
                    </aside>
                </section>
            </article>
        </section>
    </>
    
  );
}

export default News;