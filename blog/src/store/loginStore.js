import { observable, action } from 'mobx';

export default class loginStore {
    @observable loginFlag = false
    @action loginSubmit = () => {
        this.loginFlag = true
    }
    @action handleLogOff = () => {
        this.loginFlag = false
    }
}