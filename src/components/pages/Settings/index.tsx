import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../atoms/';
import { COLOR } from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.MAIN,
  },
  button: {
    width: 300,
    color: COLOR.LIGHT,
    marginBottom: 40,
  },
});

export default function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={() => console.log('Settings')} style={styles.button} label="設定" />
    </SafeAreaView>
  );
}
