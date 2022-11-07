import React from 'react';
import styles from './Search.module.scss';

export const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <svg className={styles.icon} id="Layer_1" version="1.1" viewBox="0 0 64 64">
        <g>
          <g id="Icon-Search" transform="translate(30.000000, 230.000000)">
            <path
              d="M-2.3-182.9c-10.7,0-19.5-8.7-19.5-19.5c0-10.7,8.7-19.5,19.5-19.5s19.5,8.7,19.5,19.5     C17.1-191.6,8.4-182.9-2.3-182.9L-2.3-182.9z M-2.3-219c-9.2,0-16.7,7.5-16.7,16.7c0,9.2,7.5,16.7,16.7,16.7s16.7-7.5,16.7-16.7     C14.3-211.5,6.8-219-2.3-219L-2.3-219z"
              id="Fill-1"
            />
            <polyline
              id="Fill-2"
              points="23.7,-174.2 10.1,-187.7 12.3,-189.9 25.8,-176.3 23.7,-174.2    "
            />
          </g>
        </g>
      </svg>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы..."
        type="text"
      />
      {searchValue && <svg onClick={() => setSearchValue('')}
        className={styles.iconclose}
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        height="200"
        id="Layer_1"
        viewBox="0 0 200 200"
        width="200">
        <title />
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
      </svg>}
    </div>
  );
};
