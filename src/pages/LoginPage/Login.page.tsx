import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import { t } from 'react-native-tailwindcss'
import { useDispatch } from 'react-redux'
import { authSlice } from '../../redux/slices/auth.slice'
import {loginStyles} from './Login.style';
import {useSampleHook} from '../../hooks/useSampleHook'
interface Props {
    
}

const Loginpage = (props: Props) => {

    const dispatch=useDispatch()
    const {offset,animatedStyles}=useSampleHook()

    const onLogin=()=>{
      offset.value = Math.random()
      dispatch(
        authSlice.actions.login({username:'john',password:"johsnsPass"}),
      );
    }

    return (
        <View style={[t.selfCenter,t.justifyCenter,t.flex1]}>
        <Animated.View style={[loginStyles.box, animatedStyles]} />
        <TouchableOpacity style={[t.h10,t.m5,t.bgBlue500,t.rounded,t.justifyCenter,{width:100}]} onPress={onLogin}>
          <Text style={[t.selfCenter,t.textWhite]}>Login</Text>
        </TouchableOpacity>
      
      </View>
    )
}

export default Loginpage
