import React from "react";

import { Button, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlashList } from "@shopify/flash-list";
import { useUser } from "@clerk/clerk-expo";

export const AccountScreen = ({ navigation }: AccountProps) => {
  const { user } = useUser();
  return (
    <SafeAreaView className="bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <View className="h-full w-full p-4">
        <Text className="mx-auto pb-2 text-5xl font-bold text-white">
          My <Text className="text-[#cc66ff]">Account</Text>
        </Text>

        <View className="py-2">
          <Text className="font-semibold italic text-white">
            This is my account screen
          </Text>
        </View>
        <Text className="text-white">
          <Text className="font-semibold">User ID:</Text>
          {user?.id}
        </Text>
        <Text className="text-white">
          <Text className="font-semibold">Username:</Text>
          {user?.username}
        </Text>
        <Text className="text-white">
          <Text className="font-semibold">Name:</Text>
          {user?.fullName}
        </Text>
        <Text className="text-white">
          <Text className="font-semibold">Emails:</Text>
          {/* {JSON.stringify(user?.emailAddresses, null, 2)} */}
          {user?.emailAddresses
            ?.map(
              (email) =>
                `${email.emailAddress}, ${email.verification.strategy}`,
            )
            .join(", ")}
        </Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />

        <FlashList
          //   data={postQuery.data}
          estimatedItemSize={20}
          ItemSeparatorComponent={() => <View className="h-2" />}
          renderItem={(p) => (
            <TouchableOpacity onPress={() => console.log("hello")}>
              {[...Array(100).keys()].map((i) => (
                <Text key={i}>Hello</Text>
              ))}
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
