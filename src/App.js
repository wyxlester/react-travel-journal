import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data'

const App = () => {
  const travelData = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <div className="container pt-3 pb-5">
        {travelData}
      </div>
    </div>
  )
}

export default App;
