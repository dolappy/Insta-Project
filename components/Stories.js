import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Stories = () => {
  const storiesData = [
    {
      id: 1,
      image: require("../assets/images/image1.jpg"),
      name: "favour",
    },
    {
      id: 2,
      image: require("../assets/images/image2.jpg"),
      name: "story",
    },
    {
      id: 3,
      image: require("../assets/images/image3.jpg"),
      name: "David",
    },
    {
      id: 4,
      image: require("../assets/images/image3.jpg"),
      name: "dolapo",
    },
    {
      id: 5,
      image: require("../assets/images/image4.jpg"),
      name: "damola",
    },
    {
      id: 6,
      image: require("../assets/images/image5.jpg"),
      name: "favour",
    },
  ];
  return (
    <ScrollView
      horizontal={true}
      style={{ paddingHorizontal: 10 }}
      showsHorizontalScrollIndicator={false}
    >
      {storiesData.map((data, index) => {
        return (
          <View key={index}>
            <View style={styles.container}>
              <Image
                source={data.image}
                style={{ height: 62, width: 62, borderRadius: 100 }}
              />
              {data.id == 1 ? (
                <View style={styles.iconAddCtn}>
                  <AntDesign name="pluscircle" size={14} color="#fff" />
                </View>
              ) : null}
            </View>
            <Text style={{ fontSize: 14, color: "#000", textAlign: "center" }}>
              {data.name}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 70,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "purple",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconAddCtn: {
    height: 20,
    width: 20,
    borderRadius: 100,
    backgroundColor: "blue",
    position: "absolute",
    bottom: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
