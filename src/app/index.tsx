import { StyleSheet, Text, View, Image } from "react-native";


export default function App(){
    return (

        <View style={myStyle.container}>
            <Text style={myStyle.title}>kandanai thalad</Text>

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