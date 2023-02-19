var p = document.querySelectorAll('p')
console.log(p)
var myClass = document.querySelectorAll('.myClass')
console.log(myClass)
var yngerJan = document.querySelector("#yngerJan")
console.log(yngerJan)

var button = document.querySelector('button')
button.addEventListener('click',(e)=>{
    yngerJan.innerHTML= "Xaxaxa"
    console.log(e.clientX, e.clientY)
})
