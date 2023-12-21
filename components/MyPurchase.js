// import * as React from 'react';
// import { View, Text, useWindowDimensions } from 'react-native';
// import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

// const ToClaimRoute = () => (
//   <View style={{ flex: 1, backgroundColor: '#FAB417', justifyContent: 'center', alignItems: 'center' }}>
//     <Text>To Claim</Text>
//   </View>
// );

// const ToPayRoute = () => (
//   <View style={{ flex: 1, backgroundColor: '#FAB417', justifyContent: 'center', alignItems: 'center' }}>
//     <Text>To Pay</Text>
//   </View>
// );

// const CompletedRoute = () => (
//   <View style={{ flex: 1, backgroundColor: '#FAB417', justifyContent: 'center', alignItems: 'center'}}>
//     <Text>Completed</Text>
//   </View>
// );

// const renderScene = SceneMap({
//   toClaim: ToClaimRoute,
//   toPay: ToPayRoute,
//   completed: CompletedRoute,
// });

// const renderTabBar = props => (
//   <TabBar
//     {...props}
//     indicatorStyle={{ backgroundColor: 'white' }}
//     style={{ backgroundColor: '#D9D9D9' }}
//     labelStyle={{ fontWeight: 'bold', color: 'black' }}
//   />
// );

// const MyPurchase = () => {
//   const layout = useWindowDimensions();

//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'toClaim', title: 'To Claim' },
//     { key: 'toPay', title: 'To Pay' },
//     { key: 'completed', title: 'Completed' },
//   ]);

//   return (
//     <TabView
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={{ width: layout.width }}
//       renderTabBar={renderTabBar}
//     />
//   );
// } 

// export default MyPurchase;
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../data/color';

const ToClaimScreen = () => (
  <View style={styles.screenContainer}>
    <Text>To Claim Screen</Text>
  </View>
);

const ToPayScreen = () => (
  <View style={styles.screenContainer}>
    <Text>To Pay Screen</Text>
  </View>
);

const CompletedScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Completed Screen</Text>
  </View>
);

const Tab = createMaterialTopTabNavigator();

const MyPurchase = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle : {fontSize: 12, fontWeight: 600},
        
        tabBarItemStyle: {backgroundColor: Colors.white}
      }}
    >
      
      <Tab.Screen name="To Claim" component={ToClaimScreen} />
      <Tab.Screen name="To Pay" component={ToPayScreen} />
      <Tab.Screen name="Completed" component={CompletedScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAB417',
  },
});

export default MyPurchase;