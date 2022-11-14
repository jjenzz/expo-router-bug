import * as ReactNative from "react-native";
import * as ExpoRouter from "expo-router";

export default function Page() {
  return (
    <ExpoRouter.Link href={"(app)/two"}>
      <ReactNative.Text>Two</ReactNative.Text>
    </ExpoRouter.Link>
  );
}
