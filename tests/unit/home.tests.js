const assert = require('assert');
const fetch = require('node-fetch');

describe('Home page', function() {
  it('Page title', async function() {
    let res = await fetch("http://localhost:8080/");
    let body = await res.text();
    assert.ok(body.includes("<h1>My Shopping List</h1>"));
  });

  it('Products count', async function() {
    let res = await fetch("http://localhost:8080/");
    let body = await res.text();
    assert.ok(body.includes("Shopping List: <b>3</b>"));
  });
});
