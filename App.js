import * as React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    ScrollView,
} from 'react-native';



const DATA = [
    
    {id: '1', lastname: 'Amang',firstname:'Jesse',add:'Corella, Bohol',},
    {id: '2', lastname: 'Amora',firstname: 'Kent Ivan', add:'Cortes, Bohol',},
    {id: '3', lastname: 'Angcahan', firstname:'Ria Mae', add:'Catigbian, Bohol',},
    {id: '4', lastname: 'Antopina' ,firstname: 'Deborah Jane', add:'Tagbilaran, Bohol',},
    {id: '5', lastname: 'Ayuban', firstname:'Katherine Mae', add:'Dauis, Bohol',},
    {id: '6', lastname: 'Banaga', firstname:'Bernadeth', add:'Loboc, Bohol',},
    {id: '7', lastname: 'Bongcaras', firstname:'Airen Mae', add:'Dauis, Bohol',},
    {id: '8', lastname: 'Bucia', firstname:'James Warren', add:'Cortes, Bohol',},
    {id: '9', lastname: 'Bunol', firstname:'Raymond', add:'Cortes, Bohol',},
    {id: '10', lastname: 'Carbonilla', firstname:'Marlon', add:'Antiquera, Bohol',},
    {id: '11', lastname: 'Coquilla', firstname:'Nathaniel Louise', add:'Antiquera, Bohol',},
    {id: '12', lastname: 'Dalen', firstname:'Rhizabelle Jhaine', add:'Dauis, Bohol',},
    {id: '13', lastname: 'Dela Cruz', firstname:'Mary Anne', add:'Balilihan, Bohol',},
    {id: '14', lastname: 'Dondoyano', firstname:'Sherline Rose', add:'Balilihan, Bohol',} ,
    {id: '15', lastname: 'Escuadro', firstname:'Nelbrey Jillian', add:'Lapaz, Cortes, Bohol',},
    {id: '16', lastname: 'Eusalan', firstname:'Daisy Dianne', add:'Dauis, Bohol',},
    {id: '17', lastname: 'Felisilda', firstname:'Arnold James', add:'Valencia, Bohol',},
    {id: '18', lastname: 'Fuentes', firstname:'Loui', add:'Corella, Bohol',},
    {id: '19', lastname: 'Garcia', firstname:'Rodel', add:'Hanopol, Bohol',},
    {id: '20', lastname: 'Jagunos', firstname:'Joana', add:'Hanopol, Bohol',},
    {id: '21', lastname: 'Juntilla', firstname:'Hershiel Jay', add:'Sevilla, Bohol',},
    {id: '22', lastname: 'Lahoy', firstname:'Sherwen', add:'Cortes, Bohol',},
    {id: '23',  lastname: 'Linog', firstname:'Jesriel', add:'Sevilla, Bohol',},
    {id: '24', lastname: 'Luayon', firstname:'Hazel Mae', add:'Corella, Bohol',},
    {id: '25', lastname: 'Madanguit', firstname:'Rusel Nino', add:'Cortes, Bohol',},
    {id: '26', lastname: 'Magale', firstname:'Pearly Diane', add:'Maribojoc, Bohol',}, 
    {id: '27', lastname: 'Magsino', firstname:'Lovelyn', add:'Catigbian, Bohol',},
    {id: '28', lastname: 'Malanguis', firstname:'Donilyn', add:'Corella, Bohol',},
    {id: '29', lastname: 'Maldora', firstname:'Angelo', add:'Catigbian, Bohol',},
    {id: '30', lastname: 'Marabulas', firstname:'Ailen Mae', add:'Catigbian, Bohol',},
    {id: '31', lastname: 'Maslog', firstname:'Cloyd', add:'Tagbilaran, Bohol',},
    {id: '32', lastname: 'Mirabite', firstname:'Mic Roland', add:'Maribojoc, Bohol',},
    {id: '33', lastname: 'Oring', firstname:'Jea Norene', add:'Boctol, Bohol',},
    {id: '34', lastname: 'Paguican', firstname:'Nicole James', add:'Jagna, Bohol',},
    {id: '35', lastname: 'Pajota', firstname:'Arnel', add:'Tagbilaran, Bohol',},
    {id: '36', lastname: 'Pilipino', firstname:'Jesrel',add:'Tagbilaran, Bohol',},
    {id: '37', lastname: 'Sarabia', firstname:'Earl Mike',add:'Tagbilaran, Bohol',},
    {id: '38', lastname: 'Saraga', firstname:'Sheilo',add:'Catigbian, Bohol',},
    {id: '39', lastname: 'Tabanyag', firstname:'John',add:'Cortes, Bohol',},
    {id: '40',  lastname: 'Tadlas', firstname:'Kenneth',add:'Tagbilaran, Bohol',},
    {id: '41', lastname: 'Tahil', firstname:'Adriane Jane',add:'Hanopol, Bohol' ,},
    {id: '42', lastname: 'Tinaja', firstname:'Ma. Luisa', add:'Tagbilaran, Bohol',},
    {id: '43', lastname: 'Valiente', firstname:'Melrose', add:'Tagbilaran, Bohol',},
];

const Item = ({ lastname, firstname, add }) => (
  <View>
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{lastname}, {firstname}</Text>
      <Text style={styles.listItemAdd}>{add}</Text>
     </View>
     <View></View>
  </View>
);

export default function App() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
        <Text style={styles.text}>List of Guests</Text>
        <ScrollView style={{height:'80%'}}>
            {DATA.map((item) => (
                <Item key={item.id} lastname={item.lastname} firstname={item.firstname} add={item.add} />
            ))}
        </ScrollView>
    </View>
</SafeAreaView>

  )
}

const styles = StyleSheet.create({
container: {
  backgroundColor: 'white',
  alignItems: 'left',
  height: 650,
  marginTop:200,
  width:'150%',

},
text: {
  fontSize: 18,
  color: '#101010',
  marginTop: 5,
  fontWeight: '700',
  fontFamily:'Arial',
  marginBottom:10
},
listItem: {
  marginTop: 15,

  alignItems: 'left',
  backgroundColor: '#fff',
  width: '100%'
},
listItemText: {
    fontSize: 20,
    fontWeight:'bold',
    fontFamily:'Arial'

},
listItemAdd:{
    fontSize:15,
    fontFamily:'Arial'
}

});