import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  duration: '30s'
}

export default function () {
  http.get('https://httpbin.test.k6.io/delay/6');
//  sleep(1);
}
