function colorize(){
    if (anq.gender.value == 'F'){
        anq.style.background = 'coral'
    }
    else{
        anq.style.background = 'lightblue'
    }
}

//

let date = document.querySelector('[type = date')
let nowDate = new Date()
let nowYear = nowDate.getFullYear()


function countAge(){
    console.log(nowYear - date.valueAsDate.getFullYear());
    age.value = nowYear - date.valueAsDate.getFullYear()

}