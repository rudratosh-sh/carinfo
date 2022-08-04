import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewsService from '../../services/NewsService';
import '../../assets/App.css'
import loader from '../../assets/loader.gif';

export const News = () => {
    const dispatch = useDispatch();
    const newsInfo = useSelector((state) => state.newsData);
    useEffect(() => {
        NewsService.loadNews(dispatch);
    }, [dispatch])

    const errorContainer = () => { return <div>Error in Loading news</div>; }
    // const showLoader = () => {return <div><img src={loader} alt="loading ..." title ="loading ..."/></div>;}
    const renderData = (newsInfo) => {
        return newsInfo.error ? errorContainer() :
            <>
                {console.log(newsInfo.newsList.length + 'services')}
                {newsInfo.newsList && newsInfo.newsList.length > 0 ? (
                    <section className="theme-block news">
                        <hgroup>
                            <h2 className="theme_hd">Car News</h2>
                        </hgroup>
                        {newsInfo.newsList && newsInfo.newsList.length > 0 && newsInfo.newsList.map((elm, index) =>
                            <article className={"news-grid " + (index == 0 ? 'first-news' : '')}>
                                <section className="grid-item item1" key={index}><img src={elm.content.imageUrl} className="img-fluid" />
                                    <aside>
                                        {index==0 ?
                                        <img src="img/play_btn.svg" className="img-play" />
                                        : ''
                                        }
                                        <hgroup className="dtl">
                                            <h4>{elm.content.title}</h4>
                                            <span className="date">{elm.content.description}</span>
                                            <p class="dtl-txt">{elm.content.subtitile}</p>
                                            <a href="btn btn-outline-primary btn-white">Read More</a>
                                        </hgroup>
                                    </aside>
                                </section>
                            </article>
                        )}
                    </section>
                ) : ''
                }
            </>
    }
    return (
        renderData(newsInfo)
    )
}

export default News;
