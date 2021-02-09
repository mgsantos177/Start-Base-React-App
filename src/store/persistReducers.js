/* eslint-disable import/no-anonymous-default-export */
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "salesforce_event_log",
      storage,
      whitelist: ["auth", "user"],
    },
    reducers
  );

  return persistedReducer;
};
