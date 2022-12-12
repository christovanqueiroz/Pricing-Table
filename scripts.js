function selectFreePlan() {
    document.querySelector('.free .planButton button').classList.add('selected');
    document.querySelector('.free').classList.add('planSelect');
    document.querySelector('.free .planTitle').classList.add('planTitleSelect');
    document.querySelector('.free').style.justifyContent = 'space-between'
}

function unselectFreePlan() {
    document.querySelector('.free .planButton button').classList.remove('selected');
    document.querySelector('.free').classList.remove('planSelect');
    document.querySelector('.free .planTitle').classList.remove('planTitleSelect');
    document.querySelector('.free').style.justifyContent = 'space-evenly'

}

function selectBasicPlan() {
    document.querySelector('.basic .planButton button').classList.add('selected');
    document.querySelector('.basic').classList.add('planSelect');
    document.querySelector('.basic .planTitle').classList.add('planTitleSelect');
    document.querySelector('.basic').style.justifyContent = 'space-between'
}

function unselectBasicPlan() {
    document.querySelector('.basic .planButton button').classList.remove('selected');
    document.querySelector('.basic').classList.remove('planSelect');
    document.querySelector('.basic .planTitle').classList.remove('planTitleSelect');
    document.querySelector('.basic').style.justifyContent = 'space-evenly'
}

function selectProPlan() {
    document.querySelector('.pro .planButton button').classList.add('selected');
    document.querySelector('.pro').classList.add('planSelect');
    document.querySelector('.pro .planTitle').classList.add('planTitleSelect');
    document.querySelector('.pro').style.justifyContent = 'space-between'
}
function unselectProPlan() {
    document.querySelector('.pro .planButton button').classList.remove('selected');
    document.querySelector('.pro').classList.remove('planSelect');
    document.querySelector('.pro .planTitle').classList.remove('planTitleSelect');
    document.querySelector('.pro').style.justifyContent = 'space-evenly'
}
