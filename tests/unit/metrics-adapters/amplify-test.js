import { moduleFor, test } from 'ember-qunit';
import sinon from 'sinon';
import { Analytics } from 'aws-amplify';

let sandbox, config;

moduleFor('metrics-adapter:amplify', 'amplify adapter', {
  beforeEach() {
      sandbox = sinon.sandbox.create();
      config = {};
    },
    afterEach() {
      sandbox.restore();
    }
});

test('#trackEvent calls `Analytics.record` with the right arguments', function(assert) {
  const stub = sandbox.stub(Analytics, 'record');
  const subject = this.subject({ config });
  subject.trackEvent({ event: 'Search', opt1: 'bar', opt2: 'baz' });
  assert.ok(stub.calledWith('Search', { opt1: 'bar', opt2: 'baz' }), 'it sends the correct arguments and options');
});

test('#trackPage calls `Analytics.record` with the right arguments', function(assert) {
  const stub = sandbox.stub(Analytics, 'record');
  const subject = this.subject({ config });
  subject.trackPage({ page: '/my-page', title: 'My Title' });
  assert.ok(stub.calledWith('PageView', { page: '/my-page', title: 'My Title' }), 'it sends the correct arguments and options');
});

test('#trackPage calls `Analytics.record` with custom page view event name', function(assert) {
  const stub = sandbox.stub(Analytics, 'record');
  config = {
    pageEventName: 'CustomViewEvent'
  };
  const subject = this.subject({ config });
  subject.trackPage({ page: '/my-page', title: 'My Title' });
  assert.ok(stub.calledWith('CustomViewEvent', { page: '/my-page', title: 'My Title' }), 'it sends the correct arguments and options');
});
