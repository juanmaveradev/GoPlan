import { Stack } from "expo-router";

export default function SearchSection() {
  return (
    <Stack> 
      <Stack.Screen
      name='index'
      options={{title: 'GoPlans'}}
      />
    </Stack>
  );
}
