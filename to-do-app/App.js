import React , { useState } from 'react';
import { StyleSheet, View,FlatList} from 'react-native';
import AppButton from './components/appButton';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


export default function App() {
  const [allGoals, setAllGoals] = useState([]);
  const [modalVisible, setmodalVisible] = useState(false)

  const addGoalHandler = currentGoal => {
    if(currentGoal !== ''){
      setAllGoals(allGoals => [...allGoals,
        { id: Math.random().toString(), value: currentGoal }
      ]);
    }
    setmodalVisible(false);
  }

  const removeGoal = goalId => {
    setAllGoals(allGoals=>allGoals.filter(goal=>goal.id !== goalId))
  }

  return (
    <View style={styles.screen}>
      <AppButton title="ADD GOALS TO THE LIST" onPress={()=>setmodalVisible(true)}/>
      <GoalInput
        addGoalHandler={addGoalHandler}
        modalVisible={modalVisible}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={allGoals} 
        renderItem={itemData => (<GoalItem goalId={itemData.item.id} onDelete={removeGoal}goal={itemData.item.value}/>)} 
        style={styles.goalList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    paddingTop : 100,
    paddingHorizontal : 10,
    backgroundColor : '#0a1520',
    height : '100%'
  },
  goalList:{
    marginTop:20
  },
})

