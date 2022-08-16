import { SafeAreaView, Text, StyleSheet, StatusBar, ScrollView, } from "react-native";

import Contato from "./Contato";

export default function App (){

  const contatos = [
    {
      id: 1,
      name: 'Baby Yod',
      contact: '+55 47 98860-1010',
      Image: require ("./assets/babyoda.jpg"),
    },
    {
      id: 2,
      name: 'Bob Esponja',
      contact: '+55 47 98860-1020',
      Image: require ("./assets/bobesponja.png"),
    },
    {
      id: 3,
      name: 'Capitão América',
      contact: '+55 47 98860-1030',
      Image: require ("./assets/capitaoamerica.png"),
    },
    {
      id: 4,
      name: 'Dead Pool',
      contact: '+55 47 98860-1040',
      Image: require ("./assets/deadpool.png"),
    },
    {
      id: 5,
      name: 'Dog loko',
      contact: '+55 47 98860-1050',
      Image: require ("./assets/dogalho.jpeg"),
    },
    {
      id: 6,
      name: 'Groot',
      contact: '+55 47 98860-1060',
      Image: require ("./assets/groot.png"),
    },
    {
      id: 7,
      name: 'Hagrid',
      contact: '+55 47 98860-1070',
      Image: require ("./assets/hagrid.jpg"),
    },
    {
      id: 8,
      name: 'Patrick',
      contact: '+55 47 98860-1080',
      Image: require ("./assets/patrick.png"),
    },
    {
      id: 9,
      name: 'Lula Molusco',
      contact: '+55 47 98860-1090',
      Image: require ("./assets/lulamolusco.png"),
    },
    {
      id: 10,
      name: 'Lord Valdemort',
      contact: '+55 47 98860-1000',
      Image: require ("./assets/valdemort.jpg"),
    },
  ]


  return (
    <SafeAreaView style={styles.app}>
      <StatusBar style= 'auto' backgroundColor="#AD7A5A" />
    
        <Text style={styles.title}>Meus contatos  🔍</Text>
        
        <ScrollView>
        {
          contatos.map((contato) => (<Contato contato={contato} />))
        }
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  app: {
    backgroundColor: '#D1FEFF',
    flex: 1,
  },

  title: {
    fontSize: 30,
    height: 80,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#6CACAD',
    padding: 20,
  },
});