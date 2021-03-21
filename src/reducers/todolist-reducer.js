const TOGGLE_TASK = 'todolist/TOGGLE_TASK';
const ADD_TO_DO = 'todolist/ADD_TO_DO';
const DELETE_TASK = 'todolist/DELETE_TASK';

const todolistReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.id) return {...task, done: !task.done}
                    return {...task};
                })
            }
        case ADD_TO_DO:
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.id)
            }
        default:
            return state;
    }
};

export const toggleTask = id => ({type: TOGGLE_TASK, id});
export const addToDo = task => ({type: ADD_TO_DO, task});
export const deleteTask = id => ({type: DELETE_TASK, id})

export default todolistReducer;