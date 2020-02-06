import React from "react";
import ServiceHistoryListProps from "../_types/ServiceHistoryListProps";
import { View, Text } from "react-native";
//import { Text } from "@ui-kitten/components";

export default class ServiceHistoryListComponent extends React.Component<
	ServiceHistoryListProps
> {
	constructor(props: ServiceHistoryListProps) {
		super(props);
	}

	render() {
		return (
			<View
				style={{
					width: 350,
					padding: 5,
					marginVertical: 8,
					marginHorizontal: 16,
					borderWidth: 4,
					opacity: 1,
					borderRadius: 10
				}}
			>
				<Text style={{ fontSize: 34 }}>{this.props.ServiceDate}</Text>
				<Text style={{ fontSize: 34 }}>{this.props.ServicedBy}</Text>
				<Text style={{ fontSize: 20 }}>{this.props.ServiceDiscription}</Text>
			</View>
		);
	}
}
