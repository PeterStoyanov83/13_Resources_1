const assert = require('assert');
const fetch = require('node-fetch');

describe('About Page Unit Tests', function() {
  it('Page title', async function() {
    let res = await fetch("http://localhost:8080/about");
    let body = await res.text();
    assert.ok(body.includes("<h1>About my shopping list</h1>"));
  });

  it('About page content', async function() {
    let res = await fetch("http://localhost:8080/about");
    let body = await res.text();
    assert.ok(body.includes("<p>This is my shopping list</p>"));
  });
});
