export  function changeLang () {
    const btn = document.querySelector('.header__btn-lang');
    let isEn = true;

    btn.addEventListener('click', function () {
        if(isEn){
            btn.innerHTML = '<img src="../../img/icons/planet.svg" alt="lang">ru';
        } else{
            btn.innerHTML = '<img src="../../img/icons/planet.svg" alt="lang">en';
        }
        isEn = !isEn;
    })
}