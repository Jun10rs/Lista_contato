import { View, Image, StyleSheet, Text } from "react-native"

export default function Contatos ({contato}){
    return (

        <View style={styles.container} key= {contato.id}>
            <Image
                style={styles.photo}
                source={contato.Image}
            />
            <View>
                <Text style={styles.textContato} numberOfLines={1} ellipsizeMode='tail'>
                    {contato.name}
                </Text>

                <Text style={styles.textNumber} dataDetectorType="phoneNumber">{contato.contact}</Text>

            </View>
        </View>

    )
}

const styles=StyleSheet.create({

    container: { 
        backgroundColor: '#6CACAD',
        flexDirection: "row",
        borderColor: "#AD7A5A",
        borderWidth: 3,
        width: "90%",
        alignSelf: "center",
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
      },

    textContato: {
        fontSize:22,
        textAlign: "justify",
        marginLeft: 30,
      },
    
      textNumber: {
        fontSize: 16,
        textAlign: "justify",
        marginLeft: 30,
      },
     
      photo: {
        width: 50,
        height:50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black'
        
      },


})