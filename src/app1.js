import "./app1.css"
import $ from "jquery"


let $add1 = $("#add1")
let $minus1 = $("#minus1")
let $mul2 = $("#mul2")
let $divide2 = $("#divide2")
let $number = $("#number")
$add1.on("click",()=>{
    let n = parseInt($number.text());
    console.log(n)
    n++
    $number.text(n)
})
$minus1.on("click",()=>{
    let n = parseInt($number.text());
    n--
    $number.text(n)
})
$mul2.on("click",()=>{
    let n = parseInt($number.text());
    n*2
    $number.text(n)
})
$divide2.on("click",()=>{
    let n = parseInt($number.text());
    n = n/2
    $number.text(n)
})


