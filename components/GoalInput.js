import { View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        // console.log(enteredText);
        setEnteredGoalText(enteredText);
      };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                {/* <Image source={require('../assets/images/bg.png')} style={styles.image}/> */}
                <TextInput style={styles.textInput} 
                           placeholder='Course Goal' 
                           onChangeText={goalInputHandler} 
                           value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color="blue"/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color="#f31282"/>
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,                     // inner container takes 1/6 of available space of outer container
        justifyContent: 'center',    // vertically centered
        alignItems: 'center',
        backgroundColor: '#311b6b'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 8,
        width: '90%',
        padding: 10,
      },
      buttonContainer: {
        marginTop: 8,
        flexDirection: 'row',
      },
      button: {
        width: '33%',
        marginHorizontal: 8,
      },
      image: {
        width: '100%',
        height: '100%',
        margin: 20,
      }
});