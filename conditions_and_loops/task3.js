const number = 8; 

console.log('Таблиця множення за допомогою for:');
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

console.log('\nТаблиця множення за допомогою while:');
let j = 1;
while (j <= 10) {
  console.log(`${number} x ${j} = ${number * j}`);
  j++;
}