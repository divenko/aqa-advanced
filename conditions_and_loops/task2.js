const averageGrade = 70;

switch (true) {
  case (averageGrade < 0 || averageGrade > 100):
    console.log('Недійсне значення оцінки');
    break;
  case (averageGrade < 60):
    console.log('Незадовільно');
    break;
  case (averageGrade <= 70):
    console.log('Задовільно');
    break;
  case (averageGrade <= 80):
    console.log('Добре');
    break;
  case (averageGrade <= 90):
    console.log('Дуже добре');
    break;
  default:
    console.log('Відмінно');
}