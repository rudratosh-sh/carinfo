const initialState = {
    offersList: [],
    loading: true,
    error: false,
};
function offersReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_OFFERS':
            return { ...state, offersList: [], error: false, loading: true }
        case 'GET_OFFERS':
            return { ...state, offersList: action.payload[0].data.section.elements, error: false, loading: false }
        case 'ERROR_OFFERS':
            return { ...state, offersList: [], error: true, loading: false }
        default:
            return state;
    }
};
export default offersReducer;
