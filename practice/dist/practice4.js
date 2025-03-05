"use strict";
// interface sUser{
//     id:number,
//     name:string,
//     email:string,
//     isActive:boolean
// }
// function totalPrice(book:Book[]):number{
//     let sum=0
//     for(let i=0;i<book.length;i++){
//         sum+=book[i].price
//     }
//     return sum
// }
// type Status="active"|"inactive"|"suspended"
// function updateStatus(status:Status):void{
//     console.log(status)
// }
// updateStatus("active")
// type MathOperation={
//     (a:number,b:number):number
// }
// let add:MathOperation=((a,b)=>{
//     return a+b
// })
// let sub:MathOperation=((a,b)=>{
//     return a-b
// })
// let mul:MathOperation=((a,b)=>{
//     return a*b
// })
// let div:MathOperation=((a,b)=>{
//     return a/b
// })
// type Person={
//     name:string,
//     age:number
// }
// type Employee={
//     id:number,
//     position:string
// }
// type EmployeeDetails=Person & Employee
// let details:EmployeeDetails={
//     name:"basha",
//     age:123,
//     id:12,
//     position:"manager"
// }
// type ApiResponse<T>={
//     status:string,
//     data:T,
//     message:string
// }
// let response:ApiResponse<>
// type Dictionary={
//     [key:string]:string|number
// }
// let UName:Dictionary={
//     "abcd":"letters",
//     "no":123
// }
// type Person={
//     name:string,
//     age:number
// }
// let a:Readonly<Person>={name:"basha",age:123}
// let b:Partial<Person>={name:"arnold",age:123}
// type ApiResponse<t>={
//     status:string,
//     data:t,
//     message:string
// }
// let r:ApiResponse<string>={
//     status:"success",
//     data:"abcd",
//     message:"hello"
// }
// type ApiResponse<t>={
//     status:string,
//     data:t,
//     message:string
// }
// let rs:ApiResponse<Book[]>={
//     status:"success",
//     data:[{title:"love and war",
//         author:"basha",
//         price:10000}],
//     message:"great book"
// }
// function add(a:number,b:number):Promise<number|string>{
//     return new Promise((resolve,reject)=>{
//         if(typeof a === 'number' && typeof b=== 'number'){
//             resolve(a+b)
//         }
//         else{
//             reject(`both are not numbers`)
//         }
//     })
// }
// add(2,3)
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })
// const fetchData=():Promise<string>=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let status=true
//             if(status){
//                 resolve("data fetched")
//             }
//             else{
//                 reject("data is not fetched")
//             }
//         },1000)
//     })
// }
// fetchData()
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })
// async function add(a:number,b:number):Promise<number|string>{
//     if(typeof a === 'number' && typeof b === 'number'){
//         return a+b
//     }else{
//         throw new Error(`you enter number`)
//     }
// }
// const operation=async()=>{
//     try{
//         let sum=add(1,2)
//         console.log(sum)
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// operation()
// async function add(a:number,b:number):Promise<number|string>{
//     return new Promise((resolve,reject)=>{
//         if(typeof a === "number" && typeof b === "number"){
//             resolve(a+b)
//         }
//         else{
//             reject(`you need numbers`)
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
//interface 
// interface ser{
//     id:number,
//     name:string,
//     email:string,
//     phone:string
// }
// async function fetchUser():Promise<ser[]>{
//     try{
//         let response=await fetch("https://jsonplaceholder.typicode.com/users")
//         let data=await response.json()
//         let final:ser[]=data.map((user:any)=>({
//             id:user.id,
//             name:user.name,
//             email:user.email,
//             phone:user.phone
//         }))
//         return final
//     }
//     catch(error){
//         console.log(error)
//         return []
//     }
// }
// fetchUser()
// .then((user)=>{
//     console.log(user)
// })
// .catch((err)=>{
//     console.log(err)
// })
// interface Address{
//     street:string,
//     suite:string,
//     city:string,
//     zipcode:string,
//     geo:Geo
// }
// interface Geo{
//     lat:string,
//     lng:string
// }
// interface Company{
//     name:string,
//     catchPhrase:string,
//     bs:string
// }
// interface userApiResponse{
//     id:number,
//     name:string,
//     email:string,
//     phone:string,
//     username:string,
//     address:Address,
//     website:string,
//     company:Company
// }
// interface userDefine{
//     id:number,
//     name:string,
//     email:string,
//     phone:string
// }
// async function fetchUser():Promise<userDefine[]>{
//     try {
//         let response=await fetch("https://jsonplaceholder.typicode.com/users")
//         let data=await response.json()//array of object
//         let finalData:userDefine[]=data.map((user:userApiResponse):userDefine=>({
//             id:user.id,
//             name:user.name,
//             email:user.email,
//             phone:user.phone
//         }))
//         return finalData
//     } catch (error) {
//         console.log(error)
//         return []
//     }
// }
// fetchUser()
// .then((user)=>{
//     console.log(user)
// })
// .catch((user)=>{
//     console.log(user)
// })
// type Address = {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: Geo;
// };
// type Geo = {
//     lat: string;
//     lng: string;
// };
// type Company = {
//     name: string;
//     catchPhrase: string;
//     bs: string;
// };
// // API Response type
// type UserApiResponse = {
//     id: number;
//     name: string;
//     email: string;
//     phone: string;
//     username: string;
//     address: Address;
//     website: string;
//     company: Company;
// };
// type userDefined={
//     id:number,
//     name:string,
//     email:string,
//     phone:string
// }
// async function fetchUser():Promise<userDefined[]>{
//     try{
//         let data=await fetch("https://jsonplaceholder.typicode.com/users")
//         let check:UserApiResponse[]=await data.json()
//         let finalData:userDefined[]=check.map((user:UserApiResponse):userDefined=>({
//             id:user.id,
//             name:user.name,
//             email:user.email,
//             phone:user.phone
//         }))
//         return finalData
//     }
//     catch(error){
//         console.log(error)
//         return []
//     }
// }
// fetchUser()
// .then((user)=>{
//     console.log(user)
// })
// .catch((err)=>{
//     console.log(err)
// })
// type userDefined={
//     id:number,
//     name:string,
//     email:string,
//     phone:string
// }
// // Generic function to fetch any type of data
// async function fetchData<T>(url: string): Promise<T[]> {
//     try {
//         let response = await fetch(url);
//         // Check if response is OK
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         let data: T[] = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         return [];
//     }
// }
// // Call the function with a specific type
// fetchData<userDefined>("https://jsonplaceholder.typicode.com/users")
//     .then((users) => console.log(users))
//     .catch((err) => console.log(err));
// type userDefined={
//     id:number,
//     name:string,
//     email:string,
//     phone:string
// }
// async function fetchUser<T>(url:string):Promise<T[]>{
//     try {
//         let data=await fetch (url)
//         let responseData:T[]=await data.json()
//         return responseData
//     } catch (error) {
//         console.log(error)
//         return []
//     }
// }
// let transformUsers=((user:any):userDefined=>({
//     id:user.id,
//     name:user.name,
//     email:user.email,
//     phone:user.phone
// }))
// fetchUser<any>('https://jsonplaceholder.typicode.com/users')
// .then((users)=>{
//     let finalData:userDefined[]=users.map(transformUsers)
//     console.log(finalData)
// })
// .catch((err)=>{
//     console.log(err)
// })
// interface userDefined{
//     id:number,
//     name:string,
//     email:string
// }
// async function fetchUser():Promise<userDefined[]>{
//     try {
//         let data=await fetch("https://jsonplaceholder.typicode.com/users")
//         let response=await data.json()
//         let finalData:userDefined[]=response.map((user:any):userDefined=>({
//             id:user.id,
//             name:user.name,
//             email:user.email,
//         }))
//         return finalData
//     } catch (error) {
//         console.log(error)
//         return []
//     }
// }
// fetchUser()
// .then((user)=>{
//     console.log(user)
// })
// .catch((user)=>{
//     console.log(user)
// })
// interface defined{
//     id:number,
//     title:string,
//     body:string
// }
// async function fetchPost():Promise<defined[]>{
//     try {
//         let data=await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         let data2=await data.json()
//         let finalData:defined[]=[{
//             id:data2.id,
//             title:data2.title,
//             body:data2.body
//         }]
//         return finalData
//     } catch (error) {
//         console.log(error)
//         return []
//     }
// }
// fetchPost()
// .then((post)=>{
//     console.log(post)
// })
// .catch((error)=>{
//     console.log(error)
// })
// interface comment{
//     id:number,
//     name:string,
//     body:string
// }
// async function fetchComment():Promise<comment[]>{
//     try{
//         let data=await fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
//         let response=await data.json()
//         let finalData:comment[]=response.map((user:any):comment=>({
//             id:user.id,
//             name:user.name,
//             body:user.body
//         }))
//         return finalData
//     }
//     catch(error){
//         console.log(error)
//         return []
//     }
// }
// fetchComment()
// .then((user)=>{
//     console.log(user)
// })
// .catch((user)=>{
//     console.log(user)
// })
// interface user {
//     id: number;
//     name: string;
//     username: string;
//     email: string;
// }
// interface Post {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }
// interface Comment {
//     postId: number;
//     id: number;
//     name: string;
//     email: string;
//     body: string;
// }
// async function fetchData<T>(url:string):Promise<T[]>{
//     try {
//         let data =await fetch (url)
//         let response:T[] =await data.json()
//         return response
//     } catch (error) {
//         console.log(error)
//         return []
//     }
// }
// fetchData<Post>("https://jsonplaceholder.typicode.com/posts")
// .then((user)=>{
//     let gettedData=user
//     let finalData:Post[]=gettedData.map((post:any):Post=>({
//         userId:post.userId,
//         id:post.id,
//         title:post.title,
//         body:post.body
//     }))
//     console.log(finalData)
// })
// .catch((error)=>{
//     console.log(error)
// })
// async function fetchData<T>(url:string):Promise<T[]>{
//     try {
//         let data=await fetch(url)
//         let response:T[]=await data.json()
//         return response
//     } catch (error) {
//         console.log(error)
//         return []
//     }
// }
// fetchData<user>("https://jsonplaceholder.typicode.com/users")
// .then((user)=>{
//     let gettedData=user
//     let finalData:user[]=gettedData.map((user:any)=>({
//         id:user.id,
//         name:user.name,
//         username:user.username,
//         email:user.email
//     }))
//     console.log(finalData)
// })
// .catch((error)=>{
//     console.log(error)
// })
// interface userDefined{
//     id:number,
//     name:string,
//     email:string,
//     phone:string
// }
// async function fetchUser():Promise<userDefined[]>{
//     try {
//         let data=await fetch ("https://jsonplaceholder.typicode.com/users")
//         let response=await data.json()
//         let finalData:userDefined[]=response.map((user:any):userDefined=>({
//             id:user.id,
//             name:user.name,
//             email:user.email,
//             phone:user.phone
//         }))
//         return finalData
//     } catch (error) {
//         console.log(error)
//         return []
//     }
// }
// fetchUser()
// .then((user)=>{
//     console.log(user)
// })
// .catch((user)=>{
//     console.log(user)
// })
// interface UserDefined{
//     id:number
// }
// async function fetchData():Promise<UserDefined[]>{
//     try {
//         let data=await fetch("https://invalid-url.com")
//         let response:UserDefined[]=await data.json()
//         return response
//     } catch (error) {
//         console.log("error fetching",error)
//         return []
//     }
// }
// fetchData()
// .then((user)=>{
//     console.log(user)
// })
// .catch((user)=>{
//     console.log(user)
// })
// interface Post{
//     userId:number
// }
// interface finalOutput{
//     userName:string,
//     id:number,
//     title:string,
//     body:string
// }
// async function fetchData():Promise<finalOutput[]>{
//     try {
//     let post=await fetch("https://jsonplaceholder.typicode.com/posts")
//     let postData=await post.json()
//     let user=await fetch("https://jsonplaceholder.typicode.com/users")
//     let userData=await user.json()
//     let finalData:finalOutput[]=[]
//     let data
//     for(let i=0;i<postData.length;i++){
//         for(let j=0;j<userData.length;j++){
//             if(postData[i].userId==userData[j].id){
//                data={
//                     userName:userData[j].name,
//                     id:postData[i].id,
//                     title:postData[i].title,
//                     body:postData[i].body
//                 }
//                 finalData.push(data)
//             }
//             j=j+1
//         }
//     }
//     return finalData
//     } catch (error) {
//         return []
//     }
// }
// fetchData()
// .then((post)=>{
//     console.log(post)
// })
// .catch((error)=>{
//     console.log(error)
// })
// 8️⃣ Fetch Data and Store in a Class
// Define a User class with id, name, email.
// Fetch users and create instances of the class.
// Store all user objects in an array.
// class UserD{
//     id:number
//     name:string
//     email:string
//     constructor(id:number,name:string,email:string){
//         this.id=id
//         this.name=name
//         this.email=email
//     }
// }
// async function fetchUser():Promise<UserD[]>{
//     try {
//         let data=await fetch("https://jsonplaceholder.typicode.com/users")
//         let finalResponse=await data.json()
//         let finalOutput:UserD[]=finalResponse.map((user:any)=>new UserD(user.id,user.email,user.name))
//         return finalOutput
//     } catch (error) {
//         console.log(error)
//         return []
//     }
// }
// fetchUser()
// .then((user)=>{
//     console.log(user)
// })
// .catch((error)=>{
//     console.log(error)
// })
// 9️⃣ Generic Function for Filtering Data
// Fetch posts from
// 👉 https://jsonplaceholder.typicode.com/posts
// Write a generic function to filter posts by userId.
// Example: filterData<Post>(data, post => post.userId === 1)
// interface Post{
//     userId:number,
//     id:number,
//     title:string,
//     body:string
// }
// async function fetchPosts<T>(url:string):Promise<T[]>{
//     try{
//         let data=await fetch(url)
//         let response:T[]=await data.json()
//         return response
//     }
//     catch(error){
//         console.log(error)
//         return []
//     }
// }
// function filterData<T>(data:T[],condition:(item:T)=>boolean):T[]{
//     return data.filter(condition)
// }
// async function main(){
//     let posts=await fetchPosts<Post>("https://jsonplaceholder.typicode.com/posts")
//     let filterPosts=filterData(posts,post=>post.userId===1)
//     console.log(filterPosts)
// }
// main()
// function filterNumbers<t>(input:t[],condition:(item:t)=>boolean):t[]{
//     return input.filter(condition)
// }
// const numbers=[10,25,30,45,50,75]
// const result=filterNumbers(numbers,num=>num > 30)
// console.log(result)
// 🔟 Fetch Multiple APIs in Parallel
// Fetch users and posts simultaneously.
// Use Promise.all() to wait for both responses.
// Store users and posts in separate arrays.
// interface Posts{
//     userId:number,
//         id:number,
//         title:string,
//         body:string
// }
// interface Users{
//     id:number,
//     name:string,
//     email:string
// }
// async function fetchData<T>(url:string):Promise<T[]>{
//     try {
//         let response=await fetch(url)
//         let data:T[]=await response.json()
//         return data
//     } catch (error) {
//         console.log(error)
//         return []
//     }
// }
// async function fetchUsesAndPost(){
//     try{
//         const [users,posts]=await Promise.all([
//             fetchData<Users>("https://jsonplaceholder.typicode.com/users"),
//             fetchData<Posts>("https://jsonplaceholder.typicode.com/posts")
//         ])
//         console.log("users",users)
//         console.log("post",posts)
//     }catch(error){
//         console.log(error)
//     }
// }
// fetchUsesAndPost()
// function mul(input:number[]):number[]{
//     let array:number[]=[]
//     for(let i=0;i<input.length-1;i++){
//         array.push(input[i]*input[i+1])
//     }
//     return array
// }
// console.log(mul([1,2,3,4,5]))
