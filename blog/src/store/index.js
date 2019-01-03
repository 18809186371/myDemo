
import containerStore from './containerStore';
import loginStore from './loginStore'

class Store {
    constructor(){
        this.containerStore = new containerStore()
        this.loginStore = new loginStore()
    }
}

export default  new Store();