//UPDETED

const mileage = (start,end) =>{
    speed = 6
    jarak = 0
    start = new Date(`2020-05-06T${start}`).getTime()//mengubah ke milisecond
    end = new Date(`2020-05-06T${end}`).getTime()//mengubah ke milisecond
    time = (end - start)/1000 //mengubah ke second
    toMin = (second) => second/60 // fungsi mengubah detik ke menit

    x = 0
    while(x != time){
        x++
        if(toMin(x) ==  5){//saat 5 menit speed tambah 2m/s
            speed+=2
        }
        if ((toMin(x) - 5) % 10 == 0 ){//stelah 5 menit dan setiap 10 menit speed tambah 1m/s
            if(toMin(x) != 5)speed ++   // menit bukan 5
        }
        jarak += speed
    }
    return jarak/1000 //mengubah jarak ke KM
  
} 

console.log(mileage('10:12:21','12:00:00')+' KM')
module.export = mileage