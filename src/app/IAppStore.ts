export interface IAppStore{
    counter: number;
}

export function rootReducer(state, action){
    switch(action.type){
        case 'INCREMENT': return {counter: state.counter + 1};
    }
    return action;
}