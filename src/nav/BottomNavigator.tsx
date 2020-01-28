import React from "react";
import { StyleSheet, Image } from "react-native";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";

const Settings = () => (
	<Image
		source={{
			uri:
				"https://akveo.github.io/eva-icons/outline/png/128/settings-2-outline.png"
		}}
	/>
);

const Scan = () => (
	<Image
		source={{
			uri: "https://static.thenounproject.com/png/860338-200.png"
		}}
	/>
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
			<BottomNavigationTab icon={Scan} />
			<BottomNavigationTab icon={Settings} />
		</BottomNavigation>
	);
};

const styles = StyleSheet.create({
	bottomNavigation: { backgroundColor: "white" },
	indicator: { backgroundColor: "blue" }
});
