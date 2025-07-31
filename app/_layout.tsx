import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
//   return ( <Stack screenOptions= {{ 
//     header : ({navigation}) => (

//     <View style={{
//         height : 60,
//         backgroundColor: '#f8f8f8',
//         justifyContent: 'center',
//         alignItems: 'center',
//     }}>
//         <TouchableOpacity style={{
//             width: 60,
//             marginLeft: 10,
//         }}>
//             <AntDesign name="home" size={24} color="black" />
//         </TouchableOpacity>
//     </View>
//     )
//   }}>
// </Stack>
//   );
// }
return (
    <Stack>
        <Stack.Screen 
            name="(tabs)"
            options={{ 
                headerShown: false,
            }}
        />
        </Stack>
    );
}