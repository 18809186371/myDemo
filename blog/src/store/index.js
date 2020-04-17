
import containerStore from './containerStore';
import loginStore from './loginStore';
import dataJson from './dataJson';

class Store {
    constructor(){
        this.containerStore = new containerStore()
        this.loginStore = new loginStore()
        this.dataJson = new dataJson()
    }
}

export default  new Store();