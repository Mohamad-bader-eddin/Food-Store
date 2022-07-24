import React from 'react'
import { Background, Button, Content, FormContent, Left, Right, Title } from './Register.style'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../Components/FormikControl/FormikControl'
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux'
import { addUser } from '../../Redux/User/userActions'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const initialValues = {
        email: '',
        password: '',
        confirm: '',
        fname : '',
        lname : '',
        address: '',
        birthDate : null,
        phone : ''
    }

    const validationSchema = Yup.object({
        email : Yup.string().email(t('Invalid_Email')).required(t('Required')),
        password : Yup.string().required(t('Required')),
        confirm : Yup.string().oneOf([Yup.ref('password') , ''],t('Password_must_match')).required(t('Required')),
        fname : Yup.string().required(t('Required')),
        lname : Yup.string().required(t('Required')),
        address : Yup.string().required(t('Required')),
        phone : Yup.string().required(t('Required')),
        birthDate : Yup.date().required(t('Required')).nullable()
    })


    const onSubmit = values => {
        dispatch(addUser(values))
        navigate('/')
    }

  return (
    <Background>
        <Content>
        <Title>{t('Regiester_New_User')}</Title>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnMount>
                    {
                        formik => <Form>
                            <FormContent>
                                <Left>
                                    <FormikControl control='input' type='email' label={t('email')} name='email' placeholder={t('email')} />
                                    <FormikControl control='input' type='password' label={t('password')} name='password' placeholder={t('password')} />
                                    <FormikControl control='input' type='password' label={t('confirm_password')} name='confirm' placeholder={t('confirm_password')} />
                                    <FormikControl control='input' type='text' label={t('Address')} name='address' placeholder={t('Address')} />
                                </Left>
                                <Right>
                                    <FormikControl control='input' type='text' label={t('First_Name')} name='fname' placeholder={t('First_Name')} />
                                    <FormikControl control='input' type='text' label={t('Last_Name')} name='lname' placeholder={t('Last_Name')} />
                                    <FormikControl control='date' label={t('Birth_Date')} name='birthDate' placeholderText={t('Birth_Date')} />
                                    <FormikControl control='input' type='text' label={t('Phone')} name='phone' placeholder={t('Phone')} />
                                </Right>
                            </FormContent>
                            <Button type='submit' disabled={!formik.isValid}>{t('Register')}</Button>
                        </Form>
                    }
                </Formik>
        </Content>
    </Background>
  )
}


export default Register