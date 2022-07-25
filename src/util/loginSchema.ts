import * as yup from 'yup';
export const loginSchema = yup.object().shape({
  user: yup
    .string()

    .required('Email obrigatório')
    .typeError('Email obrigatório'),
  password: yup
    .string()

    .required('Senha obrigatória')
    .typeError('Senha obrigatória'),
});
