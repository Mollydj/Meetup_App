import React from "react";
import { shallow } from "enzyme";
import CitySearch from "../CitySearch";


//UNIT TESTS
describe("<CitySearch /> component", () => {
  let CitySearchWrapper;
  beforeAll(() => {
    CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}}/>);
  });

  test("render text input", () => {
    expect(CitySearchWrapper.find(".city")).toHaveLength(1);
  });

  test("render list of suggestions", () => {
    expect(CitySearchWrapper.find(".suggestions")).toHaveLength(1);
  });

  test("render text input correctly", () => {
    const query = CitySearchWrapper.state("query");
    expect(CitySearchWrapper.find(".city").prop("value")).toBe(query);
  });

  test("change state when text input changes", () => {
    const eventObject = { target: { value: "Brooklyn" } };
    CitySearchWrapper.find(".city").simulate("change", eventObject);
    expect(CitySearchWrapper.state("query")).toBe("Brooklyn");
  });

  test("render list of suggestions correctly", () => {
    const suggestions = CitySearchWrapper.state("suggestions");
    expect(CitySearchWrapper.find(".suggestions li")).toHaveLength(
      suggestions.length
    );
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find(".suggestions li").at(i).text()).toBe(
        suggestions[i].name_string
      );
    }
  });

  test("click on suggestion should change query state", () => {
    CitySearchWrapper.setState({
      suggestions: [
        {
          city: "Brooklyn",
          country: "us",
          localized_country_name: "USA",
          state: "NY",
          name_string: "Brooklyn, New York, USA",
          zip: "11201",
          lat: 40.7,
          lon: -73.99,
        },
        {
          city: "Brooklyn Heights",
          country: "us",
          localized_country_name: "USA",
          state: "OH",
          name_string: "Brooklyn Heights, Ohio, USA",
          zip: "44131",
          lat: 41.38,
          lon: -81.66,
        },
      ],
    });
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
    CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
    expect(CitySearchWrapper.state('query')).toBe('Brooklyn, New York, USA');
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(0);

  });
});

// INTEGRATION TEST
describe("<CitySearch /> integration", () => {

  test('get a list of cities when user searches for Brooklyn', async () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    CitySearchWrapper.find('.city').simulate('change', {
      target: { value: "Brooklyn" } });
    await CitySearchWrapper.update();
    expect(CitySearchWrapper.state("suggestions")).toEqual([
      {
        city: "Brooklyn",
        country: "us",
        localized_country_name: "USA",
        state: "NY",
        name_string: "Brooklyn, New York, USA",
        zip: "11201",
        lat: 40.7,
        lon: -73.99,
      },
      {
        city: "Brooklyn Heights",
        country: "us",
        localized_country_name: "USA",
        state: "OH",
        name_string: "Brooklyn Heights, Ohio, USA",
        zip: "44131",
        lat: 41.38,
        lon: -81.66,
      },
    ]);
  });
});
