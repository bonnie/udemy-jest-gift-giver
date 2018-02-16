import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

// shallow take jsx as argument, returns object representing app component
const app = shallow(<App />)

// jest uses global "it" and "expect"
it('renders correctly', () => {
  expect(app).toMatchSnapshot()
})