import React, { useState } from 'react'
import { NativeBaseProvider,Heading, Image, Text, Center, HStack} from 'native-base'
import Colors from '../data/color'
import Tabs from '../Profile/Tabs'
import { View,StyleSheet } from 'react-native'



const Profile= () => {
  return (
    <NativeBaseProvider>
        <View style={styles.container}>
        <Center bg={Colors.main} pt={700} pb={6}>
        </Center>
        <Image
                source={require('../assets/profile.jpg')}
                alt="profile"
                size={100} borderRadius={100}
               position={'absolute'}
                paddingTop={0}
                top={10}
                left={130}
                resizeMode='cover'
            />
            </View>
            <Heading 
            bold fontSize={15} 
            isTruncated my={2} 
            color={'black'}
            position={'absolute'}
            paddingTop={0}
            top={150}
            left={140}
             >
              Jeon Wonwoo
            </Heading>
            <Text 
            italic
            bold fontSize={12} 
            isTruncated my={2} 
            color={'black'}
            position={'absolute'}
            paddingTop={0}
            top={180}
            left={124}
            >
              ID Number: 2020300143
            </Text>
          {/* <HStack space={3} justifyContent="center">
            <View >
              <Heading 
            bold fontSize={15} 
            isTruncated my={2} 
            color={'black'}
            position={'absolute'} >
            
              Personal Information
              </Heading>
            </View>
          </HStack>

 */}

            <Tabs/>
             </NativeBaseProvider>
        
       
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  textInfo:{
    position:'absolute',
    bottom: 110,
    left:10,
  }
});
export default Profile;