import React from "react";
import ServiceHistoryListProps from "../_types/ServiceHistoryListProps";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";

export default class ServiceHistoryListComponent extends React.Component<
	ServiceHistoryListProps
> {
	constructor(props: ServiceHistoryListProps) {
		super(props);
	}

	render() {
		return (
			<View style={{ padding: 20, marginVertical: 8, marginHorizontal: 16 }}>
				<Text>{this.props.ServiceDate}</Text>
				<Text>{this.props.ServicedBy}</Text>
				<Text>{this.props.ServiceDiscription}</Text>
			</View>
		);
	}
}
