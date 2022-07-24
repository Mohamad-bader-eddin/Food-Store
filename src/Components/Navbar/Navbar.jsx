import React, { useEffect, useState } from 'react'
import { Cart, Container, Header, Language, Li, Links, LinksItem, Logo, Logout, Nav, SignIn, ToggleMenu, UserLogin } from './Navbar.style'
import { FaBars, FaUserAlt } from 'react-icons/fa'
import { IoLanguage } from 'react-icons/io5'
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import { languages } from '../../Languages/Languages'
import 'flag-icon-css/css/flag-icons.min.css'
import { useDispatch, useSelector } from 'react-redux';
import { authState, logout } from '../../Redux/User/userActions';
import { FaShoppingCart } from 'react-icons/fa'
import { getCarts } from '../../Redux/Cart/CartAction';



const Navbar = () => {
    const [toggleClick, setToggleClick] = useState(false)
    const [languageClick, setLanguageClick] = useState(false)
    const { user } = useSelector(state => state.user) 
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const { carts } = useSelector(state => state.cart)


    useEffect(() => {
        dispatch(authState())
        user && dispatch(getCarts(user.email))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return (
        <Header>
            <Container>
                <Logo to='/'>
                    <span>R</span>APID <span>F</span>OODER
                </Logo>
                <Nav>
                    <ToggleMenu onClick={() => setToggleClick(!toggleClick)}><FaBars /></ToggleMenu>
                    <Links clicked={toggleClick ? 'clicked' : ""}>
                        <Li><LinksItem to='/'>{t('Home_Link')}</LinksItem></Li>
                        <Li><LinksItem to='/menu'>{t('Menu_Link')}</LinksItem></Li>
                        {
                            user && 
                            <Li><LinksItem to='/order-history'>{t('Order_History_Link')}</LinksItem></Li>
                        }
                        {
                            user &&
                            <Li><LinksItem to='/shopping-cart'><Cart data-count={`(${carts.length})`}><FaShoppingCart /></Cart></LinksItem></Li>
                        }
                        <Li><Language clicked={languageClick ? 'clicked' : ''} onClick={() => setLanguageClick(!languageClick)}>
                            <IoLanguage className='icon' />
                            <ul>
                                {
                                    languages.map(lang => <li key={lang.country_code} onClick={() => i18next.changeLanguage(lang.code)}>
                                        <span className={`flag-icon flag-icon-${lang.country_code}`}></span>
                                        {lang.name}</li>)
                                }
                            </ul>
                        </Language>
                        </Li>
                        {
                            user ? (<Li><UserLogin>
                                <h4>{t('Hi')} {user.displayName} <FaUserAlt /></h4>
                                <Logout onClick={() => dispatch(logout())} >{t('Log_Out')}</Logout>
                            </UserLogin></Li>)
                                : <Li><SignIn to='/sign-in'>{t('Sign_In')}</SignIn></Li>
                        }
                    </Links>
                </Nav>
            </Container>
        </Header>
    )
}

export default Navbar