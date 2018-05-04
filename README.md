ember-metrics-amplify
==============================================================================

[ember-metrics](https://www.npmjs.com/package/ember-metrics) adapter for [Amplify Analytics (Pinpoint)](https://aws.github.io/aws-amplify/media/analytics_guide)

Installation
------------------------------------------------------------------------------

```
ember install ember-metrics-amplify
```

Usage
------------------------------------------------------------------------------

```js
// config/environment.js
let ENV = {
  metricsAdapters: [
    {
      name: 'Amplify',
      environments: ['development', 'production'],
      config: {
        pageEventName: 'PageView'
      }
    }
  ]
};
```

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-metrics-amplify`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
