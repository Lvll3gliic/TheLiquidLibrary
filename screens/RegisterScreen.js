import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import {auth} from '../components/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { set, ref, getDatabase} from 'firebase/database';

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')


  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          navigation.replace("Root")
        }
      })
  
      return unsubscribe
    }, [])
    const handleSignUp = () => {
        if(password === passwordConfirm){
            createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
              const user = userCredentials.user;
              const userId = user.uid;
              const database = getDatabase();
              const reference = ref(database, 'users/'+ userId)
              set(reference, {
                email: user.email, 
                savedRecipesIds:[],
              })
            })
            .catch(error => alert(error.message))
        }else{
            alert("Passwords don't match!")
        }
    }

      
  

  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
       <View style={styles.imageContainer}>
      <Image 
               source={require('../assets/1.png')}
               style={styles.image}
              />

      </View>
      <View style={styles.inputContainer}>
        
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm password "
          value={passwordConfirm}
          onChangeText={text => setPasswordConfirm(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        
        <TouchableOpacity
           onPress={handleSignUp}
           style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#000000',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#000000',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 16,
  },
  image:{
    height: 150,
    width: 400,
  },
})