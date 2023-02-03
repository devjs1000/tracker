import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#20262E',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    width: 300,
    textAlign: 'center',
    fontFamily: 'Roboto',
    marginBottom: 10,
    color: '#fff',
  },
  description: {
    fontSize: 20,
    width: 250,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
    fontWeight: '400',
  },
  switchMode: {
    marginTop: 10,
    backgroundColor: '#20262E',
    padding: 6,
    borderRadius: 100,
    // width: 150,
    width:'100%'
  },
  switchModeText: {
    color: '#fff',
    fontWeight: '300',
    textAlign: 'center',
    fontSize: 20,
    borderBottomColor: 'rgba(255,255,255,0.6)',
    borderBottomWidth: 1,
  },
  orText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingVertical: 30,
    borderBottomColor: '#fff',
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
