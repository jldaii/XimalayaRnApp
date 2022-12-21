import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';

interface HomeState {
  num: number;
}

const action = {
  type: 'add',
};

interface homeModel extends Model {
  namespace: 'home';
  state: {
    num: number;
  };
  reducers: {
    add: Reducer<HomeState>;
  };
  // 异步 用于描述UI层
//   effects: {
//     asyncAdd: Effect;
//   };
}


const initialState = {
    num : 0,
}

const homeModel: homeModel = {
  namespace: 'home',
  state: {
    num: 0,
  },
  reducers: {
    add(state, {payload}) {
      return {
        ...state,
        num: state?.num + payload.num,
      };
    },
  },
};

export default homeModel;
