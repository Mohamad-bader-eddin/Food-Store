import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainTitle from '../../Components/MainTitle/MainTitle'
import { Container } from '../../Style/Container'
import { Meals } from './Meals'
import { Box, Content, ListContent, Shuffle, PopupOverlay, PopupBox, CloseButton, PopupBoxContent, PopupBoxImage, PopupBoxInfo } from './MenuList.style'
import Spinner from '../../Components/Spinner/Spinner'
import { getMenu } from '../../Redux/Menu/menuAction'
import { useTranslation } from "react-i18next";
import jsCookie from 'js-cookie'
import { addCart, getCarts } from '../../Redux/Cart/CartAction'

const MenuList = () => {
  const [meal, setMeal] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [meals, setMeals] = useState(Meals)
  const dispatch = useDispatch()
  const menu = useSelector(state => state.menu)
  const { loading, menuList, error } = menu
  const { t } = useTranslation()
  const language = jsCookie.get('i18next')
  const { user } = useSelector(state => state.user)

  const handleFiltter = id => {
    const newMeals = Meals.map(item => {
      if (item.id === id) {
        item.active = true
        dispatch(getMenu(item.name))
      } else {
        item.active = false
      }
      return item
    })
    setMeals(newMeals)
  }

  const handleAddToCart = () =>{
    const newCart = {
      ...meal,
      quantity : quantity,
      user_email : user.email,
      user_name : user.displayName
    }
    dispatch(addCart(newCart))
    dispatch(getCarts(user.email))
    setMeal(null)
  }

  useEffect(() => {
    Meals.forEach( item => {
      if(item.active){
        dispatch(getMenu(item.name))
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <ListContent>
      <Container>
        <MainTitle text={t('Menu')} />
        <Shuffle>
          {
            meals.map(meal => (
              <li key={meal.id} className={meal.active ? 'active' : ''} onClick={() => handleFiltter(meal.id)}>{t(`${meal.name}`)}</li>
            ))
          }
        </Shuffle>
      </Container>
      <Content>
        {
          meal && <>
            <PopupOverlay />
            <PopupBox>
              <PopupBoxContent>
                <PopupBoxImage>
                  <img src={meal.image} alt='' />
                </PopupBoxImage>
                <PopupBoxInfo>
                  <div><span>{t('name')} : </span>{language === 'en' ? meal.name : meal.nameAr}</div>
                  <div><span>{t('description')} : </span> {language === 'en' ? meal.description : meal.descriptionAr}</div>
                  <div><span>{t('price')} : </span> {meal.price}$</div>
                  <div>
                    <span>{t('quantity')} : </span>
                    <input type="number" value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
                  </div>
                  <button onClick={handleAddToCart}>{t('add_to_cart')}</button>
                </PopupBoxInfo>
              </PopupBoxContent>
              <CloseButton onClick={() => setMeal(null)}>X</CloseButton>
            </PopupBox>
          </>
        }
        {
          loading ? (<Spinner />) :
            error ? (<div>{error}</div>) :
            menuList.map(item => <Box key={item.id}>
                <img src={item.image} alt="" />
                <div style={{flexBasis : '30%'}}>
                  <h1>{language === 'en' ? item.name : item.nameAr}</h1>
                  <p>{language === 'en' ? item.description : item.descriptionAr}</p>
                </div>
                <span onClick={() => setMeal(item)}>{item.price}$</span>
              </Box>)
        }
      </Content>
    </ListContent>
  )
}

export default MenuList