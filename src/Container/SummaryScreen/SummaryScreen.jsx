import React , { useState } from 'react'
import MainTitle from '../../Components/MainTitle/MainTitle'
import { Background, Button, Content, Item, ListItem, OrderSummary, PickUp, Summary } from './SummaryScreen.style'
import { Formik , Form } from 'formik'
import * as Yup from 'yup'
import { useTranslation } from 'react-i18next'
import FormikControl from '../../Components/FormikControl/FormikControl'
import { setHours , setMinutes} from 'date-fns'
import 'react-credit-cards/es/styles-compiled.css'
import { useParams } from 'react-router-dom'
import { useSelector  } from 'react-redux'
import Spinner from '../../Components/Spinner/Spinner'
import jsCookie from 'js-cookie'
import CreditCard from '../../Components/CreditCard/CreditCard'


const SummaryScreen = () => {
    const params = useParams()
    const total = params.total
    const { loading, carts , error } = useSelector(state => state.cart)
    const { t } = useTranslation()
    const language = jsCookie.get('i18next')
    const [placeOrder , setPlaceOrder] = useState(false)
    const { user } = useSelector(state => state.user) 
    const [pickUp , setPickUp] = useState(null)

    const initialValues = {
        name : user?.displayName || '',
        phone : '',
        time : null,
        comment : ''
    }

    const validationSchema = Yup.object({
        name : Yup.string().required(t('Required')),
        phone : Yup.string().required(t('Required')),
        time : Yup.date().required(t('Required')).nullable(),
    })

    const onSubmit = values =>{
        setPickUp(values)
    }


  return (
    <Summary>
        <MainTitle text={t('Order_Summary')}/>
        <Background>
            {
                placeOrder && <CreditCard total={total} setPlaceOrder={setPlaceOrder} 
                summary={{email : user.email , carts : carts , total : total , totalItem : carts.length, ...pickUp}}/>
            }
            <Content>
                <PickUp>
                    <h2>{t('PickUp_Details')}:</h2>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnMount >
                        {
                            formik => <Form>
                                <FormikControl control='input' type='text' label={t('name')} name='name' placeholder={t('name')} />
                                <FormikControl control='input' type='text' label={t('Phone')} name='phone' placeholder={t('Phone')} />
                                <FormikControl control='time' type='text' label={t('Time')} name='time'
                                        minTime={setHours(setMinutes(9, 0), new Date().getHours() + 1)} maxTime={setHours(setMinutes(new Date(), 30), 21)}/>
                                <FormikControl control='textarea' type='text' label={t('Comment')} name='comment' placeholder={t('Comment')} />
                                <Button type='submit' disabled={!formik.isValid} onClick={() => setPlaceOrder(true)}>{t('Place_Order')}</Button>
                            </Form>
                        }
                    </Formik>
                </PickUp>
                <OrderSummary>
                    <h2>{t('Order_Summary')}:</h2>
                    <ul>
                        {
                            loading ? <Spinner /> :
                            error ? <div>{error}</div> :
                            carts.map(cart => <ListItem key={cart.id}>
                                <Item>
                                    <h3>{language === 'en' ? cart.name : cart.nameAr}</h3>
                                    <h5>$ {cart.price * cart.quantity}</h5>
                                </Item>
                                <p>{t('quantity')} : {cart.quantity}</p>
                            </ListItem>)
                        }
                        <ListItem>
                            <Item>
                                <h3>{t('Total')}</h3>
                                <span>({t('USD')}) $ {total}</span>
                            </Item>
                        </ListItem>
                    </ul>
                </OrderSummary>
            </Content>
        </Background>
    </Summary>
)
}

export default SummaryScreen