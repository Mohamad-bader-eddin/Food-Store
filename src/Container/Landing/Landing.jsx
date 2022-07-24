import React, { useEffect, useRef, useState } from 'react'
import { Bullets, Landings, Slide, SlideInfo } from './Landing.style'
import { useTranslation } from 'react-i18next'
import { SliderData } from './SliderData'
import jsCookie from 'js-cookie';

const Landing = () => {
  const { t } = useTranslation()
  const [currentSlider, setCurrentSlider] = useState(1)
  const language = jsCookie.get('i18next')
  const intervalRef = useRef(null)
  const bulletCount = count =>{
    let bullet =[]
    for(let i=1;i<=count;i++){
      bullet.push(i)
    }
    return bullet
  }

  useEffect(()=>{
    intervalRef.current = setInterval(()=>{
      if(currentSlider !== SliderData.length){
        setCurrentSlider(prev => prev + 1)
      }else{
        setCurrentSlider(1)
      }
    },10000)

    return ()=>{
      clearInterval(intervalRef.current)
    }
  },[currentSlider])
  return (
    <Landings>
        <ul>
          {
            SliderData.map((slid , index) => (<Slide key={slid.id} className={ index === currentSlider - 1 ? 'active' : ''}>
              <SlideInfo language={language}>
                <h3>{t(`${slid.h3}`)} <span> {t(`${slid.span}`)} </span></h3>
                <h4>{t(`${slid.h4}`)}</h4>
                <p>{t('DISCOVER_OUR_RESTAURANT')}</p>
              </SlideInfo>
            </Slide>))
          }
        </ul>
        <Bullets>
          {
            bulletCount(SliderData.length).map((el, index) => 
              (<li key={index} className={ el === currentSlider ? 'active' : ''} onClick={() => setCurrentSlider(el)}></li>))
          }
        </Bullets>
    </Landings>
  )
}

export default Landing