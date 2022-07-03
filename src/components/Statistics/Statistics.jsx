import css from './data.module.css';
import PropTypes from 'prop-types';
import { getRandomHexColor } from './randomColor';

export const Statistics = ({ stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.listle}>
        {stats.map(({ label, percentage, id }) => {
          return (
            <li className={css.item} key={id} style={{backgroundColor: getRandomHexColor()}}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
