import * as React from "react";
import * as ReactNative from "react-native";
import * as ExpoRouter from "expo-router";
import { SessionProvider, useSession } from "../session";

export default function RootLayout() {
  return (
    <SessionProvider>
      <App />
    </SessionProvider>
  );
}

function App() {
  const [hasSession] = useSession();
  return (
    <ReactNative.SafeAreaView style={{ flex: 1 }}>
      <ReactNative.View style={{ flex: 0, marginBottom: 30 }}>
        <ReactNative.Text>is signed in: </ReactNative.Text>
        <ReactNative.Text>{String(hasSession)}</ReactNative.Text>
      </ReactNative.View>
      <ExpoRouter.Stack
        style={{ flex: 1 }}
        screenOptions={{
          headerShown: false,
          animation: "fade",
          contentStyle: { backgroundColor: "transparent" },
        }}
      >
        <ExpoRouter.Stack.Screen name="(app)/index" redirect={!hasSession} />
        <ExpoRouter.Stack.Screen name="sign-up/index" redirect={hasSession} />
      </ExpoRouter.Stack>
    </ReactNative.SafeAreaView>
  );
}
