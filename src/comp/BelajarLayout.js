import React from 'react';
import { StyleSheet, Text, View, AppRegistry,Button,TextInput } from 'react-native';

export default class Cuaca extends React.Component {

  constructor(props){
      super(props)
      this.state = {
        city:'',
        forecast:{
          main: '-',
          description: '-',
          temp: 0
        }
      };
    }

    getWeather= () =>{
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+ '&appid=0499abffe2167df984d0f720f669548b&units=metric';
    fetch (url)
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
         description: responseJson.weather[0].description,
         temp: responseJson.main.temp,
        }
      });
    });
  }

    render() {
      return (
        <View style={styles.containerMain}>
          <View style={styles.header}>
            <Text style={styles.text1}>Prakiraan Cuaca</Text>
          </View>
          <View style={styles.boxInput}>
            <Text style={styles.text1}>Masukkan Nama Kota</Text>
              <View style={styles.input}>
                <TextInput style = {styles.textInput}
                  onChangeText={(city)=>this.setState({city})}
                />
              </View>
              <Button style={styles.buton}
                onPress={
                  () => this.getWeather()
                }
                title="Lihat"
                color="#2E7D32"
                accessibilityLabel="Klik untuk melihat"
              />
          </View>

          <View style={styles.boxHasil}>
              <Text style = {styles.textHasil} >
              Cuaca = {this.state.forecast.main}
              </Text>

              <Text style = {styles.textHasil} >
              Temp = {this.state.forecast.temp}
              </Text>

              <Text style = {styles.textHasil} >
              Description = {this.state.forecast.description}
              </Text>
          </View>

          <View style={styles.footer}>
            <Text style={styles.text1}>Rusdy ReactNative</Text>
          </View>

        </View>
      );
    }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column',
  },

header: {
    backgroundColor: '#1B5E20',
    flex: 0.5,
    justifyContent: 'center'
  },

  boxInput: {
    backgroundColor: '#1B5E20',
    flex: 2,
    marginTop : 20,
    marginLeft : 10,
    marginRight : 10,
  },

  boxInput1: {
    backgroundColor: '#1B5E20',
    flex: 2,
    marginTop : 20,
    marginLeft : 20,
    marginRight : 20,
  },

  input: {
      flex: 1,
      marginLeft: 70,
      marginRight: 70,
      marginTop: 30,
      marginBottom: 50,
      backgroundColor:'#FFFFFF',
    },

  boxHasil: {
    backgroundColor: '#1B5E20',
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 5,
    marginLeft: 10,
    marginRight:10
  },

  footer: {
    backgroundColor: '#1B5E20',
    flex: 0.5,
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 10,
  },

  text: {
    padding: 30, fontSize: 20, color: 'white', textAlign: 'center'
  },

  text1: {
    padding: 10, fontSize: 15, color: 'white', textAlign: 'center', fontWeight:'bold'
  },

  textInput: {
    padding: 10, fontSize: 15, color: 'black', textAlign: 'center', fontWeight:'bold'
  },

  textHasil: {
    padding: 10, fontSize: 20, color: 'white', textAlign: 'center', fontWeight:'bold'
  }


});
