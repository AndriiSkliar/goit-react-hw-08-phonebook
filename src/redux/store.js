import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contacts.reducer";
import { modalReducer } from "./modal/modal.reducer";
import { authReducer } from "./auth/auth.reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contactsStore: contactsReducer,
    modal: modalReducer,
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
