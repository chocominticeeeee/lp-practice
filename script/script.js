// ハンバーガーメニュー
const header = document.querySelector(".header__nav-sp");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const hamburgerBtn = document.querySelector(".header__menu");
header.addEventListener("click", function () {
  hamburgerBtn.classList.toggle("open");
  hamburgerMenu.classList.toggle("hamburgerMenuOpen");
});
// ハンバーガーメニュー開いた状態でブレイクポイント超えた場合に解除
function windowResizeFunc() {
  const windowWidth = document.body.clientWidth;
  if (windowWidth >= 884) {
    hamburgerMenu.classList.remove("hamburgerMenuOpen");
    hamburgerBtn.classList.remove("open");
  }
}
// ウィンドウサイズ変更検知し実行
window.addEventListener("resize", windowResizeFunc);

// ページに合わせてヘッダーの色が変わる位置を変更
scrollAmount = 0;
let currentPageTitle = "";

// ページ読み込み時
window.onload = function () {
  currentPageTitle = window.location.href.split("/").pop();
  // 開いたページがHTMLだったら
  if (currentPageTitle == "index.html") {
    scrollAmount = 900;
    // スワイパー初期化
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    scrollAmount = 160;
  }
};

// ヘッダーの色変わる
// scrollAmountにスクロール量
window.addEventListener("scroll", function () {
  if (scrollAmount <= this.window.scrollY) {
    document.querySelector("header").classList.add("open2");
  } else {
    document.querySelector("header").classList.remove("open2");
  }
});

// トップに移動ボタン
function autoscrollTop() {
  window.scrollTo({
    top: 0, //上からの位置
    behavior: "smooth", //smoothでスクロールしながら移動
  });
  console.log("トップにスクロールしました。");
}
