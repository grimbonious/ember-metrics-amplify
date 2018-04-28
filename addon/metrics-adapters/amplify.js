import BaseAdapter from 'ember-metrics/metrics-adapters/base';
import {
  assign
} from '@ember/polyfills';
import {
  get
} from '@ember/object';
import objectTransforms from 'ember-metrics/utils/object-transforms';
import canUseDOM from 'ember-metrics/utils/can-use-dom';
import {
  Analytics
} from 'aws-amplify';

const {
  compact,
  without,
} = objectTransforms;

export default BaseAdapter.extend({
  toStringExtension() {
    return 'amplify';
  },

  init() {},

  trackEvent(options = {}) {
    const compactedOptions = compact(options);
    const {
      event
    } = compactedOptions;
    const attributes = without(compactedOptions, 'event');

    if (canUseDOM) {
      Analytics.record(event, attributes)
    }
  },

  trackPage(options = {}) {
    const pageEventName = get(this, 'config.pageEventName');
    const event = {
      event: pageEventName || 'PageView'
    };
    const mergedOptions = assign(event, options);

    this.trackEvent(mergedOptions);
  },

  willDestroy() {}
});
