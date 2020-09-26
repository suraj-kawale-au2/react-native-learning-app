import React , { useState } from 'react';
import { TextInput , View , Button , StyleSheet } from 'react-native';

const GoalInput = props => {
	
	const [currentGoal, setGoal] = useState('');

	const goalInputHandler = text => {
    setGoal(text);
  }

	return (
		<View style={styles.inputContainer}> 
			<TextInput 
				placeholder="Course Goal"
				style={styles.input}
				onChangeText={goalInputHandler}
				value={currentGoal}
			/>
			<Button
				title="ADD"
				onPress={()=>props.addGoalHandler(currentGoal)}
				style={styles.addButton}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	inputContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  input:{
    borderRadius:5,
    backgroundColor:'#d4d4d4',
    height:35,
    width:'50%',
    padding:5,
    textAlign:'center'
  },
  addButton : {
    backgroundColor : '#19bced',
    color:'white',
  },
})

export default GoalInput
