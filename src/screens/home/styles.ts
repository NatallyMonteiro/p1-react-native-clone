import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#152e76',
        padding: 20,
      },
      icon: {
        marginHorizontal: 10,
      },
      headerText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
      },
      profileIcon: {
        backgroundColor: '#152e76',
        borderRadius: 50,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        marginHorizontal: 10,
      },
      profileText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
      },
      body: {
        flex: 1,
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: -75,
        padding: 10,
        width: '90%',
        height: '18%',
        borderRadius: 10,
      },
      textContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
      },
      sectionText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'left',
      },
      boldText: {
        fontWeight: 'bold',
      },  
    image: {
        width: '100%', 
        height: '100%',
    },
})