"use strict";
// enum SeatChoice{
//     Aisle=1,
//     middle,
//     left,
//     right
// }
// const hc=SeatChoice.left
// console.log(hc)
// interface user{
//     name:string,
//     id:number,
//     getName():void,
//     getData(input:string):string
// }
// let abcd:user={
//     name:"basha",
//     id:101,
//     getName(){
//         console.log(name)
//     },
//     getData(input:string):string{
//         return `${input}`
//     }
// }
// function getValue(myVal:number):number{
//     return myVal
// }
// const getName=(input:string):string=>{
//     return `${input}`
// }
// const hero=['cool',"school"]
// let heroName:string[]=hero.map((n)=>{
//     return `hero name is ${n}`
// })
// console.log(heroName)
// function handleError(errorMessage:string):never{
//     throw new Error(errorMessage)
// }
// function signupUser(name:string,email:string,isPaid:boolean=false){
// }
// signupUser("ahamathbasha","ahamathbasha@gmail.com")
// type user={
//     name:string
// }
// type id=user & {
//     id:number
// }
// type details=id & {
//     fees:number
// }
// let user:details={
//     name:"basha",
//     id:1,
//     fees:1000
// }
// type user={
//     userName:string,
//     id:number,
//     address:{
//         doorNo:number,
//         street:string
//     }
// }
// function obj(paraObject:user):user{
//     return paraObject
// }
// console.log(obj({userName:"basha",id:101,address:{doorNo:101,street:"nadu street"}}))
// function addNum(a:number,b:number){
//     return new Promise((resolve,reject)=>{
//         if(typeof a=='number' && typeof b=='number'){
//             resolve(a+b)
//         }else{
//             reject('cannot add')
//         }
//     })
// }
// addNum(8,3).then((resolve)=>{
//     console.log(resolve)
// })
// let score:number|string|boolean=43
// type user={
//     id:number,
//     name:string
//     absPres:boolean
// }
// let student:user={
//     id:1,
//     name:"ahamathbasha",
//     absPres:true
// }
// let arr:(string|boolean|number)[]=["abcd",true,1]
// let studentDetails:[rollNo:number,name:string,absPres:boolean]=[101,"ahamathbasha",true]
// interface person{
//     name:string
//     id:number
// }
// class personDetail implements person{
//     name:string
//     id:number
//     constructor(name:string,id:number){
//         this.name=name
//         this.id=id
//     }
//     getName():void{
//         console.log(this.name)
//     }
//     getDetails():string{
//         return `my roll no is ${this.id} and name is ${this.name}`
//     }
// }
// let basha=new personDetail("ahamathbasha",101)
// basha.getName()
// console.log(basha.getDetails())
// let human:{speakingLevel:string,DubbingMovies:number}={speakingLevel:"medium",
// DubbingMovies:5}
// const json = '{"x": 10, "y": 20}';
// const coordinates: { x: number; y: number } = JSON.parse(json);
// console.log(coordinates);
// type personDetail=[string,number,string]
// function showDetail(input:personDetail):void{
//     const [name,age,place] =input //desctructure
//     console.log(input)
// }
// let details:personDetail=["abin",12,"abcd"]
// showDetail(details)
// class mathOperation{
//     add(a:number,b:number):number
//     add(a:string,b:string):string
//     add(a:any,b:any):any{
//         return a+b
//     }
// }
// let addition=new mathOperation()
// addition.add(2,5)
// class math{
//     a:number
//     b:number
//     constructor(a:number,b:number){
//         this.a=a
//         this.b=b
//     }
//     ope():void{
//         console.log(this.a+this.b)
//     }
// }
// class sub extends math{
//     ope():void{
//         console.log(this.a-this.b)
//     }
// }
// let operation=new math(2,1)
// let operation1=new sub(3,1)
// let operations:[math,sub]=[operation,operation1]
// operations[0].ope()
// const score:Array<number>=[]
// function getVal<T>(val:T):T{
//     return val
// }
// interface Bottle{
//     name:string,
//     company:string
// }
// console.log(getVal<Bottle>({name:"basha",company:"abcd"}))
// function largestNumber<T extends number>(array:T[]):T{
//     let largest=array[0]
//     for(let i=0;i<array.length;i++){
//         if(array[i] > largest){
//             largest=array[i]
//         }
//     }
//     return largest
// }
// console.log(largestNumber([10, 5, 20, 8]))
// function sum(num:number[]):number{
//     return num.reduce((acc,curr)=>{
//         return acc+curr
//     })
// }
// console.log(sum([1,2,3,4,5]))
// type point={x:number,y:number}
// type use=keyof point
// let abc:use="x"
// class animal{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     getName():void{
//         console.log(this.name)
//     }
// }
// class species extends animal{
//     species:string
//     constructor(name:string,species:string) {
//         super(name)
//         this.species=species
//     }
//     getSpecies():void{
//         console.log(this.species)
//     }
// }
// let dinosaur=new species("dinosaur","godzilla")
// dinosaur.getName()
// dinosaur.getSpecies()
// function abcd<T>(val:T):T{
//     return val
// }
// function modify(nickName:string|number):void{
//     if(typeof nickName==='string'){
//         console.log(nickName.toUpperCase())
//     }else{
//         console.log(nickName)
//     }
// }
// modify("dragon")
// type user={name:string,id:number}
// type admin={name:string,permission:string[]}
// function getVal(person:user|admin):void{
//     if("permission" in person){
//         console.log(person.permission)
//     }else{
//         console.log("you are not a user you are not allowed to use any data")
//     }
// }
// getVal({name:"ahamathbasha",permission:['do legal thing only']})
// abstract class takePhoto{
//     abstract getViVo():void
// }
// class vivo extends takePhoto{
//     name:string
//     constructor(name:string){
//         super()
//         this.name=name
//     }
//     getViVo(){
//         console.log("hello")
//     }
// }
// let buy=new vivo("vivo 21")
// buy.getViVo()
// type details={
//     userId:number,
//     id:number,
//     title:string,
//     body:string
// }
// async function fetchData():Promise<details[]>{
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/posts')
//         const data:details[]=await response.json()
//         return data
//     }
//     catch(error){
//         console.log(error)
//         return []
//     }
// }
// fetchData()
// .then((post)=>{
//     console.log(post.slice(1))
// })
// .catch((error)=>{
//     console.log(error)
// })
// enum sta_tus{
//     pending="pending",
//     delivered="delivered"
// }
// function getStatus(orderId:number,status:sta_tus):void{
//     console.log(`the order id ${orderId} is in the status of ${status}`)
// }
// getStatus(123,sta_tus.pending)
// let no:(string|number|boolean)[]=["rayan",43,true]
// console.log(no)
// const value:[string,number]=["abcd",12]
// console.log(value[0])
// value[0]="bcch"
// console.log(value[0])
// class bank{
//     id:string
//     amount:number
//     constructor(id:string,amount:number){
//         this.id=id
//         this.amount=amount
//     }
//     get amountBank():number{
//         return this.amount
//     }
//     set deposit(amount:number){
//         if(amount > 0){
//             this.amount+=amount
//         }
//         else{
//             console.log("amount is deposited")
//         }
//     }
// }
// const iBank=new bank("abcd",10000)
// iBank.deposit=1000
// console.log(iBank.amountBank)
// let myName:unknown
// let basha=myName as string
// basha="ahamathbasha"
// type person={
//     name:string,
//     id:number,
// }
// let user={
//     name:"ahamathbasha",
//     id:100
// } satisfies person
// function add(a:number,b:number):number
// function add(a:string,b:string):string
// function add(a:any,b:any):any{
//     return a+b
// }
// console.log(add(2,3))
// function add(a:number,b:number):Promise<number>{
//     return new Promise((resolve,reject)=>{
//         if(a && b){
//             resolve(a+b)
//         }else{
//             reject("this is falsy")
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
// async function add(a:number,b:number):Promise<number>{
//     return new Promise((resolve,reject)=>{
//         if(a && b){
//             resolve(a+b)
//         }
//         else{
//             reject("i dont allow falsy values")
//         }
//     })
// }
// add(0,5)
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })
// async function add(a: number, b: number): Promise<number> {
//     try {
//         let sum = a + b; // No need to call add() again
//         return sum;
//     } catch (error) {
//         console.error(error);
//         throw error; // Ensure the function properly rejects errors
//     }
// }
// // Example usage
// add(1, 2)
//     .then(result => console.log("Sum:", result))
//     .catch(error => console.error("Error:", error.message));
// function add<T>(val:T):T{
//     return val
// }
// class animal<T>{
//     name:T
//     constructor(name:T){
//         this.name=name
//     }
//     getName():T{
//         return this.name
//     }
// }
// let giraffee=new animal<string>("giraffee")
// console.log(giraffee.getName())
// interface userName{
//     name?:string
//     age:number
// }
// let name1:Partial<userName>={name:"ahamathbasha",age:10}
// let name2:Readonly<userName>={name:"basha",age:20}
// let name3:Required<userName>={name:"must",age:30}
