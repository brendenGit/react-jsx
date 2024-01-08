const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Brenden" />
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"));