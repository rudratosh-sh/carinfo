import { combineReducers } from 'redux';
import topCarouselReducer from './topCarouselReducer'; 
import servicesReducer from './servicesReducer';
import offersReducer from './offersReducer';
import promotionsReducer from './promotionsReducer';
import newsReducer from './newsReducer';

// other reducers needs to import here
const rootReducers = combineReducers({
    topCarouselData: topCarouselReducer,
    servicesData :servicesReducer,
    offersData: offersReducer,
    promotionsData: promotionsReducer,
    newsData : newsReducer
    // if there are other reducers , we can add here one by one
});
export default rootReducers;
