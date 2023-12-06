function changeBtn(selector) {
  const btnElement = document.querySelector(selector);
  if (!btnElement.classList.contains('is-toggled')) {
    turnOfPreviousBtn();
    btnElement.classList.add('is-toggled');
  }
  else btnElement.classList.remove('is-toggled');
}

function turnOfPreviousBtn() {
  const previousBtn = document.querySelector('.is-toggled');
  if (previousBtn) previousBtn.classList.remove('is-toggled');
}