import React, { useState } from 'react';
import '../../assets/App.css'


const CarMostPopular = () => {
    return (
        <section className="theme-block services inner-block">
        <hgroup>
          <h2 className="theme_hd">Most Popular Cars</h2>
        </hgroup>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#bus1">
              Hatchback
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#bus2">
              Sedan
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#bus3">
              SUV
            </a>
          </li>
          <li className="view-all">
            <a href="#">
              View All Cars
              <span className="svg-holder">
                <svg
                  width={7}
                  height={11}
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99998 5.46481C7.00087 5.61038 6.97146 5.75469 6.91344 5.88946C6.85542 6.02423 6.76993 6.1468 6.66188 6.25016L1.9984 10.6747C1.77887 10.883 1.48111 11 1.17064 11C0.860166 11 0.562409 10.883 0.342872 10.6747C0.123334 10.4664 -3.56726e-08 10.1839 -4.85485e-08 9.88934C-6.14243e-08 9.59478 0.123334 9.31227 0.342872 9.10399L4.19024 5.46481L0.35453 1.82563C0.16353 1.61402 0.0637242 1.34183 0.0750578 1.06344C0.0863914 0.785053 0.20803 0.520975 0.415665 0.323979C0.623299 0.126983 0.901637 0.0115785 1.19506 0.00082583C1.48848 -0.00992686 1.77537 0.0847625 1.9984 0.265977L6.66188 4.69051C6.87727 4.89654 6.99869 5.17462 6.99998 5.46481Z"
                    fill="#13C2C2"
                  />
                </svg>
              </span>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div id="bus1" className="tab-pane active">
            <br />
            <div className="owl-carousel owl-theme" id="mpc1">
              <div className="item">
                <aside className="caro">
                  <figure>
                    <img src="img/inner-prd.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>Audi A4</h4>
                    </hgroup>
                    <h3>
                      <span>₹ 6.22 L - ₹ 9.99 L </span>
                    </h3>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <img src="img/inner-prd2.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>BMW C300</h4>
                    </hgroup>
                    <h3>
                      <span>₹ 6.22 L - ₹ 9.99 L </span>
                    </h3>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <img src="img/inner-prd.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>Audi A4</h4>
                    </hgroup>
                    <h3>
                      <span>₹ 6.22 L - ₹ 9.99 L </span>
                    </h3>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <img src="img/inner-prd2.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>BMW C300</h4>
                    </hgroup>
                    <h3>
                      <span>₹ 6.22 L - ₹ 9.99 L </span>
                    </h3>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <img src="img/inner-prd.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>Audi A4</h4>
                    </hgroup>
                    <h3>
                      <span>₹ 6.22 L - ₹ 9.99 L </span>
                    </h3>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <img src="img/inner-prd2.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>BMW C300</h4>
                    </hgroup>
                    <h3>
                      <span>₹ 6.22 L - ₹ 9.99 L </span>
                    </h3>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <img src="img/inner-prd.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>Audi A4</h4>
                    </hgroup>
                    <h3>
                      <span>₹ 6.22 L - ₹ 9.99 L </span>
                    </h3>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <img src="img/inner-prd2.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>BMW C300</h4>
                    </hgroup>
                    <h3>
                      <span>₹ 6.22 L - ₹ 9.99 L </span>
                    </h3>
                  </article>
                </aside>
              </div>
            </div>
          </div>
          <div id="bus2" className="tab-pane fade">
            <br />
            <div className="owl-carousel owl-theme" id="mpc2">
              <div className="item">
                <aside className="caro">
                  <figure>
                    <span className="ribbon">Hot Deal</span>
                    <img src="img/offer_img.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>Audi A4</h4>
                      <ul className="offr">
                        <li>Petrol</li>
                        <li>Automatic</li>
                        <li>2 Variants</li>
                      </ul>
                    </hgroup>
                    <h3>
                      <span>₹ 33,50,589</span>
                    </h3>
                    <h5 className="text-success">Save upto ₹70,0000</h5>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <span className="ribbon">Hot Deal</span>
                    <img src="img/offer_img.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>Audi A4</h4>
                      <ul className="offr">
                        <li>Petrol</li>
                        <li>Automatic</li>
                        <li>2 Variants</li>
                      </ul>
                    </hgroup>
                    <h3>
                      <span>₹ 33,50,589</span>
                    </h3>
                    <h5 className="text-success">Save upto ₹70,0000</h5>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <span className="ribbon">Hot Deal</span>
                    <img src="img/offer_img.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>Audi A4</h4>
                      <ul className="offr">
                        <li>Petrol</li>
                        <li>Automatic</li>
                        <li>2 Variants</li>
                      </ul>
                    </hgroup>
                    <h3>
                      <span>₹ 33,50,589</span>
                    </h3>
                    <h5 className="text-success">Save upto ₹70,0000</h5>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <span className="ribbon">Hot Deal</span>
                    <img src="img/offer_img.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>Audi A4</h4>
                      <ul className="offr">
                        <li>Petrol</li>
                        <li>Automatic</li>
                        <li>2 Variants</li>
                      </ul>
                    </hgroup>
                    <h3>
                      <span>₹ 33,50,589</span>
                    </h3>
                    <h5 className="text-success">Save upto ₹70,0000</h5>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <span className="ribbon">Hot Deal</span>
                    <img src="img/offer_img.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>Audi A4</h4>
                      <ul className="offr">
                        <li>Petrol</li>
                        <li>Automatic</li>
                        <li>2 Variants</li>
                      </ul>
                    </hgroup>
                    <h3>
                      <span>₹ 33,50,589</span>
                    </h3>
                    <h5 className="text-success">Save upto ₹70,0000</h5>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <span className="ribbon">Hot Deal</span>
                    <img src="img/offer_img.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>Audi A4</h4>
                      <ul className="offr">
                        <li>Petrol</li>
                        <li>Automatic</li>
                        <li>2 Variants</li>
                      </ul>
                    </hgroup>
                    <h3>
                      <span>₹ 33,50,589</span>
                    </h3>
                    <h5 className="text-success">Save upto ₹70,0000</h5>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <span className="ribbon">Hot Deal</span>
                    <img src="img/offer_img.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>Audi A4</h4>
                      <ul className="offr">
                        <li>Petrol</li>
                        <li>Automatic</li>
                        <li>2 Variants</li>
                      </ul>
                    </hgroup>
                    <h3>
                      <span>₹ 33,50,589</span>
                    </h3>
                    <h5 className="text-success">Save upto ₹70,0000</h5>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <span className="ribbon">Hot Deal</span>
                    <img src="img/offer_img.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>Audi A4</h4>
                      <ul className="offr">
                        <li>Petrol</li>
                        <li>Automatic</li>
                        <li>2 Variants</li>
                      </ul>
                    </hgroup>
                    <h3>
                      <span>₹ 33,50,589</span>
                    </h3>
                    <h5 className="text-success">Save upto ₹70,0000</h5>
                  </article>
                </aside>
              </div>
            </div>
          </div>
          <div id="bus3" className="tab-pane fade">
            <br />
            <div className="owl-carousel owl-theme" id="mpc3">
              <div className="item">
                <aside className="caro">
                  <figure>
                    <span className="ribbon">Hot Deal</span>
                    <img src="img/offer_img.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>Audi A4</h4>
                      <ul className="offr">
                        <li>Petrol</li>
                        <li>Automatic</li>
                        <li>2 Variants</li>
                      </ul>
                    </hgroup>
                    <h3>
                      <span>₹ 33,50,589</span>
                    </h3>
                    <h5 className="text-success">Save upto ₹70,0000</h5>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <span className="ribbon">Hot Deal</span>
                    <img src="img/offer_img.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>Audi A4</h4>
                      <ul className="offr">
                        <li>Petrol</li>
                        <li>Automatic</li>
                        <li>2 Variants</li>
                      </ul>
                    </hgroup>
                    <h3>
                      <span>₹ 33,50,589</span>
                    </h3>
                    <h5 className="text-success">Save upto ₹70,0000</h5>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <span className="ribbon">Hot Deal</span>
                    <img src="img/offer_img.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>Audi A4</h4>
                      <ul className="offr">
                        <li>Petrol</li>
                        <li>Automatic</li>
                        <li>2 Variants</li>
                      </ul>
                    </hgroup>
                    <h3>
                      <span>₹ 33,50,589</span>
                    </h3>
                    <h5 className="text-success">Save upto ₹70,0000</h5>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <span className="ribbon">Hot Deal</span>
                    <img src="img/offer_img.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>Audi A4</h4>
                      <ul className="offr">
                        <li>Petrol</li>
                        <li>Automatic</li>
                        <li>2 Variants</li>
                      </ul>
                    </hgroup>
                    <h3>
                      <span>₹ 33,50,589</span>
                    </h3>
                    <h5 className="text-success">Save upto ₹70,0000</h5>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <span className="ribbon">Hot Deal</span>
                    <img src="img/offer_img.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>Audi A4</h4>
                      <ul className="offr">
                        <li>Petrol</li>
                        <li>Automatic</li>
                        <li>2 Variants</li>
                      </ul>
                    </hgroup>
                    <h3>
                      <span>₹ 33,50,589</span>
                    </h3>
                    <h5 className="text-success">Save upto ₹70,0000</h5>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <span className="ribbon">Hot Deal</span>
                    <img src="img/offer_img.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>Audi A4</h4>
                      <ul className="offr">
                        <li>Petrol</li>
                        <li>Automatic</li>
                        <li>2 Variants</li>
                      </ul>
                    </hgroup>
                    <h3>
                      <span>₹ 33,50,589</span>
                    </h3>
                    <h5 className="text-success">Save upto ₹70,0000</h5>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <span className="ribbon">Hot Deal</span>
                    <img src="img/offer_img.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>Audi A4</h4>
                      <ul className="offr">
                        <li>Petrol</li>
                        <li>Automatic</li>
                        <li>2 Variants</li>
                      </ul>
                    </hgroup>
                    <h3>
                      <span>₹ 33,50,589</span>
                    </h3>
                    <h5 className="text-success">Save upto ₹70,0000</h5>
                  </article>
                </aside>
              </div>
              <div className="item">
                <aside className="caro">
                  <figure>
                    <span className="ribbon">Hot Deal</span>
                    <img src="img/offer_img.png" className="img-fluid" />
                  </figure>
                  <article>
                    <hgroup>
                      <h4>Audi A4</h4>
                      <ul className="offr">
                        <li>Petrol</li>
                        <li>Automatic</li>
                        <li>2 Variants</li>
                      </ul>
                    </hgroup>
                    <h3>
                      <span>₹ 33,50,589</span>
                    </h3>
                    <h5 className="text-success">Save upto ₹70,0000</h5>
                  </article>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default CarMostPopular;