import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text 
        style={styles.text}
      >
        Twitch
      </Text>
      <StatusBar style="auto" />
      <View style={{marginTop : 20, width : 100}}>
        <Button 
          color= "#6441a5"
          title= "Press Me"
          onPress = {() => {
            alert("You sure about that buddy ?")
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    color : "#6441a5",
    fontSize : 70,
    fontWeight : "bold"
  }
});
