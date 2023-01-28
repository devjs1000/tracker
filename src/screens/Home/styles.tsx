import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

  text: {
    color: 'white',
    fontSize: 20,
  },
  title: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.8)',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#rgba(0,0,0,0.5)',
    textAlign: 'center',
  },
  about: {
    marginVertical: 10,
    width: '90%',
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: 'white',

    padding: 10,
  },
  spaceBetween: {
    flexDirection: 'row',
    width: 300,
  },
  groupButton: {
    flexGrow: 1,
    borderRadius: 10,
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    padding: 10,
  },
  close: {
    backgroundColor: '#F55050',
  },
  save: {
    backgroundColor: 'green',
  },
});
