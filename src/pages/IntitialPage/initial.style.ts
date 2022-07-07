import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F7F4F2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 300,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 26,
  },
  description: {
    width: '80%',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#000000',
    borderRadius: 50,
    margin: 2,
  },
  dotfamily: {
    flexDirection: 'row',
    marginTop: 30,
  },
  dotactive: {
    backgroundColor: '#5AE677',
    width: 20,
  },
});
