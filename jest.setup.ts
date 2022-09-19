import '@testing-library/jest-dom';
import { beforeEach, afterEach, afterAll } from '@jest/globals';
// Mock Service Worker setup
import { server } from './mocks/server';

beforeEach(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
// end of setup
