import React, { Component } from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { Button, Layout, Card } from "@ui-kitten/components";

export default class ProductDetails extends React.Component {
	render() {
		return (
			<ScrollView>
				<View style={{ flex: 1 }}>
					<View
						style={{ paddingLeft: 35, paddingRight: 35, paddingBottom: 12 }}
					>
						<Image
							source={{
								uri:
									"https://upload.wikimedia.org/wikipedia/en/9/99/How_to_Train_Your_Dragon_Poster.jpg"
							}}
							style={{ width: 300, height: 400, borderRadius: 50 }}
						/>
					</View>

					<View style={{ alignItems: "center" }}>
						<Text style={{ fontWeight: "600", fontSize: 44 }}>
							Product Name
						</Text>
					</View>

					<View style={{ alignItems: "center" }}>
						<Text style={{ fontWeight: "600", fontSize: 44 }}>S/N</Text>
					</View>

					<View>
						<Text> How to train your dragon</Text>
						<Text>jh jh v vksbvsv bshvsvs vk sfvsv</Text>
					</View>
					<View style={{ flexDirection: "row" }}>
						<Button
							style={styles.hashtagButton}
							size="small"
							appearance="outline"
						>
							FILLED
						</Button>
						<Button
							style={styles.hashtagButton}
							size="small"
							appearance="outline"
						>
							OUTLINE
						</Button>
						<Button
							style={styles.hashtagButton}
							size="small"
							appearance="outline"
						>
							GHOST
						</Button>
						<View style={{ flex: 1 }}></View>
					</View>
				</View>
			</ScrollView>
		);
	}
}

export const styles = StyleSheet.create({
	Container: {
		backgroundColor: "#E5E8E8"
	},
	imageStyle: {
		height: "100%",
		width: "100%"
	},
	hashtagContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		paddingVertical: 4,
		paddingHorizontal: 4
	},
	hashtagButton: {
		marginVertical: 4,
		marginHorizontal: 4,
		borderRadius: 45
	}
});
