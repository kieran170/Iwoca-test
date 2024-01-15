import React from 'react';
import Applications from './Applications';
import { render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
// import getSingleApplicationFixture from './__fixtures__/applications.fixture.js';
// import { useFetchApplications } from './hooks/useFetchApplications';

describe('Applications page', () => {
  const mock = new MockAdapter(axios);

  test('Loading state is true when page renders.', () => {
    const { getByText } = render(<Applications />);
    const loadingMessage = getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
  });

  //   test('Elements render on page if Api return applications', async () => {
  //     mock
  //       .onGet('http://localhost:3001/api/applications?_page=1&_limit=5')
  //       .reply(200, [getSingleApplicationFixture]);
  //     const { getByText } = render(<Applications />);
  //     const { result } = renderHook(() => useFetchApplications());

  //     act(() => {
  //       result.current.fetchApplications();
  //     });

  //     await act(async () => {
  //       await new Promise((resolve) => setTimeout(resolve, 0));
  //     });

  //     expect(getByText('Miles')).toBeInTheDocument();
  //   });
});
