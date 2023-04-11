import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const List2 = () => {
    const data = [
        id = 1,
        id = 2,
        id = 3,
        id = 4,
        id = 5,
        id = 6,
        id = 7,
        id = 8,
        id = 9,
        id = 10,
        id = 11,
        id = 12,
    ]
    return (
        <View>
            <FlatList
                numColumns={3}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.box}>

                        </View>
                    )
                }}
            />
        </View>
    )
}

export default List2

const styles = StyleSheet.create({
    box: {
        height: 130,
        width: 130,
        backgroundColor: "#ddd",
        borderColor: "white",
        borderWidth: 1
    }
})