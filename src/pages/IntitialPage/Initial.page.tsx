import {View, Text, Image} from 'react-native';
import React from 'react';
import {style} from './initial.style';
import GestureRecognizer from 'react-native-swipe-gestures';
import {useOnBoardHook} from '../../hooks/useOnBoardHook';
interface Props {}

const InitialPage = () => {
  const {data, onSwipe, status} = useOnBoardHook();
  return (
    <GestureRecognizer onSwipe={onSwipe}>
      <View style={style.container}>
        <Image source={data[status].image} style={style.image} />
        <Text style={style.heading}>{data[status].heading}</Text>
        <Text style={style.description}>{data[status].desc}</Text>
        <View style={style.dotfamily}>
          <View style={[style.dot, status === 0 && style.dotactive]} />
          <View style={[style.dot, status === 1 && style.dotactive]} />
          <View style={[style.dot, status === 2 && style.dotactive]} />
        </View>
      </View>
    </GestureRecognizer>
  );
};

export default InitialPage;
