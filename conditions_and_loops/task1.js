const averageGrade = 85; 

if (averageGrade < 0 || averageGrade > 100) {
  console.log('Недійсне значення оцінки');
} else if (averageGrade < 60) {
  console.log('Незадовільно');
} else if (averageGrade <= 70) {
  console.log('Задовільно');
} else if (averageGrade <= 80) {
  console.log('Добре');
} else if (averageGrade <= 90) {
  console.log('Дуже добре');
} else {
  console.log('Відмінно');
}