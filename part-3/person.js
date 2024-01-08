const Person = (props) => {
    return (
        <div>
            {props.people.map(person => 
                <div>
                    <p>Learn more about {person.name}</p>
                    {person.age >= 18 ? <h3>please go vote!</h3> : <h3>you must be 18 to vote!</h3>}
                    {person.name.length > 8 ? <h3>{person.name.slice(0, 5)}</h3> : <h3>{person.name}</h3>}
                    <ul>
                        {person.hobbies.map(hobby => <li>{hobby}</li>)}
                    </ul>
                </div>)}
        </div>
    );
}