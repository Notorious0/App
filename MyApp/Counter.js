import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

export const Counter = () => {
  const [even, setEven] = useState(0);
  const [odd, setOdd] = useState(1);

  useEffect(() => {
    console.log("Component Did Mount");
    return () => {
      console.log("Component Will Unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Component Did Update (Even)");
    return () => {
      console.log("Component Did Update (Even) Cleanup");
    };
  }, [even]);

  useEffect(() => {
    console.log("Component Did Update (Odd)");
    return () => {
      console.log("Component Did Update (Odd) Cleanup");
    };
  }, [odd]);

  return (
    <View style={{
      backgroundColor: "#ffe4c4",
      width: 200,
      height: 200,
      borderRadius: 50,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{ fontSize: 40 }}>Even: {even}</Text>
      <Button title='Increase' onPress={() => setEven(prev => prev + 2)} />
      <Text style={{ fontSize: 40 }}>Odd: {odd}</Text>
      <Button title='Increase' onPress={() => setOdd(prev => prev + 2)} />
    </View>
  );
};
