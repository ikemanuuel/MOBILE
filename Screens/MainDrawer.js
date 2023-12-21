import React from 'react';
import { Image, View, StyleSheet,Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import MyPurchase from '../components/MyPurchase';
import Dashboard from '../components/Dashboard';
import Cart from '../components/Cart';
import Notification from '../components/Notification';
import Profile from '../components/Profile';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const customScreens = [
    { name: 'Dashboard', icon: 'home' },
    { name: 'Cart', icon: 'shopping-cart' },
    { name: 'My Purchase', icon: 'shopping-bag' },
    { name: 'Notification', icon: 'bell' },
    { name: 'Profile', icon: 'user-circle-o' },

  ];

  return (
    <DrawerContentScrollView {...props}>
      {/* Your custom logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/swift.png')}
          style={styles.logo}
        />
      </View>
      {/* The rest of the drawer content */}
      
      {/* Additional custom items */}
      {customScreens.map((screen, index) => (
        <DrawerItem
          key={index}
          label={screen.name}
          icon={({ focused, size, color }) => (
            <Icon
                name={screen.icon}
                size={size}
                color={color}
                style={{ fontWeight: focused ? 'bold' : 'normal', color:'black', }}
            />
          )}
          labelStyle={{ fontWeight: 'bold', color:'black', textAlign:'left', }}
          onPress={() => {
            // Navigate to the corresponding screen
            props.navigation.navigate(screen.name);
          }}
        />
      ))}
      <View style={styles.logoutContainer}>
      <DrawerItem
        label="Logout"
        icon={({ focused, size, color }) => (
            <Icon
            name="sign-out"
            size={size}
            color={color}
            style={{ fontWeight: focused ? 'bold' : 'normal', color:'black', }}
            />
        )}
        labelStyle={{ fontWeight: 'bold', color:'black', }}
        onPress={() => {
            // Navigate to the Settings screen or your desired screen
            props.navigation.navigate('Login');
        }}
        />
        </View>
        <View
        style={{
          width:20,
          height:20,
          backgroundColor: 'red',
          borderRadius:10,
          justifyContent:'center',
          alignItems:'center',
          position: 'absolute',
          bottom: 496,
          left: 34
        }}
        >
        <Text style={{ 
          color: '#ffff',
          fontWeight:'500',
          alignItems: 'center'
        }}>{'0'}</Text>
        </View>
    </DrawerContentScrollView>
  );
};

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName='Dashboard'
      drawerContent={CustomDrawerContent}
   
    >
      <Drawer.Screen name='Dashboard' component={Dashboard} />
      <Drawer.Screen name='Cart' component={Cart} />
      <Drawer.Screen name='My Purchase' component={MyPurchase} />
      <Drawer.Screen name='Notification' component={Notification} />
      <Drawer.Screen name='Profile' component={Profile} />
      
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  logo: {
    width: 140,
    height: 120,
  },
  logoutContainer:{
    display:'flex',
    marginTop:'95%',

  },
});

export default MainDrawer;
