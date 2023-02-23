/*
 * @Author       : 青艺 wangxueyi.wxy@mybank.cn
 * @Date         : 2023-02-23 09:29:47
 * @LastEditors  : 青艺 wangxueyi.wxy@mybank.cn
 * @LastEditTime : 2023-02-23 13:30:03
 * @FilePath     : /lowcode_platform/src/componets/LowcodeEngine/index.tsx
 * @name         :
 * @Description  :
 */
import React, { useEffect, useRef } from 'react';
import startEngine from './engine';
import Preview from './preview';
import './index.less';
const Workbench = () => {
  const ref = useRef();
  useEffect(() => {
    startEngine(ref.current);
  }, []);
  return <div id="lce-container" ref={ref}></div>;
};

export { Preview, Workbench };
