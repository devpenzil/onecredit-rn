import React, { useEffect ,useState} from 'react';
import { View, Appearance, useColorScheme } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  NavigationContainer, 
} from '@react-navigation/native';
import { 
  Provider as PaperProvider, 
} from 'react-native-paper';
import { useSelector,useDispatch} from 'react-redux';
import InitialPage from '../pages/IntitialPage/Initial.page';
import { setTopLevelNavigator } from './navigations';
import Loginpage from '../pages/LoginPage/Login.page';
import {RootState} from '../redux/store/root.reducer';
import { themeSlice } from '../redux/slices/theme.slice';
import {CustomDarkTheme,CustomDefaultTheme} from '../utils/themes/themes'
interface Props { }

const RootNavigation = (props: Props) => {
 let colorScheme = Appearance.getColorScheme();
 const RootStack = createStackNavigator();
  const dispatch=useDispatch()
  const choosedTheme = useSelector(
    (state: RootState) => state.theme.choosedTheme
  );
  
  useEffect(()=>{
    setTheme(colorScheme=="dark" ? CustomDarkTheme : CustomDefaultTheme)
    dispatch(
      themeSlice.actions.chooseTheme(colorScheme),
    );
  },[])

  useEffect(()=>{
    setTheme(choosedTheme=="dark" ? CustomDarkTheme : CustomDefaultTheme)
  },[choosedTheme])
  
  const [theme, setTheme] = useState( choosedTheme=="dark" ?CustomDarkTheme : CustomDefaultTheme);

  return (
    <PaperProvider theme={theme}>
    <NavigationContainer ref={setTopLevelNavigator} theme={theme}>
      <RootStack.Navigator screenOptions={
        {headerShown:false}
      }>
      <RootStack.Screen name="InitialPage" component={InitialPage} />
      <RootStack.Screen name="Loginpage" component={Loginpage} />
      </RootStack.Navigator>
    </NavigationContainer>
    </PaperProvider>

  );
};
export default RootNavigation;

