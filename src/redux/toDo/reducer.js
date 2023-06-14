import {
    ADD_TO_DO_LIST,
    UPDATE_TO_DO_LIST,
    DELETE_TO_DO_LIST,
    TO_DO_LIST
} from './const';
import RecordController from '../../controllers/RecordController';
const INIT_STATE = {
    toDoList: [],
};
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case TO_DO_LIST:
            return {
                ...state,
                toDoList:  action.payload
            }
        case ADD_TO_DO_LIST:
            return {
                ...state,
                toDoList: RecordController.add(
                    state.toDoList,
                    action.payload
                ),
            }
        case UPDATE_TO_DO_LIST:
            return {
                ...state,
                toDoList: RecordController.update(
                    state.toDoList,
                    action.payload
                ),
            }
        case DELETE_TO_DO_LIST:
            return {
                ...state,
                toDoList: RecordController.delete(
                    state.toDoList,
                    action.payload
                ),
            }
        default: return { ...state };
    }
}
