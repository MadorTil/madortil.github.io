import facade from "./facade";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  Image,
  Animated,
  FlatList
} from 'react-native';
import {useEffect, useState, useRef} from 'react'
import ButtonComp from './components/ButtonComponent'
import {Page, Document} from 'react-pdf';





//const pickImage = async () => {
//  // No permissions request is necessary for launching the image library
//  let result = await ImagePicker.launchImageLibraryAsync({
//    mediaTypes: ImagePicker.MediaTypeOptions.All,
//    allowsEditing: true,
//    aspect: [4, 3],
//    quality: 1,
//  });
//
//  console.log(result);
//
//  if (!result.cancelled) {
//    setImage(result.uri);
//  }
//};

// Import the functions you need from the SDKs you need





export default function UploadScreen() {
  function getUrl(){
    let topic = "trauma"
    let material = "מנהלתי- נוהל הפניות חריגות"

    let firebaseStorageApi = "https://storage.googleapis.com/medicbook-ios.appspot.com/Anatomy/%D7%94%D7%92%D7%99%D7%A9%D7%94%20%D7%9C%D7%A4%D7%A6%D7%99%D7%A2%D7%95%D7%AA%20%D7%97%D7%96%D7%94%20%D7%91%D7%A9%D7%93%D7%94%20%D7%A2%D7%93%D7%9B%D7%95%D7%9F%202022.pdf";
    let token= "?alt=media&token=94588795-6226-42ad-9f78-7cdb49792ce3"
    let url = firebaseStorageApi + topic + "%2F" + material +  ".pdf" + token
    return url
  }
  let url = "https://storage.googleapis.com/medicbook-ios.appspot.com/Anatomy/%D7%94%D7%92%D7%99%D7%A9%D7%94%20%D7%9C%D7%A4%D7%A6%D7%99%D7%A2%D7%95%D7%AA%20%D7%97%D7%96%D7%94%20%D7%91%D7%A9%D7%93%D7%94%20%D7%A2%D7%93%D7%9B%D7%95%D7%9F%202022.pdf"
  var list = []
  for(let i = 0; i<30 ; i++){
    list.push(i)
  }
  console.log(list)

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  let randBlue = Math.floor(Math.random() * 256)
  let randRed = Math.floor(Math.random() * 256)
  let randGreen = Math.floor(Math.random() * 256)

  let index = 7
  console.log(
  'rgb(' + (256 - randBlue * (1 - index / list.length)).toString() + "," + (256 - randRed * ( 1 - index / list.length)).toString() + "," + ( 256 - randGreen * ( 1 - index / list.length)).toString()  + ")"
  )
  function toString2(item){
    console.log(item)
    return ""
  }

  const springInAnimated = useRef(new Animated.Value(0)).current;
  function startAnimation(){
    
    Animated.timing(springInAnimated, {
      toValue: 100,
      useNativeDriver: false,
      Duration: 5000,
    }).start();
  }

  
  

  
  
    
  return (
    {/**
       <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
        <Text style={styles.buttonText}>Pick an image</Text>
      </TouchableOpacity>
      
      {image !== null ? (
        <Image source={{ uri: image.uri }} style={styles.imageBox} />
      ) : null}

      <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
        <Text style={styles.buttonText}>Upload image</Text>
      </TouchableOpacity>
    
    
    
      </SafeAreaView>*/},
      <View style={{width: '100%', height: '100%', flexGrow: 1, flexDirection: 'row'}}>
        {/*<iframe style={{width: '100%', height: '100%'}} src={"https://docs.google.com/viewer?url=" + 
         url + 
        "&embedded=true"}/>

        <iframe style={{width: '100%', height: '100%'}} src={
        url}/> */}
          <View style={styles.left}>
            <FlatList
                        style={[styles.list]}
                        data={list}
                        key= { (_, index) => index}
                        initialNumToRender ={40}
                        renderItem= {({index, item}) => 
                          <Animated.View styles={{right: springInAnimated}}>
                            <ButtonComp num={item} key={index} 
                              bgc= {"rgb(" + randBlue.toString() + "," + (256 - randRed * ( 1 - index / list.length)).toString() + "," + ( 256 - randGreen * ( 1 - index / list.length)).toString()  + ")"}/>
                          </Animated.View>
                      
                      }>
                        
      


              </FlatList>   
              <Animated.View style={{backgrounColor: 'yellow', width: 150, height: 150, transform: [{translateX: springInAnimated}]}}>
                <View style={{backgrounColor: 'yellow', width: 150, height: 150}}>

                </View>


          </Animated.View>     
          </View>
          <TouchableOpacity style={{height: "10%", width: "30%", backgroundColor: 'cyan'}} onPress={startAnimation}>

          </TouchableOpacity>
          
          
          

          
        
          
        
        
        
          
      

      </View>
     
      
  );
}

const styles = StyleSheet.create({
  left: {
    backgroundColor: 'black',
    flex: 1,
    left: 0,
  },
  right: {
    backgroundColor: 'right',
    flex: 1,
    right: 0,
    height: '100%',
  },
  list: {
    height: '100%',
  },
  
  
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#bbded6'
  },
  selectButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#8ac6d1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  uploadButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#ffb6b9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center'
  },
  progressBarContainer: {
    marginTop: 20
  },
  imageBox: {
    width: 300,
    height: 300
  }
});