import { createStore } from 'redux';

const INITIAL_STATE = {
    template: 0,
    paginationTotal: 0,
    paginationCount: 0,
    paginationOffset: 0,
    paginationData: null
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'TEMPLATE_ACTION':
            return { ...state, template: action.id };

        case 'PAGINATION':
            return {
                ...state,
                paginationTotal: action.paginationTotal,
                paginationCount: action.paginationCount,
                paginationOffset: action.paginationOffset,
                paginationData: action.paginationData
            };

        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
