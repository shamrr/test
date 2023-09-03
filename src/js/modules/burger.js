export const showBurgerMenu = () => {
    const burger = document.querySelector('.burger');
    const headerMenu = document.querySelector('.header__menu');
    const headerContainer = document.querySelector('.header__container');
    const headerBtnLang = document.querySelector('header__btn-lang');

    let isOpen = false;

    const logInBtn = createBtn('log in');
    const signUpBtn = createBtn('sign up');

    burger.addEventListener('click', function () {
        if(isOpen) {
            headerContainer.style.position = 'static';
            headerMenu.style.display = 'flex';

            document.body.style.overflow = 'hidden';

            stilizationLogInAndSignUp(logInBtn);
            stilizationLogInAndSignUp(signUpBtn);

            headerMenu.append(logInBtn, signUpBtn);

            logInBtn.style.border = '.4rem solid #9DADF2';
            logInBtn.style.marginTop = '3rem';
            logInBtn.style.marginBottom = '.5rem';
            signUpBtn.style.backgroundColor = '#478BF9';

            burger.classList.add('active');
            // headerMenu.classList.add('active');
        } else{
            headerMenu.style.display = 'none';
            
            burger.classList.remove('active');
            // headerMenu.classList.remove('active');
            
            document.body.style.overflow = 'auto';
            headerContainer.style.position = 'relative';
        }

        isOpen = !isOpen;
    });

    
}

function createBtn (innerText) {
    const btn = document.createElement('a');
    btn.classList.add('btn');
    btn.href = '#';
    btn.innerText = innerText;
    btn.style.textAlign = 'center';
    btn.style.alignSelf = 'center';

    return btn;
}

function stilizationLogInAndSignUp (btn) {
    btn.style.width = '30rem';
    btn.style.padding = '1.3rem 2rem';
}