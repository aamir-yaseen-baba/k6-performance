import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 5,
  duration: '30s'
}

export default function () {
    const url = 'https://dummyjson.com/auth/login'
    const payload = JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
    })

    const params =  {
        headers: { 'Content-Type': 'application/json' },
    }
  const res = http.post(url, payload, params);
  check(res, {
    'status code is 200': (r) => r.status === 200,
    'has username in the body': (r) => r.body.includes("kminchelle")

  })
  sleep(3)
}
