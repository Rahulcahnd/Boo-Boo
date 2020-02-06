import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
	productContainer: {
		flex: 1,
		height: height,
		width: width
	},
	imageContainer: {
		alignItems: "center",
		opacity: 2
	},
	imageStyles: {
		width: 200,
		height: 300,
		borderRadius: 20,
		opacity: 2,
		resizeMode: "contain"
	},
	buttonGroup: {
		flexDirection: "row",
		height: height * 0.1
	},
	buttonStyles: {
		paddingLeft: 14,
		paddingRight: 14
	}
});
