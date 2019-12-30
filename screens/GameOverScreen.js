import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = props => {
  
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Text>Number of Rounds: {props.numberOfRounds}</Text>
      <Text>number was: {props.userNumber}</Text>
      <Button title='New Game' onPress={props.newGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GameOverScreen;
