import React from "react";
import ServiceHistoryListProps from "../_types/ServiceHistoryListProps";
import ServiceHistoryListComponent from "./ServiceHistoryListComponent";
import { List } from "@ui-kitten/components";

const _renderItem = ({
	item
}: {
	item: ServiceHistoryListProps;
}): React.ReactElement => {
	return <ServiceHistoryListComponent {...item} />;
};

export default function ServiceHistoryListContainer() {
	const data = [
		{
			ServiceDate: "24 Jan",
			ServicedBy: "Boo Boo",
			ServiceDiscription: "The Product which gives peace of mind is DEAD!!! "
		},
		{
			ServiceDate: "24 Jan",
			ServicedBy: "Boo Boo",
			ServiceDiscription: "The Product which gives peace of mind is DEAD!!! "
		}
	];

	return <List data={data} renderItem={_renderItem} horizontal={true} />;
}
