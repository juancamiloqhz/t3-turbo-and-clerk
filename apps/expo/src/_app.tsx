import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "./utils/cache";
import { CLERK_PUBLISHABLE_KEY } from "./constants";
import Navigation from "./navigation";

export const App = () => {
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <>
            <SignedIn>
              <TRPCProvider>
                <SafeAreaProvider>
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="Account" component={AccountScreen} />
                  <StatusBar />
                </SafeAreaProvider>
              </TRPCProvider>
            </SignedIn>
            <SignedOut>
              <Stack.Screen name="Login" component={SignInSignUpScreen} />
            </SignedOut>
          </>
        </Stack.Navigator>
      </NavigationContainer> */}
    </ClerkProvider>
  );
};
