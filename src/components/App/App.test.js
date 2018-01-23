import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('should match the snapshot', () => {
  const renderedComponent = shallow(<App />)
  expect(renderedComponent).toMatchSnapshot()
})

it('when handleSubmit is called with an idea, the state should have that idea', () => {
  const renderedComponent = shallow(<App />)
  const mockedIdea = { title: 'great idea', body: 'learn js', id: 0 }
  renderedComponent.instance().handleSubmit(mockedIdea)
  expect(renderedComponent.state().ideas).toEqual([mockedIdea])
})

it('when removeIdea is called with an id, the state will no longer have the idea with that id', () => {
  const renderedComponent = shallow(<App />)
  const mockedIdea = { title: 'great idea', body: 'learn js', id: 0 }
  renderedComponent.setState({ ideas: [mockedIdea]})
  renderedComponent.instance().removeIdea(0)
  expect(renderedComponent.state().ideas).not.toContain(mockedIdea)
})

it('when i have one idea in state, numIdeas returns 1', () => {
  const renderedComponent = shallow(<App />)
  const mockedIdea = { title: 'great idea', body: 'learn js', id: 0 }
  renderedComponent.setState({ ideas: [mockedIdea]})
  expect(renderedComponent.instance().numIdeas(renderedComponent.state().ideas)).toEqual(1)
})

