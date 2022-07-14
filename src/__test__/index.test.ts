import { checkRequiredMissingParam } from '../index';
test('Should give reponse missing parameter name', () => {
  const requestPayload = { email: 'test@gmail.com' };
  const checkRequiredParamm = ['name'];
  expect(checkRequiredMissingParam(requestPayload, checkRequiredParamm)).toBe('Missing param [name]');
});

test('Should give reponse Empty request found.', () => {
  const requestPayload = {};
  const checkRequiredParamm = ['name'];
  expect(checkRequiredMissingParam(requestPayload, checkRequiredParamm)).toBe(' Empty request found.');
});

test('Should give reponse false.', () => {
  const requestPayload = {};
  const checkRequiredParamm = [];
  expect(checkRequiredMissingParam(requestPayload, [])).toBe(false);
});
