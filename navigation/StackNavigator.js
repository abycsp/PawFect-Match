import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import WalkthroughScreen from "../screens/WalkthroughScreen"; // Import the WalkthroughScreen
import ChatScreen from "../screens/ChatScreen";
import LoginScreen from "../screens/LoginScreen";
import ModalScreen from "../screens/ModalScreen";
import useAuth from "../hooks/useAuth";
import MatchScreen from "../screens/MatchScreen";
import MessageScreen from "../screens/MessageScreen";
import ProfileDetailScreen from "../screens/profiledetailscreen";
import MainScreen from "../screens/MainScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import ContactUsScreen from "../screens/ContactUsScreen"; // Import the ContactUsScreen
import HomeScreen from "../screens/HomeScreen"; // Import the HomeScreen
import DogBreedGuideScreen from "../screens/DogBreedGuideScreen"; // Import the DogBreedGuideScreen


const Stack = createStackNavigator();

const StackNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        <>
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
            <Stack.Screen name="Message" component={MessageScreen} />
          </Stack.Group>
          <Stack.Group
            screenOptions={{
              presentation: "modal",
            }}
          >
            <Stack.Screen name="Modal" component={ModalScreen} />
          </Stack.Group>
          <Stack.Group
            screenOptions={{
              presentation: "transparentModal",
            }}
          >
            <Stack.Screen name="Match" component={MatchScreen} />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen
              name="profiledetail"
              component={ProfileDetailScreen}
            />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
            />
          </Stack.Group>
          {/* Add AboutUsScreen to the stack */}
          <Stack.Group>
            <Stack.Screen
              name="AboutUs"
              component={AboutUsScreen}
            />
          </Stack.Group>
          {/* Add ContactUsScreen to the stack */}
          <Stack.Group>
            <Stack.Screen
              name="ContactUs"
              component={ContactUsScreen}
            />
          </Stack.Group>
          <Stack.Group>
  <Stack.Screen
    name="DogBreedGuide"
    component={DogBreedGuideScreen}
  />
</Stack.Group>
        </>
      ) : (
        <>
          <Stack.Screen name="Walkthrough" component={WalkthroughScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;