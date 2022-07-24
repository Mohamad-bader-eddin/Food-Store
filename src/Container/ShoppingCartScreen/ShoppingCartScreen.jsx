import React, { useCallback, useEffect, useState } from 'react'
import { Box, Count, Image, Remove, ShoppingCart, Coupon, Summary, SummaryBox, Total, SummaryButton, Button } from './ShoppingCartScreen.style'
import MainTitle from '../../Components/MainTitle/MainTitle'
import { Container } from '../../Style/Container'
import { FaShoppingCart , FaTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, getCarts, updateCartQuantity } from '../../Redux/Cart/CartAction'
import Spinner from '../../Components/Spinner/Spinner'
import jsCookie from 'js-cookie'
import { useTranslation } from 'react-i18next'
import { getCoupon, removeCoupon } from '../../Redux/Coupon/couponAction'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'

const ShoppingCartScreen = () => {
    const [total , setTotal] = useState(0)
    const { loading, carts , error } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const language = jsCookie.get('i18next')
    const { user } = useSelector(state => state.user)
    const { t } = useTranslation()
    const [ couponName , setCouponName ] = useState('')
    const { coupon } = useSelector(state => state.coupon)
    const navigate = useNavigate()


    const dateDifference = useCallback(() =>{
        const couponValidate = coupon.validate.toDate().getTime()
        const dateNow = new Date().getTime()
        if(dateNow > couponValidate){
            return false
        }
        return true
    },[coupon])

    const totalPrice =useCallback(()=>{
        if(carts.length > 1){
            let price=0
            carts.forEach(cart => {
                price += cart.price * cart.quantity
            })
            if(coupon){
                if(dateDifference()){
                    price = price - coupon.value
                    toast.success(t('Coupon_Success'), {
                        position: "bottom-right",
                        pauseOnHover: true,
                        theme: "colored",
                    })
                }else{
                    toast.error(t('Coupon_Invalid'), {
                        position: "bottom-right",
                        pauseOnHover: true,
                        theme: "colored",
                    })
                }
            }
            setTotal(price)
        }
        else if(carts.length === 1){
            let price = carts[0].price * carts[0].quantity
            if(coupon){
                if(dateDifference()){
                    price = price - coupon.value
                    toast.success(t('Coupon_Success'), {
                        position: "bottom-right",
                        pauseOnHover: true,
                        theme: "colored",
                    })
                }
                else{
                    toast.error(t('Coupon_Invalid'), {
                        position: "bottom-right",
                        pauseOnHover: true,
                        theme: "colored",
                    })
                }
            }
            setTotal(price)
        }
    },[carts, coupon, dateDifference, t])

    useEffect(() =>{
        user && carts.length === 0 && dispatch(getCarts(user.email))
        carts.length >= 1 && totalPrice()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[coupon])




    const handleIncrease = (quantity , id)=>{
        dispatch(updateCartQuantity(id , quantity + 1 , user.email))
    }

    const handleDecrease = (quantity , id)=>{
        dispatch(updateCartQuantity(id , quantity - 1 , user.email))
    }

    const handleRemove = id =>{
        dispatch(deleteCart(id , user.email))
    }

    const handleCoupon = ()=>{
        dispatch(getCoupon(couponName))
    }

    const handleRemoveCoupon =()=>{
        dispatch(removeCoupon())
        setCouponName('')
    }

    const handleSummary = ()=>{
        navigate(`/summary/${total}`)
    }


return (
    <ShoppingCart>
        <MainTitle text={<FaShoppingCart />}/>
        <Container>
            {
                loading ? <Spinner /> :
                error ? <div>{error}</div> :
                carts.map(cart => <Box key={cart.id}>
                    <Image>
                        <img src={cart.image} alt="" />
                    </Image>
                    <h2>{language === 'en' ? cart.name : cart.nameAr}</h2>
                    <Count>
                        <h3>{cart.price}$ x <span>{cart.quantity}</span></h3>
                        <button onClick={()=> handleIncrease(cart.quantity , cart.id)}>+</button>
                        <button onClick={()=> handleDecrease(cart.quantity , cart.id)}>-</button>
                    </Count>
                    <Remove onClick={()=> handleRemove(cart.id)}><FaTrashAlt /></Remove>
                </Box>)
            }
            <Total>
                <SummaryBox>
                    <Coupon>
                        <label>{t('Coupon_Code')}</label>
                        <input type="text" value={coupon?.name || couponName} onChange={e => setCouponName(e.target.value)}/>
                        {
                            coupon ?
                            <Button typebtn='remove' onClick={handleRemoveCoupon}>{t('Remove')}</Button> :
                            <Button typebtn='applay' onClick={handleCoupon}>{t('Apply')}</Button>
                        }
                    </Coupon>
                    <Summary>
                        <h3>{t('Total')} ({t('USD')})</h3>
                        <h3>$ {total}</h3>
                    </Summary>
                </SummaryBox>
                <SummaryButton onClick={handleSummary}>{t('Summary')}</SummaryButton>
            </Total>
        </Container>
    </ShoppingCart>
  )
}

export default ShoppingCartScreen