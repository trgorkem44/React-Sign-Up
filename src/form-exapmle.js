import { useState } from "react";
import { useFormik } from "formik";
import Table from "./table";

function FormExample() {
    // ad-soyad - email - öğrenim durumu(select) -adres(textarea) - yaş()
    const [dataList,setDataList] = useState([])
    const { values, handleSubmit, handleChange,handleReset } = useFormik({
        initialValues: {
            nameSurname: '',
            email: '',
            education: '',
            address: '',
            age:''
        },
        onSubmit: (values) => {
            console.log(values)
            setDataList([...dataList,values])
            console.log(dataList)
            handleReset();
       
        }
    })
    return (<div className="container">
        <h1 className="text-center">Kullanıcı Kaydı</h1>
        <hr className="my-4" />
        <form onSubmit={handleSubmit}>
            <div className="container border-1">
                <div className="row">
                    <div className="col-6">
                        <label >Ad - Soyad</label>
                        <input name="nameSurname" value={values.nameSurname} className="form-control" onChange={handleChange} />
                    </div>
                    <div className="col-6">
                        <label >Email</label>
                        <input type='email' name="email" value={values.email} className="form-control" onChange={handleChange} />
                    </div>
                    <div className="col-6">
                        <label >Adres</label>
                        <textarea name="address" value={values.address} className="form-control" onChange={handleChange} ></textarea>
                    </div>
                    <div className="col-6">
                        <label >Öğrenim Durumu</label>
                        <select className="form-control" name="education" value={values.education} onChange={handleChange}>
                        <option value=""></option>
                            <option value="Lise">Lise</option>
                            <option value="Ön Lisans">Ön Lisans</option>
                            <option value="Lisans">Lisans</option>
                            <option value="Yüksek Lisans">Yüksek Lisans</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <label >Yaş</label>
                        <input name="age" value={values.age} className="form-control" onChange={handleChange} />
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <button className="btn btn-info" type="submit">Kaydet</button>
                    </div>
                </div>
            </div>
        </form>     
        { dataList && JSON.stringify(dataList)}
    <hr className="my-4" />
    <Table dataList={dataList} />
    </div>);
}

export default FormExample;