// import * as utils from ".";

import * as utils from ".";

test("Converts unix timestamps to user friendly date formats.", () => {
  expect(utils.convertToTZ(Date.now(), 0))
    .toMatch(/(am|pm)$/i);
});

test("Displays user friendly location names. (eg. `Moscow, RU`)", () => {
  expect(utils.ucFirst(utils.formatAddress("city, county, state")))
    .toBe("City, State");
});
