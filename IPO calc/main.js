//program Title
//comparason
document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
  let A = +document.getElementById("a").value;
  let B = +document.getElementById("b").value;
  let C = +document.getElementById("c").value;

  // process
  let S = (A + B + C) / 2;
  let Formula = S * (S - A) * (S - B) * (S - C);
  let Output = Math.sqrt(Formula);

  console.log(S);
  document.getElementById("output").innerHTML = Output;
}
