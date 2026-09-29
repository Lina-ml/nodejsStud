const express = require("express");
const app = express();
app.use(express.json())

const PORT = 3000;
const students = [
  { id: 1, name: "Иван Иванов", age: 20, group: "ИС-21", grade: 4.5 },
  { id: 2, name: "Мария Петрова", age: 19, group: "ИС-21", grade: 4.8 },
  { id: 3, name: "Алексей Сидоров", age: 21, group: "ИС-22", grade: 3.9 },
  { id: 4, name: "Анна Смирнова", age: 20, group: "ИС-22", grade: 4.2 },
  { id: 5, name: "Дмитрий Козлов", age: 22, group: "ИС-23", grade: 4.7 },
];
const subjects = [
  { name: "Математика", grade: 5 },
  { name: "Физика", grade: 4 },
  { name: "Информатика", grade: 5 },
  { name: "История", grade: 3 },
  { name: "Английский язык", grade: 4 },
];

console.table(subjects);

app.get("/", (req, res) => {
  res.send("главная страница");
});
app.get("/subjects", (req, res) => {
  res.send(subjects);
});
app.get("/students", (req, res) => {
  res.send(students);
});



app.get("/students/:id", (req, res) => {
  console.log(req.params.id);
  let student = students.find((stud) => {
    //точно выводит find
    return stud.id == req.params.id;
  });
  if (!student) {
    // если ты не нашел такого пользоваля выведеи ошибку  ! отрицание
    return res.status(404).json({ error: "такого пользователя не существует" });
  }
  res.json(student);
});
app.post('/student' ,(req ,res)=>{
    // console.log(req.body);
const {name, age} = req.body

const newStudent ={
    id: students.length+1,
    name: name,
    age:age,
}
    students.push(newStudent)
    // res.status(200).json("успешно", newStudent)
    res.send(students)
})









app.get("/contact/", (req, res) => {
  res.send(`контакт`);
});
app.get("/about", (req, res) => {
  res.send("о нас");
});
app.get("/registration", (req, res) => {
  res.send("о нас");
});

app.get("/authorization", (req, res) => {
  res.send("о нас");
});

app.listen(PORT, () => {
  console.log("сервер успешно запущен: порт:" + PORT);
});
