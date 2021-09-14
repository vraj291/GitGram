import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { List } from './src/components/List';
import { UserCard } from './src/components/UserCard';

export default function App() {
  return (
    <ScrollView 
      contentContainerStyle={styles.container}
    >
      <UserCard username="vraj291"/>
      <UserCard username="ndan11"/>
    </ScrollView>
  );
}

function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : (b ? b : a)
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    ...padding(40,20)
  },
  text : {
    color : "#6441a5",
    fontSize : 70,
    fontWeight : "bold"
  }
});
