import { useLocalSearchParams, Link } from "expo-router";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import plans from "@assets/data/plans";
import { defaultPlanImage } from "@components/PlanListItem";
import CustomText from "@components/CustomText";
import Colors from "src/constants/Colors";

const PlanDetailScreen = () => {
  const { idPlan } = useLocalSearchParams();

  const plan = plans.find((p) => p.id.toString() === idPlan);
  if (!plan) {
    return <Text>Plan not founded</Text>;
  }

  return (
    <ScrollView>
      <Image
        source={{ uri: plan.image || defaultPlanImage }}
        style={styles.image}
      />
      <View style={styles.infocontainer}>
        <CustomText style={styles.title}>{plan.name}</CustomText>
        <CustomText style={styles.location}>
          {plan.placeType + " | " + plan.location}
        </CustomText>
        <CustomText style={styles.description}>{plan.description}</CustomText>

      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.linkContainer}>
          <Link href={'./planMap'} style={styles.link}>
            <CustomText>Mapa</CustomText>
          </Link>
        </View>
        <View style={styles.addPlanContainer}>
          <TouchableOpacity>
            <CustomText style={styles.button}>Agregar a Mis Planes</CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  infocontainer: {
    paddingTop: 7,
    marginLeft: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1.8,
  },
  title: {
    fontSize: 23,
    fontWeight: "900",
    color: '#303030',
  },
  location: {
    color: Colors.light.tint,
    fontSize: 18,
  },
  description: {
    paddingTop: 10,
    fontSize: 17,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly', // Asegúrate de que haya espacio entre los botones
    width: '100%', // Asegúrate de que el contenedor ocupe el 100%
  },
  linkContainer: {
    backgroundColor: '#876750',
    padding: 16,
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 30,
    width: '25%'
  },
  link: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  button: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  addPlanContainer: {
    marginTop: 30,
    backgroundColor: '#0B6623',
    padding: 16,
    alignItems: 'center',
    borderRadius: 100,
    width: '60%',
    
  },

});

export default PlanDetailScreen;
