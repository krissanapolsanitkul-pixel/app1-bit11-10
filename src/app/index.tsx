//นำเข้า {วิว , ข้อความ} จาก ชื่อไลบารี่
import { Background } from 'expo-router/build/react-navigation/index.js';
import { Image, StyleSheet, Text, View } from 'react-native';

//(หน้าขาวๆ) exportส่งออก defaultเริ่มต้น functionฟังก์ชั่น Appชื่อฟังก์ชั่น
export default function App() {
  return (
    <View style={homeStyle.container}>


      {/* ใส่ภาพจากไฟล์ */}
      <Image
        source={{ uri: "https://e-sis.e-tech.ac.th/etech/Moduls/studentPhotos/photo/2569/6911670183738.jpg" }}
        style={{
          width: 200, //กว้าง
          height: 200, //สูง
          borderRadius: 300, //โค้ง
          borderWidth: 10,
          borderColor: "black",
        }}
      />

      {/* ใส่ข้อความ */}
      <Text style={homeStyle.title}>krissanapol sanitkul</Text>
      <Text>😍xx</Text>

      <View style={homeStyle.ga}>
        <Text style={{ margin: 5 }}> ห้อง BIT.1/1 เลขที่10  </Text>
        <Text style={{ margin: 5 }}> Email: krissanapol.sanitkul@e-tech.ac.th </Text>
        <Text style={{ margin: 5 }}> Phone: 06x-xxx-xxxxx </Text>
      </View>

      <Text style={{ fontSize: 25, fontWeight: 700, margin: 5 }}>ภาพกิจกรรม</Text>

      <View style={{ flexDirection: "row" }}>

        {/* ใส่รูปจากเว็ป */}
        <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5lyzxkLkfpR4TtwfL6iu6ysKjC9NWoimfMoQinssLnQ&s=10" }}
          style={{
            width: 120, //กว้าง
            height: 120, //สูง
            borderRadius: 20, //โค้ง
            margin: 5
          }}
        />

        <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfDQNmImDzfvAnm91kvj1f9EBip1sO1_lLVf-OY5VUGg&s=10" }}
          style={{
            width: 120, //กว้าง
            height: 120, //สูง
            borderRadius: 20, //โค้ง
            margin: 5
          }}
        />

        <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5SePDdb4eC2AU8PP87kn9K3aVGmrwBldoqtIXxjGD3w&s=10" }}
          style={{
            width: 120, //กว้าง
            height: 120, //สูง
            borderRadius: 20, //โค้ง
            margin: 5
          }}
        />

      </View>

    </View>
  )
}

//สร้างสไตล์ตกแต่ง
const homeStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1, //ขยายพื้รที่
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "black", // สีอักษร
    fontSize: 32, //ขนาดอักษร
    fontWeight: 700, // ความหนาอักษร 100-900
    fontStyle: "italic", //เสียง
    textAlign: "center"
  },

  ga: {
    backgroundColor: "gray",
    padding: 10,
    margin: 20,
    width: 400,
    borderRadius: 10,
  }
})