import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PromotionsService from '../../services/PromotionsService';
import '../../assets/App.css'
import loader from '../../assets/loader.gif';

export const Promotions = () => {
    const dispatch = useDispatch();
    const promotionsInfo = useSelector((state) => state.promotionsData);
    useEffect(() => {
        PromotionsService.loadPromotions(dispatch);
    }, [dispatch])

    const errorContainer = () => { return <div>Error in Loading Promotions</div>; }
    // const showLoader = () => {return <div><img src={loader} alt="loading ..." title ="loading ..."/></div>;}
    const renderData = (promotionsInfo) => {
        return promotionsInfo.error ? errorContainer() :
            <>
            {console.log(promotionsInfo.promotionsList.length+'sss')}
            {promotionsInfo.promotionsList && Object.keys(promotionsInfo.promotionsList).length !== 0 ? (
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
                        <h2 className="theme_hd">{promotionsInfo.promotionsList.title}</h2>
                        <p className="theme_txt">{promotionsInfo.promotionsList.subTitle}</p>
                    </hgroup>
                    <article className="text-center">
                        <img src="img/Appstore-Button.png" className="str" />
                        <img src="img/Playstore-Button.png" className="str" />
                    </article>
                </div>
            </div>
        </section>
    ) :''
}
</>
}
return (
renderData(promotionsInfo)
)
}
export default Promotions;
