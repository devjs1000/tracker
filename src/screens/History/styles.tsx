import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20262E',
    minHeight: 700,
    width: 'auto',
    margin: 10,
  },
  dateContainer: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#20262E',
  },
  dateText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  taskContainer: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#20262E',
  },

  taskText: {
    color: '#20262E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    color: '#20262E',
    fontWeight: '900',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    fontSize: 16,
    width: '80%',
    overflow: 'hidden',
    paddingVertical: 5,
    borderRadius: 20,
  },
  description: {
    fontWeight: '400',
    height: 50,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  scrollView: {
    backgroundColor: '#20262E',
  },
  badge: {
    backgroundColor: '#913175',
    color: '#fff',
    padding: 5,
    height: 30,
    width: 30,
    borderRadius: 15,
    textAlign: 'center',
    fontWeight: '600',
  },
  dateTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actions:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,

  },
  delete:{
    color: '#913175',
    fontWeight: '600',
    fontSize: 16,
  }
});
