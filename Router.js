import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';
import Project6 from './Project6';
import Project7 from './Project7';
import Project8 from './Project8';

const Router = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'project1', title: 'Hello World', focusedIcon: 'language-javascript' },
    { key: 'project2', title: 'Button Press', focusedIcon: 'gesture-tap-button' },
    { key: 'project3', title: 'Custom Button', focusedIcon: 'widgets' },
    { key: 'project4', title: 'State Counter', focusedIcon: 'counter' },
    { key: 'project5', title: 'Styling', focusedIcon: 'palette' },
    { key: 'project6', title: 'Scroll View', focusedIcon: 'arrow-up-down' },
    { key: 'project7', title: 'Form Input', focusedIcon: 'form-textbox' },
    { key: 'project8', title: 'Section List', focusedIcon: 'format-list-bulleted' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'project1':
        return <Project1 />;
      case 'project2':
        return <Project2 />;
      case 'project3':
        return <Project3 />;
      case 'project4':
        return <Project4 />;
      case 'project5':
        return <Project5 />;
      case 'project6':
        return <Project6 />;
      case 'project7':
        return <Project7 />;
      case 'project8':
        return <Project8 />;
      default:
        return (
          <View style={styles.container}>
            <Text>Project not found</Text>
          </View>
        );
    }
  };

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      sceneAnimationEnabled={true}
      labeled={true}
      barStyle={styles.bottomNavigation}
      activeColor="#6200ee"
      inactiveColor="#757575"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomNavigation: {
    backgroundColor: '#ffffff',
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
});

export default Router;