const durationInSeconds = 2 * 54; // 24 horas em segundos
let timeLeft = durationInSeconds;

const countdownElement = $("#vitrine__promocao__countdown");
const promotionItems = $(".vitrine__promocao__single");

const timer = setInterval(() => {
  timeLeft--;

  const days = Math.floor(timeLeft / 3600 / 24);
  const hours = Math.floor((timeLeft / 3600) % 24);
  const minutes = Math.floor((timeLeft / 60) % 60);
  const seconds = timeLeft % 60;

  countdownElement.text(
    `
      ${days} dias : ${hours} horas : ${minutes} minutos : ${seconds.toString().padStart(2, "0")} segundos

    `
/*     `Promoção termina em ${days}:${hours}:${minutes}:${seconds
      .toString()
      .padStart(2, "0")} min` */
  );

  if (timeLeft === 0) {
    clearInterval(timer);
    $('.vitrine__promocao__title').css('display', 'none');
    promotionItems.css("display", "none"); 
    countdownElement.text("Promoção encerrada");
/*     promotionItems.addClass('.promocao-encerrada'); */
  }
}, 1000);
