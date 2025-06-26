// منع كليك يمين
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// منع اختصارات النسخ والتفتيش
document.onkeydown = function (e) {
  if (
    (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'c')) || 
    (e.ctrlKey && e.shiftKey && e.key === 'I') || 
    e.keyCode === 123
  ) {
    return false;
  }
};

// منع تحديد النص
document.addEventListener("selectstart", function (e) {
  e.preventDefault();
});

// قائمة الجوال (الهامبرجر)
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}