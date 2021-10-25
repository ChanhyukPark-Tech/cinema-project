import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const Header = ({ theme }) => {
  return (
    <header
      className={`${classes.header} ${
        theme === 'light' ? `${classes.light}` : ''
      }`}
    >
      <div className="center">
        <div className={classes.upper}>
          <h1 className={classes.logo}>
            <Link to="/">CEO cinema</Link>
          </h1>
          <ul className={`${classes.menu} ${classes.menu1}`}>
            <li>
              <a href="##">
                <span>
                  <i className="fab fa-facebook"></i>
                </span>{' '}
                새싹마켓
              </a>
            </li>
          </ul>
          <ul className={`${classes.menu} ${classes.menu2}`}>
            <li>
              <a href="##">고객센터</a>
            </li>
            <li>
              <a href="##">로그인</a>
            </li>
          </ul>
        </div>
        <nav className={classes.navigation}>
          <ul className={classes.links}>
            <li>
              <a href="/ticketing">영화 예매</a>
            </li>
            <li>
              <Link to="/movie">영화</Link>
            </li>
            <li>
              <a href="##">상영 시간표</a>
            </li>
            <li>
              <a href="##">이벤트</a>
            </li>
          </ul>
          <ul className={`${classes.menu} ${classes.menu3}`}>
            <li>
              <a href="##">
                <span>
                  <i className="fas fa-user"></i>
                </span>{' '}
                회원가입
              </a>
            </li>
            <li>
              <a href="##">
                <span>
                  <i className="fas fa-bookmark"></i>
                </span>{' '}
                비회원 예매
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
