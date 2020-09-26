import React from 'react';
import { View , Text , StyleSheet} from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.listItem} >
            <Text>{props.goal}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
	listItem:{
		backgroundColor : '#ccc',
		borderStyle: 'solid',
		borderColor : '#273143',
		borderWidth : 2,
		borderRadius : 5,
		marginVertical : 10,
		height : 40,
		alignItems:"center",
		justifyContent : 'center',
	},
})

export default GoalItem;
