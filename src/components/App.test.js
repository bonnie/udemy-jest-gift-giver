import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  // shallow take jsx as argument, returns object representing app component
  const app = shallow(<App />)

  // jest uses global "it" and "expect"
  it('renders correctly', () => {
    // jest snapshots keep a recorded history of react component
    // the test runner allows for updating the snapshot every time the component changes
    // basically the snapshot is a cannonical description of how the component should look
    expect(app).toMatchSnapshot()
  })

  it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([])
  })

  describe('when clicking the `add-gift` button', () => {
    beforeEach('click the add button', () => {
      // first find the addGift button, then test that the state updates
      // .find can find by tag or classname (start with period)
      // enzyme provides .simulate
      app.find('.btn-add').simulate('click')
    })

    afterEach(() => {
      // reset gift array to be empty
      app.setState({ gifts: [] })
    })

    it('adds a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id: 1 }])
    })
  
    it('adds a new gift to the rendered list', () => {
      // children = array of child nodes
      expect(app.find('.gift-list').children().length).toEqual(1)
    })
  })
})