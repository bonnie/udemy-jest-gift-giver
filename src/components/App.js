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
    const ids = gifts.map(gift => gift.id)
    const maxId = ids.length > 0 ? Math.max(...ids) : 0
    gifts.push({ id: maxId + 1 })

    this.setState({ gifts })
  }

  render () {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className='gift-list'>
          {
            this.state.gifts.map(gift => {
              return (
                <div key={gift.id}>{gift.id}</div>
              )
            })
          }
        </div>
        <Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
      </div>
    )
  }
}

export default App