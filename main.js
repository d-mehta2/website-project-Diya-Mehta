// BTS

// Button Event Listener
document.getElementById("check").addEventListener("click", btnClicked);

function btnClicked() {
  // INPUT

  let indi = document.getElementById("indi-in").value.toLowerCase();
  let v = document.getElementById("v-in").value.toLowerCase();
  let mus = +document.getElementById("mus-in").value.toLowerCase();
  let loll = document.getElementById("loll-in").value.toLowerCase();
  let occ = document.getElementById("occ-in").value.toLowerCase();

  let outputEl = document.getElementById("output");

  // Count Variables
  let numMark = 0;

  // OUTPUT INDI
  if (indi === "indigo") {
    document.getElementById("ind-out").innerHTML = `
        <p>Correct!</p>
        `;
    document.getElementById("ind-out").style.color = "rgb(52, 253, 102)";
    document.getElementById("indi-in").style.borderColor = "rgb(52, 253, 102)";
    numMark = numMark + 1;
  } else {
    document.getElementById("ind-out").innerHTML = `
        <p>Incorrect</p>
    `;
    document.getElementById("ind-out").style.color = "red";
    document.getElementById("indi-in").style.borderColor = "red";
  }

  // OUTPUT V
  if (v === "taehyung") {
    document.getElementById("v-out").innerHTML = `
        <p>Correct!</p>
        `;
    document.getElementById("v-out").style.color = "rgb(52, 253, 102)";
    document.getElementById("v-in").style.borderColor = "rgb(52, 253, 102)";
    numMark = numMark + 1;
  } else {
    document.getElementById("v-out").innerHTML = `
        <p>Incorrect</p>
    `;
    document.getElementById("v-out").style.color = "red";
    document.getElementById("v-in").style.borderColor = "red";
  }

  // OUTPUT MUS
  if (mus === 13) {
    document.getElementById("mus-out").innerHTML = `
        <p>Correct!</p>
        `;
    document.getElementById("mus-out").style.color = "rgb(52, 253, 102)";
    document.getElementById("mus-in").style.borderColor = "rgb(52, 253, 102)";
    numMark = numMark + 1;
  } else {
    document.getElementById("mus-out").innerHTML = `
        <p>Incorrect</p>
    `;
    document.getElementById("mus-out").style.color = "red";
    document.getElementById("mus-in").style.borderColor = "red";
  }

  // OUTPUT LOLL
  if (loll === "lollapalooza") {
    document.getElementById("loll-out").innerHTML = `
        <p>Correct!</p>
        `;
    document.getElementById("loll-out").style.color = "rgb(52, 253, 102)";
    document.getElementById("loll-in").style.borderColor = "rgb(52, 253, 102)";
    numMark = numMark + 1;
  } else {
    document.getElementById("loll-out").innerHTML = `
        <p>Incorrect</p>
    `;
    document.getElementById("loll-out").style.color = "red";
    document.getElementById("loll-in").style.borderColor = "red";
  }

  // OUTPUT OCC
  if (occ === "vocalist" || occ === "dancer") {
    document.getElementById("occ-out").innerHTML = `
        <p>Correct!</p>
        `;
    document.getElementById("occ-out").style.color = "rgb(52, 253, 102)";
    document.getElementById("occ-in").style.borderColor = "rgb(52, 253, 102)";
    numMark = numMark + 1;
  } else {
    document.getElementById("occ-out").innerHTML = `
        <p>Incorrect</p>
    `;
    document.getElementById("occ-out").style.color = "red";
    document.getElementById("occ-in").style.borderColor = "red";
  }

  // OUTPUT MARK

  let mark = numMark / 5;

  if (mark === 1) {
    outputEl.innerHTML = Math.round(mark * 10) / 10;
    outputEl.innerHTML = `
      <p>5/5 or 100%!</p>
      <p>Seems like you are already an ARMY!!</p>
      `;
  } else if (mark === 0.8) {
    outputEl.innerHTML = Math.round(mark * 10) / 10;
    outputEl.innerHTML = `
    <p>4/5 or 80%! Almost there!</p>
    `;
  } else if (mark === 0.6) {
    outputEl.innerHTML = Math.round(mark * 10) / 10;
    outputEl.innerHTML = `
    <p>3/5 or 60%! You can do it!</p>
    `;
  } else if (mark === 0.4) {
    outputEl.innerHTML = Math.round(mark * 10) / 10;
    outputEl.innerHTML = `
    <p>2/5 or 40%! You could do better!</p>
    `;
  } else if (mark === 0.2) {
    outputEl.innerHTML = Math.round(mark * 10) / 10;
    outputEl.innerHTML = `
    <p>1/5 or 20%! Try harder!</p>
    `;
  } else {
    outputEl.innerHTML = Math.round(mark * 10) / 10;
    outputEl.innerHTML = `
    <p>0/5 or 0%! Read the About page again!</p>
    `;
  }
}
