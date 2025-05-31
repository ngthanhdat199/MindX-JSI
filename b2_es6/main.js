const students = [
    {
      name: "An",
      scores: {
        Toan: { score: 7.4, evaluation: "D" },
        NguVan: { score: 8.9, evaluation: "D" },
        NgoaiNgu: { score: 8.5, evaluation: "D" },
        VatLy: { score: 9.0, evaluation: "D" },
        HoaHoc: { score: 3.9, evaluation: "KD" },
        SinhHoc: { score: 5.0, evaluation: "D" },
        LichSu: { score: 8.3, evaluation: "D" },
        DiaLy: { score: 9.4, evaluation: "D" },
        GDCD: { score: 6.6, evaluation: "D" }
      }
    },
    {
      name: "Binh",
      scores: {
        Toan: { score: 3.4, evaluation: "KD" },
        NguVan: { score: 5.9, evaluation: "D" },
        NgoaiNgu: { score: 5.4, evaluation: "D" },
        VatLy: { score: 7.4, evaluation: "D" },
        HoaHoc: { score: 9.3, evaluation: "D" },
        SinhHoc: { score: 8.6, evaluation: "D" },
        LichSu: { score: 5.2, evaluation: "D" },
        DiaLy: { score: 7.1, evaluation: "D" },
        GDCD: { score: 6.7, evaluation: "D" }
      }
    },
    {
      name: "Cuong",
      scores: {
        Toan: { score: 6.8, evaluation: "D" },
        NguVan: { score: 7.3, evaluation: "D" },
        NgoaiNgu: { score: 7.5, evaluation: "D" },
        VatLy: { score: 8.0, evaluation: "D" },
        HoaHoc: { score: 4.2, evaluation: "KD" },
        SinhHoc: { score: 6.5, evaluation: "D" },
        LichSu: { score: 7.2, evaluation: "D" },
        DiaLy: { score: 8.3, evaluation: "D" },
        GDCD: { score: 5.8, evaluation: "D" }
      }
    },
    {
      name: "Mai",
      scores: {
        Toan: { score: 8.2, evaluation: "D" },
        NguVan: { score: 9.0, evaluation: "D" },
        NgoaiNgu: { score: 8.9, evaluation: "D" },
        VatLy: { score: 7.6, evaluation: "D" },
        HoaHoc: { score: 5.1, evaluation: "D" },
        SinhHoc: { score: 9.1, evaluation: "D" },
        LichSu: { score: 8.0, evaluation: "D" },
        DiaLy: { score: 7.8, evaluation: "D" },
        GDCD: { score: 6.9, evaluation: "D" }
      }
    }
  ];

function diemTrungBinh(scores) {
    let sum = 0;
    let count = 0;
    for (let subject in scores) {
        let score = scores[subject].score;
        sum += score;
        count++;
    }
    return Math.round(sum / count * 100) / 100;
}

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let name = student.name;
    let scores = student.scores;
    let averageScore = diemTrungBinh(scores);
    student.averageScore = averageScore;
}

const thirdHighStudents = students.sort((a, b) => a.averageScore - b.averageScore);
// console.log(thirdHighStudents)

const top3Students = students.map(student => {
  let totalScore = 0;
  const subjects = Object.values(student.scores);

  for (let i = 0; i < subjects.length; i++) {
    totalScore += subjects[i].score;
  }

  const averageScore = Math.round((totalScore / subjects.length) * 100) / 100;

  return {
    name: student.name,
    averageScore: averageScore
  }
})
console.log(top3Students);
top3Students.sort((a, b) => a.averageScore - b.averageScore);
const top3 = top3Students.slice(0, 3);
console.log("Top 3 students with highest average scores:", top3);

function test() {
  let cargoHold = [
    'oxygen tanks',
    'space suits',
    'parrot',
    'instruction manual',
    'meal packs',
    'slinky',
    'security blanket'
  ];

  console.log(`Cargon array: ${cargoHold} have length ${cargoHold.length}`);
}
