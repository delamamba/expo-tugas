import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      
      {/* Static Fonts */}
      <Text 
      style={{ fontFamily: "lato-bold", fontSize: 24 }}>
        Azzah Aulia
        105841105022</Text>
      <Text 
      style={{ fontFamily: "OpenSans_Condensed-Bold", fontSize: 24 }}>
        Syauqiyah Mujahidah Yahya
        105841105122</Text>
      <Text 
      style={{ fontFamily: "poppins-bold", fontSize: 24 }}>
        Mar'atul Azizah
        105841105222</Text>
      <Text 
      style={{ fontFamily: "spacemono-regular", fontSize: 24 }}>
        Fikrah Lejahtegis
        105841105322</Text>
      <Text 
      style={{ fontFamily: "Roboto_Condensed-Bold", fontSize: 24 }}>
        Alya Anandha
        105841105422</Text>

      {/* Variable Fonts */}
      <Text 
      style={{ fontFamily: "ibmplex-variable", fontSize: 24 }}>
        M.Fikri Haikal Ayatullah
        105841105522</Text>
      <Text 
      style={{ fontFamily: "inter-variable", fontSize: 24 }}>
        Muh.Dirham Rahim
        105841105622</Text>
      <Text 
      style={{ fontFamily: "montserrat-variable", fontSize: 24 }}>
        Zaskya Aulia Ashar
        105841105722</Text>
      <Text 
      style={{ fontFamily: "raleway-variable", fontSize: 24 }}>
        Muh.Ilham Akbar
        105841105822</Text>
      <Text 
      style={{ fontFamily: "sora-variable", fontSize: 24 }}>
        Zelvia
        105841105922</Text>
    </ScrollView>
  );
}
