/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
"use strict";

const {utils: Cu}  = Components,
      rootURI      = __SCRIPT_URI_SPEC__.replace("bootstrap.js", ""),
      COMMONJS_URI = "resource://gre/modules/commonjs",
      {require}    = Cu.import(COMMONJS_URI + "/toolkit/require.js", {}),
      {Bootstrap}  = require(COMMONJS_URI + "/sdk/addon/bootstrap.js"),
      {startup, shutdown, install, uninstall} = new Bootstrap(rootURI);