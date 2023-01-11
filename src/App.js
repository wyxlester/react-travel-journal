import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <div class="container pt-3 pb-5">
        <h3>Hello World</h3>
        <Card />
      </div>
    </div>
  )
}

export default App;
