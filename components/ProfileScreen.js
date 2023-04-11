import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { highlight } from "../components/profiledata";
import { FontAwesome5 } from '@expo/vector-icons';
import TopTab from "../components/TopTab";


const Profile = ({ navigation }) => {

  return (
    <View style={styles.firstctn}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18, }}>mr_peabody</Text>
            <View style={{ flex: 1 }}>
              <AntDesign name="down" size={15} color="grey" />
            </View>
            <Feather name="plus-square" size={22} color="black" />
            <Entypo name="menu" size={26} color="black" />
          </View>
        </View>
        <View style={{ justifyContent: "space-around", flexDirection: "row", alignItems: "center" }}>
          <View>
            <Image source={require("../assets/images/image5.jpg")} style={styles.circlectn} />
            <Text style={{ fontWeight: "bold" }}>Mr peabody</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "800" }}>458</Text>
            <Text style={{ fontWeight: "400" }}>Posts</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "800" }}>3.6m</Text>
            <Text>Followers</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "800" }}>35</Text>
            <Text>Following</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={styles.Eprofile} >
          <Text style={{ fontWeight: "500" }}>Edit Profile</Text>
        </TouchableOpacity>
        <View>
          <Text style={{ marginTop: 20, fontWeight: "400" }}>Story Highlights</Text>
          <View style={{ marginTop: 15, flexDirection: "row" }}>
            <View style={styles.outlineclc}>
              <FontAwesome5 name="plus" size={26} color="black" />
            </View>
            <FlatList
              data={highlight}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <View style={styles.flatcircle}>

                  </View>
                )
              }}
            />
          </View>
        </View>
      </View>
      <TopTab />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  firstctn: {
    flex: 1,
    backgroundColor: "white"
  },
  container: {
    //flex: 1,
    padding: 20,
    paddingTop: 40,

  },
  circlectn: {
    height: 80,
    width: 80,
    borderRadius: 100,
    marginTop: 9
  },
  Eprofile: {
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 4,
    marginTop: 25,
  },
  flatcircle: {
    height: 53,
    width: 53,
    borderRadius: 50,
    backgroundColor: "#ddd",
    marginHorizontal: 5
  },
  outlineclc: {
    height: 55,
    width: 55,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: "grey",
    alignItems: "center",
    justifyContent: "center"


  }
});
