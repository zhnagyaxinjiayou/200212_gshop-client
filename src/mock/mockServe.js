// 使用mockjs来mock接口
import Mock from 'mockjs'
// 引入的是json文件（json数组)，得到的是对应的js的数组
// 打包工具会自动给我们解析json数组
import banners from './banners.json'
import floors from './floors.json'

// 模拟返回banners数据接口
Mock.mock('/mock/banners',{code:200,data:banners})


// 模拟返回floors数据接口
Mock.mock('/mock/floors',{code:200,data:floors})

// console.log("mockserver……")
