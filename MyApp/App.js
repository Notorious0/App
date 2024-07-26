import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View ,TextInput, ScrollView, Modal, TouchableWithoutFeedback, Switch, ImageBackground} from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Foo } from './Foo';
import { Counter } from './Counter';
import { Box } from './Box';
import { MyButton } from './MyButton';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);
  const [name,setName]=useState("");
  let[visible,setVisible]=useState(false);
  let [status,SetStatus] =useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
      <StatusBar style="auto" />
        <Text style={styles.a}>Arttır</Text>
        <Text style={[styles.a, { fontSize: 20 }]}>Azalt</Text>
        <Button title="Increase" onPress={() => setCount((prev) => prev + 1)} color="#008080" />
        <Button title="Decrease" onPress={() => setCount((prev) => prev - 1)} color="#ee82ee" />
        <Text style={{ fontSize: 40 }}>{count}</Text>
      </View>

      <Text style={flag ? styles.class1 : styles.class2}>{flag ? 'True' : 'False'}</Text>

      <View style={{ width: 350, height: 100, flexDirection: 'row' }}>
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ backgroundColor: 'grey', height: 75, width: 75, borderRadius: 40 }} />
        </View>

        <View style={{ flex: 4, justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 19 }}>Nur Seyitoğlu</Text>
          <Text style={{ color: 'grey', fontSize: 13 }}>NurSytgl@gmail.com</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{'>'}</Text>
        </View>
      </View>

      <Feather name="github" size={24} color="black" />
      <TextInput
        placeholder="Name" 
        placeholderTextColor="red" 
        autoCapitalize="none" 
        multiline
        value={name}
        onChangeText={(e) => {setName(e);}}
        style={{width:100,height:100,borderWidth:2,padding:15}}
      />
      <Text style={{fontSize:30, color:'navy'}}>{name}</Text>

      <Foo KullanıcıAd="Fatma" KullanıcıSoyad="Seyitoğlu" color="#ee82ee"/>
      <Foo KullanıcıAd="Suat Fahri" KullanıcıSoyad="Seyitoğlu" color="#87ceeb"/>

      <Counter/>

      <Button title='Modal' onPress={()=>setVisible((prev)=>!prev)}/>

        <Modal visible={visible} animationType='fade'>
          <View style={styles.modalView}>
           <View style={styles.modal}>
           <Text>Hello world !!!!</Text>
           <Button title='Close' onPress={()=>setVisible(false)}/>
           </View>
          </View>
        </Modal>

        <View style={{margin:15}}></View>

        <Box/>
           
        <View style={{margin:15}}></View>
        <TouchableWithoutFeedback
        onPress={()=>{
          Keyboard.dismiss();
        }}
        >
          <TextInput
          style={{
            backgroundColor:"#ee82ee",
            width:250,
            height:50,
            borderRadius:25,
            paddingLeft:25,
            fontSize:20,
          }}
          placeholder='Enter'
          />

        </TouchableWithoutFeedback>

        <View style={{margin:15}}></View>

      <MyButton/>
        
      <View style={{margin:15}}></View>

      <Switch
      value={status}
      onValueChange={() => SetStatus((prev) => !prev)}
      thumbColor={status ? "yellow" : "green"}
      trackColor={{ true: "green", false: "yellow" }}
    />   

<View style={{margin:15}}></View>

      <ImageBackground 
      imageStyle={{borderRadius:30}}
        style={{height:200,width:250,justifyContent:"center",alignItems:"center"}}
        source={require("./assets/fb.jpeg")}
      >
      <View
      style={{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: 'rgba(50,50,50,0.5)',
        width:250,
        height:50,
        position:"absolute",
        bottom:0,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
      }}
      >
      <AntDesign name="heart" size={24} color="black" />
      <Text style={{fontWeight:"bold"}}>123</Text>

      </View>
      </ImageBackground>

      <View style={{margin:15}}></View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  box: {
    height: 200,
    width: 200,
    backgroundColor: '#00ced1',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  a: {
    color: '#ffffff',
    fontWeight: 'bold',
    margin: 5,
  },
  class1: {
    color: '#008080',
  },
  class2: {
    color: '#ee82ee',
  },
  modalView:{
   flex:1,
   justifyContent:"center",
   alignItems:"center",
  },
  modal:{
    width:300,
    height:300,
    borderWidth:2,
    borderRadius:10,
    backgroundColor:"#afeeee",
    justifyContent:"center",
    alignItems:"center",
  }

});
