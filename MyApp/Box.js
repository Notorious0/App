import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export const Box = () => {
  const [count, setCount] = useState(0);
  
   return(
    <View style={{alignItems:"center"}}>
        <TouchableOpacity onPress={()=>{setCount((prev) =>(prev+1))}}>
            <View style={{
                width:100,
                height:100,
                backgroundColor:"purple",
                borderRadius:15,
                alignItems:"center",
                justifyContent:"center",
            }}>
              <Text style={{fontWeight:"bold",color:"white",fontSize:20}}>
                Press
              </Text>
            </View>
        </TouchableOpacity>

        <Text style={{fontSize:30}}>{count}</Text>
    </View>

   )

};

