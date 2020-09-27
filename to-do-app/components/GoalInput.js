import React , { useEffect, useState } from 'react';
import { TextInput , View , Button , StyleSheet , Modal } from 'react-native';
import SmallButton from './smallButton';

const GoalInput = props => {

	const [currentGoal, setGoal] = useState('');

	const goalInputHandler = text => {
    setGoal(text);
	}
	
	useEffect(() => {
		if(!props.modalVisible){
			setGoal('');
		}
	},[props.modalVisible]);

	return (
		<Modal
		 animationType="slide"
		 visible={props.modalVisible}
		 style={styles.modalStyles}>
		<View style={styles.inputContainer}> 
			<TextInput 
				placeholder="Add Todays Goal 😊"
				style={styles.input}
				onChangeText={goalInputHandler}
				value={currentGoal}
			/>
			<SmallButton
			 title ="ADD"
			 onPress={()=>props.addGoalHandler(currentGoal)}
			/>
		</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	modalStyles:{
   backgroundColor : '#1f2a34',
	},
	inputContainer:{
		backgroundColor : '#1f2a34',
		flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  input:{
    borderRadius:5,
    backgroundColor:'#d4d4d4',
		height:40,
		width:'90%',
    padding:5,
		textAlign:'center',
		marginBottom : 2,
		fontSize : 14,
  },
  addButton : {
    backgroundColor : '#19bced',
    color:'white',
  },
})

export default GoalInput
