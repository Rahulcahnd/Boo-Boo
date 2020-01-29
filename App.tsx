import React from "react";
import { StyleSheet, View } from "react-native";
import { ApplicationProvider, Text } from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { BottomNavigator } from "./src/nav/BottomNavigator";
import StackNavigator from "./src/nav/StackNavigator";

export default function App() {
	return (
		<ApplicationProvider mapping={mapping} theme={lightTheme}>
			<StackNavigator />
			<BottomNavigator />
		</ApplicationProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
