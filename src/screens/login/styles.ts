import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ebebeb',
    },
    header: {
      backgroundColor: '#152e76',
      padding: 20,
    },
    title: {
      color: '#FFFFFF',
      fontSize: 13,
      fontFamily: 'Century Gothic',
      fontWeight: 'bold',
      textAlign: 'left', 
    },
    floatBox: {
      margin: 20,
      padding: 20,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      elevation: 10,
    },
    subtitle: {
      fontSize: 16,
      fontFamily: 'Century Gothic',
      marginBottom: 10,
    },
    accessKey: {
      fontSize: 15,
      fontFamily: 'Century Gothic',
      fontWeight: 'bold',
      marginBottom: 10,
      marginLeft: '10%',
    },
    line: {
      height: 1,
      backgroundColor: '#ebebeb',
      marginBottom: 10,
    },
    inputContainer: {
      flexDirection: 'row',
      borderColor: '#0c2b6d',
      borderWidth: 1,
      marginBottom: 10,
      width: '80%', 
      alignSelf: 'center',
    },
    input: {
      flex: 1,
      height: 40,
      paddingLeft: 5,
    },
    icon: {
      margin: 3,
      width: 35,
      height: 35,
    },
    buttonContainer: {
      backgroundColor: '#1351b4',
      borderRadius: 20,
      overflow: 'hidden',
      marginBottom: 10,
      width: '80%',
      alignSelf: "center",
    },
    buttonText: {
      color: '#FFFFFF',
      fontFamily: 'Century Gothic',
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
    },
    forgotPassword: {
      color: '#1351b4',
      fontFamily: 'Century Gothic',
      fontWeight: 'bold',
      marginTop: 15,
      textAlign: 'center',
      textDecorationLine: 'underline',
    },
});
  