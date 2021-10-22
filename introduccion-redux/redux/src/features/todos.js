import { combineReducers } from 'redux'
import { makeFetchingReducer, makeSetReducer, reduceReducers, makeCrudReducer, mac, mat, asyncMac } from './utils'

const asyncTodos = mat('todos')

const [setPending, setFullfilled, setError] = asyncMac(asyncTodos)
export const setComplete = mac('todo/complete', 'payload')
export const setFilter = mac('filter/set', 'payload')

// export const setPending = mac('todos/pending')
// export const setFullfilled= mac('todos/fulfilled', 'payload')
// export const setError = e => mac('todos/error', 'error')
// const sf = mac('todos/funfilled', 'payload')


export const fetchThunk = () => async dispatch => {
    dispatch(setPending())
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        const todos = data.slice(0, 10)
        dispatch(setFullfilled(todos))
    } catch (e) {
        dispatch(setError(e.message))
    }
}

export const filterReducer = makeSetReducer(['filter/set'])

export const fetchingReducer = makeFetchingReducer(asyncTodos)

export const fulfilledReducer = makeSetReducer( ['todos/fulfilled'] )
const crudReducer = makeCrudReducer(['todo/add', 'todo/complete'])

export const todosReducer = reduceReducers(crudReducer, fulfilledReducer)

export const reducer = combineReducers({
    todos: combineReducers({
        entities: todosReducer,
        status: fetchingReducer,
    }),
    filter: filterReducer,
})

// export const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case 'todo/add': {
//             return {
//                 ...state,
//                 entities: state.entities.concat({ ...action.payload })
//             }
//         }
//         case 'todo/complete': {
//             const newTodos = state.entities.map(todo => {
//                 if (todo.id === action.payload.id) {
//                     return { ...todo, completed: !todo.completed }
//                 }

//                 return todo
//             })
//             return {
//                 ...state,
//                 entities: newTodos
//             }
//         }
//         case 'filter/set': {
//             return {
//                 ...state,
//                 filter: action.payload,
//             }
//         }
//     }
//     return state
// }


export const selectTodos = state => {
    const { todos: { entities }, filter } = state

    if (filter === 'complete') {
        return entities.filter(todo => todo.completed)
    }

    if (filter === 'incomplete') {
        return entities.filter(todo => !todo.completed)
    }

    return entities
}

export const selectStatus = state => state.todos.status