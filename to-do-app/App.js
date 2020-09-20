import React , { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button , FlatList} from 'react-native';

export default function App() {
  const [currentGoal, setGoal] = useState('');
  const [allGoals, setAllGoals] = useState([]);

  const goalInputHandler = text => {
    setGoal(text);
  }

  const addGoalHandler = () => {
    if(currentGoal !== ''){
      setAllGoals(allGoals => [...allGoals,
        { id: Math.random().toString(), value: currentGoal }
      ]);
      setGoal('');
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}> 
      <TextInput 
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={currentGoal}
      />
      <Button
        title="ADD"
        onPress={addGoalHandler}
        style={styles.addButton}
      />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={allGoals} 
        renderItem={itemData => (
          <View style={styles.listItem} >
            <Text>{itemData.item.value}</Text>
          </View>
        )} 
        style={styles.goalList}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    paddingTop : 100,
    paddingHorizontal : 10,
  },
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
  goalList:{
    marginTop:20
  },
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
  }
})

