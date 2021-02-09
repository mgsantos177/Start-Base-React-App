import { takeLatest, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";
import { signInSuccess, signFailure } from "./actions";
import history from "../../../services/history";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    // const response = yield call(
    //   axios.post,
    //   'url',
    //   {
    //     email,
    //     password,
    //   }
    // );

    // const { user, token } = response.data;

    if ((email === "matheus@gmail.com", password === "teste")) {
      const user = { name: "Matheus Gonçalves", id: 1 };
      yield put(signInSuccess("teste", user));
      history.push("/home");
    }

    // api.defaults.headers.Authorization = `Bearer ${token}`;
  } catch (err) {
    toast.error("Falha no login");
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push("/");
  toast.info("Acesso Expirado. Por favor, logue novamente");
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_OUT", signOut),
]);
