import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'


const PlanDetailScreen = () => {
  const {idPlan} = useLocalSearchParams ();

  return (
    <View>

      
      <Text>PLAN {idPlan}</Text>
    </View>
  )
}

export default PlanDetailScreen