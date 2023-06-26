import { Trend } from 'k6/metrics';
import { sleep } from 'k6';
import http from 'k6/http';

const serverWaitingTimeOnLogin = new Trend('serverWaitingTimeOnLogin', true);

export const options = {
  vus: 1,
  duration: '1m',
  thresholds: {
    serverWaitingTimeOnLogin: ['p(95) < 200'],
  },
};

export default function () {
  const resp = http.post('https://test-api.k6.io/auth/token/login/', {
    username: 'test-user',
    password: 'supersecure',
  });

  serverWaitingTimeOnLogin.add(resp.timings.waiting);
  sleep(1);
}
