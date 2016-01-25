'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../../holodeck');
var Request = require('../../../../../../../lib/http/Request');
var Response = require('../../../../../../../lib/http/Response');
var Twilio = require('../../../../../../../lib').Twilio;


var client;
var holodeck;

describe('IpAccessControlList', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('AC' + _.join(_.fill(new Array(32), 'a'), ''), 'AUTHTOKEN', holodeck);
  });
  it('should generate valid list request', function() {
    holodeck.mock(new Response(500, ''));

    var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .sip
                                  .ipAccessControlLists.list();
    promise = promise.then(function() {
      throw new Error('failed');
    }, function(error) {
      expect(error.constructor).toBe(Error.prototype.constructor);
    });

    promise.done();

    var solution = {
      accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    };
    var url = _.template(
      'https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/SIP/IpAccessControlLists.json'
    )(solution);

    holodeck.assertHasRequest(new Request({
      method: 'GET',
      url: url
    }));
  });
  it('should generate valid read_full response', function() {
    var body = JSON.stringify({
        'end': 0,
        'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/IpAccessControlLists.json?PageSize=50&Page=0',
        'ip_access_control_lists': [
            {
                'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                'date_created': 'Fri, 17 Jul 2015 21:25:15 +0000',
                'date_updated': 'Fri, 17 Jul 2015 21:25:15 +0000',
                'friendly_name': 'aaaa',
                'sid': 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                'subresource_uris': {
                    'ip_addresses': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/IpAccessControlLists/ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAddresses.json'
                },
                'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/IpAccessControlLists/ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
            }
        ],
        'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/IpAccessControlLists.json?PageSize=50&Page=0',
        'next_page_uri': null,
        'num_pages': 1,
        'page': 0,
        'page_size': 50,
        'previous_page_uri': null,
        'start': 0,
        'total': 1,
        'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/IpAccessControlLists.json?PageSize=50&Page=0'
    });
    holodeck.mock(new Response(200, body));

    var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .sip
                                  .ipAccessControlLists.list();
    promise = promise.then(function(response) {
      expect(response).toBeDefined();
    }, function() {
      throw new Error('failed');
    });

    promise.done();
  });
  it('should generate valid read_empty response', function() {
    var body = JSON.stringify({
        'end': 0,
        'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/IpAccessControlLists.json?PageSize=50&Page=0',
        'ip_access_control_lists': [],
        'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/IpAccessControlLists.json?PageSize=50&Page=0',
        'next_page_uri': null,
        'num_pages': 1,
        'page': 0,
        'page_size': 50,
        'previous_page_uri': null,
        'start': 0,
        'total': 1,
        'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/IpAccessControlLists.json?PageSize=50&Page=0'
    });
    holodeck.mock(new Response(200, body));

    var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .sip
                                  .ipAccessControlLists.list();
    promise = promise.then(function(response) {
      expect(response).toBeDefined();
    }, function() {
      throw new Error('failed');
    });

    promise.done();
  });
  it('should generate valid create request', function() {
    holodeck.mock(new Response(500, ''));

    var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .sip
                                  .ipAccessControlLists.create();
    promise = promise.then(function() {
      throw new Error('failed');
    }, function(error) {
      expect(error.constructor).toBe(Error.prototype.constructor);
    });

    promise.done();

    var solution = {
      accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    };
    var url = _.template(
      'https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/SIP/IpAccessControlLists.json'
    )(solution);

    holodeck.assertHasRequest(new Request({
      method: 'POST',
      url: url
    }));
  });
  it('should generate valid create response', function() {
    var body = JSON.stringify({
        'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'date_created': 'Fri, 17 Jul 2015 21:25:15 +0000',
        'date_updated': 'Fri, 17 Jul 2015 21:25:15 +0000',
        'friendly_name': 'aaaa',
        'sid': 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'subresource_uris': {
            'ip_addresses': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/IpAccessControlLists/ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAddresses.json'
        },
        'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/IpAccessControlLists/ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
    });
    holodeck.mock(new Response(200, body));

    var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .sip
                                  .ipAccessControlLists.create();
    promise = promise.then(function(response) {
      expect(response).toBeDefined();
    }, function() {
      throw new Error('failed');
    });

    promise.done();
  });
  it('should generate valid fetch request', function() {
    holodeck.mock(new Response(500, ''));

    var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .sip
                                  .ipAccessControlLists('ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
    promise = promise.then(function() {
      throw new Error('failed');
    }, function(error) {
      expect(error.constructor).toBe(Error.prototype.constructor);
    });

    promise.done();

    var solution = {
      accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      sid: 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    };
    var url = _.template(
      'https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/SIP/IpAccessControlLists/<%= sid %>.json'
    )(solution);

    holodeck.assertHasRequest(new Request({
      method: 'GET',
      url: url
    }));
  });
  it('should generate valid fetch response', function() {
    var body = JSON.stringify({
        'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'date_created': 'Fri, 17 Jul 2015 21:25:15 +0000',
        'date_updated': 'Fri, 17 Jul 2015 21:25:15 +0000',
        'friendly_name': 'aaaa',
        'sid': 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'subresource_uris': {
            'ip_addresses': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/IpAccessControlLists/ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAddresses.json'
        },
        'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/IpAccessControlLists/ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
    });
    holodeck.mock(new Response(200, body));

    var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .sip
                                  .ipAccessControlLists('ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
    promise = promise.then(function(response) {
      expect(response).toBeDefined();
    }, function() {
      throw new Error('failed');
    });

    promise.done();
  });
  it('should generate valid update request', function() {
    holodeck.mock(new Response(500, ''));

    var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .sip
                                  .ipAccessControlLists('ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
    promise = promise.then(function() {
      throw new Error('failed');
    }, function(error) {
      expect(error.constructor).toBe(Error.prototype.constructor);
    });

    promise.done();

    var solution = {
      accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      sid: 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    };
    var url = _.template(
      'https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/SIP/IpAccessControlLists/<%= sid %>.json'
    )(solution);

    holodeck.assertHasRequest(new Request({
      method: 'POST',
      url: url
    }));
  });
  it('should generate valid update response', function() {
    var body = JSON.stringify({
        'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'date_created': 'Fri, 17 Jul 2015 21:25:15 +0000',
        'date_updated': 'Fri, 17 Jul 2015 21:25:15 +0000',
        'friendly_name': 'aaaa',
        'sid': 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'subresource_uris': {
            'ip_addresses': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/IpAccessControlLists/ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAddresses.json'
        },
        'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/IpAccessControlLists/ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
    });
    holodeck.mock(new Response(200, body));

    var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .sip
                                  .ipAccessControlLists('ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
    promise = promise.then(function(response) {
      expect(response).toBeDefined();
    }, function() {
      throw new Error('failed');
    });

    promise.done();
  });
  it('should generate valid remove request', function() {
    holodeck.mock(new Response(500, ''));

    var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .sip
                                  .ipAccessControlLists('ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
    promise = promise.then(function() {
      throw new Error('failed');
    }, function(error) {
      expect(error.constructor).toBe(Error.prototype.constructor);
    });

    promise.done();

    var solution = {
      accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      sid: 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    };
    var url = _.template(
      'https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/SIP/IpAccessControlLists/<%= sid %>.json'
    )(solution);

    holodeck.assertHasRequest(new Request({
      method: 'DELETE',
      url: url
    }));
  });
  it('should generate valid delete response', function() {
    var body = JSON.stringify(null);
    holodeck.mock(new Response(204, body));

    var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .sip
                                  .ipAccessControlLists('ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
    promise = promise.then(function(response) {
      expect(response).toBeDefined();
    }, function() {
      throw new Error('failed');
    });

    promise.done();
  });
});
