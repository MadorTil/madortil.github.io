import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function ButtonComp(props){
    let randBlue = Math.floor(Math.random() * 256)
    let randRed = Math.floor(Math.random() * 256) 
    let randGreen = Math.floor(Math.random() * 256)
    return (
            <View style={{width: '100%',
            aspectRatio: 7,
            overflow: 'hidden',
            right: 0,
            marginTop: 10,
            //backgroundColor: 'cyan',
            right: 0,
            top: 64 * props.num,
            position: 'absolute',
            

            
                }}>
                <TouchableOpacity style={[styles.container, {marginLeft: 20 + props.num * 2}]}>
                    <View style={[styles.circle, {backgroundColor: props.bgc } ]}/>
                    
                    <View style={[styles.glassBackground]}></View>
                    
                    <Text style={styles.buttonText}>Default Comp</Text>
                
                </TouchableOpacity>
            </View>
            
    )
}

const styles = StyleSheet.create({
    container: {
      width: '120%',
      
      
      aspectRatio: 9,
      textAlign: 'center',
      
      //display: 'flex',
      //justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'row',
      
      
      
    },
    
    glassBackground: {
        backgroundColor: '#e4eeff',
        opacity: 0.8,
        borderRadius: 150,
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0, right: 0,
        zIndex: 2,

    },
    
    circle: {
        borderRadius: '150%',
        height: '80%',
        aspectRatio: 1,
        backgroundColor: '#eaa1ff',
        marginRight: 10,
        zIndex: 3,
        alignSelf: 'center',
        marginLeft: 3,
        marginRight: '10%',
    },

    number : {
        fontSize: 40, 
        fontWeight: 'bold', 
        color: 'black',
        marginRight: 20,
        zIndex: 3,
        alignSelf: 'center'
    },
    
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#060606',
        zIndex: 3,
        alignSelf: 'center'
    }
})