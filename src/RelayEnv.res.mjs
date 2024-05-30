// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as RescriptRelay from "rescript-relay/src/RescriptRelay.res.mjs";
import * as RelayRuntime from "relay-runtime";
import * as Caml_exceptions from "rescript/lib/es6/caml_exceptions.js";

var Graphql_error = /* @__PURE__ */Caml_exceptions.create("RelayEnv.Graphql_error");

async function fetchQuery(operation, variables, _cacheConfig, _uploadables) {
  var resp = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        body: Caml_option.some(Belt_Option.getExn(JSON.stringify({
                      query: operation.text,
                      variables: variables
                    }))),
        headers: Caml_option.some(new Headers({
                  "content-type": "application/json",
                  accept: "application/json"
                }))
      });
  if (resp.ok) {
    return await resp.json();
  }
  throw {
        RE_EXN_ID: Graphql_error,
        _1: "Request failed: " + resp.statusText,
        Error: new Error()
      };
}

var network = RelayRuntime.Network.create(fetchQuery, undefined);

var environment = RescriptRelay.Environment.make(network, RescriptRelay.Store.make(new RelayRuntime.RecordSource(undefined), 10, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined);

export {
  Graphql_error ,
  fetchQuery ,
  network ,
  environment ,
}
/* network Not a pure module */
