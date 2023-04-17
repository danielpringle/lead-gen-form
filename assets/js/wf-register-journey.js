function hide_not_chosen() {
    let wfjf_tier = document.getElementsByClassName('wfjf-tier-1')
    for (i = 0; i < wfjf_tier.length; i++) {
        wfjf_tier[i].classList.add('tier-2-hidden')
    }
}

 

function hide_tier_section() {
    var wfjf_tier = document.getElementsByClassName('wfrj-tier-4')
    for (i = 0; i < wfjf_tier.length; i++) {
        wfjf_tier[i].classList.add('tier-4-hidden')
    }
}

function clear_tier_two_radios(){
    const checkedRadios = document.querySelectorAll('[name="tier-two-radios"]')
    for(var i=0;i<checkedRadios.length;i++)
    checkedRadios[i].checked = false;
}


const tier_one_inputs = document.querySelectorAll('[name="wfrj-tier-one-radios"]')
tier_one_inputs.forEach((elem) => {
    elem.addEventListener('click', (event) => {

    hide_not_chosen();
    clear_tier_two_radios();

    let tier_two_id =  event.target.getAttribute("data-box");
    let tier_two = document.getElementById(tier_two_id);

    if(event.target.checked==true){
        tier_two.classList.remove("tier-2-hidden");
    }
  })
})





const tier_two_inputs = document.querySelectorAll('[name="tier-two-radios"]');

tier_two_inputs.forEach((elem) => {
  elem.addEventListener('click', (event) => {

    let tier_three = document.getElementById('wfrj-tier-3');
    if(event.target.checked==true){
        tier_three.classList.remove("tier-3-hidden");
    }
  })
})



const tier_three_inputs = document.querySelectorAll('[name="tier-three-radios"]')

tier_three_inputs.forEach((elem) => {
  elem.addEventListener('click', (event) => {

    hide_tier_section();

    let tier_4_id = event.target.getAttribute("data-box");
    let tier_4 = document.getElementById(tier_4_id);

    if(event.target.checked==true){
        tier_4.classList.remove("tier-4-hidden");
    }
  })
})