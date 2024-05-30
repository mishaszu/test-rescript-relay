%%raw("import './index.css'")

switch ReactDOM.querySelector("#root") {
| Some(domElement) =>
  ReactDOM.Client.createRoot(domElement)->ReactDOM.Client.Root.render(
    <RescriptRelay.Context.Provider environment=RelayEnv.environment>
      <App />
    </RescriptRelay.Context.Provider>,
  )
| None => ()
}
