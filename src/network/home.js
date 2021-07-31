/*
 * @Author: your name
 * @Date: 2021-07-29 14:43:24
 * @LastEditTime: 2021-07-30 10:18:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\supermall\src\network\home.js
 */
import { request } from "./request";
export function gethome() {
    return request({
        url:'/home/multidata'
    })
}
export function GetHomeGoods(type,page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
      }  
    })
}

