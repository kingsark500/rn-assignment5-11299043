import { View, StyleSheet, Text, Image, ScrollView,Button, TouchableOpacity } from "react-native";


    export default function Profile({ navigation }) {


        return(
            <ScrollView>

<View style={styles.header}>
      
        

        
        <Text style={styles.welcomeText}>Welcome back,</Text>

        <Text style={styles.userName}>Eric Atsu</Text>

      

      </View>

      <View style={styles.actions}>
        <Text style={styles.send}>Sent</Text>

        <Text style={styles.receive}>Receive</Text>

       <Text style={styles.loan}>Loan</Text>

       <Text style={styles.topup}>Top up</Text>

        
      </View>

      <View style={styles.transactionsHeader}>

        <Text style={styles.transactionsTitle}>Transaction</Text>

        <TouchableOpacity><Text style={styles.sellAllText}>Sell All</Text></TouchableOpacity>

      </View>
      <View style={styles.transactionItem}>

       
        <Text style={styles.transactionText}>Apple Store</Text>
        <Text style={styles.transactionAmount}>- $5.99</Text>

      </View>
      <View style={styles.transactionItem}>

        
       
        <Text style={styles.transactionText}>Spotify</Text>

        <Text style={styles.transactionAmount}>- $12.99</Text>
      </View>

      <View style={styles.transactionItem}>
       
      
        <Text style={styles.transactionText}>Money Transfer</Text>
        <Text style={styles.transactionAmount}>$300</Text>
      </View>

      <View style={styles.transactionItem}>
        
      
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
          },
          welcomeText: {
            marginLeft: 16,
            fontSize: 18,
            color: '#333',
          },
          userName: {
            fontSize: 24,
            fontWeight: 'bold',
            marginLeft:16,
            top:30,
          
          },
          searchIcon: {
            marginLeft: 'auto',
          },
    
          
          transactionsHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
            top:25
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
            top:15
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
            top:30,
            flexDirection: 'row',
            
          },

          send:{
            left:80,
            fontSize:20
          },

          receive:{
            left:130,
            fontSize:20
          },

          loan:{
            left:160,
            fontSize:20
          },

          topup:{
            left:180,
            fontSize:20
          }


        
    
    
    
      });