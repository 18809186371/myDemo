
import { action, observable } from 'mobx';

export default class containerStore {
    @observable headColor = 'rgb(24,114,114)'
    @observable sliderVisible = true // 侧边栏初始状态
    @action changeColor = (headColor) => {
        this.headColor = headColor
    }
    // 控制侧边栏出入的函数
    @action changeVisible = (sliderVisible) => {
        this.sliderVisible = sliderVisible
    }
}