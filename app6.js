
// Create data in a student array and object  where there will be data of about 50 people and print data of Mirpur and Banani residents starting from there


const student = [

    {
        roll :       01,
        name :       'khalil',
        location :       'mirpur'
    },
    {
        roll :       02,
        name :       'jobbar',
        location :       'banani'
    },
    {
        roll :       03,
        name :       'khalil',
        location :       'uttara'
    },
    {
        roll :       04,
        name :       'joba',
        location :       'mirpur'
    },
    {
        roll :       05,
        name :       'tarin',
        location :       'banani'
    },
    {
        roll :       06,
        name :       'jui',
        location :       'uttara'
    },
    {
        roll :       07,
        name :       'mohona',
        location :       'mirpur'
    },
    {
        roll :       08,
        name :       'jolil',
        location :       'Rajshahi'
    },
    {
        roll :       09,
        name :       'khusi',
        location :       'banani'
    },
    {
        roll :       10,
        name :       'lily',
        location :       'rajshahi'
    },
    {
        roll :       11,
        name :       'limon',
        location :       'uttara'
    },

];


student.map( data => {

    if( data.location == 'banani' || data.location == 'mirpur'){
        console.log(`
            roll:       ${data.roll}
            name:       ${data.name}
            location:       ${data.location}
        `);
    }
} );