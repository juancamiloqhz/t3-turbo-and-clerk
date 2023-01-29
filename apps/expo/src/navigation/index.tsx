import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LinkingConfiguration from "./LinkingConfiguration";
import { ClerkLoaded, useUser } from "@clerk/clerk-expo";
import { HomeScreen } from "../screens/home";
import { AccountScreen } from "../screens/account";
import { SignInSignUpScreen } from "../screens/signin";
import { TRPCProvider } from "../utils/trpc";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Read more about the protected routes pattern in React Native
 *
 * https://reactnavigation.org/docs/auth-flow
 */
const RootNavigator = () => {
  const { isSignedIn } = useUser();

  return (
    <ClerkLoaded>
      <TRPCProvider>
        <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Home" }}
              />
              <Stack.Screen
                name="Account"
                component={AccountScreen}
                options={{ title: "MyAccount" }}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={SignInSignUpScreen} />
            </>
          )}
        </Stack.Navigator>
      </TRPCProvider>
    </ClerkLoaded>
  );
};
