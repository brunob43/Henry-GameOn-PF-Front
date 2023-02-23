// import { configureStore } from "@reduxjs/toolkit"

// export default configureStore({
    
// })
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
 
const persistConfig = {
  key: 'root',
  storage,
  whitelist: [rootReducer],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
