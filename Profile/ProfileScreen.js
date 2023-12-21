import { Center, Container, Heading, View } from 'native-base'
import React from 'react'
import { Text } from 'react-native'
import { StyleSheet } from 'react-native'
import Colors from '../data/color'


const ProfileScreen= () => {
  return (
    <Center pt={200} pb={6} bg={Colors.white}>
      <Container styles={styles.container}>
        <Heading 
        bold fontSize={20} 
        color={'black'}
        position={'absolute'}
        paddingTop={0}
        bottom={390}
        right={100}
         > 
          Personal Information
        </Heading >
        <View style={styles.itemView}>
              <Text style={styles.itemText}>
            ID Number: 2020300143
          </Text>
      </View>
      <View style={styles.itemView}>
        <Text style={styles.itemText}>
          Name: Jeon Wonwoo
        </Text>
      </View>
      <View style={styles.itemView}>
        <Text style={styles.itemText}>
          COntact Number: 097123422
        </Text>
      </View>
      <View style={styles.itemView}>
        <Text style={styles.itemText}>
          E-mail: WonwooJeon1@gmail.com
        </Text>
      </View>
      <View style={styles.itemView}>
        <Text style={styles.itemText}>
          UserType: Student
        </Text>
      </View>
      <View style={styles.itemView}>
        <Text style={styles.itemText}>
          Course: 4th Year BSIT
        </Text>
      </View>
      <View style={styles.itemView}>
        <Text style={styles.itemText}>
          sex: Male
        </Text>
      </View>
      
      </Container>
      </Center>
  )
}


const styles = StyleSheet.create({
  container: {
  flex: 1,
},
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    bottom: 100,
    right: 60
  },
  itemText: {
    fontSize: 15,
    color: 'black'
  }
});
export default ProfileScreen;