import React from 'react';
import { View , Text , StyleSheet , TouchableOpacity} from 'react-native';

const GoalItem = props => {
    return (
			<TouchableOpacity onPress={()=>props.onDelete(props.goalId)}>
        <View style={styles.listItem} >
            <Text>{props.goal}</Text>
        </View>
			</TouchableOpacity>
    )
}

const styles = StyleSheet.create({
	listItem:{
		borderLeftWidth : 5,
		borderBottomLeftRadius : 2,
		borderTopLeftRadius : 2,
		borderLeftColor : '#1B9CFC',
		backgroundColor : '#ffdd59',
		borderStyle: 'solid',
		marginVertical : 10,
		height : 40,
		alignItems:"center",
		justifyContent : 'center',
	},
})

export default GoalItem;
