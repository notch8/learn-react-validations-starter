import dispatcher from './Dispatcher'

export function formInputChange(index, value){
  dispatcher.dispatch({
    type: 'FIELD_SET',
    index: index,
    value: value
  })
}
