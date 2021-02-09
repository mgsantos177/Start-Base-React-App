import React from "react";
import dotenv from "dotenv";
import { useDispatch } from "react-redux";
import { Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { Content, SignForm } from "./styles";
import { signInRequest } from "../../store/modules/auth/actions";

dotenv.config();

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um email válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string().required("A senha é obrigatória"),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <Content>
      <SignForm onSubmit={handleSubmit} schema={schema}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Acessar</button>
      </SignForm>
    </Content>
  );
}
