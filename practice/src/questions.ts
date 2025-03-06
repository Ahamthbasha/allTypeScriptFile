// function acceptDisplay(input:any):any{
//     return input
// }

// console.log(acceptDisplay(1))

// function sum(n1:number,n2:number):number{
//     let sum=n1+n2
//     return sum
// }

// console.log(sum(10,5))

// function simpleInterest(principle:number,interest:number,noOfYears:number):number{
//     return (principle*interest*noOfYears)/100
// }

// console.log(simpleInterest(5000,1,5))

// function checkPassOrFail(mark:number):string{
//     if(mark>=50){
//         return `pass`
//     }else{
//         return `fail`
//     }
// }
// console.log(checkPassOrFail(51))

// function showGrade(input:number):string{
//     if(input > 90){
//         return `A`
//     }
//     else if(input >=80 && input <=89){
//         return `B`
//     }
//     else if(input >=70 && input <=79){
//         return `c`
//     }
//     else if(input >=60 && input <=69){
//         return `D`
//     }
//     else if(input >=50 && input <=59){
//         return `E`
//     }
//     else{
//         return `failed`
//     }
// }

// console.log(showGrade(99))

// function showDay(input:number):string{
//     switch(input){
//         case 1: return `sunday`
//         case 2: return `monday`
//         case 3: return `Tuesday`
//         case 4: return `wednesday`
//         case 5: return `Thursday`
//         case 6: return `Friday`
//         case 7:return `saturday`
//         default:
//             return `invlid entry`
//     }
// }

// console.log(showDay(10))


// function tables(input:number):void{
//     for(let i=1;i<=10;i++){
//         console.log(`${i}*${input}=${i*input}`)
//     }
// }
// tables(5)

// function sumOdd(limit:number):number{
//     let sum:number=0
//     for(let i=1;i<=limit;i++){
//         if(i%2!==0){
//             sum+=i
//         }
//     }
//     return sum
// }
// console.log(sumOdd(10))

// function printPattern(input:number):void{
//     for(let i=1;i<=input;i++){
//         for(let j=1;j<=i;j++){
//             console.log(j+" ")
//         }
//         console.log(" ")
//     }
// }

// printPattern(5)

// function changeValues(array1:number[],array2:number[]):{array1:number[],array2:number[]}{
//     let temp=array1
//     array1=array2
//     array2=temp

//     return {array1,array2}
// }

// let {array1:firstValue,array2:secondValue}=changeValues([1,2,3,4,5],[6,7,8,9,10])
// console.log(firstValue)

// function noOfEven(input:number[]):number{
//     let count:number=0
//     for(let i=0;i<input.length;i++){
//         if(input[i]%2==0){
//             count++
//         }
//     }
//     return count
// }

// console.log(noOfEven([1,2,3,4,5]))

// function sortDescendingWise(input:number[]):number[]{
//     for(let i=0;i<input.length;i++){
//         for(let j=i+1;j<input.length;j++){
//             if(input[i]<input[j]){
//                 let temp=input[i]
//                 input[i]=input[j]
//                 input[j]=temp
//             }
//         }
//     }
//     return input
// }

// console.log(sortDescendingWise([20, 10, 50, 30, 40]))

// function checkPalindrome(input:string):boolean{
//     let temp=input
//     temp=temp.split('').reverse().join('')
//     return input === temp
// }

// console.log(checkPalindrome("abcd"))

// function twoDSum(arr1:number[][],arr2:number[][]):number[][]{
// let sum=[]

// for(let i=0;i<arr1.length;i++){
//     let newArr=[]
//     for(let j=0;j<arr1[i].length;j++){
//         newArr.push(arr1[i][j]+arr2[i][j])
//     }
//     sum.push(newArr)
// }

// return sum
// }

// console.log(twoDSum([[1,2,3],[4,5,6],[7,8,9]],[[10,20,30],[40,50,60],[70,80,90]]))

// function primeOrNot(input:number):boolean{
//     if(input <=1){
//         return false
//     }

//     for(let i=2;i<=Math.sqrt(input);i++){
//         if(input % i === 0){
//             return false
//         }
//     }

//     return true
// }

// console.log(primeOrNot(7))


// function getArray():number[]{
//     let array:number[]=[1,2,3,4,5]
//     return array
// }

// function display(input:number[]):void{
//     console.log(input)
// }

// function main():void{
//     let array:number[]=getArray()
//     display(array)
// }

// main()


// class mathOpreation{
//     a:number
//     b:number
//     constructor(a:number,b:number){
//         this.a=a
//         this.b=b
//     }

//     add():void{
//         console.log(this.a+this.b)
//     }

//     sub():void{
//         console.log(this.a-this.b)
//     }

//     mul():void{
//         console.log(this.a*this.b)
//     }

//     div():void{
//         console.log(this.a/this.b)
//     }

//     modulo():void{
//         console.log(this.a%this.b)
//     }
// }


// function grade(written:number,lab:number,assignment:number):number{
//     return (written * 70)/100 + (lab * 20)/100 + (assignment * 10)/100
// }

// console.log(grade(55,73,87))

// function incomeTax(no:number):number{
//     if(no <= 250000){
//         return  0
//     }
//     else if(no > 250000 && no <=500000){
//         return (no*5)/100
//     }
//     else if(no > 500000 && no <=100000){
//         return (no*20)/100
//     }
//     else{
//         return (no*30)/100
//     }
// }

// console.log(incomeTax(495000))

// function pattern(limit:number):void{
//     let k=1
//     for(let i=1;i<=5;i++){
//         for(let j=1;j<=i;j++){
//             console.log(k)
//             k++
//         }
//         console.log("")
//     }
// }

// pattern(5)

// function mul(input:number[]):number[]{
//     let array:number[]=[]

//     for(let i=0;i<input.length-1;i++){
//         array.push(input[i]*input[i+1])
//     }
//     return array
// }

// console.log(mul([1,2,3,4,5]))

// type Isstring<t>=t extends string?true:false;

// type stringCheck=Isstring<number>