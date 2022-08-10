import * as yup from 'yup'
const validation = yup.object().shape({
    email:yup.string().email('Email formatı yanlış').required('Zorunlu Alan'),
    password:yup.string().min(6,'minimum 6 karakter olmalıdır').required('Zorunlu Alan'),
    passwordConfirm:yup.string().oneOf([yup.ref('password')],'şifreler Uyuşmamaktadır').required('Zorunlu Alan')
})

export default validation