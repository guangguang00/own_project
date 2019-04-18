/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

// export const baseUrl = 'http://192.168.11.233:8080'
// export var baseUrl = 'http://test.yunyinshua.com'  // test
export var baseUrl = 'http://alpha.yunyinshua.com'  // alpha
// export const baseUrl = "https://www.yunyinshua.com"  //线上
// export const imgBaseUrl =  'http://192.168.11.169:8001/web/image?model=product.template&field=image_medium&unique=&id='
export const imgBaseUrl = "https://www.yunyinshua.com/pic/"
export const exlcusive = "/index.php?controller=goodvue&action=mutex" //互斥选项

if (process.env.NODE_ENV === 'development') {

} else if (process.env.NODE_ENV === 'production') {
//   baseUrl = 'https://www.yunyinshua.com'
}