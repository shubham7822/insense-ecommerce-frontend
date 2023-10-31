// import { configureStore } from '@reduxjs/toolkit'
// import cartReducers from './reducers/cartReducers'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// export const store = configureStore({
//   reducer: {
//     cart:cartReducers,
//   }
// })

// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // or another storage engine

import cartReducers from './reducers/cartReducers'; // Your rootReducer

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducers);

const store = configureStore({
  reducer: persistedReducer,
  // ...other store configurations
});

const persistor = persistStore(store);

export { store, persistor };
