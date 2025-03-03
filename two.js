// let greetings:string="hello";
// console.log(greetings)
// //number//////////////////////////////////////
// let userId:number=334455;
// //boolean///////////////////////////////////
// let isLoggedIn:boolean=false;
// //any(dont use any)/////////////////////////
// let hero;
// function getHero(){
//     return "thor"
// }
// hero=getHero()
// console.log(hero)
// ////////////////////////////////////////////////////////////////HERE WE SEE ABOUT THE PASSING VALUE TYPE SAFETY//////////////////////////////////////////////////////////////////////////
// function addTwo(num:number){
//     return num+2
// }
// addTwo(5)
// function getUpper(value:string){
//     return value.toUpperCase()
// }
// getUpper("basha")
// function signUpUser(name:string,email:string,isPaid:boolean){
//     return {name,email,isPaid}
// }
// signUpUser("basha","basha@gmail.com",true)
// let loginUser=(name:string,password:string)=>{
//     return {name,password}
// }
// // loginUser("basha");=>it will show error
// loginUser("basha","basha@gmail.com");
// ////////////////////////////////////////////////////////////HERE WE ARE GOING TO SEE THE PASSING AND RETURN CHECKING///////////////////////////////////////////////////////////////////////////////
// function addTwoo(num:number):number{
//     // return "hello" // it will show the error
//     return num+2
// }
// scenario 1
// function getValues(myVal:number):boolean{
//     if(myVal >5){
//         return true
//     }
//     return "200 ok"
// }
// const getHello=(s:string):string=>{
//     return ""
// }
// const heroes=['captainAmerica','dragon','thor'];
// //typescript is smart here it automatically predict the datatype by its value.So here we don't specify the passing parameter.but in return time we need to specify
// const sentenceHeroes=heroes.map((hero):string=>{
//     return `hero name is ${hero}`
// })
// //void
// function consoleError(errMsg:string):void{
//     console.log(errMsg)
// }
// //never
// function handleError(errMsg:string):never{
//     throw new Error(errMsg)
// }
// //////////////////OBJECT////////////////////////////////////////////////////////////////////////////
// const user={
//     name:"ahamathbasha",
//     email:"hitesh@lco.dev",
//     isActive:true
// }
// function createUser({name:string,isPaid:boolean}){
// }
// createUser({name:"basha",isPaid:true})
// function createCourse():{name:string,price:number}{
//     return {name:"reactjs",price:399}
// }
// function createMovie({movieName}:{movieName:string}):{movieName:string}{
// return {movieName:"dragon"}
// }
// const movie = createMovie({ movieName: "Inception" });
// console.log(movie.movieName); // Output: "dragon"
// function createStudent({name}:{name:string}):{name:string}{
//     //return {name:"basha",email:""}//it will give error
//     return {name}
// }
// let newUser={name:"ahamathBasha",email:"ahamathbasha@gmail.com"}
// console.log(createStudent(newUser))//here you pass email also but it only give name
//type aliases
// type User={
//     name:string,
//     email:string,
//     isActive:boolean
// }
// function createUser(user:User):User{
//     return user
// }
// createUser({name:"",email:"",isActive:true})
//optional(?)
// type User={
//     name:string,
//     email:string,
//     creditDetails?:number
// }
// const appUser:User={
//     name:"basha",
//     email:"basha@gmail.com"
// }
// type creditDate={
//     creditDate:string
// }
// type creditCardName={
//     creditCardName:string
// }
// //here we make type with the combination of two types which are not mostly used..
// type creditAllDetails=creditCardName & creditDate & {
//     cvv:number
// }
//array
// const superHeros:[]=[]
// const marvelHeros:string[]=[]
// marvelHeros.push("spiderMan")
// const heroPower:number[]=[]
// heroPower.push(2)
// const power:Array<number>=[]
// type User={
//     name:string,
//     isActive:boolean
// }
// let allUsers:User[]=[]
// allUsers.push({name:"",isActive:true})
// const MLMOdels:number[][]=[
//     [255,255,255],
// ]
//myUnion
// let score :number | string |boolean =33
// score=44
// score="ak"
// type User={
//     name:string,
//     id:number
// }
// type Admin={
//     username:string,
//     id:number
// }
// let hitesh: User | Admin={name:"ahamathbasha",id:335}
// hitesh={username:"basha",id:336}
// function getDbId(id:number|string):void{
//     console.log(id)
// }
// getDbId(5)
// getDbId("a")
// //problem arise here
// //Here we need to explicitly check type of the data to perform operation.
// function getDBid(id:number|string){
//     if(typeof id == "string"){
//         id.toLowerCase()
//     }
//     else{
//         id+2
//     }
// }
//array
// const data1 : number[]=[1,2,3]
// const data2 : string[]=['1','2','3']
// const data3 : (string|number)[]=[1,'2']
// let seatAllotment:'aisle'|'middle'|'last';
// seatAllotment="aisle"
//seatAllotment="crew" it show error
//tuples
//it is a specialised array.It follows a specific order.It has a fixed length
// let tUser:[string,number,boolean]
// tUser=['basha',121,true]
// let rgb:[number,number,number]=[255,123,112]
// type User=[number,string]
// const newUser:User=[123,"ahamathbasha"]
// newUser[1]="hc.com";
//enums
// enum seatChoice{
//     aisle,
//     middle,
//     window,
//     fourth
// }
// const hcSear=seatChoice.aisle
var seatChoice;
(function (seatChoice) {
    seatChoice["aisle"] = "aisle";
    seatChoice[seatChoice["middle"] = 3] = "middle";
    seatChoice[seatChoice["window"] = 4] = "window";
    seatChoice[seatChoice["fourth"] = 5] = "fourth";
})(seatChoice || (seatChoice = {}));
var searChoice = seatChoice.aisle;
