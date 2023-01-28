import {
  Pressable,
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Input from '../../ui/Input';
import CenterContainer from '../../ui/CenterContainer';

export const AddTitleAndDescription = ({
  isOpened,
  title,
  setTitle,
  description,
  setDescription,
  handleClose,
  handleSave,
}: AddTitleAndDescriptionProps) => {
  return (
    <Modal visible={isOpened}>
      <CenterContainer>
        <Input placeholder="Title" value={title} onChangeText={setTitle} />
        <Input
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <View style={styles.spaceBetween}>
          <TouchableOpacity
            onPress={handleClose}
            style={[styles.closeButton, styles.groupButton]}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
          <Pressable
            onPress={handleSave}
            style={[styles.saveButton, styles.groupButton]}>
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
        </View>
      </CenterContainer>
    </Modal>
  );
};
interface AddTitleAndDescriptionProps {
  isOpened: boolean;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  handleClose: () => void;
  handleSave: () => void;
}

export const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 20,
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
  closeButton: {
    backgroundColor: '#F55050',
  },
  saveButton: {
    backgroundColor: 'green',
  },
});
