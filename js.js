document.addEventListener("DOMContentLoaded", function() {

    let  str = 'abcde';
    alert(str[0]); 
    alert(str[1]); 
    alert(str[4]);


    let a = parseInt(prompt("Введите число:"))
    let b = parseInt(prompt("Введите другое число:"))
    console.log(a > 0 || b > 0)
// или
    // let a = parseInt(prompt("Введите число:"))
    // let b = parseInt(prompt("Введите другое число:"))
    // let c = a > 0 || b > 0
    // console.log(c)


    let age = parseInt(prompt("Введите cвой возраст:"))
    if (age >= 18) {
        alert("Совершеннолетний")
    }
    else {
        alert("Несовершеннолетний")
    }
})
