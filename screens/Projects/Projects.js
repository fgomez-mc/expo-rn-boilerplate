import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { handleGetProjects } from '../../store/projects/actions'
import { ScrollView } from 'react-native-gesture-handler'

const Projects = ({projects = [],isLoading = false,getProjects = () => {}}) => {
  const fetchProjects = () => {
    getProjects()
  }
  useEffect(fetchProjects)

  return (
    <ScrollView>
      {isLoading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : (
        projects.map((project, idx) => (
          <View key={idx} style={styles.projectCard}>
            <Text style={styles.title}>{project.title}</Text>
            <Text style={styles.body}>{project.body}</Text>
          </View>
        ))
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  projectCard: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderColor: 'silver',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  body: {
    fontSize: 16,
  },
  loading: {
    color: 'black',
    fontSize: 15,
    margin: 10,
  },
})

Projects.propTypes = {
  getProjects: PropTypes.func,
  isLoading: PropTypes.bool,
  projects: PropTypes.array,
}

const mapStateToProps = (state) => ({
  isLoading: state.app.isLoading,
  projects: state.projects.data,
})

export default connect(mapStateToProps, { getProjects: handleGetProjects })(
  Projects
)
