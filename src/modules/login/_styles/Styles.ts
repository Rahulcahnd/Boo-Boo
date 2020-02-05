import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 1,
	},

	text: {
		fontSize: 35,
		textAlign: 'center',
		alignItems: 'flex-end',
		color: 'black',
		paddingTop: 24,
		paddingBottom: 15,

	},
	text1: {
		fontSize: 25,
		textAlign: 'center',
		alignItems: 'flex-end',
		color: 'black',
		paddingTop: 24,
		paddingBottom: 15,

	},
	headerContainer: {
		justifyContent: "center",
		alignItems: "center",
		minHeight: 216
	},
	logInLabel: {
		marginTop: 16
	},
	formContainer: {
		flex: 1,
		marginTop: 32,
		paddingHorizontal: 16
	},
	logInButton: {
		marginHorizontal: 16
	},
	passwordInput: {
		marginTop: 16
	},
	input: {
		width: '90%',
		marginTop: 50,

		opacity: 1,
		marginVertical: 4,
		textShadowColor: 'white'
	},
	input1: {
		width: '90%',
		marginTop: 30,
		marginBottom: 10,
		opacity: 0.6,
		marginVertical: 4,
		textShadowColor: 'white'
	},
	button: {
		flex: 1,
		paddingVertical: 4,
		paddingHorizontal: 4,
		paddingTop: 10,
		alignItems: 'center'
	},
	button1: {
		marginVertical: 8,
		marginHorizontal: 8,
	},


});
