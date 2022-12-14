document.querySelector('.btn_collapse').onclick = function () {
  document.querySelector('.text_collapse').classList.toggle('show');
  document.querySelector('.text_collapse').textContent = 'Традиция отмечать Новый год 1 января зародилась на Руси в 1700 году. Эту дату назначил правящий в те времена Петр Первый. До этого в стране встречали начало года 1 сентября, а до 1492 года новогоднее празднование приходилось на 1 марта. Традиция отмечать Новый год 1 января зародилась на Руси в 1700 году.';
};

document.querySelector('.btn-push').onclick = function () {
  document.querySelector('.btn-push').style = 'transform: scale(0, 0);';

  const feedbackContainer = document.createElement('div');
  feedbackContainer.classList.add('feedback-container');
  setTimeout(() => {
    feedbackContainer.classList.add('fd-push-in');
  }, 100);

  const fbTitle = document.createElement('p');
  fbTitle.classList.add('fb-title');
  fbTitle.textContent = 'Напишите нам';

  const descriptionText = document.createElement('textarea');
  descriptionText.classList.add('description-text');
  descriptionText.setAttribute('placeholder', 'Ваше мнение очень важно для нас...');

  const btnSend = document.createElement('div');
  btnSend.classList.add('btn-send');
  btnSend.textContent = 'Отправить';

  const times = document.createElement('div');
  times.classList.add('close');
  times.innerText = '\u2716';

  document.querySelector('aside').before(feedbackContainer);
  feedbackContainer.append(times, fbTitle, descriptionText, btnSend);

  document.querySelector('.close').onmouseup = function () {
    feedbackContainer.classList.remove('fd-push-in');

    setTimeout(() => {
      feedbackContainer.remove();
    }, 100);

    document.querySelector('.btn-push').style = '';
  };
};
