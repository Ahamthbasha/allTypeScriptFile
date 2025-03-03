"use strict";
let value = true;
let no = 123;
let userName = "abcd";
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
