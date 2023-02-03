import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E8E8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    width: 300,
    textAlign: 'center',
    fontFamily: 'Roboto',
    marginBottom: 10,
    color: '#20262E',
  },
  description: {
    fontSize: 20,
    width: 250,
    textAlign: 'center',
    marginBottom: 20,
    color: 'rgba(0,0,0,.6)',
    fontWeight: 'bold',
  },
  switchMode: {
    marginTop: 10,
  },
  switchModeText: {
    color: '#913175',
    fontWeight: 'bold',
  },
  orText: {
    color: 'rgba(0,0,0,.6)',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, 
    borderBottomWidth: 1,
    paddingVertical: 30,
    borderBottomColor: 'rgba(0,0,0,.6)',
  }
});
