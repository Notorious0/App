import React from 'react';
import { Text, View } from 'react-native';

export const Foo = (props) => (
  <View style={{
    backgroundColor: props.color,
    width: 250,
    height: 100,
    borderRadius: 0,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
      Name: {props.KullanıcıAd}
    </Text>

    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
      Surname: {props.KullanıcıSoyad}
    </Text>
  </View>
);

