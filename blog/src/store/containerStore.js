
import { action, observable, decorate  } from 'mobx';

export default class containerStore{
    headColor = ''
    changeColor = (headColor) => {
        this.headColor = headColor
    }
}


decorate(containerStore,{
    headColor: observable,
    changeColor: action
})