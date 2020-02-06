import React, { Component } from "react";
import {
	ScrollView,
	View,
	Text,
	Image,
	StyleSheet,
	Button,
	Dimensions,
	TextProps,
	ImageBackground,
	Alert
} from "react-native";
import { Product } from "../_types/ProductProps";

import { styles } from "../_styles/Product_styles";
import ServiceHistoryListContainer from "./ServiceHistioryListCotainer";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const prodprops = {
	url: "https://p.globalsources.com/IMAGES/PDT/BIG/985/B1156179985.jpg",
	productName: "box1",
	serialNumber: "17627344"
};

export default class ProductScreen extends React.Component<Product> {
	constructor(props: Product) {
		super(props);
	}

	render() {
		return (
			<ScrollView>
				<View style={styles.productContainer}>
					<ImageBackground
						style={{ width: "100%", height: "100%", opacity: 1 }}
						source={{}}
					>
						<View style={{ width: width, alignItems: "center" }}>
							<Image
								source={{
									uri:
										"https://p.globalsources.com/IMAGES/PDT/BIG/985/B1156179985.jpg"
								}}
								style={styles.imageStyles}
							/>
						</View>

						<View
							style={{
								alignItems: "center",
								flexDirection: "column",
								height: height * 0.15
							}}
						>
							<View>
								<Text style={{ fontWeight: "600", fontSize: 44 }}>Box1</Text>
							</View>
							<View>
								<Text style={{ fontWeight: "300", fontSize: 44 }}>1</Text>
							</View>
						</View>

						<ScrollView
							style={styles.buttonGroup}
							horizontal={true}
							showsVerticalScrollIndicator={false}
						>
							<View style={styles.buttonStyles}>
								<Button
									title="Manufacture date"
									onPress={() => console.log()}
								/>
							</View>
							<View style={styles.buttonStyles}>
								<Button title="Product type" onPress={() => console.log()} />
							</View>
							<View style={styles.buttonStyles}>
								<Button
									title="Recent Service date"
									onPress={() => console.log()}
								/>
							</View>
						</ScrollView>

						<View>
							<Text style={{ fontSize: 24 }}>Service History:</Text>
						</View>

						<ScrollView
							horizontal={true}
							showsVerticalScrollIndicator={false}
							style={{ height: height * 0.3 }}
						>
							<ServiceHistoryListContainer />
						</ScrollView>
						<View style={{ height: height * 0.1, alignItems: "center" }}>
							<Button
								title="update"
								onPress={() => Alert.alert("Update pressed")}
							/>
						</View>
					</ImageBackground>
				</View>
			</ScrollView>
		);
	}
}
