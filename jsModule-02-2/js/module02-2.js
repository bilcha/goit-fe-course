let countTaba = 6;
let countSharm = 15;
let countHurgada = 25;

let number = prompt("Введите количество участников группы", 1);

if (Math.sign(number) !==1){
  alert("Не верный формат числа");
  number = NaN;
} 

if (countTaba >= number) {
  if (confirm("Есть места в группе Taba")){
    countTaba=countTaba-number;
    alert(`Остаток свободных мест ${countTaba}`);
    number = NaN;
  }
}

if (countSharm >= number) {
  if (confirm("Есть места в группе Sharm")){
    countSharm=countSharm-number;
    alert(`Остаток свободных мест ${countSharm}`);
    number = NaN;
  }
}

if (countHurgada >= number) {
  if (confirm("Есть места в группе Hurgada")){
    countHurgada=countHurgada-number;
    alert(`Остаток свободных мест ${countHurgada}`);
    number = NaN;
  }
}

if (number) {
 alert('Мест нет!');
}
