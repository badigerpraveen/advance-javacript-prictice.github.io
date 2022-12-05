// callback function 

setTimeout(()=>{
    console.log("hello javacript");
},1000); 

console.log("hello"); 

let person1 = (name  , callback) =>{
 
    console.log(`im busy will talk to you later ${name}`) 
    callback() ;

} 
let person2 = () =>{
    console.log(`im calling you , have you seen`);
}


person1("praveen", person2);  

// closure 

function x(){
  let a = 11 ;
  function y(){
    console.log(a);
  }
     y();
}

x()

// heigher order function 

   // map , filter , reduce  


   // map() method returns new array from calling function on every element of an array ; 
 
 
 let arr1 = [1,2,5,3] ;

 let result = arr1.map((x)=>{
 return x * 2

 }) 

console.log(result);  


// filter() method returns new array filled with elements that pasess the test provided by the function 


 let  age = [2,5,18,19,20,6,7,12];

 let ageBelow18 = age.filter( x => x < 18) ;

 console.log(ageBelow18);


 // reduce method()  retuns a single value by appling user passed call back function //


 let arr2 = [1,2,3,4] ;

 let sum =  arr2.reduce((value, accumilator)=>{
       return value + accumilator ;
 },0)

console.log(sum , "reducer"); 

// foreach() method  exicutes provided function once on evry array element ;


let arr3 = [1,2,3];

 arr3.forEach((element)=>{
  console.log(element * 2) ; 
}) 

// pure function 

// pure function return same reulst when same same argument passed , it does't depend on any atate and data change 
   // add element to the array 
   
   let arr4 = [1, 2, 3];

   function addElement(a, element) {
     return a.push(element);
   }

   addElement(arr4, 4);

   console.log(arr4 ,"arr4"); 

  // pure function 
  
  let arr5 = [1, 2, 3];

   function addElement1(a, element1) {
     return [...a,element1];
   }

   addElement1(arr4, 4);

   console.log(arr5,"arr5");

 // curry function 
 function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
} 

let xyz = calculateVolume(4)(5)(6)
console.log(xyz);

function addNum(a){
  return function(b){
      return function(c){
       return a+b+c ;

      }
  }
  

}
 console.log(addNum(1)(2)(3) ,"curry function") ; 

 // fetch() method 

 let apidat = fetch("https://jsonplaceholder.typicode.com/users");
 
 function getApiDat(a){
     a.then((data)=>{
        return data.json();
     }).then((resultData)=>{
        resultData.map((value)=>{

            console.log(value.company.name);
        }) 
        

     }).catch();
 } 

 getApiDat(apidat); 


// promise is an object which represent eventually completion of asyncronus javasript operation 

// promise status 
// --> pending 
// --> fullfilled/resolve
// --> reject 

let apidat1 = fetch("https://jsonplaceholder.typicode.com/users");

let prom = new Promise((resolve,reject)=>{
    if(apidat1){
        resolve( apidat1.then(data=> data.json().then(resultData => resultData.map((value)=>{
            return value.company.name
        }))))
       
    }else{ 
        
        reject( new Error("error"));
    }
  
}) ;

prom.then((message)=>{
   console.log(message);
}).catch((message)=>{
   console.log(message);
}); 


// async await 


function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log("calling1");
    const result = await resolveAfter2Seconds();
    console.log(result); 
    console.log('calling2');
    // expected output: "resolved"
  }
  
  asyncCall(); 

 // debouncing  
 //Debouncing is a performance optimization technique to reduce the rate at which events trigger functions. 

 let counter = 0 ;

 function getData(){
   console.log("fetching Data" + counter++)

 }
 
  function myDebounce(callback,d){
      let timer;
      return function(...args){
        if(timer)clearTimeout(timer);
        setTimeout(()=>{
            callback();
        },d)

      }
    }


 const betterFunction = myDebounce(getData,1000) 

 // Throttling  is a performance optimization technique to reduce the rate at which events trigger functions   

 muThrotl = (fun,d) =>{
   
    return function(params) { 
        document.getElementById("myId").disabled = true ; 
          setTimeout(()=>{
            fun();
        },d)
     }
    

 }

 let newFunction = muThrotl(()=>{ 
    document.getElementById("myId").disabled = false ; 
    console.log("clicked !!")
 },5000)  


 // pipe AND compose both are higher orderfunction 

 // compose function takes any number of functions and invokes them all one after the other.compose reads function from right to left.
 
 // price , 20 % , normalize 
 // right to left
  const multiplyBy20 = (price) => price * 20 ; 
  const dividedBy100 = (price) => price / 100 ; 
  const normalize = (price)  => price.toFixed(2);
  
  const compose = (fn1,fn2,fn3) => (price) =>  {
      return fn1(fn2(fn3(price))) ;
  } 
  
  const applyDiscount20 = compose(normalize,dividedBy100,multiplyBy20) 
    
  console.log(applyDiscount20(100));
 
 
 //we can reverse the order of the function invocation by using the pipe function. In Pipe function reads from left to right.
 
  // left to right   

  const pipe = (fn1,fn2,fn3) => (price) =>  {
      return fn3(fn2(fn1(price))) ;
  } 
  
  const applyDiscount20usingPipe = pipe( multiplyBy20,dividedBy100, normalize) 
    
  console.log(applyDiscount20usingPipe(200));
 // factory function 

   function userDetail(firstName,lastname){
       return {
        firstName,
        lastname,
        getFullname(){
           console.log(this.firstName + " " + this.lastname);
        }

       }
   }
  
  let p1 = userDetail("Ravi","Hegade");   
  let p2 = userDetail("pavan","Hegade"); 
  console.log(p1); 
  console.log(p2);

  // Constructor 
 // Prototypes are the mechanism by which JavaScript objects inherit features from one another  


  function user (fname,lname){
    this.fname = fname ;
    this.lname = lname ;
    
 } 
  
  user.prototype.age = 10

 user.prototype.getFullname = function (){
    return this.fname +" "+ this.lname ;
} 
  
 
   
  let obj1 = new user("Praveen","Badiger");  
  let obj2 = new user("Pavan","P"); 
  
  console.log(obj1.age,"Age");
  console.log(obj1.getFullname());  
  console.log(obj2.getFullname());









  













 










