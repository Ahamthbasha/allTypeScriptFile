"use strict";
// let visible:boolean=true
// let n:number=2
// let userName:string="ahamathbasha"
// let person:keyof User="id"
// function getValues<t,k extends keyof t>(obj:t,key:k):t[k]{
//     return obj[key]
// }
// let object1:User={id:123,name:"ahamathbasha"}
// console.log(getValues(object1,"name"))
// class bird{
//     fly():void{
//         console.log("Birds can fly")
//     }
// }
// let peacock=new bird()
// if(peacock instanceof bird){
//     peacock.fly()
// }else{
//     console.log("you are not bird")
// }
// function processInput(input?:string):void{
//     if(input){
//         console.log("truthy")
//     }else{
//         console.log("falsy")
//     }
// }
// processInput("1")
// type car={name:"car",speed:number}
// type bike={name:"bike",speed:number}
// function isCar(vehicle:car|bike):vehicle is car{
//     return vehicle.name==="car"
// }
// function getInfo(vehicle:car|bike){
//     if(isCar(vehicle)){
//         console.log(`car is going in the speed of ${vehicle.speed}`)
//     }else{
//         console.log(`bike is going in the speed of ${vehicle.speed}`)
//     }
// }
// getInfo({name:"car",speed:200})
// function add(a:number,b:number):number
// function add(a:string,b:string):string
// function add(a:any,b:any):any{
//     return a+b
// }
// console.log(add("add","sub"))
// let square=(x:number):number=>{
//     return x*x
// }
// console.log(square(5))
// type mathOperation=(a:number,b:number)=>number
// let sum:mathOperation=(x,y)=>x-y
// console.log(sum(3,2))
// interface animal{
//     name:string
//     makeSound():void
// }
// interface species extends animal{
//     species:string
// }
// let dog:species={
//     name:"puppy",
//     makeSound(){
//         console.log("bow")
//     },
//     species:"labrador"
// }
// interface mathOperation{
//     (a:number,b:number):number
// }
// let add:mathOperation=(x,y)=>x+y
// console.log(add(2,3))
// interface Movie{
//     movieName:string,
//     budget():void,
//     heroName:(hero:string)=>string
// }
// let movieDetails:Movie={
//     movieName:"dragon",
//     budget(){
//         console.log("37 crore")
//     },
//     heroName(hero:string):string{
//         return `hero of the movie is ${hero}`
//     }
// }
// console.log(movieDetails.heroName("Rajinikanth")); 
//   console.log(movieDetails.movieName);
//   movieDetails.budget()
// class school{
//     classNo:number
//     constructor(classNo:number){
//         this.classNo=classNo
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
//         console.log(`${this.id}`)
//     }
// }
// class access extends bank{
//     getSavings():void{
//         console.log(`${this.savings}`)
//     }
// }
// let ibank=new access("ahamathbasha",123,1000)
// ibank.getSavings()
// ibank.getId()
// abstract class shape{
//    abstract getArea():number
//    printArea():void{
//     console.log(`${this.getArea()}`)
//    }
// }
// class circle extends shape{
//     radius:number
//     constructor(radius:number) {
//         super()
//         this.radius=radius
//     }
//     getArea(){
//         return this.radius*Math.PI
//     }
// }
// let round=new circle(2.5)
// round.printArea()
// class animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     makeSound():void{
//         console.log("any animal can make sound")
//     }
// }
// class cat extends animal{
//     makeSound(): void {
//         console.log("meow")
//     }
// }
// class dog extends animal{
//     makeSound(): void {
//         console.log("bow bow")
//     }
// }
// let puppy=new dog("puppy")
// puppy.makeSound()
// class mathOperation{
//     add(a:number,b:number):number
//     add(a:string,b:string):string
//     add(a:any,b:any):any{
//         return a+b
//     }   
// }
// let sum=new mathOperation()
// console.log(sum.add(1,2))
// class movie{
//     movieName:string
//     heroName:string
//     constructor(movieName:string)
//     constructor(movieName:string,heroName:string)
//     constructor(movieName:string,heroName?:string){
//         this.movieName=movieName
//         this.heroName=heroName??"unknown"
//     }
// }
// let movieDetails=new movie("dragon","pradeep ranganathan")
// function add<T>(val:T):T{
//     return val
// }
// interface Box<T>{
//     things:T
// }
// let stickers:Box<string>={things:"hello"}
// class movie<T>{
//     data:T
//     constructor(data:T){
//         this.data=data
//     }
//     getData():T{
//         return this.data
//     }
// }
// let dragon=new movie<number>(37)
// console.log(dragon.getData())
// function accessLength<t extends {length:number}>(val:t):void{
//     console.log(val.length)
// }
// accessLength("abcd")
// accessLength([1,2,3,4])
// function accessLength<t,k extends keyof t>(obj:t,key:k):t[k]{
//     return obj[key]
// }
// const user={name:"ahamathbasha",email:"ahamathbasha@gmail.com"}
// console.log(accessLength(user,"email"))
// interface user{
//     id:number,
//     name:string
// }
// let studentName:Partial<user>={}
// let studentName2:Readonly<user>={id:12,name:"basha"}
// let studentName3:Required<user>={id:1,name:"ahamathbasha"}
// let studentName4:Pick<user,"name">={name:"basha"}
// let studentName5:Omit<user,"id">={name:"ahamathbasha"}
// type role="admin"|"user"
// type getPermission=Record<role,boolean>
// let user:getPermission={
//     admin:true,
//     user:true
// }
// type status="success"|"loading"
// type specifyExtract=Extract<status,"success">
// let userWin:specifyExtract="success"
// type specifyExclude=Exclude<status,"loading">
// let userExclude:specifyExclude="success"
// function getValue(id:number):number{
//     return id
// }
// type getValue1=Parameters<typeof getValue>
// type returnValue1=ReturnType<typeof getValue>
// let no:getValue1=[1]
// let no1:returnValue1=1
// async function fetchUser():Promise<{id:number,name:string}>{
//     return {id:101,name:"basha"}
// }
// type userPromise=Awaited<ReturnType<typeof fetchUser>>
// let obj:userPromise={id:101,name:"thugluq darbar"}
// type userResponse=string|null|undefined
// let user:NonNullable<userResponse>="basha"
// class car{
//     model:number
//     name:string
//     constructor(model:number,name:string){
//         this.model=model
//         this.name=name
//     }
// }
// let cars:InstanceType<typeof car>=new car(2010,"porsche")
// console.log(cars.model)
// type isString<T>=T extends string?"yes":"no"
// type status="success"|"loading"|"pending"
// const win:status="success"
// type jsonValue=string|null|undefined|boolean|number|jsonValue[]|{[key:string]:jsonValue}
// let user:jsonValue={
//     name:"basha",
//     address:{
//         doorNo:3/566
//     }
// }
// export function add(a:number,b:number):number{
//     return a+b
// }
// import {add} from './'
// console.log(add(1,2))
// namespace mathOperation{
//     export function add(a:number,b:number):number{
//         return a+b
//     }
// }
// declare module "loadash"{
//     export function add<T>(array:T[],size:number){
//     }
// }
// import {add} from "./"
// console.log([1,2,3,4],2)
// namespace mathOperation{
//     export function add(a:number,b:number):number{
//         return a+b
//     }
// }
// namespace mathOperation{
//     export function sub(a:number,b:number):number{
//         return a-b
//     }
// }
// declare global{
//     interface String{
//         toTitleCase():string
//     }
// }
// String.prototype.toTitleCase=function(){
//     return this.replace(/\b\w/g,(char)=>char.toUpperCase())
// }
// console.log("hello world".toTitleCase());
