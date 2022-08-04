const initialState = {
    topCarouselList: [],
    loading: true,
    error: false,
};
function topCarouselReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_TOPCAROUSEL':
            return { ...state, topCarouselList: [], error: false, loading: true }
        case 'GET_TOPCAROUSEL':
            console.log(action.payload[0].data.section.elements,'payload')
            return { ...state, topCarouselList: action.payload[0].data.section.elements, error: false, loading: false }
        case 'ERROR_TOPCAROUSEL':
            return { ...state, topCarouselList: [], error: true, loading: false }
        default:
            return state;
    }
};
export default topCarouselReducer;
