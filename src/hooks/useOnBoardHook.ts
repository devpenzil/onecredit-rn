import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

export const useOnBoardHook = () => {
  const navigation = useNavigation();
  const [status, setStatus] = useState(0);
  const data = [
    {
      image: require('../assets/images/png/onboardCover1.png'),
      heading: 'Pay Your Way',
      desc: 'India’s 1st Mobile Credit Card with UPI payment. Pay by QR, Pay Online, Pay by Mastercard',
    },
    {
      image: require('../assets/images/png/onboardCover2.png'),
      heading: 'No-stress Loans',
      desc: 'Bespoke credit programs to suit your needs, 0% interest for 30 days and EMI conversions starting at 13%',
    },
  ];
  const onSwipe = (gestureName: any) => {
    if (gestureName === 'SWIPE_LEFT') {
      status < 1 ? setStatus(1) : navigation.navigate('Loginpage', {});
    }
    gestureName === 'SWIPE_RIGHT' && setStatus(0);
  };
  const onboard = {
    data,
    onSwipe,
    status,
  };
  return onboard;
};
