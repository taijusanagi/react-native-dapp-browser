import { WebView } from "react-native-webview";

const INJECTED_JAVASCRIPT = `(function() {
  window.sign = (message) => {
    return "signature";
  }
})();`;

export default function App() {
  return (
    <WebView
      source={{
        uri: "http://10.0.2.2:3000",
      }}
      injectedJavaScript={INJECTED_JAVASCRIPT}
    />
  );
}
