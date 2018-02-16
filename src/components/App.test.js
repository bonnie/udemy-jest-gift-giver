import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

// shallow take jsx as argument, returns object representing app component
const app = shallow(<App />)

// jest uses global "it" and "expect"
it('renders correctly', () => {
  // jest snapshots keep a recorded history of react component
  // it updates the snapshot every time the component changes
  expect(app).toMatchSnapshot()
})