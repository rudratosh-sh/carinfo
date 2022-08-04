import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TopCarouselService from '../../services/TopCarouselService';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../../assets/App.css'
import loader from '../../assets/loader.gif';

export const TopCarousel = () => {
    const dispatch = useDispatch();
    const topCarouselInfo = useSelector((state) => state.topCarouselData);
    useEffect(() => {
        TopCarouselService.loadTopCarousel(dispatch);
    }, [dispatch])

    const errorContainer = () => { return <div>Error in Loading Top Carousel</div>; }
    // const showLoader = () => {return <div><img src={loader} alt="loading ..." title ="loading ..."/></div>;}
    const renderData = (topCarouselInfo) => {
        return topCarouselInfo.error ? errorContainer() :
           <><div className="theme-block main_banner">
             <div className="fadeOut owl-carousel owl-theme mb">{
                topCarouselInfo.topCarouselList && topCarouselInfo.topCarouselList.length > 0 ? (
                    <OwlCarousel nav items={1}>
                        {topCarouselInfo.topCarouselList && topCarouselInfo.topCarouselList.length > 0 && topCarouselInfo.topCarouselList.map((elm, index) =>
                            <div className="item" key={index}>
                                <div className="row flex-align-center">
                                    <div className="col-6">
                                        <h1 className="banner_hd">{elm.content.title}</h1>
                                        <h4 className="banner_sub_hd">{elm.content.subtitile}</h4>
                                        <a href={elm.actions[0].url} className="btn btn-primary btn-theme">{elm.actions[0].text}</a>
                                    </div>
                                    <div className="col-6 img_cntr_bnr">
                                        <img src={elm.content.imageUrl} className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </OwlCarousel>
                ): ''
            }</div></div>
            </> 
        }
    return (
        renderData(topCarouselInfo)
    )
}

export default TopCarousel;
