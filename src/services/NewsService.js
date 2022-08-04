import News from "../components/home/News";
import Communication from "../config/Communication";
import config from "../config/config";

const NewsService = {
    loadNews(dispatch) {
        dispatch({
            type: 'LOAD_NEWS',
            payload: null
        })
        Communication.getMethod(config.endPoints.allNews).then(news => {
            dispatch({
                type: 'GET_NEWS',
                payload: news
            })
            console.log(news)
        }).catch(() => {
            dispatch({
                type: 'ERROR_NEWS',
                payload: null
            })
        }).finally(() => {

        })
    }
}
export default NewsService;
