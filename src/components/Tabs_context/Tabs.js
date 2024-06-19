import React from 'react'
import TabsBtn from './TabsBtn'
import TabContent from './TabContent'
import { CounterContextProvider } from '../../context/CounterContext'

const Tabs = () => {
  return (
     <CounterContextProvider>
        <div>
            <TabsBtn />
            <TabContent />
        </div>
     </CounterContextProvider>
  )
}

export default Tabs