import React from 'react';
import { StatusBar } from 'react-native';
import UploadScreen from './UploadScreen';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <UploadScreen />
      <Text> mador til is the best</Text>
    </>
  );
};
export default App;