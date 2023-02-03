console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i = 0; i <= count; i++) {
            if(i % 2 != 0){
                console.log(i);
            }
    }
}
printOdds(100);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
let aboveSixteen = `Congrats ${userName}! You can drive!`;
let belowSixteen = `Sorry ${userName}, but you need to wait until you are 16`
if( age < 16){
    console.log(belowSixteen);
}
else{
    console.log(aboveSixteen);
}
}
checkAge("Joe", 15);
checkAge("Jim", 17);
checkAge("Jon", 16);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function checkQuadrant(x, y){
    if(x > 0 && y > 0){
        console.log(1);
    }
    else if(x < 0 && y > 0){
        console.log(2);
    }
    else if(x < 0 && y < 0){
        console.log(3);
    }
    
    else if(x > 0 && y < 0){
        console.log(4);
    }
    else if(x == 0){
        console.log("Y axis");
    }
    else if(y == 0){
        console.log("X axis");
    }
}
checkQuadrant(1,1);
checkQuadrant(-1, 1);
checkQuadrant(-1, -1);
checkQuadrant(1,-1);
checkQuadrant(0,-1);
checkQuadrant(1,0);



// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function isTriangle(a, b, c)
{
    return a+b>c && a+c>b && b+c>a;
}
function typeTriangle(a,b,c)
{
    let triangle = isTriangle(a,b,c);
    if(triangle){
        if(a==b && b==c){
            console.log("equilateral");
        }
        else if(a==b || b==c || a==c){
            console.log("isosceles");
        }
        else {
            console.log("scalene");
           } 
    } else{
        console.log("not a triangle");
    } 
}
typeTriangle(1,2,2);
typeTriangle(1,1,1);
typeTriangle(2,3,4);
typeTriangle(1,1,2);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataUse(planLimit, day, usage){
    let planLength = 30;
    let useLimit = (planLimit / 30);
    let currentDailyUsage = (usage/day);
    let daysLeft = 30 -day;
    let overage = ((30*currentDailyUsage) - planLimit);
    let dataLeft = ((planLimit - usage) / daysLeft);
    console.log(`${day} days used, ${daysLeft} days remaining`);
    console.log(`Average daily use: ${useLimit} gb/day`);
    if(currentDailyUsage > useLimit){
        console.log(`You are EXCEEDING your average daily use ${currentDailyUsage}GB/day),
        continuing this high usage, you'll exceed your data plan by
        ${overage * -1} GB.`)
        console.log(`To stay below your data plan, use no more than ${dataLeft}. GB/day.`)
    }
   
}
dataUse(100,15,56);


        
        

