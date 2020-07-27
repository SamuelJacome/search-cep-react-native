

import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity

} from 'react-native';
import api from './src/services/api'


function App(){
  const[cep, setCep] = useState(null);
  const inputRef = useRef(null);


   
   async function getCep(){
    try{
      const response = await api.get(`/${cep}/json`)
      console.log(response)
      setCep(response.data)
      return;
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
      <Text style={{textAlign: 'center', fontSize: 25}}>Search any Cep</Text>
      <TextInput style={styles.input}
      value={cep}
      onChangeText = {(text)=> setCep(text)}
      keyboardType="numeric"
      ref={inputRef}
    
      />
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


    {cep && 
    
    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
    <Text style={{fontSize: 22}}>
      CEP: {cep.cep}
    </Text>

    <Text style={{fontSize: 22}}>
      Logadouro: {cep.logradouro}
    </Text>

    <Text style={{fontSize: 22}}>
      Bairro: {cep.bairro}
    </Text>

    <Text style={{fontSize: 22}}>
      Cidade: {cep.localidade}
    </Text>

    <Text style={{fontSize: 22}}>
      Estado: {cep.uf}
    </Text>

    </View>
    
    
    
    
    }
 

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