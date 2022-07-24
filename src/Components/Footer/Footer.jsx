import React from 'react'
import { Contact, Container, Copyright, Footers, Gallery, Openning, Title } from './Footer.style'
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import jsCookie from 'js-cookie'

const Footer = () => {
  const { t } = useTranslation()
  const language = jsCookie.get('i18next')
  return (
    <Footers>
        <Container>
            <Contact>
              <Title>{t('Contact')} <span>{t('us')}</span></Title>
              <p>{t('Lorem')}</p>
              <ul>
                <li>{t('Damascus')}</li>
                <li>40019 {t('Bronx,Morris Park')}</li>
                <li>{t('Telephone')} : +1 (734) 123-4567</li>
                <li>{t('email')} : info(at)example.com</li>
              </ul>
            </Contact>
            <Openning language={language}>
            {language === 'en' ? <Title>{t('Openning')} <span>{t('Hours')}</span></Title> : 
            <Title>{t('Hours')} <span>{t('Openning')}</span></Title>}
    
              <ul>
                <li><MdOutlineAccessTimeFilled /> <span>{t('Monday')}</span> <div>09 am - 010 pm</div></li>
                <li><MdOutlineAccessTimeFilled /> <span>{t('Tuesday')}</span> <div>09 am - 010 pm</div></li>
                <li><MdOutlineAccessTimeFilled /> <span>{t('Wednesday')}</span> <div>09 am - 010 pm</div></li>
                <li><MdOutlineAccessTimeFilled /> <span>{t('Thursday')}</span> <div>09 am - 010 pm</div></li>
                <li><MdOutlineAccessTimeFilled /> <span>{t('Friday')}</span> <div>11 am - 08 pm</div></li>
                <li><MdOutlineAccessTimeFilled /> <span>{t('Saturday')}</span> <div>10 am - 11 pm</div></li>
                <li><MdOutlineAccessTimeFilled /> <span>{t('Sunday')}</span> <div>{t('Closed')}</div></li>
              </ul>
            </Openning>
            <Gallery>
              <Title>{t('Our')} <span>Instagram</span></Title>
              <img src="/images/g1.jpg" alt="" />
              <img src="/images/g2.jpg" alt="" />
              <img src="/images/g3.jpg" alt="" />
              <img src="/images/g4.jpg" alt="" />
              <img src="/images/g5.jpg" alt="" />
              <img src="/images/g6.jpg" alt="" />
            </Gallery>
        </Container>
        <Copyright>&copy; 2022 Made By <span>MBE</span></Copyright>
    </Footers>
  )
}

export default Footer