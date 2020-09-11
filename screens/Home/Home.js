import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Home = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Button
        onPress={() => navigation.navigate('Projects')}
        title="Projects"
      />
    </View>
  )
}

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
