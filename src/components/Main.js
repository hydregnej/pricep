import React from 'react'
import '../components/css/style/main.css'
import WhatsApp from '../img/icons/WhatsApp.svg'
import Telegram from '../img/icons/telegram.svg'


export default function Main() {
  return (
    <main>
      <div className='container__box'>
        <div className='header-part__item'>
          <h1>Производство прицепной <br />техники</h1>
          <ul>
            <li>✔ Полный производственный цикл</li>
            <li>✔ Использование высокопрочных сталей S700MC, W600QL</li>
            <li>✔ Расширенная гарантия. Техника в наличии</li>
          </ul>

        </div>

        <div className='main-footer'>
          <div className='main-social'>
            <span>Мы доступны в:</span>
            <div className='icons'>
              <img src={WhatsApp} alt="WhatsApp" className='WhatsApp' />
              <span>WhatsApp</span>
              <img src={Telegram} alt="Telegram" className='Telegram' />
              <span>Telegram</span>
            </div>
          </div>
          
          <div className='arrow-down'>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M18 13l-6 6" />
                <path d="M6 13l6 6" />
              </svg>
            </div>

        </div>

      </div>
    </main>
  )
}
