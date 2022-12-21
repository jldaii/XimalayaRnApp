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
  num: 0,
};

function delay(timeout: number) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
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
  effects: {
    *asyncAdd({payload}, {call, put}) {
      yield call(delay, 3000);
      yield put({
        type: 'add',
        payload,
      });
    },
  },
};

export default homeModel;
