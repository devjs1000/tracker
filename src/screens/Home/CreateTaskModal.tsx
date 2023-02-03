import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import {BlurView} from '@react-native-community/blur';

const CreateTaskModal = ({
  showModal,
  setShowModal,
  handleChange,
  handleStart,
}: CreateTaskModalProps) => {
  const closeModal = () => {
    setShowModal(false);
  };

  if (!showModal) return null;
  
  return (
    <>
      <BlurView style={styles.blurView} blurType="dark" blurAmount={30}  />
      <View style={styles.centerContainer}>
        <View style={styles.container}>
          <Input placeholder="title" onChangeText={handleChange('title')} />
          <Input
            multiline
            placeholder="description"
            style={styles.description}
            onChangeText={handleChange('description')}
          />
          <Button onPress={handleStart}>Create Task</Button>
        </View>
      <Pressable style={styles.overlay} onPress={closeModal}></Pressable>
      </View>
    </>
  );
};

export default CreateTaskModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#20262E',
    padding: 20,
    width: 'auto',
    height: 300,
    zIndex: 1,
    borderRadius: 10,
  },

  centerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    opacity: 0.9,
    height: 700,
    width: 400,
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
  },

  description: {
    height: 100,
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

interface CreateTaskModalProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  handleChange: (name: string) => (value: string) => void;
  handleStart: () => void;
}
