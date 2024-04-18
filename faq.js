document.addEventListener("DOMContentLoaded", function() {
  const mainQuestion = document.querySelector('.question-main');
  const answerMain = document.querySelector('.answer-main');
  const answerList = document.querySelector('.answer');

  mainQuestion.addEventListener('click', function() {
    answerMain.classList.toggle('show');
    answerList.classList.toggle('show');
  });
});
