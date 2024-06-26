import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';





const SettingsScreen = ({ navigation }) => {
 
 


  return (
    
         <View style={[styles.container, ]}>

      <Text style={[styles.header, ]}>Settings</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Language')}
        >
        <View style={styles.option}>

          <Text style={[styles.optionText, ]}>Language</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <View style={styles.option}>

          <Text style={[styles.optionText, ]}>My Profile</Text>
        </View>

      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Contact')}>

        <View style={styles.option}>

          <Text style={[styles.optionText, ]}>Contact Us</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
        <View style={styles.option}>

          <Text style={[styles.optionText, ]}>Change Password</Text>

        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
        <View style={styles.option}>

          <Text style={[styles.optionText, ]}>Privacy Policy</Text>

        </View>
      </TouchableOpacity>

      <View style={styles.themeToggle}>
        <Text style={[styles.optionText, ]}>Theme</Text>

        <Switch
        
        />
      </View>

    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign:'center'
  },

  option: {
    top:30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    
  },

  optionText: {
    fontSize: 17,
  },

  themeToggle: {
    top:40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    paddingVertical: 12,
  },



});


export default SettingsScreen;
