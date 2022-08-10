import { Formik } from "formik";

function Form() {
    return (<div className="container">
        <h1 className="text-center">Form İşlmeleri (Formik)</h1>
        <Formik initialValues={{
            name: '',
            gender: '',
            email: '',
            deparment: ''
        }} onSubmit={(values) => {
            console.log(values)
        }}>
            {
                ({ handleSubmit, handleChange, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <label >Ad</label>
                                <input name="name" value={values.name} className="form-control" onChange={handleChange} />
                            </div>
                            <div className="col-6">
                                <label >email</label>
                                <input type="email" name="email" value={values.email} className="form-control" onChange={handleChange} />
                            </div>

                            <div className="col-6">
                                <label>Erkek <input type="radio" checked={values.gender === 'male'}
                                    value="male" name="gender" onChange={handleChange} /></label>
                                <label>Kadın <input type="radio" value="female" checked={values.gender === 'female'}
                                    name="gender" onChange={handleChange} /></label>
                            </div>
                            <div className="col-6">
                                <select className="form-control" value={values.deparment} name="deparment" onChange={handleChange}>
                                    <option value=""></option>
                                    <option value="IT">IT</option>
                                    <option value="Network">Network</option>
                                    <option value="ik">İnsan Kaynakları</option>
                                </select>
                            </div>
                            <div className="col-6">
                                <button type="submit" className="btn btn-primary">Kaydet</button>
                            </div>
                        </div>
                        {JSON.stringify(values)}
                    </form>

                )

            }
        </Formik>
    </div>);
}

export default Form;