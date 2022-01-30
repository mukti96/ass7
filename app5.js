// Create fees array and object data for a picnic where everyone will provide free basic information for everyone.


const picnic = [
    {
        name        : 'joba',
        fee            : 200,
        location    : 'sirajgonj'
    },
    {
        name        : 'rahim',
        fee            : 200,
        location    : 'rajshahi'
    },
    {
        name        : 'karim',
        fee            : 200,
        location    : 'shahjadpur'
    },
    {
        name        : 'mim',
        fee            : 200,
        location    : 'mirpur'
    },
    {
        name        : 'jim',
        fee            : 200,
        location    : 'sirajgonj'
    },
];

let total = 0;

picnic.map( data => {
    console.log(`
    
    name:   ${data.name}
    fee:        ${data.fee}
    location: ${data.location}
    
    `);

    total = total + data.fee;

} );

console.log(`Total fees : ${total}`);