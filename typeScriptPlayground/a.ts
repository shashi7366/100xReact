// function callsAnotherFunction(fn:()=>void):void{
//     setTimeout(fn,1000);
// }

// callsAnotherFunction(()=>{
//     console.log("Hi There!");
// });


// interface userInterface{
//     firstName:string,
//     age:number,
//     email?:string
// }

// function isLegal(user:userInterface):boolean{
//     if(user.age>18){
//         return true;
//     }else{
//         return false;
//     }
// }


// interface interfaceWithFunctionInIt{
//     name:string,
//     age:number,
//     greet:(phrase:string)=>string
// }


// class int implements interfaceWithFunctionInIt{
//     name;
//     age;

//      constructor(name:string,age:number){
//         this.name=name;
//         this.age=age;
//      }

//      greet(p:string){
//         console.log(p+" "+this.name);
//         return "hi";
//      }
// }


//We will learn about types in future 
// popular interview question: what is difference between interface and type as they both looks same 
// answer is interfaces can be implemented by class while types cant be
//console.log(isLegal({firstName:"shashi",age:21}));

// types and or arrays extends
// types just like interfaces are used to aggregate data 

/*type UserType={
    name:string,
    age:number
}

type Department={dept:string};

function greet(user:UserType & Department):void{
    console.log(user);
}

greet({name:"shashi",age:25,dept:"cse"});*/


/*type ArrayType=number[];

function print(args:ArrayType):void{
    console.log(args);
}

print([1,2,3]);*/


/*interface type1{
    name:string
}

interface type2{
    dept:string
}

function print(data:type1 | type2):void{
    console.log(data);
}

print({name:"shashi"});

print({dept:"cse"});

print({name:"shashi",dept:"cse"});
*/

/*
interface i1{
    name:string
}

interface i2 extends i1{
    dept:string
}

interface i3 extends i2{
    project:string
}


function describe(args:i3):void{

    console.log(args);
}

describe({project:"blogApp"});
*/


/*
interface i1{
    name:string
}

interface i2{
    dept:string
}

interface i3=i1 & i2. //Throws error

type t1=number[]
type t2=string[]

type t3=t1 & t2 // this is another difference between type and interface that is in interface we can do "and"/"or" operations

function print(args:t3):void{
    console.log(args);
}

print([1,2,3]) //type number is not assignable to type never

*/


//There can be union and intersection of interface and type but resultant should be type not interface.

// we can use extend on interfaces but cant on type


/*
type Department=string;
//interface dept:string;// does not work

function LogDept(args:Department):void{
    console.log(args);
}

LogDept("shashi")
*/



/****************************************** ENUMS IN TYPESCRIPT *********************************************** */

/*
enums in typescript enables us to create named constants

Suppose you have a scenario where a function should accept a value from fixed set

*/

enum Direction{
    Up,
    Down,
    Left,
    Right
};

function printDirection(args:Direction | Example2){
    console.log(args);
}

printDirection(Direction.Up);

enum Example2{
    Up="up",
    Down="down",
    Left="left",
    Right="right"
}

printDirection(Example2.Up);


function identity<Type>(args:Type):Type{
    return args;
}
