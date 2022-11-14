import * as ReactNative from "react-native";
import * as ExpoRouter from "expo-router";
import { useSession } from "../../session";

export default function Page() {
  const [, setSession] = useSession();
  return (
    <ReactNative.Pressable onPress={() => setSession(true)}>
      <ReactNative.Text>Sign in</ReactNative.Text>
    </ReactNative.Pressable>
  );
}
