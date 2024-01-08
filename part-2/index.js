const tweets = [
    {
        username: "PuertoPowered",
        user: "@BrendenArias",
        createdAt: "15h",
        message: "This is an awesome tweet. You've never seen anything like it."
    },
    {
        username: "PuertoPowered",
        user: "@BrendenArias",
        createdAt: "1h",
        message: "I'm over twitter. This is not a fun application. It should be called something cool like X."
    },
    {
        username: "Mehawk28",
        user: "@MeghanHart",
        createdAt: "55m",
        message: "Who are these weirdos saying twitter should be named X?!"
    }
]

const App = () => (
    <div>
        <Tweet tweets={tweets}/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"));
