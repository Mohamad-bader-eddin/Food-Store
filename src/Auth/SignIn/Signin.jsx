import React , { useState } from 'react'
import { Account, Background, Button, Checkbox, Choice, Content, Here, Title } from './Signin.style'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../Components/FormikControl/FormikControl'
import { FaUser } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import Toggle from '../../Components/Toggle/Toggle'
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from 'react-router-dom'
import { loginLocal , loginSession } from '../../Redux/User/userActions'
import { useDispatch } from 'react-redux'

const Signin = () => {
    const { t } = useTranslation()
    const [showPassword, setShowPassword] = useState(false)
    const [toggle , setToggle] =useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const redirectPath = location.state?.path || '/'
    const initialValues = {
        email: '',
        password: '',
    }

    const validationSchema = Yup.object({
        email : Yup.string().email(t('Invalid_Email')).required(t('Required')),
        password : Yup.string().required(t('Required'))
    })

    const onSubmit = values => {
        if(toggle){
            dispatch(loginLocal(values))
        }else{
            dispatch(loginSession(values))
        }
        navigate(redirectPath , {replace : true})
    }

    return (
        <Background>
            <Content>
                <Title>{t('Sign_In')}</Title>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnMount>
                    {
                        formik => <Form autoComplete='false'>
                            <FormikControl control='input' type='email' label={<FaUser />} name='email' placeholder={t('email')} />
                            <FormikControl control='input' type={showPassword ? 'text' : 'password'} label={<RiLockPasswordFill />} name='password' placeholder={t('password')} />
                            <Choice>
                                <Checkbox>
                                    <input type='checkbox' id='show' value={showPassword} onChange={e => setShowPassword(e.target.checked)} />
                                    <label htmlFor='show'>&nbsp;{t('Show_Password')}</label>
                                </Checkbox>
                                <Checkbox>
                                    <Toggle  onChange={e => setToggle(e.target.checked)}/>
                                    <label htmlFor='show'>&nbsp; {t('keep_signed_in')}</label>
                                </Checkbox>
                            </Choice>
                            <Button type='submit' disabled={!formik.isValid}>{t('Sign_In')}</Button>
                        </Form>
                    }
                </Formik>
                <Account>{t('dont_have_account')} <Here to='/register'>{t('here')}</Here></Account>
            </Content>
        </Background>
    )
}

export default Signin