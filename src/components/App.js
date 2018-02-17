import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class App extends Component {
  constructor() {
    super()
    this.state = { gifts: [] }
  }

  addGift = () => {
    const { gifts } = this.state

    // find max id
    const maxId = Math.max(...gifts.map(gift => gift.id)) || 0
    gifts.push({ id: maxId + 1 })
  }

  render () {
    return (
      <div>
        <h2>Gift Giver</h2>
        <Button className='btn-add'>Add Gift</Button>
      </div>
    )
  }
}

export default App