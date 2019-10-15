import React, {useEffect, useMemo, useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'
// importiamo le actions ma non possiamo chiamarle prima di passarle nel "connect"
import {getActivities} from '../redux/activities/actions'
import {getAllResults} from '../redux/activities/selector'
import useCurrentTime from '../hooks/useCurrentTime'

import {Activity} from '../components'

const HomeHooks = () => {

  const dispatch = useDispatch()
  const {activities} = useSelector(getAllResults)
  const { currentTime, getNewTime } = useCurrentTime()

  console.log({currentTime})
  console.log('ciao')

  useEffect(() => {
    if(!dispatch) return
    // questa funzione viene dal connect di redux
    dispatch(getActivities())
  }, [])

  useEffect(() => {
    if(!activities) return
    getNewTime()
  }, [activities])

  return (
    // <> </> shorthand di <React.Fragment />
    <>
      {
        activities ?
          activities.map(item => <Activity {...item} key={item.uuid}/>)
          : 'nessuna attività'
      }

      <div>{currentTime}</div>

      <div onClick={getNewTime}>aggiorna tempo</div>
    </>
  )

}

// connettiamo il componente con la funzione mapStateToProps e con le actions che necessitiamo qui dentro
export default HomeHooks