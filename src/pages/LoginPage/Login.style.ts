import {StyleSheet} from 'react-native';
import { t } from 'react-native-tailwindcss'

export const loginStyles = StyleSheet.create({
  box: {
   height:50,
   width:50,
   backgroundColor:"green",
   ...t.selfStart
  },
  
});
