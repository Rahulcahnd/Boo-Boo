import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Settings from "../modules/settings/_components/Settings";
import Login from "../modules/login/_components/Login";
import Home from "../modules/home/_components/Home";
import ProductScreen from "../modules/product_screen/_components/ProductScreen";
import AppSplash from "../modules/app_splash/AppSplash";
import { BottomNavigator } from "./BottomNavigator";
import Scanner from "../modules/scanner/Scanner";

const Navigator = createStackNavigator(
	{
		Login: Login,
		Settings: Settings,
		Home: Home,
		Product: ProductScreen,
		Cache: AppSplash,
		BottomTabNavigator: BottomNavigator,
		Scanner: Scanner
	},
	{
		headerMode: "none",
		initialRouteName: "Scanner"
	}
);

export const StackNavigator = createAppContainer(Navigator);

export default StackNavigator;
