import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Home = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate('Projects')}
          title="Projects"
          style={styles.button}
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate('Scanner')}
          title="Scanner"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
  },
})

Home.propTypes = {
  navigation: PropTypes.object,
}

export default Home
