import Routes from "./src/routes";
import AuthProvider from "./src/contexts/AuthContext";
import CartProvider from "./src/contexts/CartContext";
import GiftProvider from "./src/contexts/GiftContext";
import { useFonts, JosefinSans_300Light, JosefinSans_500Medium, JosefinSans_700Bold } from '@expo-google-fonts/josefin-sans';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    JosefinSans_300Light,
    JosefinSans_500Medium,
    JosefinSans_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <AuthProvider>
      <CartProvider>
        <GiftProvider>
          <Routes />
        </GiftProvider>
      </CartProvider>
    </AuthProvider>
  );
}