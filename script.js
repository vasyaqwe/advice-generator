const btn = document.querySelector('.btn');
const adviceText = document.querySelector('.advice-text');
const adviceNumber = document.querySelector('.advice-number');

const getAdvice = async () => {
    const res = await axios.get('https://api.adviceslip.com/advice');
    const advice = res.data.slip.advice;
    adviceText.innerText = '';
    adviceNumber.innerText = `ADVICE #${res.data.slip.id}`;
    adviceText.innerText = `"${advice}"`;
}
btn.addEventListener('click', () => {
    getAdvice();
})