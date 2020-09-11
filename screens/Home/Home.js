import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Home = ({ navigation }) => (
  <View style={styles.wrapper}>
    <Text>Projects</Text>
    <Button onPress={() => navigation.navigate('Projects')} title="Projects" />
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

Home.propTypes = {
  navigation: PropTypes.object,
}

export default Home
