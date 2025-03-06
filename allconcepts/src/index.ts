//boolean

// let voteEligible:boolean=true
// let voteNotEligible:boolean=false

//number

// let n1:number=10
// let n2:number=10.4

//string

// let Heroname:string="ahamathbasha"


// //void

// function nothing():void{
//     // return void //we wont return void explicitly
// }

// nothing()

// function nothing2():undefined{
//     return undefined
// }

// nothing2()

// //void with arrow function

// let nothing3=():void=>{
//     console.log("hello")
// }
// nothing3()

// function processInput(callback:(input:string)=>void){
//     let userInput="hello"
//     callback(userInput)
// }

// processInput((message)=>{
//     console.log("user says",message)
// })

// let result:void=undefined
// let result2:void=null //show error because null is not assignable to void

//null

// let absentValue:null=null

//undefined

// let uninitializedValue:undefined=undefined

// function doSomething(x: string | null) {
//     if (x === null) {
//       // do nothing
//     } else {
//       console.log('Hello, ' + x.toUpperCase());
//     }
//   }

// doSomething(null)

//object type

// let user:{name:string,email:string}={
//     name:"ahamathbasha",
//     email:"ahamathbasha@gmail.com"
// }

//type alias

// type User={
//     name:string,
//     email:string
// }

// let user1:User={name:"basha",email:"heyman@gmail.com"}

//type includes readOnly,optional

// type User2={
//     readonly id:number,
//     name:string,
//     email:string,
//     price?:number;
// }

// let user3:User2={id:1,name:"ahamathbasha",email:"ahamathbasha@gmail.com"}

// This allows defining dynamic object properties.

// type dictionary={
//     [key:string]:string;
// }

// let color:dictionary={
//     red:"234578t7",
// }

//extending object types

// type Animal={species:string}
// type pet=Animal & {name:string}

// let myPet:pet={species:"labrador",name:"tommy"}

//interface

// interface person{
//     name:string,
//     email:string
//     greet():String
// }

// let logUser:person={
//     name:"ahamathbasha",
//     email:"ahamathbasha@gmail.com",
//     greet(){
//         return `hello my name is ${this.name}`
//     }
// }

// function personName(person:person){
//     return person.name
// }

// console.log(personName(logUser))

//interface inheritance

// interface employee{
//     name:string
// }

// interface department extends employee{
//     departmentName:string
// }

// let company:employee={name:"basha"}
// let company2:department={name:"basha",departmentName:"hr"}

// //interface with index signature

// interface student{
//     [key:string]:string
// }

// let std={
//     name:"basha"
// }
// console.log(std.name)

//interface for function types

// interface MathOperation{
//     (a:number,b:number):number
// }

// let add:MathOperation=(x,y)=>{
//     return x+y
// }

// console.log(add(5, 10));

//interface with class

// interface Animals{
//     name:string
//     makeSound():void
// }

// class Dog implements Animals{
//     name:string

//     constructor(name:string){
//         this.name=name
//     }

//     makeSound(){
//         console.log("woof!")
//     }
// }

// let myDog = new Dog("Buddy");
// myDog.makeSound();

//class
// class car{
//     model:string
//     manufacturer:string

//     constructor(model:string,manufacturer:string){
//         this.model=model
//         this.manufacturer=manufacturer
//     }

//     drive():void{
//         console.log(`dive ${this.model} and ${this.manufacturer}`)
//     }
// }

//access modifier

// class employee{
//     public name:string
//     private salary:number
//     protected department:string

//     constructor(name:string,salary:number,department:string){
//         this.name=name
//         this.salary=salary
//         this.department=department
//     }

//     getsalary():number{
//         return this.salary
//     }
// }

// class manager extends employee{
//     getDepartment():string{
//         return this.department
//     }
// }

// let basha=new employee("ahamathbasha",20000,"hr")
// console.log(basha.name)
// console.log(basha.department)
// console.log(basha.salary)

//readOnly

// class petta{
//     readonly name:string

//     constructor(name:string){
//         this.name=name
//     }
// }

// let movie=new petta("ahamathbasha")
// console.log(movie.name)

//getters and setters

// class BankAccount {
//     private balance: number = 0;

//     get getBalance(): number {
//         return this.balance;
//     }

//     set deposit(amount: number) {
//         if (amount > 0) {
//             this.balance += amount;
//         } else {
//             console.log("Deposit must be positive");
//         }
//     }
// }

// let account = new BankAccount();
// account.deposit = 1000;  // ✅ Calls setter
// console.log(account.getBalance); // ✅ Calls getter → Output: 1000

//abstract clas

// abstract class shape{
//    abstract getArea():number

//    printArea():void{
//     console.log(`${this.getArea()}`)
//    }
// }

// class circle extends shape{
//     radius:number

//     constructor(radius:number){
//         super()
//         this.radius=radius
//     }

//     getArea(){
//         return Math.PI * this.radius * this.radius
//     }
// }

// let myCircle = new circle(5);
// myCircle.printArea();

//static

// class mathUtils{
//     static Pi:number=3.14

//     static square(val:number):number{
//         return this.Pi*val
//     }
// }

// console.log(mathUtils.square(50))

// class singleton{
//     private static instance:singleton

//     private constructor(){
//     }

//     static getInstance():singleton{
//         if(!this.instance){
//             this.instance=new singleton()
//         }
//         return this.instance
//     }
// }
// let obj1 = singleton.getInstance();
// let obj2 = singleton.getInstance();

// console.log(obj1 === obj2);


//numeric enum


// enum Direction{
//     up,
//     left,
//     right,
//     down
// }

// console.log(Direction.up)


//string enum

// enum Status{
//     success="success",
//     positive="positive"
// }

// console.log(Status.success)

//heterogeneous enum:you should not give string enum first because after you give no,one,two it will show error.If you use no you should declare first.

// enum hetro{
//     no,
//     success="basha"
// }

// console.log(hetro.no)

//function in enum

// enum Role{
//     user,
//     Admin
// }

// function getPermission(role:Role){
//     switch(role){
//         case Role.user:
//             return "full access to user"
//         case Role.Admin:
//             return "full access to admin"
//     }
// }

// console.log(getPermission(Role.Admin))

//const enums


// const enum colors{
//     red="red",
//     green="green"
// }

// console.log(colors.red)

//enum computed value

// enum expression{
//     a=10,
//     b=a*2,
//     c=b+1
// }

// console.log(expression.b)

//ARRAY

// let number:number[]=[1,2,3]
// let string:string[]=['a','h']

//generic

// let number1:Array<number>=[10,20]
// let number2:Array<string>=['a','b']

//tuples

// let studentName:[string,number]=["basha",10]
// console.log(studentName[0])
// console.log(studentName[1])

//accessing tuples

// console.log(studentName[0].toLowerCase())
// console.log(studentName[1])

//modify tuples

// studentName[0]="basha"

//tuple with optional 

// let empName:[string,number,boolean?]=["basha",12]

// console.log(empName)

//tuple with rest element

// let empName2:[string,...number[]]=["basha",1,2]
// console.log(empName2)

//tuple with named elements

// type emp=[id:number,name:string,active:boolean]//here we use option but we cannot use readOnly here with specific key & value

// let employee:emp=[101,"basha",true]

// console.log(employee)

//readonly 

// let readOnlytuple: readonly[string,number]=["basha",123]

// console.log(readOnlytuple)

//unknown

// let data:unknown

// data="string"
// data=42

//before use type check unknown

// let data2:unknown="js"

// if(typeof data2=='string'){
//     console.log(data2.toUpperCase())
// }

//unknown functions

// function fetchData():unknown{
//     return "data received"
// }

// let result=fetchData()
// console.log(result)

//unknown with objects and arrays

// let obj:unknown={name:"alice"}

// if(typeof obj=="object" && obj!=null){
//     console.log((obj as{name:string}).name)
// }

//any

// let abcd:any="abcd"
// console.log(abcd)

// let array:any=[1,2,3,4,{name:"basha"}]
// console.log(array)

//never

// function throwError(message:string):never{
//     throw new Error(message)
// }

//type compatibility

// interface point{
//     x:number,
//     y:number
// }

// let p1:point={x:10,y:20}
// let p2:{x:number,y:number}=p1
// console.log(p2.x)


// type Person={
//     name:string,
// }

// type Employee={
//     name:string,
//     id:number
// }

// let person:Person={name:'alice'}
// let employee:Employee={name:'bob',id:123}

// // employee=person

// person=employee

//AS

// let value1:any="hello word"

// let value2:number=(value1 as string).length
// let value3:number=(<string>value1).length
// console.log(value2)

// //AS ANY

// let num:number=10
// console.log((num as any).toUpperCase())

// //AS CONST

// let user={name:"basha"} as const

//non null assertion:null or undefined

//satisfies

// type User={name:string,age:number}

// const loggedUser={
//     name:"ak",
//     age:30,
//     extra:"extra properties",
// } satisfies User;

// console.log(loggedUser.extra)


//union types

// type stringOrNumber=string|number
// let a :stringOrNumber="abcd"

// function printId(id:string|number):void{
//     console.log(printId)
// }

// printId(101)

//intersect

// type val1={name:string}
// type val2={no:number}

// type combine=val1&val2

// let emp:combine={name:"basha",no:123}

//union and intersect together

// interface person{
//     name:string
// }

// interface employee extends person{
//     id:number
// }

// const emp:employee={
//     name:"basha",
//     id:123
// }

//type aliases

// type User=number|string

// const animeName:User="abcd"

// type obj={
//     name:string,
//     id:number
// }

// let obj1:obj={
//     name:"basha",
//     id:123
// }

//function

// type greet=(name:string)=>string
// const sayHello:greet=(name)=>`hello ${name}`
// console.log(sayHello("basha"))


//keyof

// type User={
//     name:string,
//     id:number,
//     age:number
// }

// type userKey=keyof User

// let abcd:userKey="name"

//key of in function

// function getValue<t,k extends keyof t>(obj:t,key:k):t[k]{
//     return obj[key]
// }

// let as:User={name:"basha",id:123,age:100}

// console.log(getValue(as,"name"))

//type guard or type narrowing

//instanceof

// class Bird{
//     fly():void{
//         console.log("you can fly")
//     }
// }

// let peacock=new Bird()

// if(peacock instanceof Bird){
//     peacock.fly()
// }else{
//     console.log("it is not instance")
// }

//typeof

// function processInput(value:unknown){
//     if(typeof value=="string"){
//         return value.toUpperCase()
//     }else{
//         return "not supportable"
//     }
// }

// console.log(processInput("vijay sethupathi"))

//equality check

//truthiness check
// function printMessage(message?:string):void{
//     if(message){
//         console.log(message)
//     }else{
//         console.log("there is no message")
//     }
// }
// console.log(printMessage)

// //type predicates

// type car={type:"car",speed:number}
// type bike={type:"bike",gear:number}

// function isCar(vehicle:car|bike):vehicle is car{
//     return vehicle.type=="car"
// }

// function getVehicleInfo(vehicle:car|bike){
//     if(isCar(vehicle)){
//         console.log(`car speed is ${vehicle.speed}`)
//     }
//     else{
//         console.log(`bike speed is ${vehicle.gear}`)
//     }
// }

// getVehicleInfo({ type: "car", speed: 120 }); // ✅ Car speed: 120 km/h
// getVehicleInfo({ type: "bike", gear: 6 });   // ✅ Bike has 6 gears

//typescript functions

// function add(a:number,b:number):number{
//     return a+b
// }

//function overloading

// function combine(a:number,b:number):number;
// function combine(a:string,b:string):string;
// function combine(a:any,b:any):any{
//     return a+b
// }

// console.log(combine(5,10))

//arrow function

// let num=(x:number):number=>{
//     return 2+2
// }

//function signature

// type mathOperation=(x:number,y:number)=>number

// let subtract:mathOperation=(x,y)=>x-y
// console.log(subtract(5,3))

// interface studentData{
//     name:string,
//     address():void
// }

// let student1 : studentData={
//     name:"ahamathbasha",
//     address(){
//         console.log("hello world")
//     }
// }

// console.log(student1.name)
// student1.address()

// interface Car{
//     name:string
// }

// interface mechanic extends Car{
//     mechanicName:string,
//     action:string,
//     bill:number
// }

// let billInfo:mechanic={
//     name:"maruthisuzuki",
//     mechanicName:"abcd",
//     action:"brake repair",
//     bill:1200
// }

// console.log(billInfo)

//using interface with function

// interface mathOperations{
//     (a:number,b:number):number
// }

// let addition:mathOperations=(a,b)=>a+b

// console.log(addition(2,3))

//type vs interface

// interface emp{
//     name:string
// }

// interface manager extends emp{
//     managerName:string
// }

// type user={name:string}

// type admin=emp & user

// let md:manager={name:"hari",managerName:"basha"}

// let head:admin={name:"basha"}

//extend interface

// interface animal{
//     name:string
//     sound():void
// }

// interface species extends animal{
//     species:string
// }

// let dinosaur:species={
//     name:"dinosaur",
//     sound(){
//         console.log("vooo")
//     },
//     species:"godzilla"
// }

//hybrid types

// interface Movies {
//     movieName: string;  // Property
  
//     budget(): void;  // Method
  
//     (hero: string): string;  // Callable function signature
//   }
  
//   // Implementing the hybrid type
//   const movieDetails: Movies = (hero: string): string => {
//     return `Hero of the movie is ${hero}`;
//   };
  
//   // Adding properties
//   movieDetails.movieName = "Baasha";
  
//   // Adding method
//   movieDetails.budget = function () {
//     console.log("It is a secret!");
//   };
  
//   // ✅ Testing the hybrid type
//   console.log(movieDetails("Rajinikanth")); // Output: Hero of the movie is Rajinikanth
//   console.log(movieDetails.movieName); // Output: Baasha
//   movieDetails.budget(); // Output: It is a secret!

//basic class
// class school{
//     schoolname:string

//     constructor(schoolname:string){
//         this.schoolname=schoolname
//     }

//     festivallist():void{
//         console.log("abcd")
//     }
// }

// let abcdSchool=new school("svm")
// console.log(abcdSchool)
// abcdSchool.festivallist()

//access modifier

// class Account{
//     public bankName:string;
//     private accountId:number;
//     protected owner:string

//     constructor(bankName:string,accountId:number,owner:string)
// {
//     this.bankName=bankName
//     this.accountId=accountId
//     this.owner=owner
// }
// }

// class accessOwner extends Account{
//     getOwner():string{
//         return this.owner
//     }
// }

// let iBank=new accessOwner("ibank",1234567890,"vijaysethupathi")

// console.log(iBank.getOwner())
// console.log(iBank.bankName)

//abstract class

// abstract class shape{
//     abstract getArea():number;
// }

// class operation extends shape{
//     radius:number
//     constructor(radius:number) {
//         super()
//         this.radius=radius
//     }

//     getArea():number{
//         return this.radius*2
//     }
// }

// const circle=new operation(10)
// console.log(circle.getArea())

// abstract class animal{
//     abstract getAnimalName():void
// }

// class animalName extends animal{
//     name:string
//     constructor(name:string){
//         super()
//         this.name=name
//     }

//     getAnimalName() {
//         console.log(`${this.name}`)
//     }
// }

// let animalOne=new animalName("dinosaur")

// animalOne.getAnimalName()

//polymorphism

// class Animal{
//     makeSound():void{
//         console.log("any sound")
//     }
// }

// class cat extends Animal{
//     makeSound(): void {
//         console.log("meow")
//     }
// }

// class cow extends Animal{
//     makeSound(): void {
//         console.log("maa")
//     }
// }

// const lakshmi=new cow()
// lakshmi.makeSound()


//method overloading ts does not support but we can acheive with multiple function signature

// class Mathoperations{
//     add(a:number,b:number):number;
//     add(a:string,b:string):string;
//     add(a:any,b:any):any{
//         return a+b
//     }
// }

// let addition:Mathoperations=new Mathoperations()

// console.log(addition.add(5,10))

//method overriding:child class override the parent class

// class vehicle{
//     carName():void{
//         console.log("rolls royce")
//     }
// }

// class jeep extends vehicle{
//     carName():void{
//         console.log("jeep")
//     }
// }

// class bike extends vehicle{
//     carName():void{
//         console.log("bike")
//     }
// }

// let cars=new bike()
// cars.carName()

//constructor overloading

// class cName{
//     className:string;
//     studentName:string;

//     constructor(className:string);
//     constructor(className:string,studentName:string);
//     constructor(studentName:string,className?:string){
//         this.className=className??"vaathi"
//         this.studentName=studentName
//     }
// }

// const p1=new cName("master")
// console.log(p1)
// console.log(p1.className)
// console.log(p1.studentName)

//generics

// function add<T>(val:T):T{
//     return val
// }

// console.log(add(40))

//generic interface

// interface box<T>{
//     things:T
// }

// let stationary:box<string>={things:"note and book"}

// let no:box<number>={things:1}

// console.log(stationary.things)
// console.log(no.things)

//generic class

// class dragon<T>{
//     data :T
//     constructor(data:T){
//         this.data=data
//     }

//     getData():T{
//         return this.data
//     }
// }

// let returnDragon=new dragon<number>(10)
// console.log(returnDragon.getData())

//generic constraints:extends keyof

// function llength<t extends {length:number}>(val:t):void{
//     console.log(`length:${val.length}`)
// }

// llength("basha")
// llength(42)

//keyof

// function genCon<T,K extends keyof T>(obj:T,key:K):T[K]{
//     return obj[key]
// }

// const user={name:"ahamathbasha",email:"ahamathbasha@gmail.com"}

// console.log(genCon(user,"email"))
// console.log(genCon(user,"age"))

//utility types

//partial
// interface user{
//     id:number,
//     name:string
// }

// let studentName:Partial<user>={}

//required

// let studentName2:Required<user>={id:1,name:"basha"}

//readOnly

// let studentName3:Readonly<user>={id:1,name:"ahamathbasha"}

//pick

// type userPreview=Pick<user,"name">
// let studentPick:userPreview={name:"basha"}

//omit

// type omitPreview=Omit<user,"id">
// let studentOmit:omitPreview={name:"basha"}

//record

// type userRoles="admin"|"editor"|"viewer";
// type Permission=Record<userRoles,boolean>;

// const userPermission:Permission={
//     admin:true,
//     editor:true,
//     viewer:true
// }

//extract

// type status="success"|"error"|"loading";
// type validStatus=Extract<status,"success"|"error">

// // let status1:validStatus="loading" //it will through error
// let status2:validStatus="error"

//exclude

// type status2="success"|"error"|"loading";
// type validStatus2=Exclude<status2,"loading">
// let stat:validStatus2="success"
// let stat2:validStatus2="loading" //it will show error

//parameters

// function greet(a:string,b:number){
//     return `hello my name is ${a} and age is ${b}`
// }

// type greetParameters=Parameters<typeof greet>

// const args:greetParameters=["alice",25]
// console.log(greet(...args))

//return type

// function greet(id:number):number{
//     return id
// }

// type userType=ReturnType<typeof greet>

// let userId:userType=123;
// let userIds:userType="abnc"; // error will come

//awaited

// async function fetchUser():Promise<{id:number,name:string}>{
//     return {id:1,name:"Alice"}
// }
// type userData=Awaited<ReturnType<typeof fetchUser>>

// const user:userData={id:2,name:"alice in wonderland"}

//non nullable

// type userResponse=string|null|undefined

// type use=NonNullable<userResponse>

// let userRes:use="welcome";

//instancetype
// class car{
//     constructor(brand:string,model:number){

//     }
// }

// type useInstance=InstanceType<typeof car>
// let mahindra:useInstance=new car("mahindra",123)

//mapped types

// type User={id:number,name:string}

// type partialUser={[k in keyof User]?:User[k]}

// let user:partialUser={}

//condition types
// type IsString<T>=T extends string?"yes":"No"

// type test=IsString<42>

//literal types

// type Status="success"|"error"|"loading"
// let statustype:Status="success"

//recursive types

// type jsonValue=string|number|boolean|null|jsonValue[]|{[key:string]:jsonValue}

// const data:jsonValue={
//     name:"basha",
//     address:{
//         doorNO:3/566,
//     }
// }

//template string literal

// type event="click"|"hover"
// type element="button"|"link"

// type eventGenerate=`${event}-${element}`
// let event2:eventGenerate=`click-button`

//typescript module

// export function add(a:number,b:number):number{
//     return a+b
// }

// import {add} from "./"
// console.log(add(2,5))

//namespace

// namespace operation{
//     export function add(a:number,b:number):number{
//         return a+b
//     }
// }

// console.log(operation.add(2,4))

//ambient module

// declare module "loadash"{
//     export function chunk<T>(array:T[],size:number):T[][]
// }

// import {chunk} from "loadash";
// console.log(chunk([1,2,3,4,5],2))

//namespace augmentation

// namespace myLib{
//     export function greet(name:string):string{
//         return `hello,${name}`
//     }
// }

// namespace myLib{
//     export function details(id:number,name:string):{id:number,name:string}{
//         return {id:123,name:"basha"}
//     }
// }


//global augmentation

// declare global{
//     interface String{
//         toTitleCase():string
//     }
// }

// String.prototype.toTitleCase=function(){
//     return this.replace(/\b\w/g,(char)=>char.toUpperCase())
// }
// console.log("hello world".toTitleCase());