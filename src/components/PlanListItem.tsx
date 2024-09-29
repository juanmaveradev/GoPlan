import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Colors from "../constants/Colors";
import { Plan } from "./types";
import { Link } from "expo-router";

export const defaultPlanImage =
  "https://dzpqda01g2dxp.cloudfront.net/images/attractions/4637/photos/4637_0.JPG";

type PlanListItemProps = {
  plan: Plan;
};

const PlanListItem = ({ plan }: PlanListItemProps) => {
  return (
    <View>
      <Link href={`/SearchSection/${plan.id}`} asChild> 
        <Pressable style={styles.imageContainer}>
          <Image
            source={{ uri: plan.image || defaultPlanImage }}
            style={styles.image}
          />
        </Pressable>
      </Link>

      <Pressable style={styles.screenContainer}>
        <Link href={`/SearchSection/${plan.id}`} asChild>
          <View>
            <Text style={styles.title}>{plan.name}</Text>
          </View>
        </Link>

        <Text style={styles.location}>
          {plan.placeType + " | " + plan.location}
        </Text>
      </Pressable>
    </View>
  );
};


export default PlanListItem;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  screenContainer: {
    marginTop: 5,
    marginLeft: 35,
  },
  image: {
    width: "85%",
    aspectRatio: 1.5,
    borderRadius: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: "700",
  },
  location: {
    color: Colors.light.tint,
    fontSize: 18,
  },
});
