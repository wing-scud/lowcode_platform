/*
 * @Author: wing_scud 1205586003@qq.com
 * @Date: 2023-02-23 01:50:22
 * @LastEditors: wing_scud 1205586003@qq.com
 * @LastEditTime: 2023-02-23 01:55:38
 * @FilePath: \lowcode-platform\.umirc.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'umi';
import Route from './config/route';
export default defineConfig({
  layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: Route,
  fastRefresh: {},
  sass: {
    implementation: require('node-sass'),
  },
});
