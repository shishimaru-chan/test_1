// 画面をスクロールした時に要素をふわっと出す設定
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // 少しずつ時間をずらして表示させる
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      // 一度表示されたら監視をやめる
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 // 10%見えたら実行
});

reveals.forEach(el => observer.observe(el));
