import React, {Component} from 'react'
import {connect} from 'react-redux'

// importiamo le actions ma non possiamo chiamarle prima di passarle nel "connect"
import * as actions from '../redux/activities/actions'
import {getAllResults} from '../redux/activities/selector'

import {Activity} from '../components'

class Home extends Component {
  
  componentDidMount = () => {
    // questa funzione viene dal connect di redux
    const { getActivities } = this.props
    getActivities()
  }

  render() {
    // activities deriva dall'oggetto creato con getAllResults
    const {activities} = this.props
    return (
      // <> </> shorthand di <React.Fragment />
     <>
        {
          activities ?
            activities.map(item => <Activity {...item} key={item.uuid}/>)
            : 'nessuna attività'
        }
     </>
    )
  }
}

// connettiamo il componente con la funzione mapStateToProps e con le actions che necessitiamo qui dentro
export default connect(getAllResults, {...actions} )(Home)