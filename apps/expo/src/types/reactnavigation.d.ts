type RootStackParamList = {
  Root: undefined;
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: "latest" | "top" } | undefined;
  Account: undefined;
  Login: undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

type AccountProps = NativeStackScreenProps<RootStackParamList, "Account">;
