import React from "react";
import * as rtl from "@testing-library/react";
import { render } from "@testing-library/react";
import App from "./App";
import Episodes from './components/Episodes';



import { fetchShow as mockFetchShow } from './api/fetchShow';

test('Missions list shows data when rerendered with new missions data', () => {
    const { queryAllByTestId, rerender } = render(
      <Episodes error="" episodes={[]} />
    );
  
    // assert that there are no missions listed when the component first renders
    // queryBy, something that returns an array if more than one match ("All" query)
    expect(queryAllByTestId(/episodes/i)).toStrictEqual([]);
    expect(queryAllByTestId(/episodes/i)).toHaveLength(0);
  
    // rerender(<Episodes error="" episodes={episodes} />);
  
    // expect(queryAllByTestId(/episode/i)).toHaveLength(10);
    // TODO: test that the error message is NOT rendered
  });

  test('Missions list shows data when rerendered with new missions data', () => {
    const { queryAllByTestId, rerender } = render(
      <App error="" episodes={[]} />
    );
  
    // assert that there are no missions listed when the component first renders
    // queryBy, something that returns an array if more than one match ("All" query)
    expect(queryAllByTestId(/Fetching data.../i)).toStrictEqual([]);
    expect(queryAllByTestId(/Fetching data.../i)).toHaveLength(0);
  
    // rerender(<Episodes error="" episodes={episodes} />);
  
    // expect(queryAllByTestId(/episode/i)).toHaveLength(10);
    // TODO: test that the error message is NOT rendered
  });
  


describe('App', () => {
    let wrapper;

    afterEach(rtl.cleanup);
    beforeEach(() => {
      wrapper = rtl.render(<App />);
    });

    it('app component displays', async () => {
      const text = await wrapper.findByText('Fetching data...');
      expect(text).toBeInTheDocument()
    })
  });




