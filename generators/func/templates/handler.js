'use strict'
const { response, resolver, validate } = require('<%= path %>/helpers')

module.exports.handler = (event, context, callback) => {
  global.cb = callback <% if (method.match(/post|put|patch/)) { %>
  let body = JSON.parse(event.body)
  <% } %>

  // see logs in AWS Cloudwatch
  console.log('Hello from <%= lambda %> <%= method %> http method')

  response(200)
}
