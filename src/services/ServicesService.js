import Communication from "../config/Communication";
import config from "../config/config";

const ServicesService = {
    loadServices(dispatch) {
        dispatch({
            type: 'LOAD_SERVICES',
            payload: null
        })
        Communication.getMethod(config.endPoints.allServices).then(services => {
            dispatch({
                type: 'GET_SERVICES',
                payload: services
            })
            console.log(services)
        }).catch(() => {
            dispatch({
                type: 'ERROR_SERVICES',
                payload: null
            })
        }).finally(() => {

        })
    }
}
export default ServicesService;
