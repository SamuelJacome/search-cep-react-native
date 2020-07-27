

import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity

} from 'react-native';
import cep from  'cep-promise';
import api from './src/services/api'


function App(){
  const[cep_, setCep] = useState('');
  const[response, setResponse] = useState([]);
  const inputRef = useRef(null);

  cep(5010000)
  .then(console.log)
   
   function getCep(){
    try{
      const consulta = cep(`${cep_}`)
      console.log(consulta)
      alert(consulta.data)
      
    }catch(error){
      console.log(`ERROR ${error}`)

    }
   
      return;
  }
  function cleanInput(){
    setCep('')
    inputRef.current.focus();
  }
  return(
    <View style={styles.container}>
      <Text>Search any Cep</Text>
      <TextInput style={styles.input}
      value={cep_}
      onChangeText = {(text)=> setCep(text)}
      keyboardType="numeric"
      ref={inputRef}
    
      />
      <View style={styles.botao}>
      <View style={styles.alignButton}>
      

      <View>
      <TouchableOpacity style={[styles.button,{    backgroundColor: '#5C7BF8'}]}
      title='Search'
      onPress={getCep}>

        <Text style={{color:'#FFF', textAlign: 'center'}}>Search</Text>
      </TouchableOpacity>

      </View>
      <View>
      <TouchableOpacity style={[styles.button, {backgroundColor: 'red' }]}
      title='Clean Up'
      onPress={cleanInput}
      color='danger'
      
      >

        


        <Text style={{color:'#FFF'}}>Clean Up</Text>
         
      </TouchableOpacity>
      </View>

    </View>

    </View>

  
    <View style={{}}>
      <Text>
        {response.state}
      </Text>

    </View>

    </View>
  )
}

export default App;


const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  input:{
    borderWidth:1, 
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    borderRadius: 15,
    borderColor: '#94A0D2'
  },
  alignButton:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    alignItems: 'center'
  },
  button:{
    height: 50,
    alignItems:'center',
    padding: 15,
    borderRadius: 10,
  },



  botao:{
    alignItems: 'center', 
    justifyContent: 'center',

  }
})