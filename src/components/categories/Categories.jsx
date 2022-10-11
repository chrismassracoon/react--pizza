import { useState } from "react";

const Categories = () => {
	const [activeCategorie, setActiveCategorie] = useState(0);
	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'].map((item,i) => {
		return <li key={i} onClick={() => setActiveCategorie(i)} className={activeCategorie === i ? 'active' : ''}>{item}</li>
	});
	return (
		<div className="categories">
              <ul>
                {categories}
              </ul>
            </div>
	)
}

export default Categories;