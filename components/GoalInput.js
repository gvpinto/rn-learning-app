import { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal, Image } from 'react-native';

function GoalInput({ onAddGoal, visible, onCancel }) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  return (
    <Modal
      visible={visible}
      animationType='slide'
    >
      <View style={styles.inputContainer}>
        {/* Image path should be relative to the file location */}
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Enter a goal'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Cancel'
              onPress={onCancel}
              color='#f31282'
            />
          </View>
          <View style={styles.button}>
            <Button
              title='Add Goal'
              onPress={addGoalHandler}
              color='#955edc'
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '100%',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    marginTop: 16,
    width: '50%',
  },
});
export default GoalInput;
