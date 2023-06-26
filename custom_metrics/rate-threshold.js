import { Rate } from 'k6/metrics';
import { sleep } from 'k6';
import http from 'k6/http';

const errorRate = new Rate('errorRate');

export const options = {
  vus: 1,
  duration: '5m',
  thresholds: {
    errorRate: [
      // more than 10% of errors will abort the test
      { threshold: 'rate < 0.1', abortOnFail: true, delayAbortEval: '1m' },
    ],
  },
};

export default function () {
  const resp = http.get('https://test-api.k6.io/public/crocodiles/1/');

  errorRate.add(resp.status >= 400);

  sleep(1);
}
