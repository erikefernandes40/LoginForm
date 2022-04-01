import './App.css';
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as yup from "yup"

function App() {
  const handleClickLogin = (values) => console.log(values)

  const validationLogin = yup.object().shape({
    email: yup.string().email("Insira um email válido").required("Este campo é obrigatório"),
    password: yup.string("A senha deve conter pelo menos 8 caracteres").min(8).required("Este campo é obrigatótio"),
  })

  return  <div className='container'>
    <h1>login</h1>
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
          component="span" name="password" className="form-error"
          />

        </div>

        <button className='button' type='submit'>Login</button>

      </Form>
    </Formik>

  </div>
}

export default App;
