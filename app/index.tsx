import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Home = () => (
  <>
    <SafeAreaView className="flex-1 bg-white space-y-5" edges={["top"]}>
      <StatusBar style="dark" />
      <View className="flex-row justify-between items-center mx-5">
        <Text className="text-black">Nishant</Text>
      </View>
    </SafeAreaView>
  </>
);

export default Home;
