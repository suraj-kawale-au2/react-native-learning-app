import React , { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button , FlatList} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


export default function App() {
  const [allGoals, setAllGoals] = useState([]);

  const addGoalHandler = currentGoal => {
      setAllGoals(allGoals => [...allGoals,
        { id: Math.random().toString(), value: currentGoal }
      ]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput
        addGoalHandler={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={allGoals} 
        renderItem={itemData => (<GoalItem goal={itemData.item.value}/>)} 
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
  goalList:{
    marginTop:20
  },
})

