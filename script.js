(function () {
  "use strict";

  const rowsEl = document.getElementById("rows");
  const rowTemplate = document.getElementById("rowTemplate");
  const addRowBtn = document.getElementById("addRow");
  const calcBtn = document.getElementById("calcBtn");
  const resetBtn = document.getElementById("resetBtn");
  const errorMsg = document.getElementById("errorMsg");
  const resultSection = document.getElementById("resultSection");
  const resultGpa = document.getElementById("resultGpa");
  const resultBadge = document.getElementById("resultBadge");
  const resultNote = document.getElementById("resultNote");
  const resultCredits = document.getElementById("resultCredits");
  const resultAvgScore = document.getElementById("resultAvgScore");
  const mascot = document.getElementById("mascot");

  const DEFAULT_ROWS = 3;

  /* ---------------- Grade scale (Thai 8-level GPA) ---------------- */
  const GRADE_SCALE = [
    { min: 80, letter: "A",  gpa: 4.0, note: "เยี่ยมมาก! มิโกะภูมิใจในตัวเธอสุดๆ" },
    { min: 75, letter: "B+", gpa: 3.5, note: "เก่งมากเลยนะ อีกนิดเดียวถึง A" },
    { min: 70, letter: "B",  gpa: 3.0, note: "ทำได้ดีเลยจ้า สู้ต่อไปนะ" },
    { min: 65, letter: "C+", gpa: 2.5, note: "กำลังไปได้สวย เก็บคะแนนเพิ่มอีกนิด" },
    { min: 60, letter: "C",  gpa: 2.0, note: "ผ่านได้สบายๆ แต่ยังพัฒนาได้อีก" },
    { min: 55, letter: "D+", gpa: 1.5, note: "ต้องตั้งใจเพิ่มอีกหน่อยนะ" },
    { min: 50, letter: "D",  gpa: 1.0, note: "เกือบผ่านแล้ว อย่าเพิ่งถอดใจ" },
    { min: 0,  letter: "F",  gpa: 0.0, note: "ไม่เป็นไรนะ ลองใหม่ได้เสมอ มิโกะเป็นกำลังใจให้" },
  ];

  function gradeFromScore(score) {
    return GRADE_SCALE.find((g) => score >= g.min);
  }

  /* ---------------- Row management ---------------- */
  function addRow(focus) {
    const frag = rowTemplate.content.cloneNode(true);
    rowsEl.appendChild(frag);
    if (focus) {
      const last = rowsEl.lastElementChild.querySelector(".subject-input");
      if (last) last.focus();
    }
  }

  function removeRow(rowEl) {
    if (rowsEl.children.length <= 1) {
      showError("ต้องมีอย่างน้อย 1 วิชานะ");
      return;
    }
    rowEl.remove();
  }

  rowsEl.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-remove]");
    if (!btn) return;
    removeRow(btn.closest("[data-row]"));
    hideResult();
  });

  addRowBtn.addEventListener("click", () => {
    addRow(true);
    hideResult();
  });

  resetBtn.addEventListener("click", () => {
    rowsEl.innerHTML = "";
    for (let i = 0; i < DEFAULT_ROWS; i++) addRow(false);
    hideResult();
    showError("");
  });

  /* ---------------- Validation + calculation ---------------- */
  function showError(msg) { errorMsg.textContent = msg; }
  function hideResult() { resultSection.classList.remove("show"); }

  function readRows() {
    const rows = [...rowsEl.querySelectorAll("[data-row]")];
    const data = [];

    for (const row of rows) {
      const subject = row.querySelector('[data-field="subject"]').value.trim();
      const scoreRaw = row.querySelector('[data-field="score"]').value;
      const creditRaw = row.querySelector('[data-field="credit"]').value;

      if (subject === "" && scoreRaw === "" && creditRaw === "") continue;

      if (subject === "") {
        throw new Error("อย่าลืมใส่ชื่อวิชาให้ครบทุกแถวนะ");
      }

      const score = parseFloat(scoreRaw);
      const credit = parseFloat(creditRaw);

      if (Number.isNaN(score) || score < 0 || score > 100) {
        throw new Error(`คะแนนของ "${subject}" ต้องอยู่ระหว่าง 0-100`);
      }
      if (Number.isNaN(credit) || credit <= 0) {
        throw new Error(`หน่วยกิตของ "${subject}" ต้องมากกว่า 0`);
      }

      data.push({ subject, score, credit });
    }

    if (data.length === 0) {
      throw new Error("ใส่ข้อมูลอย่างน้อย 1 วิชาก่อนคำนวณนะ");
    }

    return data;
  }

  function calculate() {
    showError("");
    let data;
    try {
      data = readRows();
    } catch (err) {
      showError(err.message);
      hideResult();
      return;
    }

    const totalCredit = data.reduce((sum, r) => sum + r.credit, 0);
    const weightedScore = data.reduce((sum, r) => sum + r.score * r.credit, 0) / totalCredit;
    const grade = gradeFromScore(weightedScore);
    const weightedGpa = data.reduce((sum, r) => sum + gradeFromScore(r.score).gpa * r.credit, 0) / totalCredit;

    displayResult(weightedScore, weightedGpa, grade, totalCredit);
  }

  calcBtn.addEventListener("click", calculate);

  /* ---------------- Result display ---------------- */
  function displayResult(avgScore, gpa, grade, totalCredit) {
    resultGpa.textContent = gpa.toFixed(2);
    resultBadge.textContent = `เกรด ${grade.letter}`;
    resultNote.textContent = grade.note;
    resultCredits.textContent = totalCredit % 1 === 0 ? totalCredit : totalCredit.toFixed(1);
    resultAvgScore.textContent = avgScore.toFixed(1);

    resultSection.classList.add("show");
    resultSection.scrollIntoView({ behavior: "smooth", block: "nearest" });

    // quick celebratory nod from the mascot
    mascot.classList.remove("celebrate");
    void mascot.offsetWidth;
    mascot.classList.add("celebrate");
  }

  /* ---------------- Init ---------------- */
  function init() {
    for (let i = 0; i < DEFAULT_ROWS; i++) addRow(false);
  }

  init();
})();