
function initTimer(event) {
    console.log(event);
    const downloadBtn = event;
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `Ваш файл загрузится через <b>&nbsp${timer}</b>c`;
    const initCounter = setInterval(() => {
        if (timer > 0) {    
            timer--;
            return (downloadBtn.innerHTML = `Ваш файл загрузится через <b>&nbsp${timer}</b> c`);
        }
        clearInterval(initCounter);
        downloadBtn.textContent = `Ваш файл загружается`;
        setTimeout(() => {
            downloadBtn.classList.remove("timer");
            downloadBtn.innerHTML = '<span class="material-symbols-rounded"><i class="fa fa-floppy-o"></i></span><span>&nbsp</span><span class="texts"> Загрузить файл</span>'
        }, 3000)
    }, 1000);
};
