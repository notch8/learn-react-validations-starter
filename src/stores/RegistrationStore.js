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


  getErrors(){
    // {}
    // or
    // {firstName: 'is requires'}
    return this.errors

  }

  validate(){
     this.errors = {}
     this.validatePresence('firstName')
     this.validatePresence('lastName')
     this.validatePresence('password')
     this.validateEmail('email')
   }

   validatePresence(fieldName){
    if(this.fields[fieldName] === undefined ||
       this.fields[fieldName] === null ||
       this.fields[fieldName] === '' ||
       this.fields[fieldName] === ' '
      ){
      this.addError(fieldName, 'is Required')
    }
  }

  validateEmail(fieldName){
    const filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    // check if it starts with a letter or number
    // check if it has 1 or more letters, numbers and dashes before the @
    // check that it has an @
    // check that there are one ore more letters, numbers, periods or dashs between the @ sign and the last periods
    // check if there are 2 or 3 letters or numbers after the last period
    // check that there isn't anything else going on after the last characters

    if(!filter.test(this.fields[fieldName])){
      this.addError(fieldName, 'is not an email')
    }
  }
  addError(fieldName, message){
    this.errors[fieldName] = message
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
