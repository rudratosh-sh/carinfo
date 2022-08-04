import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ServicesService from '../../services/ServicesService';
import '../../assets/App.css'
import loader from '../../assets/loader.gif';

export const Services = () => {
    const dispatch = useDispatch();
    const servicesInfo = useSelector((state) => state.servicesData);
    useEffect(() => {
        ServicesService.loadServices(dispatch);
    }, [dispatch])

    const errorContainer = () => { return <div>Error in Loading Top Services</div>; }
    // const showLoader = () => {return <div><img src={loader} alt="loading ..." title ="loading ..."/></div>;}
    const renderData = (servicesInfo) => {
        return servicesInfo.error ? errorContainer() :
            <>
            {console.log(servicesInfo.servicesList.length+'services')}
            {servicesInfo.servicesList && servicesInfo.servicesList.length >0 ? (
                <section className="theme-block services">
                    <hgroup>
                        <h2 className="theme_hd">Services We Provide</h2>
                        <p className="theme_txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </hgroup>
                    <div className="row service">
                    {servicesInfo.servicesList && servicesInfo.servicesList.length > 0 && servicesInfo.servicesList.map((elm, index) =>
                        <div className="col serv" key={index}>
                            <figure>
                                <span className="svg-holder">
                                    <img style={{ height: "52px", width: "54px" }} src={elm.content.imageUrl} />
                                </span>
                                <h5 className="serv_text">{elm.content.title}</h5>
                            </figure>
                        </div>
                         )}
                    </div>
                    <article>
                        <a href="#" className="btn btn-success btn-txt-only">Show All <span className="svg-holder"><svg width="11"
                            height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.53519 6.99998C5.38962 7.00087 5.24531 6.97146 5.11054 6.91344C4.97577 6.85542 4.8532 6.76993 4.74984 6.66188L0.325305 1.9984C0.117016 1.77887 0 1.48111 0 1.17064C0 0.860166 0.117016 0.562409 0.325305 0.342872C0.533594 0.123334 0.816094 0 1.11066 0C1.40522 0 1.68773 0.123334 1.89601 0.342872L5.53519 4.19024L9.17437 0.354531C9.38598 0.163531 9.65817 0.0637247 9.93656 0.0750583C10.2149 0.0863918 10.479 0.20803 10.676 0.415665C10.873 0.6233 10.9884 0.901638 10.9992 1.19506C11.0099 1.48848 10.9152 1.77537 10.734 1.9984L6.30949 6.66188C6.10346 6.87727 5.82538 6.99869 5.53519 6.99998Z"
                                fill="#13C2C2" />
                        </svg>
                        </span> </a>
                    </article>
                </section>
            ) :''
            }
            </>
    }
    return (
        renderData(servicesInfo)
    )
}

export default Services;
