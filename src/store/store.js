import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const middleWares = [thunk, logger];

const persistConfig = {
  key: "zempstore",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middleWares));

export default store;

export const persistor = persistStore(store);
