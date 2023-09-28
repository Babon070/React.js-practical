import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import addToBasket from "../reducers/basketReducer";
import rootReducer from "../reducers/rootReducer";
const persistConfig = {
  key: "reducer",
  storage: storage,
  whitelist: ["likeReducer", "createReducer", "addToBasket"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store)

export { store, persistor };
