
let btn = document.getElementById("btn");

btn.onclick = () => {
    let day01 = Number(document.getElementById("i1").value);
    let day02 = Number(document.getElementById("i2").value);
    let day03 = Number(document.getElementById("i3").value);
    let day04 = Number(document.getElementById("i4").value);
    let day05 = Number(document.getElementById("i5").value);
    let day06 = Number(document.getElementById("i6").value);
    let day07 = Number(document.getElementById("i7").value);
    
    let total = (day01+day02+day03+day04+day05+day06+day07)
    let avarange = total / 7
    
    document.getElementById("res").innerText= (
        "total:"+total +"        avarange "+ avarange
    )
    
} 

