import  { useSharedValue, useAnimatedStyle ,withSpring} from 'react-native-reanimated'

export const useSampleHook = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 255),
        },
      ],
    };
  });

  return {animatedStyles,offset};
};
