const initialState = {
    newsList: [],
    loading: true,
    error: false,
};
function newsReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_NEWS':
            return { ...state, newsList: [], error: false, loading: true }
        case 'GET_NEWS':
            return { ...state, newsList: action.payload[0].data.section.elements, error: false, loading: false }
        case 'ERROR_NEWS':
            return { ...state, newsList: [], error: true, loading: false }
        default:
            return state;
    }
};
export default newsReducer;
