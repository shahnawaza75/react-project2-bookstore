import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/Categories';
import styles from './styles/categories.module.css';

const Categories = () => {
  const getStatus = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const getStatus2 = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <button type="button" className={styles.check_status} onClick={getStatus2}>Check Status</button>
      <h2>{getStatus.categories[0]}</h2>
    </>
  );
};

export default Categories;
