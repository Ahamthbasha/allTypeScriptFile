// let visible:boolean=true
// let n:number=2
// let userName:string="ahamathbasha"

// function nothing():void{
//     console.log("hello")
// }

// let not=():void=>{
//     console.log("hello")
// }
// not()

// function add(callback:(input:number)=>void){
//     let no=5
//     callback(no)
// }

// add((no)=>{
//     console.log(no+no)
// })

// let result:void=null
// let result2:void=undefined;

// let absentValue:null=null

// let unknown:undefined=undefined

// let user:{id:number,name:string}={
//     id:101,
//     name:"ahamathbasha"
// }

// type a={
//     readonly id:number,
//     name?:string
// }

// let user2:a={id:102,name:"ahamathbasha"}

// type dictionary={
//     [key:string]:string
// }

// let color:dictionary={
//     red:"abcdef",
//     black:"ghijkl"
// }

// type b=a & {address:string}

// let c:b={
//     id:103,
//     address:"raghunathan street"
// }

// interface emp{
//     name:string,
//     rollNo:number,
//     movieName:string
// }

// let a:emp={
//     name:"basha",
//     rollNo:101,
//     movieName:"dragon"
// }

// console.log(a.name)

// interface movie{
//     movieName:string,
// }

// interface producer extends movie{
//     producerName:string
// }

// let movieDetails:producer={movieName:"dragon",producerName:"ags"}

// console.log(movieDetails.movieName)

// interface dictionary{
//     [key:string]:string
// }

// let proname:dictionary={
//     product:"panner",
//     productOwner:"king"
// }


// interface mathOperation{
//     (a:number,b:number):number
// }

// let x:mathOperation=(x,y)=>{
//     return x+y
// }

// console.log(x(10,5))

// interface Animal{
//     name:string
//     makeSound():void
// }

// class dog implements Animal{
//     name:string
    
//     constructor(name:string) {
//         this.name=name
//     }

//     makeSound(){
//         console.log("bow bow")
//     }
// }

// let d=new dog("puppy")
// d.makeSound()

//access modifiers

// class employee{
//     public name:string
//     private id:number
//     protected salary:number

//     constructor(name:string,id:number,salary:number){
//         this.name=name
//         this.id=id
//         this.salary=salary
//     }
// }

// class department extends employee{
//     getSalary():number{
//         return this.salary
//     }
// }

// let manufacturer=new department("basha",12,15000)

// console.log(manufacturer.name)
// // console.log(manufacturer.id)
// // console.log(manufacturer.salary)

// console.log(manufacturer.getSalary())

// class bank{
//     private salary:number=0

//     get showSalary():number{
//         return this.salary
//     }

//     set deposit(amount:number){
//         if(amount > 0){
//             this.salary+=amount
//         }
//         else{
//             console.log("no only allowed and string value is not allowed")
//         }
//     }
// }

// let bank1=new bank()
// console.log(bank1.showSalary)
// bank1.deposit=1000

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
//         return this.radius * 2
//     }
// }
// let myCircle = new circle(5);
//  myCircle.printArea();


// class mathUtils{
//     static two:number=2

//     static getNoTwo(input:number):number{
//         return this.two * input
//     }
// }

// console.log(mathUtils.two)
// console.log(mathUtils.getNoTwo(10))

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

// let obj1=singleton.getInstance()
// let obj2=singleton.getInstance()
// console.log(obj1==obj2)

// enum direction{
//     one,
//     two,
//     three,four
// }

// console.log(direction.two)


// enum stringType{
//     success="success",
//     failure="failure"
// }

// console.log(stringType.success)

// enum hetro{
//     no,
//     one,
//     success="success"
// }
// console.log(hetro.one)

// enum Role{
//     user,
//     admin
// }

// function getPermission(role:Role):void{
//     switch(role){
//         case Role.user:
//             console.log("full access to user")
//             break
//         default:
//             console.log("full access to admin")
//     }
// }

// getPermission(Role.user)

// const enum colors{
//     red="red"
// }

// console.log(colors.red)

// enum expr{
//     a=10,
//     b=a*10,
//     c=b+1
// }

// console.log(expr.c)

// let no:number[]=[1,2,3]
// let userName:string[]=["abcd","efgh"]

// let no1:Array<number>=[4,5,6,7]
// let userName2:Array<string>=["nm","jk"]

// let studentName:[number,string, number?,...string[]]=[101,"abcd",1000,"abcd","abcd","abcd"]
// console.log(studentName[0])
// studentName[0]=102

// let read:readonly[number]=[1]
// console.log(read)

// type studentDetails=[id:number,name:string,fees?:number]

// let name1:studentDetails=[101,"red dragon",100000]


// let data:unknown="abcd"

// if(typeof data==="string"){
//     console.log(data.toUpperCase())
// }

// function anything():unknown{
//     return ["charlie","777"]
// }
// console.log(anything())

// let obj:unknown={name:"ahamathbasha"}

// if(typeof obj === 'object' && obj!=null){
//     console.log((obj as {name:string}).name)
// }

// let abcd:any=[1,2,3,{name:"basha"},false,true,null,undefined]


// function impossible():never{
//     throw new Error("dont stop me")
// }

// interface point{
//     x:number,
//     y:number
// }

// let p1:point={x:1,y:2}
// let p2:{x:number,y:number}={x:3,y:4}

// type Person={
//     name:string,
// }

// type Employee={
//     name:string,
//     id:number
// }

// let person:Person={name:'alice'}
// let employee:Employee={name:'bob',id:123}

// person=employee
// employee=person

// let data:any="abcd"

// let val2=(data as string).length
// let val3=(<string> data).length


// let num:number=10
// console.log((num as any).toUpperCase)

// let val={name:"basha"} as const
// console.log(val.name)

// type User={
//     name:string,
//     fees:number
// }

// const student1={
//     name:"ahamathbasha",
//     fees:1000,
// }satisfies User

// type stringOrNumber=string|number
// let a:stringOrNumber=1

// function add(input1:stringOrNumber,input2:stringOrNumber):void{
//         if(typeof input1 && typeof input2 === "string"){
//             console.log(input1+input2)
//         }

// }

// type name={
//     userName:string
// }

// type id={
//     idNo:number
// }

// type details=name & id

// const studentDetails:details={userName:"basha",idNo:100}

// interface student{
//     name:string
// }

// interface studentId extends student{
//     id:number
// }

// let emp:studentId={name:"basha",id:123}


// type greet=(input:string)=>string

// let greeting:greet=(message)=>{
// return `${message}`
// }

// console.log(greeting("goodMorning"))

type User={
    id:number,
    name:string
}

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