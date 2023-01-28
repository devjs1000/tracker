import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Accordion = ({
  children,
  dateData,
  title,
  defaultIsOpen,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = React.useState(defaultIsOpen);
  if (isOpen)
    return (
      <>
        <HistoryBox
          dateData={dateData}
          title={title}
          setIsOpen={() => setIsOpen(false)}
        />
        {children}
      </>
    );
  return (
    <HistoryBox
      dateData={dateData}
      title={title}
      setIsOpen={() => setIsOpen(true)}
    />
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#86A3B8',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

interface AccordionProps {
  children: React.ReactNode;
  dateData: any;
  title: string;
  defaultIsOpen: boolean;
}

const HistoryBox = ({dateData, title, setIsOpen}: HistoryBoxProps) => {
  return (
    <Pressable onPress={setIsOpen}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{dateData?.length}</Text>
      </View>
    </Pressable>
  );
};

interface HistoryBoxProps {
  dateData: any;
  title: string;
  setIsOpen: any;
}
