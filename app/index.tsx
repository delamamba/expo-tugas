import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "grey",
          padding: 20,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "blue",
          }}
        >
          105841105422
        </Text>
        <Text
          style={{
            color: "brown",
            fontWeight: "bold",
          }}
        >
          Alya Anandha
        </Text>
      </View>
      {/* Segitiga */}
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 90,
          borderRightWidth: 90,
          borderBottomWidth: 150,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "orange",
          marginTop: 50,
        }}
      />
      {/* Pil */}
      <View
        style={{
          width: 180,
          height: 70,
          backgroundColor: "purple",
          borderRadius: 35,
          marginTop: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          105841105422
        </Text>
      </View>
      {/* Persegi Panjang */}
      <View
        style={{
          width: 200,
          height: 90,
          backgroundColor: "green",
          marginTop: 30,
          borderRadius: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Alya Anandha
        </Text>
      </View>
    </View>
  );
}