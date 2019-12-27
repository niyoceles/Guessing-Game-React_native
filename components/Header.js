import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Color from '../constants/Colors';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headertitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Color.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headertitle: {
    color: 'black',
    fontSize: 18
  }
});

export default Header;
