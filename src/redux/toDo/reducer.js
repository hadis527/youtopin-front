import {
    ADD_TO_DO_LIST
} from './const';

const INIT_STATE = {
    toDoList: []  ,
};
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_TO_DO_LIST:
            return { ...state, toDoList: action.payload };
        default: return { ...state };
    }
}
