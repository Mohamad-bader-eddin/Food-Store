import React, { useState } from 'react'
import { Button, CardForm, CloseButton, PopupBox, PopupOverlay, Tippy } from './CreditCard.style'
import Cards from 'react-credit-cards'
import { addSummary } from '../../Redux/Summary/summaryAction'
import { toast } from "react-toastify";
import { deleteAllCart } from '../../Redux/Cart/CartAction'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CreditCard = ({total , setPlaceOrder , summary}) => {
    const [number , setNumber] = useState('')
    const [name , setName] = useState('')
    const [expiry , setExpiry] = useState('')
    const [cvc , setCvc] = useState('')
    const [focus , setFocus] = useState('')
    const { user } = useSelector(state => state.user) 
    const [valNumber , setValNumber] = useState(false)
    const [valName , setValName] = useState(false)
    const [valExpiry , setValExpiry] = useState(false)
    const [valCvc , setValCvc] = useState(false)
    const [disabled , setDisabled] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const handleValidate = e => {
        switch(e.target.name){
            case 'number' :
                number ? setValNumber(false) : setValNumber(true)
                break
            case 'name' :
                name ? setValName(false) : setValName(true)
                break
            case 'expiry' :
                expiry ? setValExpiry(false) : setValExpiry(true)
                break
            case 'cvc' :
                cvc ? setValCvc(false) : setValCvc(true)
                break
            default : break
        }
        if(number && !valNumber && name && !valName && expiry && !valExpiry && cvc && !valCvc){
            setDisabled(false)
        }
    }

    const handlePay = () =>{
        dispatch(addSummary(summary))
        dispatch(deleteAllCart(user.email))
        navigate('/')
        toast.success('The order has been successfully registered', {
            position: "bottom-right",
            pauseOnHover: true,
            theme: "colored",
        })
    }
    
    return (
        <>
            <PopupOverlay />
            <PopupBox>
                <Cards
                    name={name} number={number} expiry={expiry} cvc={cvc} focused={focus} />
                <CardForm>
                    <div style={{position : 'relative'}}>
                        <input type="tel" name='number' placeholder={t('Card_Number')}
                            value={number} onChange={e => setNumber(e.target.value)}
                            onFocus={e => setFocus(e.target.name)} onBlur={e => handleValidate(e)}/>
                            {
                                valNumber ? <Tippy>{t('Required')}</Tippy> : null
                            }
                    </div>
                    <div style={{position : 'relative'}}>
                        <input type="text" name='name' placeholder={t('name')}
                            value={name} onChange={e => setName(e.target.value)}
                            onFocus={e => setFocus(e.target.name)} onBlur={e => handleValidate(e)}/>
                            {
                                valName ? <Tippy>{t('Required')}</Tippy> : null
                            }
                    </div>
                    <div style={{position : 'relative'}}>
                        <input type="text" name='expiry' placeholder={`MM/YY ${t('Expiry')}`}
                            value={expiry} onChange={e => setExpiry(e.target.value)}
                            onFocus={e => setFocus(e.target.name)} onBlur={e => handleValidate(e)}/>
                            {
                                valExpiry ? <Tippy>{t('Required')}</Tippy> : null
                            }
                    </div>
                    <div style={{position : 'relative'}}>
                        <input type="tel" name='cvc' placeholder='CVC'
                            value={cvc} onChange={e => setCvc(e.target.value)}
                            onFocus={e => setFocus(e.target.name)} onBlur={e => handleValidate(e)}/>
                            {
                                valCvc ? <Tippy>{t('Required')}</Tippy> : null
                            }
                    </div>
                </CardForm>
                <Button btnstyle='card' onClick={handlePay} disabled={valNumber | valName | valExpiry | valCvc | disabled}>
                    {t('Pay')} $ {total}
                </Button>
                <CloseButton onClick={() => setPlaceOrder(false)}>X</CloseButton>
            </PopupBox>
        </>
    )
}

export default CreditCard