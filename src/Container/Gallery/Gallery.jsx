import React, { useState } from 'react'
import MainTitle from '../../Components/MainTitle/MainTitle'
import { Box, CloseButton, Container, Galleries, Image, PopupBox, PopupOverlay } from './Gallery.style'
import { GalleryData } from './GalleryData'
import { useTranslation } from 'react-i18next'

const Gallery = () => {
  const [click, setClick] = useState(null)
  const { t } = useTranslation()
  return (
    <Galleries>
      <MainTitle text={t('Gallery')} />
      <Container>
        {
          click && <>
            <PopupOverlay />
            <PopupBox>
              <h3>{t(`${click.alt}`)}</h3>
              <img src={click.src} alt={click.alt} />
              <CloseButton onClick={() => setClick(null)}>X</CloseButton>
            </PopupBox>
          </>
        }
        {
          GalleryData.map(img => (<Box key={img.id} onClick={() => setClick(img)}>
            <Image>
              <img src={img.src} alt={img.alt} />
            </Image>
          </Box>))
        }
      </Container>
    </Galleries>
  )
}

export default Gallery