import { renderHook, act } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { useFetchApplications } from './useFetchApplications';
import getSingleApplicationFixture from '../__fixtures__/applications.fixture.js';

const mock = new MockAdapter(axios);

mock
  .onGet('http://localhost:3001/api/applications?_page=1&_limit=5')
  .reply(200, [getSingleApplicationFixture]);

test('useFetchApplications hook fetches applications correctly', async () => {
  const { result } = renderHook(() => useFetchApplications());

  act(() => {
    result.current.fetchApplications();
  });

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  expect(result.current.loading).toBe(false);

  expect(result.current.applications.length).toBeGreaterThan(0);
});

afterEach(() => {
  mock.reset();
});
