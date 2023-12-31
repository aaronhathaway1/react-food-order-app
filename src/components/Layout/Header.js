import React from 'react';

import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCardButton from './HeaderCartButton';

const Header = (props) => {
	return (
		<>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCardButton />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt='A variety of meals prepared on a table' />
			</div>
		</>
	);
};

export default Header;
