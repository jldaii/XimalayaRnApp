import {create} from 'dva-core-ts'
import models from '../models';
// 1.创建实例
const app = create();
// 2 加载 modle 对象
models.forEach(model => {
    app.model(model);

});
// 3 启动 dva
app.start();

// 导出dva的数据 
const store = app._store; // 获取 redux 的 store对象给 react-redux 使用

export default store;