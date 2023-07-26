import http from 'k6/http';

export const options = {
  ext: {
    loadimpact: {
      // Project: Default project
      projectID: 3650801,
      // Test runs with the same name groups test runs together
      name: 'Performance testing with K6'
    }
  },
  scenarios: {
    open_model: {
      executor: 'constant-arrival-rate',
      rate: 1,
      timeUnit: '1s',
      duration: '1m',
      preAllocatedVUs: 20,
    },
  },
};

export default function () {
  // With the open model arrival rate executor config above,
  // new VU iterations will start at a rate of 1 every second,
  // and we can thus expect to get 60 iterations completed
  // for the full 1m test duration.
  http.get('https://httpbin.test.k6.io/delay/6');
}
