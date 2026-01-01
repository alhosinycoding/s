const students = [
  {code:"KING1", pass:"1111", name:"يحيى حسين"},
  {code:"KING2", pass:"2222", name:"زياد إيهاب"},
  {code:"KING3", pass:"3333", name:"عمر سعيد"}
];

let current = null;

/* LOGIN */
function login(){
  const c = document.getElementById("code").value;
  const p = document.getElementById("pass").value;

  const s = students.find(x => x.code===c && x.pass===p);
  if(s){
    current = s;
    document.getElementById("studentName").innerText = "أهلاً " + s.name;
    show("dashboard");
  } else {
    alert("كود أو باسورد غير صحيح");
  }
}

/* LOGOUT */
function logout(){
  current = null;
  show("login");
}

/* NAVIGATION */
function show(id){
  document.querySelectorAll(".container").forEach(d => d.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  if(id==="leaderboard") showLeaderboard();
}

/* DARK / LIGHT MODE */
function toggleMode(){
  document.body.classList.toggle("light");
}

/* LEADERBOARD */
function showLeaderboard(){
  const list = document.getElementById("leaderboardList");
  list.innerHTML = "";
  students.forEach((s,i)=>{
    const li = document.createElement("li");
    li.innerText = `${s.name}`;
    list.appendChild(li);
  });
}

/* BUTTON EVENTS */
document.getElementById("btnLessons").addEventListener("click",()=>show("lessons"));
document.getElementById("btnExams").addEventListener("click",()=>show("exams"));
document.getElementById("btnLeaderboard").addEventListener("click",()=>show("leaderboard"));
