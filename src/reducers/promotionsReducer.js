const initialState = {
    promotionsList: [],
    loading: true,
    error: false,
};
function promotionsReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_PROMOTIONS':
            return { ...state, promotionsList: [], error: false, loading: true }
        case 'GET_PROMOTIONS':
            return { ...state, promotionsList: action.payload[0].data.section, error: false, loading: false }
        case 'ERROR_PROMOTIONS':
            return { ...state, promotionsList: [], error: true, loading: false }
        default:
            return state;
    }
};
export default promotionsReducer;
