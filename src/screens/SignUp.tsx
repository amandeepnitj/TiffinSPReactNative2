import React from "react";
import {Image,TouchableOpacity, Pressable,Alert,Text, SafeAreaView, StyleSheet, View, ScrollView, TextInput} from "react-native";

function SignUp({navigation})
{
    return(
        <SafeAreaView style={styles.wrapper}>
            {/* <Text style={styles.backbutton}>Go Back</Text> */}
            <TouchableOpacity onPress={()=> Alert.alert("back button touched")}>
        <Image source={require('./../images/left-arrow.png')} style={styles.backbutton}/>
    </TouchableOpacity>
            <ScrollView style={styles.scrollview}>
                <Text style={styles.signuptext}>Sign Up</Text>
                <Text style={styles.signupdescription}>Please enter your personal details and address</Text>
                <TextInput style={styles.textInputs} placeholder="Your Name" underlineColorAndroid={'transparent'}></TextInput>
                <TextInput style={styles.textInputs} placeholder="Gender" underlineColorAndroid={'transparent'}></TextInput>
                <TextInput style={styles.textInputs} placeholder="Date Of Birth" underlineColorAndroid={'transparent'}></TextInput>
                <TextInput style={styles.textInputs} placeholder="Contact" underlineColorAndroid={'transparent'}></TextInput>
                <TextInput style={styles.textInputs} placeholder="Email Address" underlineColorAndroid={'transparent'}></TextInput>
                <TextInput style={styles.textInputs} placeholder="........" underlineColorAndroid={'transparent'}></TextInput>
                <Text style={styles.addressdetails}>Address Details</Text>
                <TextInput style={styles.textInputs} placeholder="Apt/Building/Unit" underlineColorAndroid={'transparent'}></TextInput>
                <TextInput style={styles.textInputs} placeholder="Street Name" underlineColorAndroid={'transparent'}></TextInput>
                <TextInput style={styles.textInputs} placeholder="City" underlineColorAndroid={'transparent'}></TextInput>
                <TextInput style={styles.textInputs} placeholder="Province" underlineColorAndroid={'transparent'}></TextInput>
                <TextInput style={styles.textInputs} placeholder="Country" underlineColorAndroid={'transparent'}></TextInput>
                <Pressable style={styles.buttons} onPress={()=> navigation.navigate('Login')}>
                <Text style={styles.buttontext}>Submit</Text>
                </Pressable>
                <Pressable style={styles.buttons} onPress={()=> navigation.goBack()}>
                <Text style={styles.buttontext}>Cancel</Text>
                </Pressable>
                <View style={styles.alreadyaccountview}>
                <Text>Already have an account? </Text>
                <Text style={styles.loginlink} onPress={()=> navigation.navigate('Login')}>Log In</Text>

                </View>
                
            </ScrollView>
            

        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        wrapper:{
            flex:1,
            flexDirection:'column',
            // borderColor:'red',
            // borderWidth:2,
            marginLeft:15,
            marginRight:15
        },
        backbutton:{
            // flex:0.06,
            height:20,
            width:20,
        },
        scrollview:{
            flex:10,
            // backgroundColor:'skyblue'
        },
        signuptext:{
            fontSize:30,
            color:'green',
            fontWeight:'bold',
           
            marginTop:5,
            marginBottom:5
        },
        signupdescription:{
            marginTop:5,
            marginBottom:35,
            fontSize:15,
            
        },
        textInputs:{
            borderBottomColor:'grey',
            borderBottomWidth:1,
            // marginRight:40,
            // marginLeft:10,
            marginBottom:30
        },
        addressdetails:
        {
            marginTop:5,
            marginBottom:25,
            fontSize:18,
           
            // fontWeight:'bold'

        },
        
        buttons: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'green',
            marginBottom:15
          },
          buttontext: {
            fontSize: 16,
            lineHeight: 21,
            // fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
          },
          alreadyaccountview:{
              flex:1,
              flexDirection:'row',
              justifyContent:'center'
          },
          loginlink:{
              color:'green',
            //   marginRight:50

          }

    }
)


export default SignUp;