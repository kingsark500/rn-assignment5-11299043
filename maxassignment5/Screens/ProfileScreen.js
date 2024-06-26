import { View, StyleSheet, Text, Image, ScrollView,Button, TouchableOpacity } from "react-native";


    export default function Profile({ navigation }) {


        return(
           
             <ScrollView>

<View style={styles.header}>
      
       <Image source={require('../assets/profile.png')} style={styles.logo} />

       <Image source={require('../assets/search.png')} style={styles.picsea}/> 
        
        <Text style={styles.welcomeText}>Welcome back,</Text>

        <Text style={styles.userName}>Eric Atsu</Text>

        

      </View>

      <View>
      <Image source={require('../assets/Card.png')} style={styles.card} />
      </View>

      <View style={styles.actions}>

      <Image source={require('../assets/send.png')} style={styles.picse} />

        <Text style={styles.send}>Sent</Text>

          <Image source={require('../assets/recieve.png')} style={styles.picrec}/> 
        <Text style={styles.receive}>Receive</Text>

        <Image source={require('../assets/loan.png')} style={styles.piclo}/> 
       <Text style={styles.loan}>Loan</Text>

       <Image source={require('../assets/topUp.png')} style={styles.pictop}/> 

       <Text style={styles.topup}>Topup</Text>

        
      </View>

      <View style={styles.transactionsHeader}>

        <Text style={styles.transactionsTitle}>Transaction</Text>

        <TouchableOpacity><Text style={styles.sellAllText}>Sell All</Text></TouchableOpacity>

      </View>
      <View style={styles.transactionItem}>

      <Image source={require('../assets/apple.png')} style={styles.logo} />
        <Text style={styles.transactionText}>Apple Store</Text>
        <Text style={styles.transactionAmount}>- $5.99</Text>

      </View>
      <View style={styles.transactionItem}>

      <Image source={require('../assets/spotify.png')} style={styles.logo} />
       
        <Text style={styles.transactionText}>Spotify</Text>

        <Text style={styles.transactionAmount}>- $12.99</Text>
      </View>

      <View style={styles.transactionItem}>
       
      <Image source={require('../assets/moneyTransfer.png')} style={styles.logo} />
      
        <Text style={styles.transactionText}>Money Transfer</Text>
        <Text style={styles.transactionAmount}>$300</Text>
      </View>

      <View style={styles.transactionItemgro}>
        
      <Image source={require('../assets/grocery.png')} style={styles.logo} />
      
        <Text style={styles.transactionText}>Grocery</Text>
        <Text style={styles.transactionAmount}>- $88</Text>
      </View>

        
            </ScrollView>
           
        );
    };



    const styles = StyleSheet.create({

        header: {
            flexDirection: 'row',
            textAlign:'left',
            padding: 16,
            bottom:15
          },
          welcomeText: {
            marginLeft: 16,
            fontSize: 18,
            color: '#333',
          },
          userName: {
            fontSize: 24,
            fontWeight: 'bold',
           left:1,
            top:30,
          
          },
          picsea: {
            left:280,
            height:30,
          },
    
          
          transactionsHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
            top:40
          },
          transactionsTitle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
          sellAllText: {
            color: '#007BFF',
          },
          transactionItem: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 16,
            top:20
          },
          transactionItemgro:{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 16,
            top:20,
          },
          transactionText: {
            flex: 1,
            marginLeft: 16,
          },
          transactionAmount: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          screen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },

          actions:{
            top:50,
            flexDirection: 'row',
            
          },

          send:{
            left:25,
            fontSize:20
          },

          receive:{
            left:55,
            fontSize:20
          },

          loan:{
            left:95,
            fontSize:20
          },

          topup:{
            left:110,
            fontSize:20
          },
          picse:{
            left:50,
            bottom:30
          },
          picrec:{
            left:90,
            bottom:30
          },

          piclo:{
            left:130,
            bottom:30,
          },

          pictop:{
            left:150,
            bottom:30,
          },

          card:{
            left:30,
            bottom:4,
          },

          


        
    
    
    
      });