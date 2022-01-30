
// Create a MERN stack, Laravel, Django, Golan, WordPress, java deves students data structure and make their total income sheet with per developer data, Find specific students. 


const devs = [
    {
        id          : 1,
        name        : 'Rahim',
        skill          : 'Mern stack',
        income      : 200,
        location        : 'Uttara',
        gender          : 'Male'

    },
    {
        id                 : 2,
        name            : 'Karim',
        skill              : ' Laravel',
        income         : 500,
        location        : 'Mirpur',
        gender          : 'Male'

    },
    {
        id                 : 3,
        name            : 'Togor',
        skill              : 'Django',
        income         : 600,
        location        : 'Uttara',
        gender          : 'Male'

    },
    {
        id                 : 4,
        name            : 'Mim',
        skill              : 'Golan',
        income         : 100,
        location        : 'Mirpur',
        gender          : 'Female'

    },
    {
        id                 : 5,
        name            : 'Oni',
        skill              : 'Wordpress',
        income         : 300,
        location        : 'Mirpur',
        gender          : 'Female'

    },
    {
        id                 : 6,
        name            : 'Jui',
        skill              : 'Java',
        income         : 200,
        location        : 'Uttara',
        gender          : 'Female'

    },

];

let total = 0;

devs.map( data => {
    console.log(`
    
        Id : ${data.id} Name: ${data.name} skill: ${data.skill} Location: ${data.location} Gender: ${data.gender} Income ${data.income} 
    
    `);

    total = total + data.income;

});

console.log(` Total income: $${ total } `);


