const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1YmZmOGNhLTQ5YzMtNDRmYi04ZWE2LTQxY2E1MmQxYzUzYS0xNzE2OTQzMDE0NzYyIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYWNjOWZkODItOTk1ZC00NGY2LWE3NzUtMTU0OTE2MTQzZmNmIiwidHlwZSI6InQifQ.303fg0j3fdWINvvDeoONCUsfHSVAsfcvydvXf9rqn9g'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: token,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
