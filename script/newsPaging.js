// 記事データ
const newsDataArry = [
  {
    date: "2030.02.01",
    category: "お知らせ",
    content: "Webデザインニュースサイト「ウェブマガジン」に取材いただきました",
    path: "news/news1.html",
  },
  {
    date: "2030.01.25",
    category: "お知らせ",
    content: "Smoothiesta様のWebサイトを制作いたしました",
    path: "",
  },
  {
    date: "2030.01.20",
    category: "採用",
    content: "Webデザイナーを１名募集中です！",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "採用",
    content:
      "（２行のテキストの場合）テキストが入るテキストが入るテキストが入るテキストが入るテキストが入るテキストが入るテキストが入るテキストが入るテキストが入るテキストが入る",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "5テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "6テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "7テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "8テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "9テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "10テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "11テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "12テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "13テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "14テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "15テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "16テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "17テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "18テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "19テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "20テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "21テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "22テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "23テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "24テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "25テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "26テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "27テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "28テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "29テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "30テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "31テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "32テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "33テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "34テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "35テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "36テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "37テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "38テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "39テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "40テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "41テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "42テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "43テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "44テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
  {
    date: "2030.02.01",
    category: "お知らせ",
    content:
      "45テキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    path: "",
  },
];

// 折り返す記事数
const contentsLimit = 20;
//ページ数を格納
let pages = 0;

// ボタンのDOMを取得
const btnParentElem = document.querySelector(".pageChangeBtns");
const child = btnParentElem.children;

window.onload = function () {
  scrollAmount = 160;
  // 記事挿入
  const cloneTargetContent = document.querySelector("#cloneTarget");
  const parentContent = document.querySelector(".section__contents");
  for (let i = 0; newsDataArry.length > i; i++) {
    // 雛形からクローン
    const clonedContent = cloneTargetContent.cloneNode(true);
    let clonedContentChildren = clonedContent.children;

    //aタグのinnerHTML代入
    const aElem = clonedContent.querySelector("a");
    aElem.innerHTML = newsDataArry[i].content;
    aElem.setAttribute("href", newsDataArry[i].path);

    //日付代入
    const dateElem = clonedContent.querySelector(".sectionNews__span--date");
    dateElem.innerHTML = newsDataArry[i].date;

    //category代入
    const categoryElem = clonedContent.querySelector(".sectionNews__span");
    categoryElem.innerHTML = newsDataArry[i].category;

    // ID削除
    clonedContent.removeAttribute("id");

    // DOMを挿入
    parentContent.appendChild(clonedContent);
  }

  // 雛形削除
  cloneTargetContent.remove();

  // 記事をすべて取得
  const contents = document.querySelectorAll(".sectionNews .section__content");
  // 配列化
  contentsArray = Array.from(contents);

  // 配列化
  childrenArray = Array.from(child);

  // ページ数だけボタンを表示
  if (contentsArray.length >= contentsLimit) {
    // ページ数
    pages = Math.ceil(contentsArray.length / contentsLimit);

    // ページ数だけボタンを表示
    for (let i = 0; i < pages; i++) {
      childrenArray[i].style.display = "block";
    }
  }

  // 記事がcontentsLimit(10)を超えたらそれ以上をdisplaynone
  if (contentsArray.length >= contentsLimit) {
    currentContents = contentsArray.slice(contentsLimit);
    for (const value of currentContents) {
      value.style.display = "none";
    }
  }
  console.log("記事数 " + contentsArray.length);
  console.log("記事ページ数 " + pages);
};

// 1ページ目を開く
function newsPageChange1() {
  for (const value of contentsArray) {
    value.style.display = "none";
  }
  for (let i = 0; contentsLimit > i; i++) {
    contentsArray[i].style.display = "flex";
  }
  for (const value of childrenArray) {
    value.classList.remove("button-active");
  }
  childrenArray[0].classList.add("button-active");
}

// 2ページ目を開く
function newsPageChange2() {
  for (const value of contentsArray) {
    value.style.display = "none";
  }
  const currentContents = contentsArray.slice(contentsLimit, contentsLimit * 2);
  for (const value of currentContents) {
    value.style.display = "flex";
  }
  for (const value of childrenArray) {
    value.classList.remove("button-active");
  }
  childrenArray[1].classList.add("button-active");
}

// 3ページ目を開く
function newsPageChange3() {
  for (const value of contentsArray) {
    value.style.display = "none";
  }
  const currentContents = contentsArray.slice(
    contentsLimit * 2,
    contentsLimit * 3
  );
  for (const value of currentContents) {
    value.style.display = "flex";
  }
  for (const value of childrenArray) {
    value.classList.remove("button-active");
  }
  childrenArray[2].classList.add("button-active");
}

// 4ページ目を開く
function newsPageChange4() {
  for (const value of contentsArray) {
    value.style.display = "none";
  }
  const currentContents = contentsArray.slice(
    contentsLimit * 3,
    contentsLimit * 4
  );
  for (const value of currentContents) {
    value.style.display = "flex";
  }
  for (const value of childrenArray) {
    value.classList.remove("button-active");
  }
  childrenArray[3].classList.add("button-active");
}

// 5ページ目を開く
function newsPageChange5() {
  for (const value of contentsArray) {
    value.style.display = "none";
  }
  const currentContents = contentsArray.slice(
    contentsLimit * 4,
    contentsLimit * 5
  );
  for (const value of currentContents) {
    value.style.display = "flex";
  }
  for (const value of childrenArray) {
    value.classList.remove("button-active");
  }
  childrenArray[4].classList.add("button-active");
}

// 6ページ目を開く
function newsPageChange6() {
  for (const value of contentsArray) {
    value.style.display = "none";
  }
  const currentContents = contentsArray.slice(
    contentsLimit * 5,
    contentsLimit * 6
  );
  for (const value of currentContents) {
    value.style.display = "flex";
  }
  for (const value of childrenArray) {
    value.classList.remove("button-active");
  }
  childrenArray[5].classList.add("button-active");
}

// 7ページ目を開く
function newsPageChange7() {
  for (const value of contentsArray) {
    value.style.display = "none";
  }
  const currentContents = contentsArray.slice(
    contentsLimit * 6,
    contentsLimit * 7
  );
  for (const value of currentContents) {
    value.style.display = "flex";
  }
  for (const value of childrenArray) {
    value.classList.remove("button-active");
  }
  childrenArray[6].classList.add("button-active");
}

// 8ページ目を開く
function newsPageChange8() {
  for (const value of contentsArray) {
    value.style.display = "none";
  }
  const currentContents = contentsArray.slice(
    contentsLimit * 7,
    contentsLimit * 8
  );
  for (const value of currentContents) {
    value.style.display = "flex";
  }
  for (const value of childrenArray) {
    value.classList.remove("button-active");
  }
  childrenArray[7].classList.add("button-active");
}

// 9ページ目を開く
function newsPageChange9() {
  for (const value of contentsArray) {
    value.style.display = "none";
  }
  const currentContents = contentsArray.slice(
    contentsLimit * 8,
    contentsLimit * 9
  );
  for (const value of currentContents) {
    value.style.display = "flex";
  }
  for (const value of childrenArray) {
    value.classList.remove("button-active");
  }
  childrenArray[8].classList.add("button-active");
}

// 10ページ目を開く
function newsPageChange10() {
  for (const value of contentsArray) {
    value.style.display = "none";
  }
  const currentContents = contentsArray.slice(
    contentsLimit * 9,
    contentsLimit * 10
  );
  for (const value of currentContents) {
    value.style.display = "flex";
  }
  for (const value of childrenArray) {
    value.classList.remove("button-active");
  }
  childrenArray[9].classList.add("button-active");
}
