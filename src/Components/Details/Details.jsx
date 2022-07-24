import React from 'react'
import { useTranslation } from 'react-i18next'
import jsCookie from 'js-cookie'
import { CloseButton, Content, Item, ListItem, OrderSummary, PickUp, PopupBox, PopupBoxInfo, PopupOverlay } from './Details.style'
import { format } from 'date-fns'

const Details = ({ item, setDetails }) => {
    const { t } = useTranslation()
    const language = jsCookie.get('i18next')
    return (
        <>
            <PopupOverlay />
            <PopupBox>
                <Content>
                    <PickUp>
                        <h2>{t('PickUp_Details')}:</h2>
                        <PopupBoxInfo>
                            <div><span>{t('name')} : </span>{item.name}</div>
                            <div><span>{t('Phone')} : </span> {item.phone}</div>
                            <div><span>{t('Time')} : </span> {format(item.time.toDate().getTime(),'h:mm a')}</div>
                            <div><span>{t('Comment')} : </span> {item.comment}</div>
                        </PopupBoxInfo>
                    </PickUp>
                    <OrderSummary>
                        <h2>{t('Order_Summary')}:</h2>
                        <ul>
                            {
                                item.carts.map(cart => <ListItem key={cart.id}>
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
                                    <span>({t('USD')}) $ {item.total}</span>
                                </Item>
                            </ListItem>
                        </ul>
                    </OrderSummary>
                </Content>
                <CloseButton onClick={() => setDetails(null)}>X</CloseButton>
            </PopupBox>
        </>
    )
}

export default Details