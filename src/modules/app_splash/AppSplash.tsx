import { Asset } from "expo-asset";
import { AppLoading, SQLite } from "expo";
import { AppSplashProps } from "./_types/AppSplashProps";
import { AppSplashState } from "./_types/AppSplashState";
import Login from "../login/_components/Login";
import React from "react";
import { BottomNavigator } from "../../nav/BottomNavigator";
import { StackNavigator } from "../../nav/StackNavigator";
import { View, Text } from "react-native";

function cacheImages(images: any) {
	return images.map((image: string) => {
		if (typeof image === "string") {
			return Image.prefetch(image);
		} else {
			return Asset.fromModule(image).downloadAsync();
		}
	});
}

export default class AppSplash extends React.Component<
	AppSplashProps,
	AppSplashState
> {
	constructor(props: AppSplashState) {
		super(props);
		this.state = {
			isReady: false
		};
	}

	async _loadAssetsAsync() {
		const imageAssets = cacheImages([
			require("../../../assets/icons/settings.png"),
			require("../../../assets/icons/scanner.png")
		]);
		await Promise.all([...imageAssets]);
	}
	render() {
		if (!this.state.isReady) {
			return (
				<AppLoading
					startAsync={this._loadAssetsAsync}
					onFinish={() => this.setState({ isReady: true })}
					onError={console.warn}
				/>
			);
		}

		return <View />;
	}
}
