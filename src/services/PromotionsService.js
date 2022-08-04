import Communication from "../config/Communication";
import config from "../config/config";

const PromotionsService = {
    loadPromotions(dispatch) {
        dispatch({
            type: 'LOAD_PROMOTIONS',
            payload: null
        })
        Communication.getMethod(config.endPoints.allPromotions).then(promotions => {
            dispatch({
                type: 'GET_PROMOTIONS',
                payload: promotions
            })
            console.log(promotions)
        }).catch(() => {
            dispatch({
                type: 'ERROR_PROMOTIONS',
                payload: null
            })
        }).finally(() => {

        })
    }
}
export default PromotionsService;
