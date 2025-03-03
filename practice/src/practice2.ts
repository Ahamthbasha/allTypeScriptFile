let value:boolean=true
let no:number=123
let userName:string="abcd"

// function nothing():void{
//     console.log("abcd")
// }

// let num=():void=>{
//     console.log("nothing")
// }

// function processInput(callback:(input:number)=>void){
//     let a=10
//     callback(a)
// }

// processInput((value)=>{
//     console.log(value)
// })

// function doSomething(x:string|null){
//     if(x){
//         console.log(x.toUpperCase())
//     }
//     console.log(x)
// }

// let obj:{name:string,id:number}={
//     name:"ahamathbasha",
//     id:100,
// }

// type user={
//     readonly name:string
//     id?:number
// }


// type userName={
//     [key:string]:string
// }

// let studentName:userName={
//     abcd:"abcd"
// }

// interface detail{
//     name:string,
//     id:number,
//     greet():string
// }

// let obj:detail={
//     name:"ahamathbasha",
//     id:11,
//     greet(){
//         return `good morning ${this.name}`
//     }
// }

// interface Animal{
//     name:string
// }

// interface species extends Animal{
//     species:string
// }

// let obj:species={name:"dinosaur",species:"godzilla"}

// interface detail{
//     [key:string]:string
// }

// interface operation{
//     (a:number,b:number):number
// }

// let add:operation=(a:number,b:number):number=>{
//     return a+b
// }

// console.log(add(5,3))

// interface detail{
//     name:string,
//     getName():string
// }

// class allDetails implements detail{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }

//     getName(){
//         return `this.name`
//     }

//     greet():void{
//         console.log("good morning")
//     }
// }

// class bank{
//     public name:string
//     private id:number
//     protected saving:number

//     constructor(name:string,id:number,saving:number){
//         this.name=name
//         this.id=id
//         this.saving=saving
//     }

//     getid():number{
//         return this.id
//     }
// }

// class access extends bank{
//     getSaving():number{
//         return this.saving
//     }
// }

// let basha=new access("basha",12,10000)

// console.log(basha.getSaving())


// class bank{
//     amount:number=0

//     get getAmount():number{
//         return this.amount
//     }

//     set deposit(input:number){
//         if(input > 0){
//             this.amount+=input
//         }
//     }
// }

// let ibank=new bank()

// ibank.deposit=10000
// console.log(ibank.getAmount)

// abstract class shape{
//     abstract getArea():number

//     printArea():void{
//         console.log(`${this.getArea()}`)
//     }
// }

// class circle extends shape{
//     radius:number

//     constructor(radius:number){
//         super()
//         this.radius=radius
//     }

//     getArea(){
//         return this.radius * Math.PI
//     }
// }

// const c=new circle(4.2)
// c.printArea()

// class mathUtils{
//     static pi=3.14

//     static square(input:number):number{
//         return input*input
//     }
// }
// const op=new mathUtils()
// console.log(mathUtils.square(5))

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
// console.log(obj1===obj2)

// enum Role{
//     admin,
//     user
// }

// function access(role:Role){
//     switch(role){
//         case Role.admin:
//             return `access to admin`
//         default:
//             return `access to user`
//     }
// }

// // access(Role.admin)

// let a:number[]=[1,2,3,4]
// let b:Array<number>=[1,2,3,4]
// let c:[string,number?]=["hello"]
// let d:[...number[]]=[1,2,3,4]


// type e=[id:number,userName?:string]
// let f:e=[11,"b"]

// let g:readonly [number]=[1]
// // g[0]=2

// // let obj:unknown={name:"basha"}

// // if(typeof obj === 'object' && obj !=null){
// //     console.log((obj as {name:string}).name)
// // }

// // function error(errMessage:string):never{
// //     throw new Error(errMessage)
// // }

// // interface Person{
// //     x:number
// //     y:number
// // }

// // let p1:Person={x:10,y:20}
// // let p2:{x:number,y:number}=p1
// // console.log(p2.x)

// let val:any="name"
// console.log((val as string).length)

// console.log((val as any))

// let val2={name:"basha"} as const

// type abcd=string|number

// let value4:abcd="success"

// type abcd2={
//     name:string
// }

// type all=abcd2 & {
//     species:string
// }

// interface animal{
//     name:string
// }

// interface species extends animal{
//     species:string
// }

// let dino:species={
//     name:"dino",
//     species:"zilla"
// }

// type gree=(message:string)=>string

// let user:gree=((message:string):string=>{
//     return `${message}`
// })

// console.log(user("good morning"))

// type userName={
//     id:number
//     name:string
// }

// let details:keyof userName="id"

// function obj<t,k extends keyof t>(obj:t,key:k):t[k]{
//     return obj[key]
// }



// let as:userName={id:123,name:"basha"}

// console.log(obj(as,"name"))

// class bird{
//     fly():void{
//         console.log("birds can fly")
//     }
// }

// let kuyil=new bird()

// if(kuyil instanceof bird){
//     kuyil.fly()
// }

// type car={vehicle:'car',speed:number}
// type bike={vehicle:'bike',speed:number}

// function isCar(vehicle:car|bike):vehicle is car{
//     return vehicle.vehicle=='car'
// }

// function predict(vehicle:car|bike){
//     if(isCar(vehicle)){
//         return `vehicle name is ${vehicle.vehicle} and speed is ${vehicle.speed}`
//     }else{
//         return `vehicle name is ${vehicle.vehicle} and speed is ${vehicle.speed}`
//     }
// }

// // console.log(predict({vehicle:'car',speed:200}))

// function add(a:number,b:number):number
// function add(a:string,b:string):string
// function add(a:any,b:any):any{
//     return a+b
// }

// console.log(add(1,2))

// let addition=((x:number):number=>{
//     return x
// })

// type mathOperation=(x:number,y:number)=>number

// let sub:mathOperation=((x:number,y:number):number=>{
//     return x-y
// })

// interface operation{
//     (x:number,y:number):number
// }

// let mul:operation=((x,y):number=>{
//     return x*y
// })
// console.log(mul(10,20))

// interface movie{
//     movieName:string

//     budget():void

//     heroname(heroName:string):string
// }

// const movieDetails:movie={
//     movieName:"dragon",

//     budget(){
//         console.log("it is secret")
//     },

//    heroname(heroName:string):string{
//         return `${heroName}`
//     }

// }

// abstract class animal{
//     abstract getName():string
// }

// class getName extends animal{
//     name:string

//     constructor(name:string){
//         super()
//         this.name=name
//     }

//     getName():string{
//         return `${this.name}`
//     }
// }

// const gettingName=new getName("dinosaur")

// console.log(gettingName.getName())

// class methodOverloading{
//     add(a:number,b:number):number
//     add(a:string,b:string):string
//     add(a:any,b:any):any{
//         return a+b
//     }
// }

// let addition=new methodOverloading()
// // console.log(addition.add(5,4))

// class details{
//     name:string
//     age:number

//     constructor(name:string)
//     constructor(name:string,age:number)
//     constructor(name:string,age?:number){
//         this.name=name
//         this.age=age??18
//     }
// }


// function arg<t>(val:t):t{
//     return val
// }

// interface detail<t>{
//     name:t
// }

// let details:detail<string>={name:"basha"}

// class movie<t>{
//     name:t
//     constructor(name:t){
//         this.name=name
//     }

//     getName():void{
//         console.log(`${this.name}`)
//     }
// }

// const movieName=new movie<string>("dragon")

// function llength<t extends {length:number}>(val:t):void{
//     console.log(val.length)
// }

// llength("basha")


// interface detail{
//     name:String,
//     id:number
// }

// let s1:Partial<detail>={name:"ahamath",id:1}
// let s2:Required<detail>={name:"ahamath",id:1}
// let s3:Readonly<detail>={name:"ahamath",id:1}
// let s4:Pick<detail,"name">={name:"ahamath"}
// let s5:Omit<detail,"id">={name:"ahamath"}

// type diff="admin"|"user"
// type persmission=Record<diff,boolean>

// let basha:persmission={
//     admin:true,
//     user:true
// }

// let admin:Extract<diff,"admin">="admin"

// let admin2:Exclude<diff,"user">="admin"


// function greet(msg:string,budge:number):number{
//     return budge
// }
// type getReturnValue=ReturnType<typeof greet>
// let nos:getReturnValue=123
// type getPara=Parameters<typeof greet>
// let user:getPara=["basha",123]

// async function fetchUser():Promise<{id:number,name:string}>{
//     return {id:1,name:"basha"}
// }
// type userData=Awaited<ReturnType<typeof fetchUser>>

type jsonValue=string|null|undefined|boolean|{[key:string]:jsonValue}|jsonValue[]

// export function add (a:number,b:number){
//     return a+b
// }

// import {add} from './'
// console.log(add(2,2))

// namespace mathOperation{
//     export function add(a:number,b:number){
//         return a+b
//     }
// }

// namespace mathOperation{
//     export function sub(a:number,b:number){
//         return a-b
//     }
// }

// declare module "loadash"{
//     export function chunk<t>(arr:number[],size:number):t[]{

//     }
// }

// import {chunk} from "./"
// chunk([])

// declare global{
//     interface String{
//         toTitleCase():string
//     }
// }

// String.prototype.toTitleCase=function(){
//     return this.replace(/\b\w\g,(char)=>{

//     })
// }

// function add(a:number,b:number):Promise<number>{
//     return new Promise((resolve,reject)=>{
//         if(typeof a=='number' && typeof b=='number'){
//             resolve(a+b)
//         }
//         else{
//             reject("both are not numbers")
//         }
//     })
// }

// add(1,2)
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })

// async function add(a:number,b:number){
//     try {
//         let sum=a+b
//         return sum
        
//     } catch (error) {
//         console.log(error)
//     }
// }


// type details={
//     userId:number,
//     id:number,
//     title:string,
//     body:string
// }

// async function fetchUser():Promise<details[]>{
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/posts')
//         const data:details[]=await response.json()
//         return data
//     } catch (error) {
//         return []
//     }
// }

// fetchUser()
// .then((response)=>{
//     console.log(response)
// })
// .catch((reject)=>{
//     console.log(reject)
// })

// let array:[string,...number[],boolean]=["basha",1,2,3,4,4,5,true]

// async function add(a:number,b:number):Promise<number>{
//     return new Promise((resolve,reject)=>{
//         if(a && b){
//             resolve(a+b)
//         }else{
//             reject ("not allowed")
//         }
//     })
// }

// add(5,4)
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })

// function add(a:number,b:number):Promise<number>{
//     return new Promise((resolve,reject)=>{
//         if(a && b){
//             resolve(a+b)
//         }else{
//             reject("add not allowed")
//         }
//     })
// }

// add(5,5)
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })

