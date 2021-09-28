document.getElementById("main-range").oninput = function () {
   let value = (this.value - this.min) / (this.max - this.min) * 100
   this.style.background = 'linear-gradient(to right, #710707 0%, #710707 ' + value + '%, #c4c4c4 ' + value + '%, #c4c4c4 100%)'
};
document.getElementById("volume-range").oninput = function () {
   let value = (this.value - this.min) / (this.max - this.min) * 100
   this.style.background = 'linear-gradient(to right, #710707 0%, #710707 ' + value + '%, #c4c4c4 ' + value + '%, #c4c4c4 100%)'
};
const mixRand = (a, b) => Math.random() - 0.5;
let arrImg = Array.from(document.querySelectorAll('.gallery-image img')), arrImgSrcMix = arrImg.map(e => e.src).sort(mixRand);
arrImg.map((e, i) => e.src = arrImgSrcMix[i]);