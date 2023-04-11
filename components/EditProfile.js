import { StyleSheet, Text, View, Image, FlatList, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons";


const EditProfile = () => {
    const data = [
        { id: 1, header: "Name" },
        { id: 2, header: "Username" },
        { id: 3, header: "Website" },
        { id: 4, header: "Bio" },
    ]
    const headercomponent = () => {
        return (
            <View style={{ marginBottom: 20 }}>
                <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                    <Feather name="x" size={32} style={{ color: "black" }} />
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>Edit Profile</Text>
                    <Ionicons name="checkmark-sharp" size={32} color="black" />
                </View>
                <View style={{ alignItems: "center" }}>
                    <Image source={require("../assets/images/image4.jpg")} style={styles.circlectn} />
                    <TouchableOpacity><Text style={{ color: "skyblue" }}>Change profile photo</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
    const footercomponent = () => {
        return (
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity style={styles.lastbox}><Text style={{ color: 'skyblue' }}>Switch to professional account </Text></TouchableOpacity>
                <TouchableOpacity style={styles.lastbox}><Text style={{ color: 'skyblue' }}>Personal information setting</Text></TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.page}>
            <View style={{ marginBottom: 10 }} >
                <FlatList
                    ListHeaderComponent={headercomponent}
                    ListFooterComponent={footercomponent}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <Text style={{ marginTop: 10, color: "grey" }}>{item.header}</Text>
                                <View style={styles.flatbox} ><TextInput /></View>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "white",
        padding: 20,
        paddingTop: 40
    },
    circlectn: {
        height: 90,
        width: 90,
        borderRadius: 100,
        marginTop: 40
    },
    flatbox: {
        height: 40,
        borderBottomColor: "grey",
        borderLeftColor: "white",
        borderRightColor: "white",
        borderTopColor: "white",
        borderWidth: 1,
        marginTop: 10,
        justifyContent: "center"
    },
    lastbox: {
        height: 35,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: "#ddd",
        borderBottomColor: "#ddd",
        marginTop: 20,
        //alignItems: "center"
        justifyContent: "center"
    }

})