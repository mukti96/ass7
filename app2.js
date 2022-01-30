
// Create an array and object data structure with some data of fifth grade students where their results will be published based on GPA and grade based on. Publish CGPA and final grade in the final result

function Result(){

    // GPA Calculation

    this.gpa = function(mark){

        this.gpa;

        if(mark >= 0 && mark < 33){
            gpa = 0;
        }else if(mark >= 33 && mark < 40){
            gpa = 1;
        }else if(mark >= 40 && mark < 50){
            gpa = 2;
        }else if(mark >= 50 && mark < 60){
            gpa = 3;
        }else if(mark >= 60 && mark < 70){
            gpa = 3.5;
        }else if(mark >= 70 && mark < 80){
            gpa = 4;
        }else if(mark >= 80 && mark <= 100){
            gpa = 5;
        }

        return gpa;

    }

    // Grade Calculation

    this.grade  = function(mark){

        this.grade;

        if(mark >= 0 && mark < 33){
            grade = 'f';
        }else if(mark >= 33 && mark < 40){
            grade = 'd';
        }else if(mark >= 40 && mark < 50){
            grade = 'c';
        }else if(mark >= 50 && mark < 60){
            grade = 'b';
        }else if(mark >= 60 && mark < 70){
            grade = 'a-';
        }else if(mark >= 70 && mark < 80){
            grade = 'a';
        }else if(mark >= 80 && mark <= 100){
            grade = 'a+';
        }

        return grade;

    }


    // totalGrade
    this.totalGrade =  function(cgpa){

        if(cgpa >= 0 && cgpa < 1){
            return  'f';
        }else if(cgpa >= 1 && cgpa < 2){
            return  'd';
        }else if(cgpa >= 2 && cgpa < 3){
            return ' c';
        }else if(cgpa >= 3 && cgpa < 3.5){
            return  'b';
        }else if(cgpa >= 3.5 && cgpa < 4){
            return ' a-';
        }else if(cgpa >= 4 && cgpa < 5){
            return  'a';
        }else if(cgpa == 5){
            return  'a+';
        }


    }



    // CGPA

    this.cgpa = function(bn, en, math, s, ss, rel) {

        let total_gpa = ( bn + en + math + s + ss + rel );

        let cgpa = total_gpa / 6;

        if( bn == 0 || en == 0 || math == 0 || s == 0 || ss == 0 || rel == 0 ){
            return " you are failed ";
        }else{
            return ` your cgpa ${cgpa.toFixed()} & Grade = ${ this.totalGrade(cgpa) } `;
        }


    }





}


let output2 = new Result();


const student = [
    {
        roll            : 01,
        name         : 'Jolil',
        bn              : 64,
        en              : 55,
        math          : 80,
        s                 : 76,
        ss                : 88,
        rel               : 45,
    },
    {
        roll            : 01,
        name         : 'Jolil',
        bn              : 77,
        en              : 65,
        math          : 73,
        s                 : 36,
        ss                : 54,
        rel               : 56,
    },
];


student.map( data => {

    console.log(`
    student roll     :     ${ data.roll }
    student name   :   ${ data.name }


    Subject                Marks           GPA                           Grade
    bangla            :     ${ data.bn }         ${output2.gpa(data.bn)}                  ${output2.grade(data.bn)}
    english            :     ${ data.en }         ${output2.gpa(data.en)}                  ${output2.grade(data.en)}
    math            :           ${ data.math }        ${output2.gpa(data.math)}              ${output2.grade(data.math)}
    science          :     ${ data.s }             ${output2.gpa(data.s)}                    ${output2.grade(data.s)}
    s science          :     ${ data.ss }         ${output2.gpa(data.ss)}                  ${output2.grade(data.ss)}
    religion          :     ${ data.rel }          ${output2.gpa(data.rel)}                 ${output2.grade(data.rel)}
    -----------------------------------------------------------------------------------------
                                            cgpa = ${ output2.cgpa( output2.gpa(data.bn), output2.gpa(data.en), output2.gpa(data.math), output2.gpa(data.s), output2.gpa(data.ss), output2.gpa(data.rel)) }


    `);

} );

















// for (let i = 0; i < student.length; i++) {
//     let roll = student [i][0];
//     let studentName = student [i][1];
//     let fatherName = student [i][2];
//     let motherName = student [i][3];
//     let bn = student [i][4];
//     let en = student [i][5];
//     let math = student [i][6];
//     let s = student [i][7];
//     let ss = student [i][8];
//     let rel = student [i][9];

// console.log(`
// student roll     :     ${ roll }
// student name   :   ${ studentName }
// Father name   :   ${ fatherName }
// Mother name   :   ${ motherName }


// Subject                Marks           GPA                           Grade
// bangla            :     ${ bn }         ${output2.gpa(bn)}                  ${output2.grade(bn)}
// english            :     ${ en }         ${output2.gpa(en)}                  ${output2.grade(en)}
// math            :           ${ math }        ${output2.gpa(math)}              ${output2.grade(math)}
// science          :     ${ s }             ${output2.gpa(s)}                    ${output2.grade(s)}
// s science          :     ${ ss }         ${output2.gpa(ss)}                  ${output2.grade(ss)}
// religion          :     ${ rel }          ${output2.gpa(rel)}                 ${output2.grade(rel)}
// -----------------------------------------------------------------------------------------
//                                            cgpa = ${ output2.cgpa( output2.gpa(bn), output2.gpa(en), output2.gpa(math), output2.gpa(s), output2.gpa(ss), output2.gpa(rel)) }



// `);

// }








