const targetDate = new Date("Nov 10, 2018 10:00:00").getTime();
const target = document.getElementById('countdown');

const counter = () => {
  // Get todays date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = targetDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  target.innerHTML = `<b>${days}</b> days, <b>${hours}</b> hours, <b>${minutes}</b> minutes and <b>${seconds}</b> seconds left`;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    target.textContent = "EXPIRED";
  }
}
const x = setInterval(counter, 1000);
counter();