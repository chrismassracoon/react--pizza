import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ pizzasCount, setCurPage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => setCurPage(e.selected + 1)}
      pageRangeDisplayed={5}
      pageCount={Math.ceil(pizzasCount / 6)}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
