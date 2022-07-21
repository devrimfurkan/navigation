import React from 'react';
import {Button, View} from 'react-native';
import styles from '../utils/scaffold.styles';

export default function NotificationsScreen({navigation}) {
  return (
    <View style={styles.scaffold}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
