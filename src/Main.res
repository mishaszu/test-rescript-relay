%%raw("import './index.css'")

ReactDOMExperimental.renderConcurrentRootAtElementWithId(
  <RescriptRelay.Context.Provider environment=RelayEnv.environment>
    <App />
  </RescriptRelay.Context.Provider>,
  "root",
)
