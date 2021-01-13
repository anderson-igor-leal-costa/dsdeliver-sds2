import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import Header from '../Header'; 
import OrderCard from '../OrderCard'; 


function Orders() {
 

  return (
      <>
        <Header />
    <View>
      <OrderCard />
     
      
    </View>


    </>
  );
}

const styles = StyleSheet.create({});

export default Orders; 
