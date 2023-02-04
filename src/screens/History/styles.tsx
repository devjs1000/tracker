import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20262E',
    minHeight: 700,
    width: '100%',
  },
  dateContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
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
    backgroundColor: '#E9E8E8',
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#20262E',
    minHeight: 20,
  },

  taskText: {
    color: '#20262E',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    color: '#E9E8E8',
    fontWeight: 'bold',
    backgroundColor: '#CD5888',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  description: {
    fontWeight: '400',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 50,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  timeContainer: {
   

  },
  scrollView:{
    backgroundColor:'#20262E'
  }
});
