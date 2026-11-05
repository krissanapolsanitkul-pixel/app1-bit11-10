import { StyleSheet, Text, View, Image } from "react-native";


export default function App(){
    return (

        <View style={myStyle.container}>
            <Text style={myStyle.title}>kandanai</Text>

            <Image 
                source={require('@/assets/images/hamster1.jpg')}
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                    borderWidth: 10,
                    borderColor: "lightblue",
                }}
            />
            <Image 
                source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ZPgR5pYHu_bc5jOQzNosh6V3IdhbL7Trfsgyq_TDVg&s=10"}}
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                    borderWidth: 10,
                    borderColor: "lightblue",
                }}
            />
            <View style={{flexDirection: "row"}}>
                <Text>Hamster </Text>
                <Text>Cat </Text>
                <Text>Dag </Text>
                <Text>Bird </Text>
                <Text>Fish </Text>
            </View>
        </View>
    )
}
const myStyle = StyleSheet.create({
    
    container:{
        backgroundColor: "lightyellow",
        flex: 1,
        paddingTop: 80,
        alignItems: "center",
    },
    title:{
        color: "blue", 
        fontSize: 26,
        fontWeight: 800,
        textAlign: "center",
    }
})