import React from "react";
import { StyleSheet, View } from "react-native";
import { ApplicationProvider, Text } from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { BottomNavigator } from "./src/nav/BottomNavigator";

export default function App() {
	return (
		<ApplicationProvider mapping={mapping} theme={lightTheme}>
			<View style={styles.container}>
				<Text>Open up App.tsx to start working on your app!</Text>
			</View>
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
