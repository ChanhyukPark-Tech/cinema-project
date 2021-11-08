import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MovieCard.module.css';

const MovieCard = ({ movie, number, theme }) => {
  return (
    <div
      className={`${classes.card} ${theme === 'light' ? classes.light : ''}`}
    >
      <div className={classes.imgContainer}>
        <img src={movie.PosterURL} alt="poster" />
        <em className={classes.index}>{number}</em>
        <div className={classes.hoverLayer}>
          <a href="##">예매하기</a>
          <Link
            to={`/movie/movieDetailPage?movie=${movie.RepresentationMovieCode}`}
          >
            상세정보
          </Link>
        </div>
      </div>
      <div className={classes.info}>
        <p className={classes.title}>{movie.movieNm}</p>
        <div className={classes.subInfo}>
          {movie.DDay > 0 ? (
            <span className={classes.dday}>{`D-${movie.DDay}`}</span>
          ) : (
            <span className={classes.star}>
              <span className={classes.icon}>
                <i className="fas fa-star"></i>
              </span>{' '}
              <span>{movie.RepresentationMovieCode}</span>
            </span>
          )}

        </div>
      </div>
    </div>
  );
};

export default MovieCard;
