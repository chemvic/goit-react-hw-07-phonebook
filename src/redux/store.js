import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';
import {filterReducer} from "./filterSlice";
import {persistedContactsReducer} from "./contactsSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer
   
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);