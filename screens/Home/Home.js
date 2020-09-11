import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { setError } from '../../store/app/actions'

const Home = ({ navigation, app, onSetError }) => {
  const handleSetError = (val, err = '') => {
    onSetError(val, err)
  }

  return (
    <View style={styles.wrapper}>
      <Text>Projects</Text>
      {app.hasError ? (
        <Button onPress={() => handleSetError(false)} title="dismiss error" />
      ) : (
        <Button onPress={() => handleSetError(true)} title="set error" />
      )}

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
  app: PropTypes.object,
  onSetError: PropTypes.func,
}

const mapStateToProps = (state) => ({
  app: state.app,
})

export default connect(mapStateToProps, {
  onSetError: setError,
})(Home)
