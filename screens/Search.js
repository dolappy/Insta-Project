import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Search = () => {
  return (
    <View styles={styles.container}>
      <Text>Search</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff",
  },
});
