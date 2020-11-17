// @ts-ignore
import * as io from 'socket.io-client';

const ENDPOINT = 'http://localhost:3001';

export const socket = io(ENDPOINT);
