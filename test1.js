// const name='Anna';
// const age=27;
// const person={
//     name,
//     age:age,
//     ocupation:"programer"
// };
// console.log(person.name);
// console.log(person.age);
// console.log(person.ocupation);
// 22222222222222222222222222
// function createArray(num,prop){
//     var newArray=[];
//     var counter=0;
//     for(var i=0;i<num;i++){
//         var element=prop;
//         newArray[i]=element;
//         counter++;
        
//     }
//     return newArray;
// }
// console.log(createArray(6,0) );
// pitanje na testu
const checkLogin = (isLoggedIn, fnTrue, fnFalse) => {
    return isLoggedIn ? fnTrue() : fnFalse();
 }
 
 const showWelcome = () => {
    console.log("Welcome!")
 }
 
 const showUnauthorized = () => {
    console.log("Unauthorized!")
 }
 
 checkLogin(true, showWelcome, showUnauthorized);
 checkLogin(false, showWelcome, showUnauthorized);
 

