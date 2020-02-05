import React from "react";
import { SQLite } from "expo";
import { View, TouchableOpacity } from "react-native";
import { Text } from "@ui-kitten/components";
import { FlatListProps } from "./FlatListProps";
import { FlatListState } from "./FlatListState";


const db : SQLite.SQLiteDatabase = SQLite.openDatabase("mydb.db");


export default class SqlTest extends React.Component<FlatListProps,FlatListState> {
  
  
	constructor(props:FlatListProps) {
    super(props);
    
		this.state = {
			FlatListItems: []
		};
  }
		db.transaction((tx: any) :any => {
			tx.executeSql(
				"SELECT * FROM table_user",
				[],
				(
					_tx: any,
					results: { rows: { length: number; item: (arg0: number) => any } }
				) => {
					var temp = [];
					for (let i = 0; i < results.rows.length; ++i) {
						temp.push(results.rows.item(i));
					}
					this.setState({
						FlatListItems: temp
					});
				}
			);
    });
    
  }
	

