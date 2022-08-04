import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OffersService from '../../services/OffersService';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../../assets/App.css'
import loader from '../../assets/loader.gif';

export const Offers = () => {
    const dispatch = useDispatch();
    const offersInfo = useSelector((state) => state.offersData);
    useEffect(() => {
        OffersService.loadOffers(dispatch);
    }, [dispatch])

    const errorContainer = () => { return <div>Error in Loading Offers</div>; }
    // const showLoader = () => {return <div><img src={loader} alt="loading ..." title ="loading ..."/></div>;}
    const renderData = (offersInfo) => {
        return offersInfo.error ? errorContainer() :
            <><section className="theme-block offers">
                <hgroup>
                    <h2 className="theme_hd">Special Offers</h2>
                    <p className="theme_txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </hgroup>
                <div className="row offer">
                    <div className="owl-carousel owl-theme" id="ofr">
                        {offersInfo.offersList && offersInfo.offersList.length > 0 ? (
                            <OwlCarousel nav items={4}>
                                {offersInfo.offersList && offersInfo.offersList.length > 0 && offersInfo.offersList.map((elm, index) =>
                                    <div className="item" key={index}>
                                        <aside className="caro">
                                            <figure>
                                                <span className="ribbon">
                                                {elm.content.title}
                                                </span>
                                                <img src={elm.content.imageUrl}className="img-fluid" />
                                            </figure>
                                            <article>
                                                <hgroup>
                                                    <h4>Audi A4</h4>
                                                    <ul className="offr">
                                                    {elm.content.subtitile}
                                                    </ul>
                                                </hgroup>
                                                <h3><span>&#8377; {elm.content.description}</span></h3>
                                                <h5 className="text-success">{elm.content.offer}</h5>
                                            </article>
                                        </aside>
                                    </div>
                                )}
                            </OwlCarousel>
                        ) : ''
                        }
                    </div>
                </div>
            </section>
            </>
    }
    return (
        renderData(offersInfo)
    )
}
export default Offers;