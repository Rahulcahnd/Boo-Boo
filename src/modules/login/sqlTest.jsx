import React from "react";
import { SQLite } from "expo-sqlite";

const db = SQLite.openDatabase("mydb.db");

add(text) {
  if (text === null || text === "") {
    return false;
  }

  db.transaction(
    tx => {
      tx.executeSql("insert into items (done, value) values (0, ?)", [text]);
      tx.executeSql("select * from items", [], (_, { rows }) =>
        console.log(JSON.stringify(rows))
      );
    },
    null,
    this.update
  );
}
