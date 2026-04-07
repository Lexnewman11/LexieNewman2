function changeMessage() {
  document.getElementById("styleMessage").innerHTML =
    "Style tip: Confidence and simple accessories can elevate any outfit.";
}

function toggleOutfitList() {
  let list = document.getElementById("outfitList");

  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
