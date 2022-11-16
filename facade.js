import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { initializeApp } from "firebase/app";

import React, { useState } from 'react';

import * as ImagePicker from 'expo-image-picker';
import storage from '@react-native-firebase/storage';
//import * as Progress from 'react-native-progress';

const firebaseConfig = {
    apiKey: "AIzaSyDUb8WY1JbYORkE03k4PsJ7PfpDAKAr_aY",
    authDomain: "medicbook-ios.firebaseapp.com",
    databaseURL: "https://medicbook-ios-default-rtdb.firebaseio.com",
    projectId: "medicbook-ios",
    storageBucket: "medicbook-ios.appspot.com",
    messagingSenderId: "413894118278",
    appId: "1:413894118278:web:da6c43267e2b7b6ba1fa07",
    measurementId: "G-63DPJ28BCY"
  };


class Facade{
    constructor(){
        this.app = initializeApp(firebaseConfig);
        this.storage = getStorage();
        
        //this.storage = getStorage(this.app);
        
    }

    downloadUrl = async () => {
        let result = await getDownloadURL(ref(this.storage, 'DentalMaterials/החייאת בקרת נזקים בשדהx.pdf'))
        return result
    }
}

let facade = new Facade()
export default facade;