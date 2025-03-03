const superHeroes:number[]=[]
const no:Array<number>=[]

type User={
    name:string,
    id:number
}

let studentDetails:User[]=[]
studentDetails.push({name:'',id:1})

enum SeatChoice{
    Aisle=1,
    middle,
    left,
    right
}

const hc=SeatChoice.left
console.log(hc)