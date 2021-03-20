import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css';
import $ from 'jquery';

const Navbar = () => {
  function animation() {
    let tabsNewAmin = $('#globalNav');
    let activeItemNewAmin = tabsNewAmin.find('.active');
    let activeWidthNewAnimHeight = activeItemNewAmin.innerHeight();
    let activeWidthNewAnimWidth = activeItemNewAmin.innerWidth();
    let itemPosNewAnimTop = activeItemNewAmin.position();
    let itemPosNewAnimLeft = activeItemNewAmin.position();
    $('.hori-selector').css({
      top: itemPosNewAnimTop.top + 'px',
      left: itemPosNewAnimLeft.left + 'px',
      height: activeWidthNewAnimHeight + 'px',
      width: activeWidthNewAnimWidth + 'px',
    });
    $('#globalNav').on('click', 'li', function (e) {
      $('#globalNav ul li').removeClass('active');
      $(this).addClass('active');
      let activeWidthNewAnimHeight = $(this).innerHeight();
      let activeWidthNewAnimWidth = $(this).innerWidth();
      let itemPosNewAnimTop = $(this).position();
      let itemPosNewAnimLeft = $(this).position();
      $('.hori-selector').css({
        top: itemPosNewAnimTop.top + 'px',
        left: itemPosNewAnimLeft.left + 'px',
        height: activeWidthNewAnimHeight + 'px',
        width: activeWidthNewAnimWidth + 'px',
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on('resize', function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <nav className='navbar navbar-expand-lg navbar-bg'>
      <NavLink className='navbar-brand navbar-logo' to='/' exact>
        Syntax Pharmacy!
      </NavLink>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#globalNav'
        aria-controls='globalNav'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <i className='fas fa-bars text-white' />
      </button>

      <div className='collapse navbar-collapse' id='globalNav'>
        <ul className='navbar-nav ml-auto'>
          <div className='hori-selector'>
            <div className='left'></div>
            <div className='right'></div>
          </div>
          <li className='navbar-nav active'>
            <NavLink className='nav-link' to='/' exact>
              Home
            </NavLink>
          </li>
          <li className='navbar-nav'>
            <NavLink className='nav-link' to='/aboutus' exact>
              About
            </NavLink>
          </li>
          <li className='navbar-nav'>
            <NavLink className='nav-link' to='/services' exact>
              Services
            </NavLink>
          </li>
          <li className='navbar-nav'>
            <NavLink className='nav-link' to='/meetstaff' exact>
              Meet Staff
            </NavLink>
          </li>
          <li className='navbar-nav'>
            <NavLink className='nav-link' to='/contactus' exact>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
