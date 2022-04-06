import './App.css';
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as yup from "yup"

function App() {
  const handleClickLogin = (values) => console.log(values)
  const handleClickRegister = (values) => console.log(values)

  const validationLogin = yup.object().shape({
    email: yup.string().email("Insira um email válido").required("Este campo é obrigatório"),
    password: yup.string("A senha deve conter pelo menos 8 caracteres").min(8).required("Este campo é obrigatótio"),
  })

  const validationRegister =  yup.object().shape({
    email: yup.string().email("Insira um email válido").required("Este campo é obrigatório"),
    password: yup.string("A senha deve conter pelo menos 8 caracteres").min(8).required("Este campo é obrigatótio"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não correspondem"),
  })

  return  <div className='container'>
    <h1>Login</h1>
    <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
      <Form className='login-form'>
      <div className='login-form-group'>
          <Field name="email" className="form-field" placeHolder="Email"></Field>

          <ErrorMessage
          component="span" name="email" className="form-error"
          />

        </div>

        <div className='login-form-group'>
          <Field name="password" className="form-field" placeHolder="Senha"></Field>

          <ErrorMessage
          component="span" name="confirmPassword" className="form-error"
          />

        </div>

        <button className='button' type='submit'>Login</button>

      </Form>
    </Formik>

    <h1>Cadastro</h1>
    <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationRegister}>
      <Form className='login-form'>
      <div className='login-form-group'>
          <Field name="email" className="form-field" placeHolder="Email"></Field>

          <ErrorMessage
          component="span" name="email" className="form-error"
          />

        </div>

        <div className='login-form-group'>
          <Field name="password" className="form-field" placeHolder="Senha"></Field>

          <ErrorMessage
          component="span" name="password" className="form-error"
          />

        </div>

        <div className='login-form-group'>
          <Field name="confirmPassword" className="form-field" placeHolder="Confirme sua senha"></Field>

          <ErrorMessage
          component="span" name="confirmPassword" className="form-error"
          />

        </div>

        <button className='button' type='submit'>Login</button>

      </Form>
    </Formik>

  </div>
}

export default App;