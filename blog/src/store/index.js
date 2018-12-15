
import containerStore from './containerStore'

class Store {
    constructor(){
        this.containerStore = new containerStore()
    }
}

export default  new Store();