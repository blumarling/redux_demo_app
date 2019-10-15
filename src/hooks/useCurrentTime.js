import React, {useState,useEffect} from 'react'


const useCurrentTime = () => {

  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    setCurrentTime(new Date().valueOf())
  }, [])

  const getNewTime = () => {
    setCurrentTime(new Date().valueOf())
  }

  return {
    currentTime,
    getNewTime
  }

}

export default useCurrentTime