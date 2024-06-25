import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from './Screens/ProfileScreen';
import Settings from './Screens/SettingsScreen';
import Cards from './Screens/MyCards';
import Stats from './Screens/Statistics';


const Tab = createBottomTabNavigator();


const MyCardsScreen = () => (
  <View style={styles.screen}><Text>My Cards</Text></View>
);

const StatisticsScreen = () => (
  <View style={styles.screen}><Text>Statistics</Text></View>
);



export default function App() {
  return (

    <NavigationContainer>

      


<Tab.Navigator>

<Tab.Screen name="Home" component={Profile} />

<Tab.Screen name="My Cards"  component={Cards} />

<Tab.Screen name="Statistics" component={Stats} />

<Tab.Screen name="Settings" component={Settings} />

</Tab.Navigator>

      



    </NavigationContainer>


    
    
   
  );
};