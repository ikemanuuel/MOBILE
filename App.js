import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './components/Login';
import Registration from './components/Registration';
import ForgotPassword from './components/ForgotPassword';
import MainDrawer from './Screens/MainDrawer';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import Notification from './components/Notification';
import PaymentDetails from './components/PaymentDetails';
import SuccessfulOrder from './components/SuccessfulOrder';
import Profile from './components/Profile';
import ProfileScreen from './Profile/ProfileScreen';
import EditProfile from './Profile/EditProfile';
import Orders from './Profile/Orders';


const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="MainDrawer" component={MainDrawer} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Payment Details" component={PaymentDetails} />
      <Stack.Screen name="Successful Order" component={SuccessfulOrder} />
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
      <Stack.Screen name="EditProfile" component={EditProfile}/>
      <Stack.Screen name="Orders" component={Orders}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;