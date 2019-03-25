import React from 'react'

import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngriedient'

const Burger = props => {

    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            console.log(props.ingredients)
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <BurgerIngredient
                        key={igKey + i}
                        type={igKey}
                    />
                })
        })
    return (
        <div
            className={classes.Burger}
        >
            <BurgerIngredient
                type="bread-top"
            />
            {transformedIngredients}
            <BurgerIngredient
                type="bread-bottom"
            />
        </div>
    )
}

export default Burger