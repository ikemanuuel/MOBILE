// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet,TextInput } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';

// function Dashboard() {
//   const navigation = useNavigation();


//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Search"
//           placeholderTextColor="gray"
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FAB417',
//   },
//   iconBar: {
//     position: 'absolute',
//     top: 10,
//     left: 10,
//   },
//   iconBell: {
//     position: 'absolute',
//     top: 12,
//     right: 40,
//   },
//   iconCart: {
//     position: 'absolute',
//     top: 8,
//     right: 10,
//   },
//   inputContainer: {
//     backgroundColor: 'white',
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 20,
//     width: '90%',
//     marginTop: '3%',
//     marginLeft: '5%',
//     paddingLeft: 20,
//   },
//   input: {
//     height: 30,
//     color: 'black',
//   },
// });

// export default Dashboard;
// Import necessary modules
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView,StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

// Your Dashboard component
function Dashboard() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const handleCartClick = () => {
    navigation.navigate('Cart');
  };

  const handleNotificationClick = () => {
    navigation.navigate('Notification');
  };

  const handleSchoolUniformButtonClick = () => {
    // Redirect to the SchoolUniform screen
    navigation.navigate('SchoolUniform');
  };

  const handlePEUniformButtonClick = () => {
    navigation.navigate('PEUniform');
  };

  const handleBooksButtonClick = () => {
    navigation.navigate('Books');
  };

  const handleForRentButtonClick = () => {
    navigation.navigate('ForRent');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.pictureButtonContainer}>
          <TouchableOpacity style={styles.pictureButton} onPress={handleSchoolUniformButtonClick}>
            <Image source={require('../assets/school-uniform.png')} style={styles.pictureIcon} />
            <Text style={styles.pictureTitle}>School Uniform</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pictureButton} onPress={handlePEUniformButtonClick}>
            <Image source={require('../assets/P.E-Uniform.png')} style={styles.pictureIcon} />
            <Text style={styles.pictureTitle}>P.E-Uniform</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pictureButton} onPress={handleBooksButtonClick}>
            <Image source={require('../assets/Books.png')} style={styles.pictureIcon} />
            <Text style={styles.pictureTitle}>Books</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pictureButton} onPress={handleForRentButtonClick}>
            <Image source={require('../assets/For-Rent.png')} style={styles.pictureIcon} />
            <Text style={styles.pictureTitle}>For-Rent</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

// Your styles
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FAB417',
  },
  inputContainer: {
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        width: '90%',
        marginTop: '3%',
        marginLeft: '5%',
        paddingLeft: 20,
      },
  input: {
    height: 30,
    color: 'black',
  },
  pictureButtonContainer: {
    flexDirection: 'column', // Display buttons in a row
    justifyContent: 'center', // Center the buttons horizontally
    alignItems: 'center', // Center the buttons vertically
    marginTop: 20,
  },
  pictureButton: {
    alignItems: 'center',
    padding: 10
  },
  pictureIcon: {
    width: 170,
    height: 150,
    borderRadius: 10, // Half of the width and height to make it a square
  },
  pictureTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Dashboard;
