import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackNavigation} from '../navigator';
import {ConnectedProps, connect} from 'react-redux';
import {RootState} from '../models';

const mapStateToProps = ({home}: RootState) => ({
  num: home.num,
  loading:home.loading,
});

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

class Home extends React.Component<IProps> {
  onPress = () => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {
      id: 890,
    });
  };

  handleAdd = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/add',
      payload: {
        num: 10,
      },
    });
  };

  asyncAdd = ()=>{
    const {dispatch} = this.props;
    dispatch({
      type: 'home/asyncAdd',
      payload: {
        num: 2,
      },
    });
  };


  render() {
    this.props;
    const {num,loading} = this.props;
    return (
      <View>
        <Text>Home{num}</Text>
        <Text>{loading?'正在努力计算中':""}</Text>
        <Button title="加" onPress={this.handleAdd}></Button>
        <Button title="异步加" onPress={this.asyncAdd}></Button>
        <Button title="跳转到详情页" onPress={this.onPress}></Button>
      </View>
    );
  }
}

// export default Home;
export default connector(Home);
