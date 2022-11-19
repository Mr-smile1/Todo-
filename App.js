// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.dummyText}>hello 2</Text>     
//       <Text>hello</Text>
//       <Text style={{margin: 1, padding:10, borderWidth: 2, borderColor: 'red'}}>hello 3</Text>
//       <StatusBar style="auto" />
//       <Button title='Tap me!' />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   dummyText: {
//     margin: 1, 
//     padding:10, 
//     borderWidth: 2, 
//     borderColor: 'orange'
//   }
// });

// https://www.youtube.com/watch?v=VozPNrt-LfE

import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    // console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    setModelIsVisible(false);
  }

  function deleteGoalHandler(id) {
    // console.log('DELETE')
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  const [modelIsVisible, setModelIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModelIsVisible(true);
  }

  function endAddGoalHandler() {
    setModelIsVisible(false);
  }

  return (
    <>
    <StatusBar style="light" />

    <View style={styles.appContainer}>

      <Button title='Add New Goal' color="#a065ec" onPress={startAddGoalHandler}/>

      <GoalInput visible={modelIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/> 

      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} 
                  renderItem={(itemData) => {
          return (
            <GoalItem 
              text={itemData.item.text} 
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
            />
          );
        }}
        />
            
      </View>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,                     // outer container takes all available space of device
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 5,                   // inner container takes 5/6 of available space of device(outer container)
  },
});
