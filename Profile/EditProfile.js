import { Box, Button, FormControl, Input, ScrollView, VStack } from 'native-base'
import { FormControlLabel } from 'native-base/src/theme/components/form-control'
import React from 'react'
import Colors from '../data/color'

const Inputs = [
    {
        label:"IDNumber",
        type:"number"
    },
    {
        label:"Name",
        type:"text"
    },
    {
        label:"Contact Number",
        type:"number"
    },
    {
        label:"Email",
        type:"text"
    },
    {
        label:"Password",
        type:"password"
    },
    {
        label:"Current Password",
        type:"password"
    },
]



const EditProfile = () => {
  return (
    <Box bg={Colors.white} px={5} p={1} >
        <ScrollView showsVerticalScrollIndicator={false}>
            <VStack space={10} mt={5} pb={10}>
                {Inputs.map((i, index) =>(
                <FormControl key={index}>
                    <FormControl.Label
                    _text={{
                        fontSize: "12px",
                        fontWeight: "bold"
                    }}
                    >
                        {i.label}
                    </FormControl.Label>
                    <Input 
                    borderWidth={0}
                    bg={Colors.subMain}
                    py={2}
                    type={i.type}
                    fontSize={16}
                    _focus={{
                        bg: Colors.subMain,
                        borderColor: "#5D5D5B",
                        borderWidth: 1,
                    }} 
                    />
                </FormControl>
                ))}
                <Button bg={Colors.main} color={Colors.white} borderRadius={20} >
                    UPDATE PROFILE
                </Button>
            </VStack>
        </ScrollView>
    </Box>
  )
}

export default EditProfile