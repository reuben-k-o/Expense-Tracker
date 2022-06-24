import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AllExpenses from "./screens/AllExpenses";
import ManageExpense from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AllExpenses" component={AllExpenses} />
        <Stack.Screen name="ManageExpense" component={ManageExpense} />
        <Stack.Screen name="RecentExpenses" component={RecentExpenses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
