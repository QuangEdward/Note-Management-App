//ManageLabels.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { LABELS } from '../../../data/dummy-data';
import { COlORPICKER, HEIGHT, COLOR } from '../../theme/theme';
import { AntDesign } from '@expo/vector-icons';

const ManageLabels = ({ route, navigation }) => {
  const { labels, updateLabels } = route.params;
  const [selectedLabels, setSelectedLabels] = useState(labels);

  const toggleLabel = (labelId) => {
    setSelectedLabels((prevSelected) => {
      if (prevSelected.includes(labelId)) {
        return prevSelected.filter((id) => id !== labelId);
      } else {
        return [...prevSelected, labelId];
      }
    });
  };

  const saveLabels = () => {
    updateLabels(selectedLabels);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Labels</Text>
      <FlatList
        data={LABELS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.labelItem,
              selectedLabels.includes(item.id) && styles.selectedLabel,
            ]}
            onPress={() => toggleLabel(item.id)}
          >
            {/* <Text style={styles.labelText}>{item.label}</Text> */}
            <Text style={[
              styles.labelText,
              selectedLabels.includes(item.id) && styles.selectedLabelText
            ]}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <TouchableOpacity style={styles.saveButton} onPress={saveLabels}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
          style={styles.saveButton}
          onPress={saveLabels}
        >
          <AntDesign name="checkcircle" size={50} color={COLOR.secondaryYellowHex} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginTop: HEIGHT(5),
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center'
  },
  labelItem: {
    padding: 10,
    borderRadius: HEIGHT(10),
    marginBottom: 10,
    backgroundColor: COLOR.primaryGreyHex,
    borderWidth: 1
  },
  selectedLabel: {
    backgroundColor: COLOR.primaryBlue,
  },
  labelText: {
    color: COLOR.primaryBlackHex,
    alignSelf: 'center'
  },
  selectedLabelText: {
    color: COLOR.primaryWhiteHex, 
  },
  saveButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    flexDirection: 'column',
    alignItems: 'flex-end',
    margin: HEIGHT(5.5),
    marginLeft: HEIGHT(34.4)
  

  },
  saveButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ManageLabels;
