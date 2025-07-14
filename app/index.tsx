import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const primaryImages = [
    "https://superlive.id/storage/superadventure/2018/12/12/d26d01b760a1.jpg",
    "https://www.masuksini.com/image/large/rumah%20adat%20di%20indonesia.jpg",
    "https://unimmafm.com/wp-content/uploads/2022/01/foto-Jepang-foto-utama.jpg",
    "https://ik.imagekit.io/tvlk/blog/2021/11/Destinasi-Wisata-Swiss-Gunung-Pilatus-Shutterstock.jpg?tr=dpr-2,w-675",
    "https://blog.bookingtogo.com/wp-content/uploads/2021/05/tempat-wisata-di-bali-yang-wajib-dikunjungi.jpg",
    "https://thumbs.dreamstime.com/b/suleymaniye-mosque-sultanahmet-district-old-town-istanbul-turkey-sunset-istanbul-turkey-suleymaniye-mosque-beautiful-288183212.jpg",
    "https://img2.beritasatu.com/cache/beritasatu/960x620-3/25012012145235.jpg",
    "https://blog.antavaya.com/wp-content/uploads/2020/02/1-Destinasi-Wisata-Populer-di-Korea-Namsan-Tower.jpg",
    "https://id.changiairport.com/content/dam/cag-id/travel-journal/idca/15-tempat-wisata-terbaik-di-prancis-eksplorasi-keindahannya/Insider-Point_1.jpg",
  ];

  const altImages = [
    "https://i.pinimg.com/originals/b5/4b/94/b54b9443c21137683ed2a8e1a3a65aba.jpg",
    "https://d3p0bla3numw14.cloudfront.net/news-content/img/2020/09/02004028/Rumah-Adat-Sumatera-Utara-1.jpg",
    "https://www.megainsurance.co.id/po-content/uploads/anime_jepang_1.jpg",
    "https://2.bp.blogspot.com/-fctukVnqljU/W8_eY8CKYQI/AAAAAAAAOhs/9dYpUCjawuoFU2stxU9-VsL---zD8q3gQCLcBGAs/s1600/FB_IMG_1540349347941.jpg",
    "https://4.bp.blogspot.com/-AQSN93Nabck/VMC_lqEt3XI/AAAAAAAACAc/AR22j1fZvoE/s1600/Bali.jpg",
    "https://images.tokopedia.net/img/KRMmCm/2023/8/9/cd04bcaa-5585-4f91-8ba7-f288107cf693.png",
    "https://unimmafm.com/wp-content/uploads/2022/06/3281645-scaled.jpg",
    "https://digitalmama.id/wp-content/uploads/2024/05/Wisata-alam-di-Korea.png",
    "https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/11/perancis-7-Get-Your-Guide-696x522.jpg",
  ];

  const [imagesState, setImagesState] = useState(
    primaryImages.map(() => ({
      clickCount: 0,
    }))
  );

  const handleImagePress = (index: number) => {
    setImagesState((prevState) =>
      prevState.map((item, i) => {
        if (i === index) {
          const newClickCount = (item.clickCount + 1) % 3;
          return { clickCount: newClickCount };
        }
        return item;
      })
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        
        {/* Segitiga */}
        <View style={{
          width: 0, height: 0, marginTop: 40,
          borderLeftWidth: 35, borderRightWidth: 35, borderBottomWidth: 50,
          borderLeftColor: "transparent", borderRightColor: "transparent", borderBottomColor: "yellow",
        }} />

        {/* Pil */}
        <View style={{
          width: 90, height: 35, backgroundColor: "purple",
          borderRadius: 17.5, marginTop: 20, justifyContent: "center", alignItems: "center",
        }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>
            105841105422
          </Text>
        </View>

        {/* Persegi Panjang */}
        <View style={{
          width: 100, height: 40, backgroundColor: "green", marginTop: 20,
          borderRadius: 5, justifyContent: "center", alignItems: "center",
        }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
            Alya Anandha
          </Text>
        </View>
        
        {/* Dua gambar */}
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Image style={{ width: 300, height: 250, marginRight: 10 }}
            source={{ uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105422_.jpg?1751871436" }} />
          <Image style={{ width: 300, height: 250, marginLeft: 10 }}
            source={{ uri: "https://www.gifcen.com/wp-content/uploads/2022/01/wallpaper-gif-9.gif" }} />
        </View>
        {/* Grid 3x3 */}
        <View style={{
          flexDirection: "row", flexWrap: "wrap", justifyContent: "center",
          marginTop: 30, paddingBottom: 50, width: 360
        }}>
          {primaryImages.map((_, index) => {
            const { clickCount } = imagesState[index];
            const isPrimary = clickCount === 0;
            const scale = clickCount === 0 ? 1 : clickCount === 1 ? 1.2 : 1.4;
            return (
              <TouchableOpacity
                key={index} onPress={() => handleImagePress(index)}
                activeOpacity={0.8}
                style={{
                  width: 100, height: 100, margin: 10,
                  justifyContent: "center", alignItems: "center",
                }}
              >
                <Image
                  source={{ uri: isPrimary ? primaryImages[index] : altImages[index] }}
                  style={{
                    width: 100, height: 100, borderRadius: 10,
                    transform: [{ scale }],
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
