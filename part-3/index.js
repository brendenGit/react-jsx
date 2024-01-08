const people = [
    {
        name: "Brenden",
        age: 22,
        hobbies: ['Muay Thai', 'Video Games', 'Snowboarding']
    },
    {
        name: "Meghan Hart",
        age: 17,
        hobbies: ['Yoga', 'Fashion', 'Reading']
    },
    {
        name: "Sage",
        age: 4,
        hobbies: ['Living Rent Free', 'Walking Slowly','Snoring']
    }
]

const App = () => (
    <div>
        <Person people={people}/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"));
