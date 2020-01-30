import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Settings from "../modules/settings/_components/Settings";
import Login from "../modules/login/_components/Login";
import Home from "../modules/home/_components/Home";
import ProductScreen from "../modules/product_screen/_components/ProductScreen";

const Navigator = createStackNavigator(
	{
		Login: Login,
		Settings: Settings,
		Home: Home,
		Product: ProductScreen
	},
	{
		headerMode: "none"
	}
);

export const StackNavigator = createAppContainer(Navigator);

export default StackNavigator;
