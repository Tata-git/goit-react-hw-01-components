import PropTypes from 'prop-types';
import css from './friend.module.css';

export const Friend = ({ isOnline, avatar, name }) => {
  const status = isOnline ? css.online : css.offline;
  return (
    <>
      <span className={status}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
