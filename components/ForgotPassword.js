import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }


   handleLogin = () => {
  // Implement your login logic here
  // You can use this.state.email or other form inputs
  // Example: Send a request to your server for password reset
   navigation.goBack('Login');
}

  render() {
    return (
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.backgroundImage}
      >

        <View style={styles.container}>

            <View style={styles.logoSwiftContainer}>
            <Image
                source={require('../assets/swift.png')}
                style={styles.logoSwift}
            />
            </View>

          <View style={styles.squareContainer}>
            <View style={styles.centeredTextContainer}>
              <Text style={styles.centeredText}>ForgotPassword</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput 
                style={styles.input}
                placeholder="Enter to you email"
                onChangeText={(email) => this.setState({ email })}
              />
              </View>
            <Text style={styles.style1}>We'll send you a Link to your email to reset your password</Text>
                      <View style={styles.button}>
              <Button title="Submit" onPress={this.handleLogin} />
           </View>
          </View>



        <View style={styles.logoUSTPContainer}>
            <Image
                source={require('../assets/ustp.png')}
                style={styles.logoUstp}
            />
            </View>
            

        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareContainer: {
    marginTop: 220,
    width: 340,
    height: 220,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Use an RGBA color to make it slightly transparent
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center'
  
  },
  centeredTextContainer: {
    marginBottom: 20,
    justifyContent: 'center', // Center vertically
    alignItems: 'center',// Center horizontally
  },
  centeredText: {
    fontSize: 18,
    color: 'white',
  },
  inputContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',

  },
  input: {
    padding: 10,
  },
  style1: {
    color: 'white',
    marginBottom:5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  button: {
    marginTop: 5,
  },
  logoSwift: {
    width: 170,
    height: 90,
    alignSelf: 'center',
    marginTop:5,
    marginBottom: 1,
  },
  logoUstp: {
    marginTop: 290,
    width: 120,
    height: 100,
    alignSelf: 'center',
  },
});


export default ForgotPassword;
