import { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

function GoalInput({ onAddGoal }) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Enter a goal'
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button
        title='Add Goal'
        onPress={addGoalHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
export default GoalInput;
