import {
    ADD_TO_DO_LIST,
    UPDATE_TO_DO_LIST,
    DELETE_TO_DO_LIST
} from './const';
import RecordController from '../../controllers/RecordController';
const INIT_STATE = {
    toDoList: [],
};
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_TO_DO_LIST:
            return {
                ...state,
                toDoList: RecordController.add(
                    state.toDoList,
                    action.payload
                ),
                showRoleDetailModal: false

            }
        case UPDATE_TO_DO_LIST:
            return {
                ...state,
                toDoList: RecordController.update(
                    state.toDoList,
                    action.payload
                ),
                showRoleDetailModal: false

            }
        case DELETE_TO_DO_LIST:
            return {
                ...state,
                toDoList: RecordController.delete(
                    state.toDoList,
                    action.payload
                ),
                showRoleDetailModal: false

            }
        default: return { ...state };
    }
}
