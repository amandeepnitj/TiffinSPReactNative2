import React from "react";
import {Image,TouchableOpacity, Pressable,Alert,Text, SafeAreaView, StyleSheet, View, ScrollView, TextInput} from "react-native";

function UserProfile({navigation})
{
    //const {username1} =  route.params
    return(
        <SafeAreaView style={styles.wrapper}>
            {/* <Text style={styles.backbutton}>Go Back</Text> */}
            
        <Image source={require('./../images/icon-account.png')} style={styles.userprofileicon}/>
            <View style={styles.mainview}>
                <View style={styles.upperportion}>
                <Text style={styles.yourprofiletext}>User Profile</Text>
                <TextInput style={styles.textInputs} placeholder="Name" underlineColorAndroid={'transparent'}></TextInput>
                <TextInput style={styles.textInputs} placeholder="Gender" underlineColorAndroid={'transparent'}></TextInput>
                <TextInput style={styles.textInputs} placeholder="Date Of Birth" underlineColorAndroid={'transparent'}></TextInput>
                <TextInput style={styles.textInputs} placeholder="Phone" underlineColorAndroid={'transparent'}></TextInput>
                <TextInput style={styles.textInputs} placeholder="Email" underlineColorAndroid={'transparent'}></TextInput>
                </View>
                <View style={styles.lowerportion}>
                <TouchableOpacity style={styles.savebutton} onPress={()=>navigation.goBack()}>
                <Text style={styles.buttontext}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelbutton} onPress={()=>navigation.goBack()}>
                <Text style={styles.buttontext}>Cancel</Text>
                </TouchableOpacity>
                </View>
                
            </View>
            
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
            marginTop:50,
            height:20,
            width:20,
        },    
        userprofileicon:{
            marginLeft: 320,
            marginTop: 10,
            //alignSelf: 'flex-end',
            height:60,
            width: 60,
        },
        mainview:{
            flex:10,
            // backgroundColor:'skyblue'
        },
        upperportion:{
          flex:1,      
        },
        lowerportion:{
          flex:1,
          flexDirection:'column',
          justifyContent:'flex-end',
          marginBottom:50
        },
        yourprofiletext:{
            fontSize:40,
            color:'green',
            fontWeight:'300',
           
            marginTop:20,
            marginBottom:60,
        },
        textInputs:{
            borderBottomColor:'grey',
            borderBottomWidth:1,
            // marginRight:40,
            // marginLeft:10,
            marginBottom:30
        },
        savebutton: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'green',
            marginBottom:15
        },
        cancelbutton:{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'grey',
            marginBottom:15
        },
        buttontext: {
            fontSize: 16,
            lineHeight: 21,
            // fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
        },
        
    }
)

export default UserProfile;