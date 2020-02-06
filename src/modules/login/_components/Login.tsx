import React from "react";
import { View, KeyboardAvoidingView, Image } from "react-native";
import { LoginState } from "../_types/LoginState";
import { LoginProps } from "../_types/LoginProps";
import { Input, Text, Button } from "@ui-kitten/components";
import { styles } from "../_styles/Styles";

export default class Login extends React.Component<LoginState, LoginProps> {
	constructor(props: LoginProps) {
		super(props);
		this.state = {
			userID: "",
			password: ""
		};
	}

	private onUserIDChange = (userID: string): void => {
		this.setState({ userID });
	};

	private onPasswordChange = (password: string): void => {
		this.setState({ password });
	};
	private isValidInputCode = () => {
		let expr2 = /\d{6}/;
		return expr2.test(this.state.password) ? "success" : "danger";
	};

	private isValidInputValue = () => {
		let expr2 = /\d{10}/;
		return expr2.test(this.state.userID) ? "success" : "danger";
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Image
					style={styles.headerContainer}
					source={{
						uri:
							"https://www.jakpost.travel/wimages/large/39-399602_airport-sunset-wallpaper-hd-plane.jpg"
					}}
				/>
				<KeyboardAvoidingView style={styles.container}>
					<View>
						<Text category="s1" status="control" style={styles.text1}>
							Sign in to your account
						</Text>
					</View>
					<View>
						<Input
							style={styles.input}
							placeholder="User ID"
							value={this.state.userID}
							status={this.isValidInputValue()}
							onChangeText={this.onUserIDChange}
							label="User ID"
							keyboardType="numeric"
						/>
						<Input
							style={styles.input1}
							placeholder="Password"
							value={this.state.password}
							status={this.isValidInputCode()}
							onChangeText={this.onPasswordChange}
							secureTextEntry={true}
							label="Password"
							keyboardType="numeric"
						/>

						<Button
							style={styles.button1}
							status="control"
							size="large"
							onPress={() => this.props.navigation.navigate("Home")}
						>
							Log In
						</Button>
					</View>
				</KeyboardAvoidingView>
			</View>
		);
	}
}
