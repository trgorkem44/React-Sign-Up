import { useFormik } from "formik";
import validation from "./validation";

function Login() {
    const { values, handleSubmit, handleChange, errors, touched ,handleBlur} = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: ''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: validation
    })
    return (<div className="container d-flex justify-content-center">
        <form className="w-50" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={values.email} name="email" className="form-control" 
            type="email" onChange={handleChange} onBlur={handleBlur} />
            {
                touched.email && errors.email && <div className="alert alert-danger" role="alert">
                    {errors.email}
                </div>
            }

            <label htmlFor="password">Şifre</label>
            <input value={values.password} name="password" type="password" 
            className="form-control" onChange={handleChange} onBlur={handleBlur} />
            {
                touched.password && errors.password && <div className="alert alert-danger" role="alert">
                    {errors.password}
                </div>
            }
            <label htmlFor="passwordConfirm">Şifre Tekrar</label>
            <input value={values.passwordConfirm} name="passwordConfirm"
             className="form-control" type="password" onChange={handleChange} onBlur={handleBlur} />
            {
                touched.passwordConfirm  && errors.passwordConfirm && <div className="alert alert-danger" role="alert">
                    {errors.passwordConfirm}
                </div>
            }
            <button className="btn btn-primary" type="submit">Kayıt Ol</button>
        </form>
    </div>)
}

export default Login;