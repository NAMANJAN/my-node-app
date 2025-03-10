'use strict';

    /**
     * New Relic agent configuration.
     *
     * See lib/config/default.js in the agent distribution for a more complete
     * list of configuration variables.
     */
    exports.config = {
      /**
       * Array of application names.
       */
      app_name: ['Your Application Name'],
      /**
       * Your New Relic license key.
       */
      license_key: 'YOUR_LICENSE_KEY',
      logging: {
        /**
         * Level at which to log. 'trace', 'debug', 'info', 'warn', or 'error'.
         */
        level: 'info'
      },
      /**
       * When true, all request headers except for those listed in attributes.exclude are captured for all traces, unless otherwise specified in a destination's attributes include/exclude lists.
       */
      allow_all_headers: true,
      attributes: {
        /**
         * Prefix of attributes to exclude from all destinations. Allows '*' wildcard.
         */
        exclude: [
          'request.headers.cookie',
          'request.headers.authorization',
          'request.headers.proxyAuthorization',
          'request.headers.setCookie*',
          'response.headers.cookie',
          'response.headers.authorization',
          'response.headers.proxyAuthorization',
          'response.headers.setCookie*'
        ]
      }
    };