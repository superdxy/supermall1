/*
 * @Author: your name
 * @Date: 2021-07-28 19:49:52
 * @LastEditTime: 2021-07-28 19:54:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\supermall\vue.config.js
 */
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'router': '@/router',
                'store': '@/store',
                'views':'@views'
            }
        }
    }
}