import React from 'react'
import { View, Button, Text } from 'react-native'

const Home = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Projects</Text>
        <Button onPress={() => navigation.navigate("Projects")} title="Projects" />
    </View>
)

export default Home