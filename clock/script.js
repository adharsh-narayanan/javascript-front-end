
//function definition

function getTime(){
const time=new Date() //to access system date and time
console.log(time);//will get displayed on browser console



const hour= time.getHours()
const minutes= time.getMinutes()
const seconds= time.getSeconds()

clock.innerHTML=`${hour}:${minutes}:${seconds}:${hour >=12? `PM`:`AM`}`

setTimeout(() => { getTime()
},1000);
}

//function call

getTime()