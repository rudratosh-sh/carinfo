const initialState = {
    servicesList: [],
    loading: true,
    error: false,
};
function servicesReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_SERVICES':
            return { ...state, servicesList: [], error: false, loading: true }
        case 'GET_SERVICES':
            return { ...state, servicesList: action.payload[0].data.section.elements, error: false, loading: false }
        case 'ERROR_SERVICES':
            return { ...state, servicesList: [], error: true, loading: false }
        default:
            return state;
    }
};
export default servicesReducer;
