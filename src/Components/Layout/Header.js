import {Fragment} from 'react';
import mealsImage from '../../assets/mealsImage.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import HeaderMyOrder from './HeaderMyOrder';
const Header = props =>{
    return <Fragment>
        <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderMyOrder showOrders={props.onShowOrders}/>
        <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="a table full of delicious food" className={classes['main-image']}/>
        </div>
        </div>
    </Fragment>
}

export default Header;