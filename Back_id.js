import React from 'react';
import { View, Text, StyleSheet ,Image, Button,Alert,TouchableOpacity,ToastAndroid} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


function Back_id() {
  const navigation = useNavigation();

  const showToast = () => {
    console.log("Toast is clicked...");
    ToastAndroid.show("You're now at the front side of the ID.", ToastAndroid.SHORT); 
  }

  const simpleAlert = () => {
    Alert.alert(
      'Go to Front Page',
      'Confirm to proceed to the front page',
      [
        {
          text: 'Yes',         
          onPress: () => {
            navigation.navigate('idfront');
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
      <View style={styles.table}>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.label}>Blood Type</Text>
            <Text style={styles.value}>B+</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.label}>Birthdate</Text>
            <Text style={styles.value}>03/01/2003</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text>In Case of Emergency, Please Notify:</Text>
            <Text>Marissa Coloscos</Text>
            <Text>Manlagtang, Tabogon, Cebu</Text>
            <Text>09686506707</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.content}>
        <View style={styles.date}>
            <Text style={styles.text1}>Date Issued: </Text>
            <Text style={styles.text2}>09/19/2022 </Text>           
        </View>
        <View style={styles.line1}></View>
        <View style={styles.date}>
            <Text style={styles.text1}>VALID UNTIL: </Text>
            <Text style={styles.text2}>09/19/2026 </Text>   
        </View>
        <View style={styles.line2}></View>
        <View style={styles.text3}>
            <Text>UNLESS EARLIER REVOKED OR SURRENDERED </Text>
        </View>

        <View style={styles.sentence}>
            <View style={styles.dot}/>
            <Text>The person whose picture and signature appear hereon is a bonifide student of 
            Cebu Technological University</Text> 
        </View>

        <View style={styles.sentence}>
            <View style={styles.dot}/>
            <Text>This card is non-transferable property of CTU and must be surrendered upon graduation or transfer.</Text>           
        </View>

        <View style={styles.sentence}>
            <View style={styles.dot}/>
            <Text>Card must be presented upon entry and must worn when inside the university premises.</Text>
        </View>

        <View style={styles.sentence}>
            <View style={styles.dot}/>
            <Text>Tampering invalidates this card and subject to disciplinary action.</Text>
        </View>

        <View style={styles.sentence}>
            <View style={styles.dot}/>
            <Text>In case of loss, please report to SAO office.</Text>
        </View>

        </View>

        <View style={styles.the_sig}>
        <Image source={require('./assets/SUC_PRES.jpg')} style={styles.suc_sig}/>

        <TouchableOpacity style={styles.btn} onPress={simpleAlert}>
        <Text style={styles.btnText}>Go to Front Page</Text>
        </TouchableOpacity>
        </View>
       
        

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  table: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    textAlign: 'center',
  },
  label: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  value: {
    marginTop: 5,
    textAlign: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5, // half of the width or height to make it circular
    backgroundColor: 'black',
    marginRight: 5,
    marginTop: 5,
  },
  content:{
    padding:10,
  },
  text1:{
    fontSize:16,
  },
  text2:{
    fontSize:16,
    fontWeight:'bold',
    
  },
  date:{
    alignItems:'center',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
  },
  text3:{
    fontSize:14,
    justifyContent:'center',
    alignItems:'center',
    
  },
  sentence:{
    flexDirection:'row',
    marginTop:5,
  },
  suc_sig:{
    width:200,
    height:80,
    marginBottom: 20,
    
  },
  the_sig:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
  },
  line1: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '35%',   
    position:'absolute',
    marginLeft:180,
    marginTop:30,
  }, 
  line2: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '35%',   
    position:'absolute',
    marginLeft:180,
    marginTop:50,
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

export default Back_id;
