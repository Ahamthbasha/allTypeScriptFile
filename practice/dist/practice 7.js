"use strict";
function getVal(val) {
    return val;
}
function llength(val) {
    return val.length;
}
function obj(object, key) {
    return object[key];
}
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
