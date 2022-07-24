import React from 'react'
import { Link } from 'react-router-dom'
import MainTitle from '../../Components/MainTitle/MainTitle'
import { Content, H4, Icon, Services } from './Service.style'
import { useTranslation } from 'react-i18next'
import jsCookie from 'js-cookie'

const Service = () => {
    const { t } = useTranslation()
    const language = jsCookie.get('i18next')
    return (
        <Services>
            <MainTitle text={t('our_Service')} />
            <Content>
                <div>
                    <Link to='/menu'>
                        <Icon>
                            <img src="/images/1.png" alt="" />
                        </Icon>
                    </Link>
                    <H4 language={language}>{t('Menu')}</H4>
                </div>
                <div>
                    <a href="#reservation">
                        <Icon>
                            <img src="/images/2.png" alt="" />
                        </Icon>
                    </a>
                    <H4 language={language}>{t('Reservation')}</H4>
                </div>
            </Content>
        </Services>
    )
}

export default Service