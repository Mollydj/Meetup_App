import React from 'react';
import { shallow, mount } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import App from '../App';



describe('<App/> component', () => {

  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}/>);
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });

    // test('render correct list of events', () => {
    //   const AppWrapper = mount(<App />);
    //   AppWrapper.setState({ events: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] });
    //   expect(AppWrapper.find('.Event')).toHaveLength(4);
    //   AppWrapper.unmount();
    // });
});