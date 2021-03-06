import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => (
    <ul
        className={classes.NavigationItems}
    >
        <NavigationItem
            exact
            link="/"
        >
            Burger Builder
        </NavigationItem>
        <NavigationItem
            link="/orders"
        >
            Orders
        </NavigationItem>
        <NavigationItem
            link="/checkout"
        >
            Checkout
        </NavigationItem>
        <NavigationItem
            link="/auth"
        >
            Authenticate
        </NavigationItem>
    </ul>
)

export default NavigationItems