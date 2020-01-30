import React from "react";
import { View, KeyboardAvoidingView, ImageBackground } from "react-native";
import { LoginState } from "../_types/LoginState";
import { LoginProps } from "../_types/LoginProps";
import { Input, Text, Button } from "@ui-kitten/components";

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

	render() {
		return (
			<ImageBackground
				style={{ flex: 1 }}
				source={{
					uri:
						"https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
				}}
			>
				<KeyboardAvoidingView>
					<View>
						<Text category="h1" status="control">
							Hello
						</Text>
						<Text category="s1" status="control">
							Sign in to your account
						</Text>
					</View>
					<View>
						<Input
							placeholder="User ID"
							value={this.state.userID}
							onChangeText={this.onUserIDChange}
							label="User ID"
							keyboardType="numeric"
						/>
						<Input
							placeholder="Password"
							value={this.state.password}
							onChangeText={this.onPasswordChange}
							secureTextEntry={true}
							label="Password"
							keyboardType="numeric"
						/>

						<Button
							status="control"
							size="large"
							onPress={() => this.props.navigation.navigate("Home")}
						>
							Log In
						</Button>
					</View>
				</KeyboardAvoidingView>
			</ImageBackground>
		);
	}
}
