/*
 * @Author: wing_scud 1205586003@qq.com
 * @Date: 2023-02-23 01:57:16
 * @LastEditors: wing_scud 1205586003@qq.com
 * @LastEditTime: 2023-02-23 02:39:11
 * @FilePath: \lowcode-platform\src\pages\Create\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import  './index.less';
import { Workbench} from "@/componets/LowcodeEngine"
export default function IndexPage() {
  return (
    <div id="lce-container" >
      <Workbench></Workbench>
    </div>
  );
}
