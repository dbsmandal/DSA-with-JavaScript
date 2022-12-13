let totalaple=0;
let applePrice=10;
let myMoney=105

function buyApple(money){

    if(money>=applePrice){
        totalaple ++
        buyApple(money-applePrice)
        
    }else{
        console.log(`you have only ${money} RS and you allready purchased ${totalaple} number of apples`)
    }

}

buyApple(myMoney);

let array=[1,2,3,4,5,6,7,4,66,54,7,9,5,454,63,69,10,5,100,12];
let findEl=5;
let indexValue=undefined;
let arr=[];

function searchEl(data){
    for(let i=0; i<data.length; i++){
        if(data[i]==findEl){
            indexValue=i;
            arr.push(i)
        }
    }
    // return arr
    console.log(arr)
}
searchEl(array)