import EventEmitter from 'events'
import dispatcher from '../Dispatcher'


class RegistrationStore  extends EventEmitter{
  constructor(){
    super()
    this.fields = {
      firstName:'',
      lastName:'',
      email:'',
      password:''
    }
  }

  getFields(){
    return this.fields
  }

  setField(fieldName, value){
    this.fields[fieldName] = value
    this.emit('changed')
  }

  handleAction(action){
    switch(action.type){
      case('FIELD_SET'):{
        this.setField(action.index, action.value)
        break
      }
    }
  }
}


const STORE = new RegistrationStore()
dispatcher.register(STORE.handleAction.bind(STORE))
window.dispatcher = dispatcher
window.registrationStore = STORE
export default STORE
