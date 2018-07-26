import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import * as actions from './actions';
import TrackList from './components/TrackList';

const initialState = {
    tracks: [
        {
            id: 1,
            title: 'Em của ngày hôm qua'
        },
        {
            id: 2,
            title: 'Cơn mưa ngang qua'
        }
    ]
};

const store = configureStore(initialState);
store.dispatch(actions.setTracks(initialState.tracks));

ReactDOM.render(
    <Provider store={store}>
        <TrackList />
    </Provider>
    , document.getElementById('app'));