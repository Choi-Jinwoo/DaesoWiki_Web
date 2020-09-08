import React from 'react';
import logo from './logo.png';

import './TitleBox.scss'
import { BsList } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';

const TitleBox = () => {
  return (
    <div className='titleBox'>
      <div className='topBar'>
        <img src={logo} alt="" />
        <div className='searchBox'>
          <FiSearch className='searchIcon' size='20px' color='#2026A2' />
          <input type="text" />
        </div>
      </div>

      <div className='listBox'>
        <BsList size='24px' />
        <span>메인</span>
        <span>1학년</span>
        <span>2학년</span>
        <span>3학년</span>
        <span>개발자소개</span>
      </div>
    </div>
  )
}

export default TitleBox;
