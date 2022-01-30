
// Send a welcome message to everyone over the age of 18 based on the age of the data array of all the members of a club and send a greeting message to the person over the age of 40, of course, send the message through a function, and to those who are under 18 years of age. Give the message to be attentive


const years = [
   {
        name   : 'Rifat',
        club     : 'Dance club',
        age     : 15,
   },
   {
    name   : 'Rahima',
    club     : 'Dance club',
    age     : 20,
    },
    {
        name   : 'Jolil',
        club     : 'Dance club',
        age     : 50,
   },


];

years.map( data => {
    if( data.age < 18){
        console.log(`you are baby, your name ${data.name}`);
    }else if( data.age >= 18 && data.age < 40){
        console.log(`you are perfect man for this club, your name ${data.name}`);
    }else if( data.age >= 40 ){
        console.log(`you are bura man so you are not this club, your name ${data.name}`);
    }

} );

