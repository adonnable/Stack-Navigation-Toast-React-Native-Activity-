import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet,Image,Alert,TouchableOpacity,ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Front_id(props) {
  const navigation = useNavigation();

  const showToast = () => {
    console.log("Toast is clicked...");
    ToastAndroid.show("You're now at the back side of the ID.", ToastAndroid.SHORT); 
  }

  const simpleAlert = () => {
    Alert.alert(
      'Go to Back Page',
      'Confirm to proceed to the back page',
      [
        {
          text: 'Yes',         
          onPress: () => {
            navigation.navigate('idback');
            showToast(); 
          }
        },
        {
          text: 'No',
          onPress: () => {
            console.log('No Pressed');
          }
        }
      ]
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./assets/id_background.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.topSection}>
          <View>
          <Image source={require('./assets/CTU_LOGO.png')} style={styles.clogo}/>
          <Image source={require('./assets/asean_logo.png')} style={styles.alogo}/>
          </View>
          <View style={styles.text_section}>
            <Text style={styles.text1}>Republic of the Philippines</Text>
            <Text style={styles.text2}>CEBU TECHNOLOGICAL UNIVERSITY</Text>
            <Text style={styles.text3}>Main Campus: M.J. Cuenco Avenue corner R. Palma St.,Cebu City</Text>
          </View>
        </View>
      <Image source={require('./assets/profile_pic.png')} style={styles.prof_img}/>
      <Image source={require('./assets/signature.png')} style={styles.signature}/>
      <Text style={styles.name}>DONNA MAY L. COLOSCOS</Text>
      <Text style={styles.course}>BSIT</Text>
      <View style={styles.line}></View>
      <Text style={styles.clabel}>COURSE</Text>
      <View style={styles.idnumSection}>
      <Text style={styles.course}>ID NO.:</Text>
      <Text style={styles.idnum}>1313468</Text>
      </View>
        <TouchableOpacity style={styles.btn} onPress={simpleAlert}>
        <Text style={styles.btnText}>Go to Back Page</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>     
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    image: {
      flex: 1,   
      alignItems: 'center',
      padding:30,
      
    },
    topSection:{
      marginTop: 20, // Adjust as needed
      flexDirection: 'row',
      marginBottom:20,
      marginLeft:15,
    },
    text_section:{
      marginLeft:18,
    },
    prof_img: {
      width: 150,
      height: 190,
      borderWidth: 1,
      borderColor: 'black',
    },
    signature: {
      width: 120,
      height: 55,
      marginTop:5, 
    },
    name: {
      fontWeight: 'bold',
      fontSize: 20, 
    },
    course: {
      fontSize: 20,
      marginTop:10,
    },
    clogo:{
      width: 60,
      height: 57,    
      marginBottom:5,
    },
    alogo:{
      width: 60,
      height: 55,  
    },
    text2:{
      fontWeight:'bold',
      fontFamily:'serif',
      fontSize:16,
    },
    text1:{
      fontSize:16,
    },
    line: {
      borderBottomColor: 'black',
      borderBottomWidth: 2,
      width: '70%',   
    },
    idnum:{
      fontWeight:'bold',
      fontSize:18,
      marginLeft:60,
      marginTop:20,
      position:'absolute',
    },
    idnumSection:{
      width:'70%',
      marginBottom:10,
    },
    btn: {
    width: 200,
    backgroundColor: '#164863',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
  },
   
  });
  

export default Front_id;
