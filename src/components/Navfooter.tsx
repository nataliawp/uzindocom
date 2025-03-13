import React from 'react'

function Navfooter() {
  return (
    <nav className=' text-white w-[80%] flex justify-between'>
        <ul className='flex flex-col gap-10'>
            <li>О нас</li>
            <li>Контакты</li>
        </ul>
        <ul className='flex flex-col gap-10'>
            <li>Регистрация мероприятия</li>
            <li>Спикеры</li>
            <li>Программа</li>
            <li>Партнерство</li>
        </ul>
    </nav>
  )
}

export default Navfooter