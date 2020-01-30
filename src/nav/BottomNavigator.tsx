import React from "react";
import { StyleSheet, Image } from "react-native";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";

const Settings = () => (
	<Image source={require("../../assets/icons/settings.png")} />
);

const Scanner = () => (
	<Image source={require("../../assets/icons/scanner.png")} />
);

export const BottomNavigator = () => {
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	return (
		<BottomNavigation
			style={styles.bottomNavigation}
			indicatorStyle={styles.indicator}
			selectedIndex={selectedIndex}
			onSelect={setSelectedIndex}
		>
			<BottomNavigationTab icon={Scanner} />
			<BottomNavigationTab
				icon={Settings}
				onPress={() => this.props.navigation.navigate("Settings")}
			/>
		</BottomNavigation>
	);
};

const styles = StyleSheet.create({
	bottomNavigation: { backgroundColor: "white" },
	indicator: { backgroundColor: "blue" }
});
