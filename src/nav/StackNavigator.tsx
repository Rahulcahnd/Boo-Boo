import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Settings from "../modules/settings/_components/Settings";
import Login from "../modules/login/_components/Login";

const Navigator = createStackNavigator(
	{
		Login: Login,
		Settings: Settings
	},
	{
		headerMode: "none"
	}
);

export const StackNavigator = createAppContainer(Navigator);

export default StackNavigator;
