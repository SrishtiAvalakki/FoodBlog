import { createStore } from 'redux';
import { Reducer , initialState } from './reducer';

export const ConfigureSTore = () => {
    const store = createStore(
        Reducer,
        initialState
    );

        return store;
}