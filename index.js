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

