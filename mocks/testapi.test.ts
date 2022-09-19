import { expect, describe, it } from '@jest/globals';
import api from '../restful/api';
/**
 * This test show a raw way to implement msw into your test
 */
describe('Verify msw is working', () => {
  it('return the exact value', async () => {
    /**
     * as the docs from msw explain, we use our test as normal,
     * but behind msw is providing all the data for our request
     *
     * in this case, all request are in the file
     *
     * handlers.ts
     */
    const { data } = await api.get<{ test: string }>('/test');
    expect(data.test).toBe('This is a test');
  });
});
