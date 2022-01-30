
// Arrange a data sheet for a family phone book and publish it

const phone = [
    {
         name   : 'Rifat',
         simName     : 'Gramine',
         phoneNo     : 01706851992,
         gender        : 'male',
         location      : 'uttara'
    },
    {
        name   : 'Rahima',
        simName     : 'Bangalink',
        phoneNo     : 01906851992,
        gender        : 'female',
        location      : 'mirpur'
     },
     {
        name   : 'Karima',
        simName     : 'Telitalk',
        phoneNo     : 01506851992,
        gender        : 'female',
        location      : 'mirpur'
    },
    {
        name   : 'jomila',
        simName     : 'Telitalk',
        phoneNo     : 01506851992,
        gender        : 'female',
        location      : 'uttara'
    },
    {
        name   : 'Jamil',
        simName     : 'Banglalink',
        phoneNo     : 01906851112,
        gender        : 'female',
        location      : 'mirpur'
    },
    {
        name   : 'Ramim',
        simName     : 'Gramine',
        phoneNo     : 01706851112,
        gender        : 'male',
        location      : 'uttara'
    },
    {
        name   : 'Mim',
        simName     : 'Banglalink',
        phoneNo     : 01906851118,
        gender        : 'female',
        location      : 'uttara'
    },


 ];
 
 phone.map( data => {
     if( data.simName == 'Gramine' ){
        console.log(`
        name   : ${data.name}
        simName     : ${data.simName}
        phoneNo     : ${data.phoneNo}
        gender        : ${data.gender}
        location      : ${data.location}

        `);

     }
     else if( data.simName == 'Bangalink' && data.location == 'mirpur' ){
         console.log(`

         name   : ${data.name}
         simName     : ${data.simName}
         phoneNo     : ${data.phoneNo}
         gender        : ${data.gender}
         location2      : ${data.location}

         `);
     }
 
 } );
 
 