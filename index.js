let array = [10, 20, 30, 45, 40, 50]
const removeElement = (arr, position) => {
    position = parseInt(position)
    for (let i = position; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]

    }
    arr.length = arr.length - 1

    console.log(arr)
}

console.log("1st", removeElement(array, 0))
console.log("2nd", removeElement(array, 0))
console.log("3rd", removeElement(array, 0))





let searchArray=[10,20,30,40,50,20,60];
let searchArray2=["ram","shyam",'jadu','madhu','ram'];

const searchElement=(arr,elem)=>{
    let index=undefined
    for(let i=0;i<arr.length; i++){
        if(arr[i]===elem){
            index=i
        }
    }
console.log(index)
}

searchElement(searchArray,20)
console.log("aaaaaaaaaaaa",searchElement(searchArray2,'ram'))
// console.log("myfunction1",searchElement(searchArray,20))
// console.log("myfunction",searchElement(searchArray,5))


let array1=[10,20,30,45,40,50]
console.log(" array1",array1)
console.log("default function aaaaaaa",array1.splice(0,3,45))
console.log("default function bbbbbbbb",array1.splice(0,45,3))
