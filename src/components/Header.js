import React from 'react'
import logo from '../img/logo.svg'
import '../components/css/style/header.css'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <div className='logo-container'>
          <img src={logo} alt="Логотип Прицепные Решения" className='logo' />
        </div>

        <ul className='nav'>
          <li>О производстве</li>
          <li>Каталог</li>
          <li>Техника в наличии</li>
          <li>Лизинг</li>
          <li>Запчасти</li>
          <li>Контакты</li>
        </ul>

        <div className='contacts'>
          <span className='number'>8 888 888-88-88</span>
          <div className='feedback'>
            <span>Заказать звонок</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="50" height="50" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <g transform="translate(7, 6), scale(0.7)">
                <path d="M0 0h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </g>
            </svg>


          </div>
        </div>
      </div>

      
    </header>
  )
}
