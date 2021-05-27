function nhap(){
    let cao = document.getElementById('cao').value;
    let nang = document.getElementById('nang').value;
    BMI = nang/cao**2 ;
      document.getElementById('BMI').innerHTML=BMI
      if (BMI<18){
          document.getElementById('DG').innerHTML= 'Bạn đang Gầy!'
          document.getElementById('Gy').innerHTML= 'Ăn nhiều vào!!!'
      }else{
          if (BMI>25) {
              document.getElementById('DG').innerHTML= 'Bạn béo rồi:(';
              document.getElementById('Gy').innerHTML= 'Ăn ít mỡ, Vận động nhiều nhé!>.<'
          }else{
            document.getElementById('DG').innerHTML= 'Chỉ số bình thường'
            document.getElementById('Gy').innerHTML= 'Cơ thể chuẩn rồi, chỉ còn thiếu ny thôi ^^!'
          }
      }
}