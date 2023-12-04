
//problem #1
const employees = {
    'employee' : [
        {
            'name' : "Sam",
            'department' : "Tech",
            'designation' : "Manager",
            'salary' : 40000,
            'raiseelig' : true
        },
        {
            'name' : "Mary",
            'department' : "Finance",
            'designation' : "Trainee",
            'salary' : 18500,
            'raiseelig' : true
        },
        {
            'name' : "Bill",
            'department' : "HR",
            'designation' : "Executive",
            'salary' : 21200,
            'raiseelig' : false
        }
    ]
}
console.log(employees)

//problem #2
const company = {
    'thecompany' : [
        {
            'companyName' : "Tech Stars",
            'website' : "www.techstars.site",
            employee: []
        }
    ]
}
console.log(company)
//problem #3
let company3 = 
{
'companyName' : "Tech Stars",
'website' : "www.techstars.site",
employee: [
    {
        'name' : "Sam",
        'department' : "Tech",
        'designation' : "Manager",
        'salary' : 40000,
        'raiseelig' : true
    },
    {
        'name' : "Mary",
        'department' : "Finance",
        'designation' : "Trainee",
        'salary' : 18500,
        'raiseelig' : true
    },
    {
        'name' : "Bill",
        'department' : "HR",
        'designation' : "Executive",
        'salary' : 21200,
        'raiseelig' : false
    },
    {
        'name' : "Anna",
        'department' : "Tech",
        'designation' : "Executive",
        'salary' : 25600,
        'raiseelig' : false
    }
]
}
console.log(company3)

//problem 4
let salarycount = 0;
for (let i = 0; i < company3.employee.length; i++){
    salarycount += company3.employee[i]['salary'];
}
console.log(salarycount)

//problem 5
function canRaise(company3) {
   for (let i = 0; i < company3.employee.length; i++){
        if(company["employee"][i]['raiseelig']){
            company["employee"][i]['salary'] += company["employee"][i]['salary']*(.1)
            company["employee"][i]['raiseelig'] = false
            console.log(company["employee"][i])
        }
    }
}
canRaise(company3)

//problem 6
let wfh = ['Anna', 'Sam']
function workingfromHome(wfh){
    for(let i = 0; i < company3.employee.length; i++){
        if(company["employee"][i]['name']==wfh[i]){
            company["employee"[i]['wfh']=true]
        }
    }
}
workingfromHome(wfh)
