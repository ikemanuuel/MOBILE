import { View } from 'react-native'
import React from 'react'
import Colors from '../data/color'
import { Box, Button, HStack, Pressable, ScrollView, Text } from 'native-base'

const Orders = () => {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*Paid Order*/}    
        <Pressable>
          <HStack
            space={4}
            justifyContent='space-between'
            alignItems="center"
            bg={Colors.gray}
            py={5}
            px={2}
          >
            <Text fontSize={12} color={Colors.main} isTruncated>
              School Uniform
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              x1
            </Text>
            <Text fontSize={12} italic color={Colors.black} isTruncated>
              Dec 12,2023
            </Text>
            <Button
            px={5}
            py={1.2}
            rounded={30}
            bg={Colors.main}
            _text={{
              color: Colors.white
            }}
            _pressed={{
              bg: Colors.main
            }}
            >
              P1000
            </Button>
          </HStack>
        </Pressable>
        {/*Not Paid*/} 
        <Pressable>
          <HStack
            space={4}
            justifyContent='space-between'
            alignItems="center"
            py={5}
            px={2}
          >
            <Text fontSize={12} color={Colors.main} isTruncated>
              PE Uniform
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              x1
            </Text>
            <Text fontSize={12} italic color={Colors.black} isTruncated>
              Dec 9,2023
            </Text>
            <Button
            px={5}
            py={1.2}
            rounded={30}
            bg={Colors.red}
            _text={{
              color: Colors.white
            }}
            _pressed={{
              bg: Colors.red
            }}
            >
              P1200
            </Button>
          </HStack>
        </Pressable> 
      </ScrollView>
    </Box>
  )
}

export default Orders