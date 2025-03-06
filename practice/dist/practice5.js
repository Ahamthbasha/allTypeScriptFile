"use strict";
const promise = (success) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("my name is king");
            }
            else {
                reject("sorry promise reject");
            }
        });
    });
};
promise(true)
    .then((resolve) => {
    console.log(resolve);
})
    .catch((reject) => {
    console.log(reject);
});
// let promise1=(success:boolean):Promise<string>=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(success){
//                 resolve("abcd")
//             }
//             else{
//                 reject("learn")
//             }
//         },1000)
//     })
// }
// let promise2=(success:boolean):Promise<string>=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(success){
//             resolve("basha")
//         }else{
//             reject("bye")
//         }
//     },1500)
//     })
// }
// let promise3=(success:boolean):Promise<string>=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//             reject("bye")
//     },500)
//     })
// }
// Promise.any([promise1(true),promise2(true),promise3(true)])
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })
// let promise1=(success:boolean):Promise<string>=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(success){
//                 resolve("abcd")
//             }
//             else{
//                 reject("learn")
//             }
//         },1000)
//     })
// }
// let promise2=(success:boolean):Promise<string>=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(success){
//             resolve("basha")
//         }else{
//             reject("bye")
//         }
//     },1500)
//     })
// }
// let promise3=(success:boolean):Promise<string>=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//             reject("bye")
//     },500)
//     })
// }
// Promise.race([promise1(true),promise2(true),promise3(true)])
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })
// let promise1=(success:boolean):Promise<string>=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(success){
//                 resolve("abcd")
//             }
//             else{
//                 reject("learn")
//             }
//         },1000)
//     })
// }
// let promise2=(success:boolean):Promise<string>=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(success){
//             resolve("basha")
//         }else{
//             reject("bye")
//         }
//     },1500)
//     })
// }
// let promise3=(success:boolean):Promise<string>=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//             reject("bye")
//     },2000)
//     })
// }
// Promise.all([promise1(true),promise2(true),promise3(true)])
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })
// let promise1=(success:boolean):Promise<string>=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(success){
//                 resolve("abcd")
//             }
//             else{
//                 reject("learn")
//             }
//         },1000)
//     })
// }
// let promise2=(success:boolean):Promise<string>=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(success){
//             resolve("basha")
//         }else{
//             reject("bye")
//         }
//     },1500)
//     })
// }
// let promise3=(success:boolean):Promise<string>=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//             reject("bye")
//     },2000)
//     })
// }
// Promise.allSettled([promise1(true),promise2(true),promise3(true)])
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })
// type UserDefined = { name: string; age: number };
// const user = {
//   name: "Alice",
//   age: 25,
//   extra: "extra property",
// } as UserDefined;
// console.log(user.extra); 
// function check<t>(val:t):t{
//     return val
// }
// class shape<t>{
//     name:t
//     constructor(name:t) {
//         this.name=name
//     }
//     getName():void{
//         console.log(this.name)
//     }
// }
// const rectangle=new shape<string>("rectangle")
// function val<t extends {length:number}>(obj:t):void{
//     console.log(obj.length)
// }
// val("hello")
// function val<T, K extends keyof T>(obj:T,Key:K):T[K]{
//     return obj[Key]
// }
// async function fetchUser():Promise<{id:number,name:string}>{
//     return {id:10,name:"ahamathbasha"}
// }
// type awaitedReturn=Awaited<ReturnType<typeof fetchUser>>
// let abcd:awaitedReturn={id:20,name:"basha"}
// class car{
//     name:string
//     brand:string
//     model:string
//     constructor(name:string,brand:string,model:string){
//         this.name=name
//         this.brand=brand
//         this.model=model
//     }
// }
// type instanceOfType=InstanceType<typeof car>
// let honda:instanceOfType=new car("honda","kgf","kgd3")
// type JsonValue=string|number|boolean|null|undefined|JsonValue[]|{[key:string]:JsonValue}
// let abcd:JsonValue={
//     id:123,
//     address:{
//         doorNo:123,
//         street:"nadu street",
//         districtInfo:{
//             district:"tiruvannamalai"
//         }
//     }
// }
// function getValue<t>(val:t):t{
//     return val
// }
// type Car={vehicle:"car",speed:number}
// type Bike={vehicle:"bike",gear:number}
// function isCar(vehicle:Car|Bike):vehicle is Car{
//     return vehicle.vehicle === "car"
// }
// function getVehicleInfo(vehicle:Car|Bike):void{
//     if(isCar(vehicle)){
//         console.log(`vehicle is ${vehicle.vehicle} and speed is ${vehicle.speed}`)
//     }else{
//         console.log(`vehicle is ${vehicle.vehicle} and speed is ${vehicle.gear}`)
//     }
// }
// getVehicleInfo({vehicle:"car",speed:120})
// function sum(a:number,b:number):number{
//     return a+b
// }
// type array=number[]|string[]
// function reverseArray<T extends {length:number}>(val:T[]):T[]{
//     return val.reverse()
// }
// function firstElement<t>(val:t[]):t{
//     return val[0]
// }
// interface Person{
//     name:string,
//     age:number,
//     address:Address
// }
// interface Address{
//     street:string,
//     city:string,
// }
// interface Employee extends Person{
//     employeeId:number
// }
// type vehicle={
//     brand:string,
//     model:string,
//     year:string
// }
// class Box<T>{
//     value:T
//     constructor(value:T){
//         this.value=value
//     }
//     getValue():T{
//         return this.value
//     }
//     setValue(value:T){
//         this.value=value
//     }
// }
// let box1=new Box<number>(10)
// console.log(box1.getValue())
// box1.setValue(30)
// console.log(box1.getValue())
// class bankAccount{
//     amount:number
//     constructor(amount:number){
//         this.amount=amount
//     }
//     deposit(value:number){
//         if(value>0){
//             this.amount+=value
//         }
//     }
//     withdraw(value:number):string{
//         if(this.amount > value){
//             this.amount-=value
//         }
//         return `now your current amount ${this.amount}`
//     }
//     getBalance():void{
//         console.log(`the balance is ${this.amount}`)
//     }
// }
// const ibank=new bankAccount(1000)
// ibank.getBalance()
// ibank.deposit(1000)
// ibank.getBalance()
// ibank.withdraw(1000)
// ibank.getBalance()
// class Animal{
//     makeSound():void{
//         console.log("animal make sound")
//     }
// }
// class Dog extends Animal{
//     makeSound(): void {
//         console.log("Dog bark")
//     }
// }
// class Cat extends Animal{
//     makeSound(): void {
//         console.log("cat meow")
//     }
// }
// const tom=new Cat()
// tom.makeSound()
// enum UserRole{
//     Admin,
//     User,
//     Guest
// }
// function checkPermission(role:UserRole):void{
//     switch(role){
//         case UserRole.Admin:
//             console.log("admin log")
//             break
//         case UserRole.User:
//             console.log("user log")
//             break
//         case UserRole.Guest:
//             console.log("gust log")
//             break
//         default:
//             console.log("unkonwn")
//     }
// }
// checkPermission(UserRole.Admin)
// type UserDefined={
//     name:string,
//     email:string
// }
// type optional=Partial<UserDefined>
// type readonly=Readonly<UserDefined>
// type Booleanify<T>={
//     [K in keyof T]?:boolean
// }
// type UserD={
//     name: string;
//     age: number;
//     email: string;
// }
// type convertBoolean=Booleanify<UserD>
// let basha:convertBoolean={}
// type Isstring<t>=t extends string?true:false;
// type stringCheck=Isstring<number>
// function multiplyNummbers(a:number,b:number):number{
//     return a*b
// }
// function mergeObject<T,U>(obj1:T,obj2:U):T & U{
//   return  {...obj1,...obj2}
// }
// function filterArray<T>(val:T[],condition:(elem:T)=>boolean):T[]{
//     return val.filter(condition)
// }
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
// console.log(evenNumbers);
// Implement a generic function swap<T, U> that takes a tuple [T, U] and returns a swapped version [U, T].
// function swap<T,U>(val:[T,U]):[U,T]{
//     return [val[1],val[0]]
// }
// Define a function countOccurrences<T> that takes an array and a value and returns the number of times the value appears.
// function countOccurrences<T>(val:T[],no:T):number{
//     let count=0
//     for(let i=0;i<val.length;i++){
//         if(val[i]===no){
//             count++
//         }
//     }
//     return count++
// }
// const numbersA = [1, 2, 3, 2, 4, 2, 5];
// console.log(countOccurrences(numbersA, 2))
// Create a function capitalize that takes a string and returns it with the first letter capitalized.
// function capitalize(val:string):string{
//     return val[0].toUpperCase()+val.slice(1)
// }
// console.log(capitalize("hello"));
// Define an interface User with id, name, and email. Then, create a function getUserInfo that takes a User and returns a formatted string.
// interface UserDefined{
//     id:number,
//     name:string,
//     email:string
// }
// function getUserInfo(para:UserDefined):string{
//     return `
//     user info:
//     id:${para.id},
//     name:${para.name},
//     email:${para.email} `
// }
// const user1: UserDefined = { id: 1, name: "Alice", email: "alice@example.com" };
// console.log(getUserInfo(user1))
// interface Post{
//     id:number,
//     title:string,
//     body:string
// }
// async function fetchPosts():Promise<Post[]>{
//     try {
//         let response=await fetch("https://jsonplaceholder.typicode.com/posts")
//         let data=await response.json()
//         let finalData:Post[]=data.map((user:any):Post=>({
//             id:user.id,
//             title:user.title,
//             body:user.body
//         }))
//         return finalData
//     } catch (error) {
//         console.log(error)
//         return []
//     }
// }
// fetchPosts()
// .then((post)=>{
//     console.log(post)
// })
// .catch((err)=>{
//     console.log(err)
// })
// type UserDefined={
//     id:number,
//     name:string,
//     email:string,
//     username:string
// }
// async function fetchUsers():Promise<UserDefined[]> {
//     try {
//         let data =await fetch("https://jsonplaceholder.typicode.com/users ")
//         let response=await data.json()
//         let finalData:UserDefined[]=response.map((user:any):UserDefined=>({
//             id:user.id,
//             name:user.name,
//             email:user.email,
//             username:user.username
//         }))
//         return finalData
//     } catch (error) {
//         console.log(error)
//         return []
//     }
// }
// fetchUsers()
// .then((user)=>{
//     console.log(user)
// })
// .catch((err)=>{
//     console.log(err)
// })
// async function fetchData<T>(url:string):Promise<T>{
//     try {
//     let response=await fetch(url)
//     let finalData=await response.json()
//     return finalData
//     } catch (error) {
//      throw error
//     }
// }
// fetchData<{ postId: number; id: number; name: string; email: string; body: string }[]>("https://jsonplaceholder.typicode.com/comments")
// .then((comments)=>{
//     console.log(comments)
// })
// .catch((err)=>{
//     console.log(err)
// })
// function n<t>(val:t):t{
//     return val
// }
// console.log(n<number>(10))
// function add(a:number,b:number):Promise<number|string>{
//     return new Promise((resolve,reject)=>{
//         if(typeof a === 'number' && typeof b=== 'number'){
//             resolve(a+b)
//         }else{
//             reject (`we need no`)
//         }
//     })
// }
// add(1,0)
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })
// let nothing=():void=>console.log("helllo")
// nothing()
// function processInput(callback:(input:string)=>void){
//     let message="hello"
//     callback(message)
// }
// processInput((msg)=>{
//     console.log(msg)
// })
// type userDefined={
//     [key:string]:string|number
// }
// let abcd:userDefined={
//     red:"123"
// }
// interface mathOperation{
//     (a:number,b:number):number
// }
// type operation={
//     (a:number,b:number):number
// }
// interface Animals{
//     name:string,
//     makeSound():void
// }
// class Dog implements Animals{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     makeSound(): void {
//         console.log("hello")
//     }
// }
// class bank{
//     public name:string
//     private id:number
//     protected savings:number
//     constructor(name:string,id:number,savings:number){
//         this.name=name
//         this.id=id
//         this.savings=savings
//     }
//     getId():void{
//         console.log(this.id)
//     }
// }
// class access extends bank{
//     getSavings():void{
//         console.log(this.savings)
//     }
// }
// let newBank=new access("ibank",123,2000)
// newBank.getSavings()
// class mathUtils{
//     static square(val:number):number{
//         return val*val
//     }
// }
// console.log(mathUtils.square(10))
// class singleton{
//     private static instance:singleton
//     private constructor(){}
//     static getInstance():singleton{
//         if(!this.instance){
//             this.instance=new singleton()
//         }
//         return this.instance
//     }
// }
// let obj1=singleton.getInstance()
// let obj2=singleton.getInstance()
// console.log(obj1==obj2)
// let obj:unknown={name:"alice"}
// if(typeof obj === 'object' && obj != null){
//     console.log((obj as{name:string}).name)
// }
// function handle(msg:string):never{
//     throw new Error(msg)
// }
// let obj={name:"basha",age:21} as const
// if(typeof obj === 'object' && obj != null){
//     console.log((obj as any).age)
// }
// type greet=(msg:string)=>string
// function getValues<T,K extends keyof T>(obj:T,key:K):T[K]{
//     return obj[key]
// }
// let sum=((x:number):number=>{
// return x+x
// })
// interface details{
//     movieName:string,
//     heroName:(hero:string)=>string,
//     budget():void
// }
// let movieDetails:details={
//     movieName:"dragon",
//     heroName:(name)=>{
//         return name
//     },
//     budget(){
//         console.log("37 crore")
//     }
// }
// console.log(movieDetails.heroName("pradeep ranganathan"))
// class overLoad{
//     a:number
//     b:number
//     constructor(a:number)
//     constructor(a:number,b:number)
//     constructor(a:string,b:string)
//     constructor(a:number,b:string)
//     constructor(a:string,b:number)
//     constructor(a:any,b?:any){
//      this.a=a
//      this.b=b?? 18  
//     }
// }
// function showValue<T>(val:T):T{
//     return val
// }
// console.log(showValue<number>(10))
// interface details<t>{
//     id:t
// }
// let getDetails:details<number>={id:10}
// function llength<T extends {length:number}>(Obj:T):number{
//     return Obj.length
// }
// console.log(llength("hello"))
// interface Person{
//     id:number,
//     email:string,
//     phone:number
// }
// let basha:Partial<Person>={}
// let bash1:Required<Person>={id:1,email:"basha",phone:12}
// let basha2:Readonly<Person>={id:1,email:"basha",phone:12}
// let basha3:Pick<Person,"email"|"id">={email:"basha",id:12}
// let basha4:Omit<Person,"email"|"phone">={id:12}
// let basha5:Record<keyof Person,boolean>={id:true,email:true,phone:true}
// type T=string|number|boolean
// type extract=Extract<T,number|string>
// let basha6:extract=12
// type exclude=Exclude<T,boolean>
// let basha7:exclude="god"
// function display(a:number,b:string):string{
//     return `${a} ${b}`
// }
// type ParameterType=Parameters<typeof display>
// let para:ParameterType=[1,"basha"]
// type ReturnTypes=ReturnType<typeof display>
// let returns:ReturnTypes="basha"
// async function fetchUser():Promise<{id:number,name:string}>{
//     return {id:12,name:"ahamathbasha"}
// }
// type awatiedType=Awaited<ReturnType <typeof fetchUser>>
// let idName={id:"basha",name:"ahamathbasha"}
// class bird{
//     constructor(name:string){
//     }
// }
// type instanc=InstanceType<typeof bird>
// let hero:instanc=new bird("peacock")
// type Booleanify<k>={
//     [K in keyof k]:boolean
// }
// let person:Booleanify<Person>={id:true,email:true,phone:true}
// console.log(person)
// type UserDefined={
//     id:number,
//     name:string
// }
// type optional<t>={
//     [k in keyof t]?:t[k]
// }
// let newOptional:optional<UserDefined>={}
// type isStrig<T>=T extends string?"yes":"no";
// type literal="success"|"error"
// let basha:literal="error"
// type JsonValue=string|boolean|null|undefined|jsonValue[]|number|{[key:string]:jsonValue}
// type event="click"|"hover"
// type element="button"|"page"
// type event_Element=`${event}-${element}`
// export function add(){
// }
// import {add} from "./"
// namespace basha{
//     export function add(){
//     }
// }
// namespace basha{
//     export function sub(){
//     }
// }
// declare module "loadash"{
//     export function chunk<T>(array:T[],size:number):T[]{
//     }
// }
// function GetNo<T>(Val:T):T{
//     return Val
// }
// console.log(GetNo<number>(1))
// function addNum(a:number,b:number):Promise<number|string>{
//     return new Promise((resolve,reject)=>{
//         if(typeof a === 'number' && typeof b === 'number'){
//             resolve(a+b)
//         }
//         else{
//             reject(`we need no to add`)
//         }
//     })
// }
// addNum(2,3)
// .then((user)=>{
//     console.log(user)
// })
// .catch((err)=>{
//     console.log(err)
// })
// function findLargest(val:number[]):number{
//     let max=0
//     for(let i=0;i<val.length;i++){
//         if(val[i]>max){
//             max=val[i]
//         }
//     }
//     return max
// }
// console.log(findLargest([0,2,10]))
// type greet=(ms:string)=>string
// interface greet2{
//     (ms:string):string
// }
