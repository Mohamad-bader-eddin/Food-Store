import React, { useEffect, useRef, useState } from 'react'
import { Event, Time, Unit } from './Events.style'
import { useTranslation } from 'react-i18next'
import jsCookie from 'js-cookie'

let countDownDate = new Date('Dec 31, 2022 23:59:59').getTime()

const Events = () => {
  const [days , setDays] = useState(0)
  const [hours , setHours] = useState(0)
  const [minutes , setMinutes] = useState(0)
  const [seconds , setSeconds] = useState(0)
  const [diff , setDiff] = useState(1)
  const intervalRef = useRef(null)
  const { t } = useTranslation()
  const language = jsCookie.get('i18next')

  useEffect(() =>{
    intervalRef.current = setInterval(()=>{
        let dateNow = new Date().getTime()

        let dateDiff = countDownDate - dateNow
    
        setDays(Math.floor(dateDiff / (1000 * 60 * 60 * 24)))
        setHours(Math.floor((dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))))
        setMinutes(Math.floor((dateDiff % (1000 * 60 * 60) / (1000 * 60))))
        setSeconds(Math.floor((dateDiff % (1000 * 60) / (1000))))
        setDiff(dateDiff)
    },1000)

    return () =>{
        clearInterval(intervalRef.current)
    }
},[])

if(diff === 0){
    clearInterval(intervalRef.current)
}
  return (
    <Event>
        <h4 language={language}>{t('Dont_Miss')}</h4>
        {language === 'en' ? <h3 language={language}>{t('Upcoming')} <span>{t('Events')}</span></h3> 
         :
         <h3 language={language}><span>{t('Events')}</span> {t('Upcoming')}</h3>}
        <Time>
          <Unit>
            <span>{days < 10 ? `0${days}` : days}</span>
            <span>{t('Days')}</span>
          </Unit>
          <Unit>
            <span>{hours < 10 ? `0${hours}` : hours}</span>
            <span>{t('Hours')}</span>
          </Unit>
          <Unit>
            <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
            <span>{t('Minutes')}</span>
          </Unit>
          <Unit>
            <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
            <span>{t('Seconds')}</span>
          </Unit>
        </Time>
    </Event>
  )
}

export default Events