import * as ReactNative from "react-native";
import * as ExpoRouter from "expo-router";
import { useSession } from "../../session";

export default function Page() {
  const [hasSession, setSession] = useSession();
  return (
    <ReactNative.Pressable onPress={() => setSession(false)}>
      <ReactNative.Text>Sign out</ReactNative.Text>
    </ReactNative.Pressable>
  );
}
