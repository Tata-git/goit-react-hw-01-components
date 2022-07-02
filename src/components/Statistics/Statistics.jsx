// import React from 'react';
import css from './data.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ stats }) => {
  // console.log(stats);
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <div>
        <ul className={css.listle}>
          {stats.map(({ label, percentage, id }) => {
            return (
              <li className={css.item} key={id}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

