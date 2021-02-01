import React from 'react';
import Person from './Person';

function NameList() {
    const names = ['Hemant','Rakesh','Harshal','Hemant']
    const persons = [
        {
            id: 1,
            Name: 'Hemant',
            Age: 23,
            Skill: 'React'
        },
        {
            id: 2,
            Name: 'Rakesh',
            Age: 24,
            Skill: 'Vue'
        },
        {
            id: 3,
            Name: 'Harshal',
            Age: 24,
            Skill: 'Angular'
        }
    ]
    const nameList = names.map((name, index) =><h1 key={index}>{index} {name}</h1>)
    return (
        <div>
            {
                nameList
            }
        </div>
    );
}
export default NameList
