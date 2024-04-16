import React from 'react';

// List of what ALKiln robot does during the test
export const RobotStage = (props) => {
  // test to `Scenario` or `Scenario Outline` and row in an `Examples` table?
  // Instead, a definition of "tests"?
  return (
    <ol>
      <li>For each  test, ALKiln follows the instructions in your test.</li>
      <li>Your first Steps could be any of a number of Steps, like waiting, signing into the server, or going to the interview.</li>
      <li>Usually authors at least name an interview that ALKiln should go to. To do that, ALKiln uses { props.base_url }.</li>
      <li>ALKiln pretends to be a human and tries to fill out the fields and take the actions the tests describe.</li>
    </ol>
  )
}