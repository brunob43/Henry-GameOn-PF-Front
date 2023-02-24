// import { configureStore } from "@reduxjs/toolkit"

// export default configureStore({
    
// })
import { createStore, applyMiddleware,} from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer";
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,persistStore
} from 'redux-persist';
 
const persistConfig = {
  key: 'root',
  storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducer)


// export default createStore({
//   reducer: persistedReducer(),
//   middleware: (thunkMiddleware) 
//       getDefaultMiddleware({
//           serializableCheck: {
//               ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//           },
//       }),
// });

// const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  persistedReducer,
  // rootReducer,
  applyMiddleware(thunkMiddleware)
);

export const Persistor = persistStore(store)

export default store;
