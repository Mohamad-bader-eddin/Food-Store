import React from 'react'
import { Tippy } from './Tooltip.style'
import jsCookie from 'js-cookie'

const Tooltip = (props) => {
  const language = jsCookie.get('i18next')
  return (
        <Tippy language= {language}>{props.children}</Tippy>
  )
}

export default Tooltip