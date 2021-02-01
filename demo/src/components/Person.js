import React from 'react';

function Person({person, key}) {
    return (
        <div>
            <h2>
              {key}  I am {person.Name}, I am {person.Age} year old, I know {person.Skill}
            </h2><br/>
        </div>
    );
}
export default Person
