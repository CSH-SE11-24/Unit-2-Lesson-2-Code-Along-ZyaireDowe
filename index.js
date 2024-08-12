// IF STATEMENT REVIEW
// Day of the Week: Prompt the user to enter a day of the week (e.g., "Monday") and say whether it's a weekday or the weekend.
let user= prompt("whats the day of the week")
user=user.toLowerCase()
if (user = "Saturday" || user==="Sunday"){
  console.log("its the weekend, yay!!!")
}else{
    console.log("its a weekday, yay school!!!!!")
  }







// Age Group Classifier: Prompt the user to enter their age and categorize them into different age groups (child, teen, adult, senior)

let age = prompt("what is your age")
age=parseInt(age)
console.log(typeof age)

if (age <=12){
  console.log("your a kid")
} else if (age <=18){
  console.log("you are a teen")
} else if(age <0){
  console.log("not a age")
} else { 
  console.log("RIP your dead")
}

// WHILE LOOPS
// Print 1 to 5
let j = 1
while(j<= 5){
  console.log(j)
  j++
}



// Print from a certain number to 1
let user3= prompt("Enter a number")
user3 = parseInt(user)
while(user3>0){
  console.log(user3)
  user--
}

// Summing up to 5
let sum=0
let counter=1
while(counter<= 5)
  sum = counter + sum
  counter ++;
console.log("Sum of 1-5", sum)


// Using prompt
let mysteryStudent="Zyaire"
let user2=prompt("Enter a students's name")

while(mysteruStudent !==user2.toLowerCase()){
  user2 = propmt("Try again, guess a difgferent student.")

}
console.log("Good job!")
