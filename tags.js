import http from 'k6/http';
import exec from 'k6/execution';
import { tagWithCurrentStageIndex } from 'https://jslib.k6.io/k6-utils/1.3.0/index.js';

export const options = {
  stages: [{ target: 10, duration: '10s' }],
};

export default function () {
  tagWithCurrentStageIndex();

  // all the requests are tagged with a `stage` tag
  // with the index of the stage as value
  http.get('https://test.k6.io'); // {stage_profile: ramp-up}
  console.log(exec.vu.tags['scenario']);
}
