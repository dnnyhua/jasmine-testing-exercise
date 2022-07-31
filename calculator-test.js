
it('should calculate the monthly rate correctly', function () {
  let values = {amount: 10000, years: 5, rate: 7.7};
  expect(calculateMonthlyPayment(values)).toEqual('201.33');
});
  

it("should return a result with 2 decimal places", function() {
  let values = {amount: 12500, years: 5, rate: 7.7};
  expect(calculateMonthlyPayment(values)).toBe('251.66');
});


it("should return a result with a very high interest rate", function() {
  let values = {amount: 10000, years: 5, rate: 40.7};
  expect(calculateMonthlyPayment(values)).toEqual('392.18');
});


it("should return a result with a very high loan amount", function() {
  let values = {amount: 1000000, years: 5, rate: 4.5};
  expect(calculateMonthlyPayment(values)).toEqual('18643.02');
});
