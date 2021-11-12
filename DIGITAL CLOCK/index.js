/* const G = document.getElementById("time")
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const D = new Date()
 const M = months[D.getMonth()]
var Y = D.getFullYear()
const N = days[D.getDay()]
const Z = D.getUTCDate()
G.innerHTML = `${M}:${Z}:${Y}`  */
var y;
const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
const G = document.getElementById("time")
const D = new Date()
const H = D.getHours()
const Mi = D.getMinutes()
const Sec = D.getSeconds()
const N = days[D.getDay()]
G.innerHTML = `${N}:${H}:${Mi}:${Sec}:${p()}`
function p(){
    if (H > 12) { 
       var y = "PM"
       return y
    }else return y = "AM"
}


