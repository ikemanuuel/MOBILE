
import React, { useState } from 'react';
import { Text,View, StyleSheet, Dimensions, StatusBar, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import EditProfile from './EditProfile';
import Orders from './Orders';
import Colors from '../data/color';
import ProfileScreen from './ProfileScreen';




export default function Tabs(){
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
      { key: 'first', title: ' Profile' },
      { key: 'second', title: 'Edit Profile' },
      { key: 'third', title: 'Orders' },
    
    ]);

const renderTabsBar =(props) =>(
    <TabBar 
    {...props}
    tabStyle={styles.tabStyle}
    indicatorStyle={{ backgroundColor: Colors.main}}
    activeColor= {Colors.main}
    inactiveColor={Colors.white}
    renderLabel={({route,color}) => <Text style={{ color, ... styles.text}}> {route.title}</Text>}
    />
);

const renderScene = SceneMap({
    first: ProfileScreen,
    second: EditProfile,
    third: Orders,
});

    return (
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabsBar}
        style={styles.container}
      />
    );
  }


const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    bottom:170,
  },
  tabStyle:{
    backgroundColor:'black',
  },
  text: {
    fontSize:12,
    fontWeight: "bold",
  }
});