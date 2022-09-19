import { rest } from 'msw';
import { API_URL } from '../config/env';
/**
 * Here you can create all your endpoint's mock responses
 *
 */
export const handlers = [
  /**
   * you can use relative path if you are in a dom-like environment just like node and jsdom
   * from jest
   *
   * but because we are sharing this handlers between Jest and storybook
   * we have to add `API_URL` before all request to match both environments
   */
  rest.get(`${API_URL}/test`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json({ test: 'This is a test' }))
  ),
];
