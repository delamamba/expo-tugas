import { useState } from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";

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
    setImagesState((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          const newCount = (item.clickCount + 1) % 3;
          return { clickCount: newCount };
        }
        return item;
      })
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" }}>
      <ScrollView contentContainerStyle={{ alignItems: "center", paddingVertical: 30 }}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            width: 330,
          }}
        >
          {primaryImages.map((_, index) => {
            const { clickCount } = imagesState[index];
            const uri = clickCount === 0 ? primaryImages[index] : altImages[index];
            const scale = clickCount === 0 ? 1 : clickCount === 1 ? 1.2 : 1.4;
            const baseSize = 100;
            const size = baseSize * scale;

            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleImagePress(index)}
                activeOpacity={0.8}
                style={{
                  width: baseSize,
                  height: baseSize,
                  margin: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{ uri }}
                  style={{
                    width: size,
                    height: size,
                    borderRadius: 10,
                  }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
