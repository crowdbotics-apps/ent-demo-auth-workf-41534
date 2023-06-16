import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ResultsScreen = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    const response = await fetch('https://api.example.com/results');
    const data = await response.json();
    setResults(data.results);
  };

  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Image style={styles.image} source={{
      uri: item.image || 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>;

  return <View style={styles.container}>
      <FlatList data={results} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  textContainer: {
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14,
    color: '#777'
  }
});
export default ResultsScreen;