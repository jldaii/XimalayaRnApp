import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackNavigation} from '../navigator';

interface IProps {
  navigation: RootStackNavigation;
}

class Account extends React.Component<IProps> {
  onPress = () => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {
      id: 800,
    });
  };

  render() {
    this.props;
    return (
      <View>
        <Text>Account</Text>
        <Button title="跳转到详情页" onPress={this.onPress}></Button>
      </View>
    );
  }
}

export default Account;
