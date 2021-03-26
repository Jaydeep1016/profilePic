import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

const PendingView = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: 'red'}}>Loading....</Text>
    </View>
  );
};

const App = () => {
  const [image, setImage] = useState(null);
  const takePicture = async camera => {
    try {
      const options = {quality: 0.9, base64: false};
      const data = await camera.takePictureAsync(options);
      setImage(data.uri);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <Text style={styles.text}>I app devloper</Text>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default App;

const styles = new StyleSheet.create({
  text: {
    fontSize: 25,
    color: 'red',
  },
});
