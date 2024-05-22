import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import Login from "../screens/Login";
import Register from "../screens/Register";
import DetalhesPets from "../screens/DetalhesPets";

const Tab = createBottomTabNavigator();

const PublicTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,

      }}>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="DetalhesPets" component={DetalhesPets} />


      </Tab.Navigator>

      



      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default PublicTab;