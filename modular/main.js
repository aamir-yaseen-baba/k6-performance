
import { coinflip } from "./coinflip.js";
import { contacts } from "./contacts.js";
import { thresholdsSettings, breakingWorkload, smokeWorkload } from "./config.js";

export const options = {
  scenarios: {
    my_scenario: __ENV.WORKLOAD === 'breaking' ? breakingWorkload : smokeWorkload
  },
  thresholds: thresholdsSettings
};

const baseUrl = "https://test.k6.io";

export default function () {
  contacts(baseUrl);
  coinflip(baseUrl);
}

