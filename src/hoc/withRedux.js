import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/configStore'

// high order component
// per non gravare sulla view spostiamo pezzi di logica in questi wrapper (decorator)
// EnhancedComponent è il componente wrappato
// props le props ereditate dal EnhancedComponent

export default EnhancedComponent => props => (
  // posso modificare le props volendo e aggiungerle al EnhancedComponent
  <Provider store={store}>
    <EnhancedComponent {...props} />
  </Provider>
)
