import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { t } from 'react-native-tailwindcss'
import { useDispatch } from 'react-redux'
import { authSlice } from '../../redux/slices/auth.slice'

interface Props {
    
}

const Loginpage = (props: Props) => {

    const dispatch=useDispatch()

    const onLogin=()=>{
      dispatch(
        authSlice.actions.login({username:'john',password:"johsnsPass"}),
      );
    }

    return (
        <View style={[t.selfCenter,t.justifyCenter,t.flex1]}>

        <TouchableOpacity style={[t.h10,t.bgBlue500,t.rounded,t.justifyCenter,{width:100}]} onPress={onLogin}>
          <Text style={[t.selfCenter,t.textWhite]}>Login</Text>
        </TouchableOpacity>
      
      </View>
    )
}

export default Loginpage
