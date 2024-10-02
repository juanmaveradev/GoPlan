import {useLocalSearchParams } from "expo-router";
import { View, Text, Image, StyleSheet, ScrollView  } from "react-native";
import plans from "@assets/data/plans";
import { defaultPlanImage } from "@components/PlanListItem";
import Button from "@components/Button";
import Colors from "src/constants/Colors";
import MapView from 'react-native-maps'


const PlanDetailScreen = () => {
  const { idPlan } = useLocalSearchParams();

  const plan = plans.find((p) => p.id.toString() === idPlan);
  if (!plan) {
    return <Text>Plan not founded</Text>;
  }

  
  return (
    <ScrollView >
      <Image
        source={{ uri: plan.image || defaultPlanImage }}
        style={styles.image}
      />
      <View style={styles.infocontainer}>
        <Text style={styles.title}>{plan.name}</Text>
        <Text style={styles.location}>
          {plan.placeType + " | " + plan.location}
        </Text>
        <Text style={styles.description}>{plan.description}</Text>
      </View>

    

      <Button text="Agregar a Mis Planes"/>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {},
  infocontainer: {
    paddingTop: 7,
    marginLeft: 20
  },
  image: {
    width: "100%",
    aspectRatio: 1.8,
  },
  title: {
    fontSize: 23,
    fontWeight: "700",
    color: '#303030'
  },
  location: {
    color: Colors.light.tint,
    fontSize: 18,
  },
  description: {
    paddingTop: 10,
    fontSize: 17
  },
  map: {
    width: '100%',
    height: 200,
    marginTop: 30,

  }
});

export default PlanDetailScreen;
