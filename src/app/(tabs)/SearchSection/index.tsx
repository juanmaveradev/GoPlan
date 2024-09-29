import { View, FlatList } from "react-native";
import plans from "@assets/data/plans";
import PlanListItem from "@components/PlanListItem";

export default function MainScreen() {
  return (
    <View>
      <FlatList 
        data={plans}
        renderItem={({item}) => <PlanListItem plan={item} />}
      />
    </View>
  );
}

