import React from 'react';

import Burger from '../../../components/Burger/Burger';
import classes from './CheckoutSummary.css';
import Button from '../../../components/UI/Button/Button';

const checkoutSummary = (props) => {
    return(
        <div className={classes.CheckoutSummary} >
            <h1>We Hope its tastes well!</h1>
            <div style={{width: '100%', margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger"
                clicked >CANCEL</Button>
            <Button 
                btnType="Success"
                clicked>CONTINUE</Button>
        </div>
    );

}

export default checkoutSummary;