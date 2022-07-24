import React from 'react'
import MainTitle from '../../Components/MainTitle/MainTitle'
import { Button, Contacts, FormContent, Image } from './Contact.style'
import * as Yup from 'yup'
import { useTranslation } from 'react-i18next'
import { Form, Formik } from 'formik'
import FormikControl from '../../Components/FormikControl/FormikControl'
import { FaUserAlt , FaPhoneAlt} from 'react-icons/fa'
import { MdEmail , MdOutlineAccessTimeFilled } from 'react-icons/md'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { ImUsers } from 'react-icons/im'


const Contact = () => {
    const { t } = useTranslation()
    const initialValues = {
        name : '',
        email : '',
        phone : '',
        date : null,
        time : null,
        numPepole : ''
    }

    const validationSchema = Yup.object({
        name : Yup.string().required(t('Required')),
        email : Yup.string().email(t('Invalid_Email')).required(t('Required')),
        phone : Yup.string().required(t('Required')),
        date : Yup.date().required(t('Required')).nullable(),
        time : Yup.date().required(t('Required')).nullable(),
        numPepole : Yup.string().required(t('Required'))
    })

    const onSubmit = values =>{
        console.log(values);
    }

    const dropdownOptions = [
        { key: t('NO.OF_PEOPLE'), value: '' },
        { key: t('1_Pepole'), value: '1' },
        { key: t('2_Pepole'), value: '2' },
        { key: t('3_Pepole'), value: '3' },
        { key: t('More'), value: 'More' }
    ]
  return (
    <Contacts id='reservation'>
            <Image>
                <h2>{t('contact_sentence')}</h2>
            </Image>
            <FormContent>
            <MainTitle text={t('Book_your_table')}/>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {
                        formik => <Form>
                            <FormikControl control='input' type='text' label={<FaUserAlt />} name='name' placeholder={t('Your_Name')} />
                            <FormikControl control='input' type='email' label={<MdEmail />} name='email' placeholder={t('email')} />
                            <FormikControl control='input' type='text' label={<FaPhoneAlt />} name='phone' placeholder={t('Phone')} />
                            <FormikControl control='date' label={<BsFillCalendarDateFill />} name='date' placeholderText={t('Date')} />
                            <FormikControl control='time' label={<MdOutlineAccessTimeFilled />} name='time' placeholderText={t('Time')} />
                            <FormikControl control='select' label={<ImUsers />} name='numPepole' options={dropdownOptions} />
                            <Button type='submit' disabled={!formik.isValid}>{t('Book_now')}</Button>
                        </Form>
                    }
                </Formik>
            </FormContent>
    </Contacts>
  )
}

export default Contact