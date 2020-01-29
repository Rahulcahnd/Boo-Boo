import React from "react";
import { StyleSheet, Image } from "react-native";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";

const Settings = () => (
	<Image source={require("../common/icons/settings.png")} />
);

const Scan = () => <Image source={require("../common/icons/scanner.png")} />;

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
