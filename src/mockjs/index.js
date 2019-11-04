import Mock from 'mockjs';
import listAPI from './otherMock';
Mock.mock(/\/mock\/getData/,'get',listAPI.getData);
Mock.mock(/\/mock\/getAreaData/,'get',listAPI.getAreaData);

// export default {
//     // startMock(){
//         // Mock.setup({
//         //     timeout: 0-300
//         // });
//         Mock.mock(/\/mock\/getData/,'get',listAPI.getData);
//     // }
// };
export default Mock;