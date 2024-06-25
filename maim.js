//task1
// function sayHello(name) {
//     console.log("Hello, " + name + "!");
//   }
//   sayHello("World");
//   sayHello("Alice");
  
  //task2   anonymous function تعتبر دالة مجهولة  return 
  let num=function(number){
    return number*number
  }
    console.log(9*9);
    //task3
    // إنشاء دالة سهمية للضرب تأخذ عددين كمعاملات
let multiply = (num1, num2) => {
  return num1 * num2;
};

console.log(9*9); 

//task4
let car = {
  make: "m",
  model: "a",
  year: 2024,
  
  carInfo: function() {
    return `${this.make} ${this.model} ${this.year}`;
  }
};
console.log(car); 
//task5







  
  