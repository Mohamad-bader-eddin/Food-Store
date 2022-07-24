import React from 'react'
import { Chef, Container, Overlay, Team } from './Chefs.style'
import MainTitle from '../../Components/MainTitle/MainTitle'
import { ChefsData } from './ChefsData'
import { FaTwitter , FaFacebookF , FaInstagram , FaYoutube } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Chefs = () => {
    const { t } = useTranslation()
  return (
    <Chef>
        <MainTitle text={t('Our_Chefs')} />
        <Container>
            {
                ChefsData.map( chef => <Team key={chef.id}>
                    <Overlay />
                    <img src={chef.src} alt="" />
                    <h4>{t(`${chef.name}`)}</h4>
                    <FaTwitter className='twitter'/>
                    <FaFacebookF className='facebook'/>
                    <FaInstagram className='instagram'/>
                    <FaYoutube className='youtube'/>
                </Team>)
            }
        </Container>
    </Chef>
  )
}

export default Chefs