const INITIAL_STATE = {
    description: '',
    list: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return {
                ...state,
                description: action.payload
            }
        break;

        case 'TODO_SEARCHED':
            return {
                ...state,
                list: action.payload
            }
        break;

        case 'TODO_CLEAR':
            return {
                ...state,
                description: ''
            }
        break;
        
        default: 
            return state;
    }
}