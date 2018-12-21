
import { action, observable, decorate  } from 'mobx';

export default class containerStore{
    headColor = 'rgb(24,114,114)'
    changeColor = (headColor) => {
        this.headColor = headColor
    }
}

decorate(containerStore,{
    headColor: observable,
    changeColor: action
})