import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Registration() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [contact, setContact] = useState('');
  const [course, setCourse] = useState('');
  const [usertype, setUserType] = useState('');

  const handleRegister = () => {
    // Implement your registration logic here
    // You can use the state variables to access user input
    // Example: Send a request to your server for registration
    navigation.goBack('Login');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  }

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const containerWidth = windowWidth * 0.8;

  // Define the logo's width and height as a percentage of the screen size
  const logoWidth = windowWidth * 0.3;
  const logoHeight = windowHeight * 0.15;

  const slogoWidth = windowWidth * 0.5;
  const slogoHeight = windowHeight * 0.15;

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.logoSwiftContainer}>
          <Image
            source={require('../assets/swift.png')}
            style={{ ...styles.logoSwift, width: slogoWidth, height: slogoHeight }}
          />
        </View>
        <View style={[styles.squareContainer, { width: containerWidth }]}>
          <View style={styles.centeredTextContainer}>
          <Text style={styles.centeredText}>Registration</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Firstname"
              value={firstname}
              onChangeText={(text) => setFirstname(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Lastname"
              value={lastname}
              onChangeText={(text) => setLastname(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={confirmpassword}
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Contact Details"
              value={contact}
              onChangeText={(text) => setContact(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Course"
              value={course}
              onChangeText={(text) => setCourse(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="User Type"
              value={usertype}
              onChangeText={(text) => setUserType(text)}
            />
          </View>
          <View style={styles.button}>
            <Button title="Register" onPress={handleRegister} />
          </View>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.style1}>Already have an Account? Login here</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logoUSTPContainer}>
          <Image
            source={require('../assets/ustp.png')}
            style={{ ...styles.logoUstp, width: logoWidth, height: logoHeight }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  squareContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 10,
    padding: 15,
    zIndex:999,
  },
  centeredTextContainer: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    fontSize: 18,
    color: 'white',
  },
  inputContainer: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 5,
    width: '100%',
  },
  input: {
    padding: 5,
  },
  style1: {
    color: 'white',
    marginTop: 5,
  },
  button: {
    marginTop: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logoSwiftContainer: {
    flex: 1, // Takes up the top portion
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    justifyContent: 'flex-start',
  },
  logoUSTPContainer: {
    flex: 1, // Takes up the bottom portion
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    justifyContent: 'flex-end',
  },
  logoSwift: {
    alignSelf: 'center',
  },
  logoUstp: {
    alignSelf: 'center',
  },
});

export default Registration;
