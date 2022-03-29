import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import Task from './components/Task';
import styles from './App.components.style';
import Form from './components/Form'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {
          <Task />
          }
        </ScrollView>
      </View>
      <View style={styles.input}>
          <Form />
      </View>
    </View>
  )
}
