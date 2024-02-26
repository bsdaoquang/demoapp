import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Facebook} from './src/assets/svgs';

const App = () => {
  return (
    <View style={styles.container}>
      <Facebook />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#212121',
  },
});
