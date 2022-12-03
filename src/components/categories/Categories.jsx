const Categories = ({ value, onClickCategory }) => {
  const categories = ['Всі', "М'ясні", 'Вегетаріанські', 'Гриль', 'Гострі', 'Закриті'].map(
    (item, i) => {
      return (
        <li key={i} onClick={() => onClickCategory(i)} className={value === i ? 'active' : ''}>
          {item}
        </li>
      );
    },
  );
  return (
    <div className="categories">
      <ul>{categories}</ul>
    </div>
  );
};

export default Categories;
