"use strict";
// let x=((msg:string):void=>{
//     console.log(msg)
// })
// function processInput(callback:(input:string)=>void){
//     let message="hello"
//     callback(message)
// }
// processInput((msg)=>
//     {
//     console.log(msg)
// })
// type books={
//     [key:string]:string
// }
// interface booksAndAuthors{
//     [key:string]:string
// }
// interface mathOperation{
//     (a:number,b:number):number
// }
// let add:mathOperation=((a,b)=>{
//     return a+b
// })
// class bank{
//     public bankName:string
//     private id:number
//     protected salary:number
//     constructor(bankName:string,id:number,salary:number) {
//         this.bankName=bankName
//         this.id=id
//         this.salary=salary
//     }
//     getid():number{
//         return this.id
//     }
// }
// class access extends bank{
//     getSavings():number{
//         return this.salary
//     }
// }
// class singleton{
//     private static instance:singleton
//     private constructor() {
//     }
//     static getInstance():singleton{
//         if(!this.instance){
//             this.instance=new singleton()
//         }
//         return this.instance
//     }
// }
// function obj<t,k extends keyof t>(val:t,key:k):t[k]{
//     return val[key]
// }
// let arrow=((x:number):number=>{
//     return x
// })
// type mathOperation=(x:number,y:number)=>number
// let add:mathOperation=((x,y)=>{
//     return x+y
// })
// interface movieDetails{
//     movieName:string,
//     budget():void,
//     heroName:(name:string)=>string
// }
// let moviesInfo={
//     movieName:"Dragon",
//     budget(){
//         console.log("37 cror")
//     },
//     heroName(name:string):string{
//         return `name`
//     }
// }
// class overLoad{
//     name:string
//     age:number
//     constructor(name:string)
//     constructor(name:string,age:number)
//     constructor(name:string,age?:number){
//         this.name=name
//         this.age=age??18
//     }
// }
// function generics<t>(val:t):t{
//     return  val
// }
// interface emp<t>{
//     name:t
// }
// let user:emp<string>={name:"basha"}
// class school<t>{
//     data:t
//     constructor(data:t){
//         this.data=data
//     }
//     getData(val:t):t{
//         return val
//     }
// }
// function llength<t extends {length:number}>(val:t):number{
//     return val.length
// }
// function obj<t,  k extends keyof t>(val:t,key:k):t[k]{
//     return val[key]
// }
// function para(val:number){
// }
// type parameterType=Parameters<typeof para>
// type returnType=ReturnType<typeof para>
// async function fetchUser():Promise<{id:number,name:string}>{
//     return {id:1,name:"basha"}
// }
// type await=Awaited<ReturnType <typeof fetchUser>>
// let n=((x:number):void=>{
//     console.log(x)
// })
// function processInput(callback:(input:string)=>void){
//     let greeet="hello"
//     callback(greeet)
// }
// processInput((msg)=>{
//     console.log(msg)
// })
// type operation="add"|"sub"|"mul"|"div"|"others"
// function mathOpe(a:number,b:number,operation:operation):number|string{
//     switch(operation){
//         case 'add':
//             return a+b
//         case 'sub':
//             return a-b
//         case 'mul':
//             return a*b
//         case 'div':
//             return a/b
//         default:
//             return 'it is not there'
//     }
// }
// console.log(mathOpe(1,2,"others"))
// type operation=(a:number,b:number)=>number
// interface operations{
//     (a:number,b:number):number
// }
// abstract class shape{
//     abstract getArea():number
//     printArea():void{
//     console.log(`${this.getArea()}`)
//     }
// }
// class circle extends shape{
//     radius:number
//     constructor(radius:number){
//         super()
//         this.radius=radius
//     }
//     getArea(){
//         return this.radius*Math.PI
//     }
// }
// class singleton{
//     private static instance:singleton
//     private constructor(){}
//     static getInstance():singleton{
//         if(!this.instance){
//             this.instance=new singleton
//         }
//         return this.instance
//     }
// }
// let obj1=singleton.getInstance()
// let obj2=singleton.getInstance()
// console.log(obj1==obj2)
// function getValues<t, k extends keyof t>(obj:t,key:k):t[k]{
//     return obj[key]
// }
// interface movie{
//     movieName:string
//     budget():void
//     heroName(input:string):void
// }
// let movie1:movie={
//     movieName:'dragon',
//     budget(){
//         console.log("37 crore")
//     },
//     heroName(input){
//         console.log(input)
//     }
// }
// movie1.heroName("pradeep Ranganathan")
// class Name{
//     a:number
//     b:number
//     constructor(a:number)
//     constructor(a:number,b:number)
//     constructor(a:number,b?:number){
//         this.a=a
//         this.b=b??18
//     }
// }
// function values<t>(val:t):t{
//     return val
// }
// console.log(values<number>(10))
// interface school<t>{
//     things:t
// }
// let product:school<string>={
//     things:"do your study"
// }
// function getValues<t extends {length:number}>(val:t):void{
//     console.log(val.length)
// }
// function getObj<t,k extends keyof t>(obj:t,key:k):t[k]{
//     return obj[key]
// }
// type keys="editor"|"newsreader"
// type store=Record<keys,boolean>
// type lit=boolean|string|null|undefined|jsonValue[]|{[key:string]:jsonValue}
//no,string
// let studentName:string|number;
// let array:string[]=["apple","banana"]
// let arr2:string[]=array.map((n):string=>{
//     return n
// }) 
// console.log(arr2)
// //take two no and return sum
// function sum(a:number,b:number):number{
//     return a+b
// }
//
// {
//     "_id": "67c6a6ae2bece572a39f5235",
//     "name": "singam",
//     "email": "ahamathbasha@example.com",
//     "mobile": "+1234567890",
//     "dob": "1990-01-01",
//     "doj": "2022-05-15",
//     "createdAt": "2025-03-04T07:07:26.141Z",
//     "updatedAt": "2025-03-04T07:07:49.161Z",
//     "__v": 0,
// address:{
//     pincode:606901,
//     houseNo:3/566
// }
//
// }
// interface resoponseLast{
//     _id:string,
//     email:string,
//     address:addAddress
// }
// interface addAddress{
//     pincode:number,
//     doorNo:number
// }
// interface User{
//     id:number,
//     name:string,
//     email:string,
//     isActive:boolean
// }
