import Communication from "../config/Communication";
import config from "../config/config";

const TopCarouselService = {
    loadTopCarousel(dispatch) {
        dispatch({
            type: 'LOAD_TOPCAROUSEL',
            payload: null
        })
        Communication.getMethod(config.endPoints.topCarousel).then(topCarousels => {
            dispatch({
                type: 'GET_TOPCAROUSEL',
                payload: topCarousels
            }) 
        }).catch(() => {
            dispatch({
                type: 'ERROR_TOPCAROUSEL',
                payload: null
            })
        }).finally(() => {

        })
    }
}
export default TopCarouselService;
