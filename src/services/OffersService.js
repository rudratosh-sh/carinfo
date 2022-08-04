import Communication from "../config/Communication";
import config from "../config/config";

const OffersService = {
    loadOffers(dispatch) {
        dispatch({
            type: 'LOAD_OFFERS',
            payload: null
        })
        Communication.getMethod(config.endPoints.allOffers).then(offers => {
            dispatch({
                type: 'GET_OFFERS',
                payload: offers
            })
            console.log(offers)
        }).catch(() => {
            dispatch({
                type: 'ERROR_OFFERS',
                payload: null
            })
        }).finally(() => {

        })
    }
}
export default OffersService;
