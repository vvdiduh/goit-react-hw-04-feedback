import PropTypes from 'prop-types';
import React from 'react';
import './Statistcs.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h2> Статистика </h2>
    <ul>
      <li>
        <p>Неймовірно: {good}</p>
      </li>
      <li>
        <p>Добре: {neutral}</p>
      </li>
      <li>
        <p>Можна краще: {bad}</p>
      </li>
      <li>
        <p>Кількість відгуків: {total}</p>
      </li>
      <li>
        <p>Кількість позитивних відгуків: {positivePercentage} %</p>
      </li>
    </ul>
  </>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
