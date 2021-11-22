const environmentalNoAction = document.querySelector("#first_option_no_action");
const envTotalNoAction = document.querySelector('#first_option_total_environmental_no_action');
const firstLimitedAction = document.querySelector('#first_option_limited_action');
const envTotalLimitedAction = document.querySelector('#first_option_total_environmental_limited_action');
const firstPositiveAction = document.querySelector('#first_option_positive_action');
const envTotalPositiveAction = document.querySelector('#first_option_total_environmental_positive_action');
const firstLeadingAction = document.querySelector('#first_option_leading_action');
const envTotalLeadingAction = document.querySelector('#first_option_total_environmental_leading_action');

const secondNoAction = document.querySelector('#second_option_no_action');
const envTotalSecondNoAction = document.querySelector('#second_option_total_environmental_no_action');
const secondLimitedAction = document.querySelector('#second_option_limited_action');
const envTotalSecondLimitedAction = document.querySelector('#second_option_total_environmental_limited_action');
const secondPositiveAction = document.querySelector('#second_option_positive_action');
const envTotalSecondPositiveAction = document.querySelector('#second_option_total_environmental_positive_action');
const secondLeadingAction = document.querySelector('#second_option_leading_action');
const envTotalSecondLeadingAction = document.querySelector('#second_option_total_environmental_leading_action');

const thirdNoAction = document.querySelector('#third_option_no_action');
const envTotalThirdNoAction = document.querySelector('#third_option_total_environmental_no_action');
const thirdLimitedAction = document.querySelector('#third_option_limited_action');
const envTotalThirdLimitedAction = document.querySelector('#third_option_total_environmental_limited_action');
const thirdPositiveAction = document.querySelector('#third_option_positive_action');
const envTotalThirdPositiveAction = document.querySelector('#third_option_total_environmental_positive_action');
const thirdLeadingAction = document.querySelector('#third_option_leading_action');
const envTotalThirdLeadingAction = document.querySelector('#third_option_total_environmental_leading_action');

const fourthNoAction = document.querySelector('#fourth_option_no_action');
const envTotalFourthNoAction = document.querySelector('#fourth_option_total_environmental_no_action');
const fourthLimitedAction = document.querySelector('#fourth_option_limited_action');
const envTotalFourthLimitedAction = document.querySelector('#fourth_option_total_environmental_limited_action');
const fourthPositiveAction = document.querySelector('#fourth_option_positive_action');
const envTotalFourthPositiveAction = document.querySelector('#fourth_option_total_environmental_positive_action');
const fourthLeadingAction = document.querySelector('#fourth_option_leading_action');
const envTotalFourthLeadingAction = document.querySelector('#fourth_option_total_environmental_leading_action');

const fifthNoAction = document.querySelector('#fifth_option_no_action');
const envTotalFifthNoAction = document.querySelector('#fifth_option_total_environmental_no_action');
const fifthLimitedAction = document.querySelector('#fifth_option_limited_action');
const envTotalFifthLimitedAction = document.querySelector('#fifth_option_total_environmental_limited_action');
const fifthPositiveAction = document.querySelector('#fifth_option_positive_action');
const envTotalFifthPositiveAction = document.querySelector('#fifth_option_total_environmental_positive_action');
const fifthLeadingAction = document.querySelector('#fifth_option_leading_action');
const envTotalFifthLeadingAction = document.querySelector('#fifth_option_total_environmental_leading_action');

const sixthNoAction = document.querySelector('#sixth_option_no_action');
const envTotalSixthNoAction = document.querySelector('#sixth_option_total_environmental_no_action');
const sixthLimitedAction = document.querySelector('#sixth_option_limited_action');
const envTotalSixthLimitedAction = document.querySelector('#sixth_option_total_environmental_limited_action');
const sixthPositiveAction = document.querySelector('#sixth_option_positive_action');
const envTotalSixthPositiveAction = document.querySelector('#sixth_option_total_environmental_positive_action');
const sixthLeadingAction = document.querySelector('#sixth_option_leading_action');
const envTotalSixthLeadingAction = document.querySelector('#sixth_option_total_environmental_leading_action');

environmentalNoAction.addEventListener('change', (e) => {
    if(environmentalNoAction.checked) {
        envTotalNoAction.disabled = false;
        envTotalNoAction.style.backgroundColor = 'red';
        console.log(e)
    } else {
        envTotalNoAction.disabled = true;
        envTotalNoAction.style.backgroundColor = 'white';
    }
})

firstLimitedAction.addEventListener('change', () => {
    if(firstLimitedAction.checked) {
        envTotalLimitedAction.checked = true;
    } else {
        envTotalLimitedAction.checked = false;
    }
})

firstPositiveAction.addEventListener('change', () => {
    if(firstPositiveAction.checked) {
        firstLimitedAction.checked = true;
        envTotalLimitedAction.checked = true;
        envTotalPositiveAction.checked = true;
    } else {
        firstLimitedAction.checked = false;
        firstLeadingAction.checked = false;
        envTotalLimitedAction.checked = false;
        envTotalPositiveAction.checked = false;
        envTotalLeadingAction.checked = false;
    }
})

firstLeadingAction.addEventListener('change', () => {
    if(firstLeadingAction.checked) {
        envTotalLimitedAction.checked = true;
        envTotalPositiveAction.checked = true;
        envTotalLeadingAction.checked = true;
        firstLimitedAction.checked = true;
        firstPositiveAction.checked = true;
    } else {
        envTotalLimitedAction.checked = false;
        envTotalPositiveAction.checked = false;
        envTotalLeadingAction.checked = false;
        firstLimitedAction.checked = false;
        firstPositiveAction.checked = false;
    }
})

secondNoAction.addEventListener('change', (e) => {
    if(secondNoAction.checked) {
        envTotalSecondNoAction.disabled = false;
        envTotalSecondNoAction.style.backgroundColor = 'red';
    } else {
        envTotalSecondNoAction.disabled = true;
        envTotalSecondNoAction.style.backgroundColor = 'white';
    }
})

secondLimitedAction.addEventListener('change', () => {
    if(secondLimitedAction.checked) {
        envTotalSecondLimitedAction.checked = true;
    } else {
        envTotalSecondLimitedAction.checked = false;
    }
})

secondPositiveAction.addEventListener('change', () => {
    if(secondPositiveAction.checked) {
        envTotalSecondLimitedAction.checked = true;
        secondLimitedAction.checked = true;
        envTotalSecondPositiveAction.checked = true;
    } else {
        envTotalSecondLimitedAction.checked = false;
        secondLimitedAction.checked = false;
        envTotalSecondPositiveAction.checked = false;
    }
})

secondLeadingAction.addEventListener('change', () => {
    if(secondLeadingAction.checked) {
        envTotalSecondLimitedAction.checked = true;
        secondLimitedAction.checked = true;
        secondPositiveAction.checked = true;
        envTotalSecondPositiveAction.checked = true;
        envTotalSecondLeadingAction.checked = true;
    } else {
        envTotalSecondLimitedAction.checked = false;
        secondLimitedAction.checked = false;
        secondPositiveAction.checked = false;
        envTotalSecondPositiveAction.checked = false;
        envTotalSecondLeadingAction.checked = false;
    }
})

thirdNoAction.addEventListener('change', () => {
    if(thirdNoAction.checked) {
        envTotalThirdNoAction.disabled = false;
        envTotalThirdNoAction.style.backgroundColor = 'red';
    } else {
        envTotalThirdNoAction.disabled = true;
        envTotalThirdNoAction.style.backgroundColor = 'white';
    }
})

thirdLimitedAction.addEventListener('change', () => {
    if(thirdLimitedAction.checked) {
        envTotalThirdLimitedAction.checked = true;
    } else {
        envTotalThirdLimitedAction.checked = false;
    }
})

thirdPositiveAction.addEventListener('change', () => {
    if(thirdPositiveAction.checked) {
        thirdLimitedAction.checked = true;
        envTotalThirdLimitedAction.checked = true;
        envTotalThirdPositiveAction.checked = true;
    } else {
        thirdLimitedAction.checked = false;
        envTotalThirdLimitedAction.checked = false;
        envTotalThirdPositiveAction.checked = false;
    }
})

thirdLeadingAction.addEventListener('change', () => {
    if(thirdLeadingAction.checked) {
        thirdLimitedAction.checked = true;
        thirdPositiveAction.checked = true;
        envTotalThirdLimitedAction.checked = true;
        envTotalThirdPositiveAction.checked = true;
        envTotalThirdLeadingAction.checked = true;
    } else {
        thirdLimitedAction.checked = false;
        thirdPositiveAction.checked = false;
        envTotalThirdLimitedAction.checked = false;
        envTotalThirdPositiveAction.checked = false;
        envTotalThirdLeadingAction.checked = false;
    }
})

fourthNoAction.addEventListener('change', () => {
    if(fourthNoAction.checked) {
        envTotalFourthNoAction.disabled = false;
        envTotalFourthNoAction.style.backgroundColor = 'red';
    } else {
        envTotalFourthNoAction.disabled = true;
        envTotalFourthNoAction.style.backgroundColor = 'white';
    }
})

fourthLimitedAction.addEventListener('change', () => {
    if(fourthLimitedAction.checked) {
        envTotalFourthLimitedAction.checked = true;
    } else {
        envTotalFourthLimitedAction.checked = false;
    }
})

fourthPositiveAction.addEventListener('change', () => {
    if(fourthPositiveAction.checked) {
        fourthLimitedAction.checked = true;
        envTotalFourthLimitedAction.checked = true;
        envTotalFourthPositiveAction.checked = true;
    } else {
        fourthLimitedAction.checked = false;
        envTotalFourthLimitedAction.checked = false;
        envTotalFourthPositiveAction.checked = false;
    }
})

fourthLeadingAction.addEventListener('change', () => {
    if(fourthLeadingAction.checked) {
        fourthLimitedAction.checked = true;
        fourthPositiveAction.checked = true;
        envTotalFourthLimitedAction.checked = true;
        envTotalFourthPositiveAction.checked = true;
        envTotalFourthLeadingAction.checked = true;
    } else {
        fourthLimitedAction.checked = false;
        fourthPositiveAction.checked = false;
        envTotalFourthLimitedAction.checked = false;
        envTotalFourthPositiveAction.checked = false;
        envTotalFourthLeadingAction.checked = false;
    }
})

fifthNoAction.addEventListener('change', () => {
    if(fifthNoAction.checked) {
        envTotalFifthNoAction.disabled = false;
        envTotalFifthNoAction.style.backgroundColor = 'red';
    } else {
        envTotalFifthNoAction.disabled = true;
        envTotalFifthNoAction.style.backgroundColor = 'white';
    }
})

fifthLimitedAction.addEventListener('change', () => {
    if(fifthLimitedAction.checked) {
        envTotalFifthLimitedAction.checked = true;
    } else {
        envTotalFifthLimitedAction.checked = false;
    }
})

fifthPositiveAction.addEventListener('change', () => {
    if(fifthPositiveAction.checked) {
        fifthLimitedAction.checked = true;
        envTotalFifthLimitedAction.checked = true;
        envTotalFifthPositiveAction.checked = true;
    } else {
        fifthLimitedAction.checked = false;
        envTotalFifthLimitedAction.checked = false;
        envTotalFifthPositiveAction.checked = false;
    }
})

fifthLeadingAction.addEventListener('change', () => {
    if(fifthLeadingAction.checked) {
        fifthLimitedAction.checked = true;
        fifthPositiveAction.checked = true;
        envTotalFifthLimitedAction.checked = true;
        envTotalFifthPositiveAction.checked = true;
        envTotalFifthLeadingAction.checked = true;
    } else {
        fifthLimitedAction.checked = false;
        fifthPositiveAction.checked = false;
        envTotalFifthLimitedAction.checked = false;
        envTotalFifthPositiveAction.checked = false;
        envTotalFifthLeadingAction.checked = false;
    }
})

sixthNoAction.addEventListener('change', () => {
    if(sixthNoAction.checked) {
        envTotalSixthNoAction.disabled = false;
        envTotalSixthNoAction.style.backgroundColor = 'red';
    } else {
        envTotalSixthNoAction.disabled = true;
        envTotalSixthNoAction.style.backgroundColor = 'white';
    }
})

sixthLimitedAction.addEventListener('change', () => {
    if(sixthLimitedAction.checked) {
        envTotalSixthLimitedAction.checked = true;
    } else {
        envTotalSixthLimitedAction.checked = false;
    }
})

sixthPositiveAction.addEventListener('change', () => {
    if(sixthPositiveAction.checked) {
        sixthLimitedAction.checked = true;
        envTotalSixthLimitedAction.checked = true;
        envTotalSixthPositiveAction.checked = true;
    } else {
        sixthLimitedAction.checked = false;
        envTotalSixthLimitedAction.checked = false;
        envTotalSixthPositiveAction.checked = false;
    }
})

sixthLeadingAction.addEventListener('change', () => {
    if(sixthLeadingAction.checked) {
        sixthLimitedAction.checked = true;
        sixthPositiveAction.checked = true;
        envTotalSixthLimitedAction.checked = true;
        envTotalSixthPositiveAction.checked = true;
        envTotalSixthLeadingAction.checked = true;
    } else {
        sixthLimitedAction.checked = false;
        sixthPositiveAction.checked = false;
        envTotalSixthLimitedAction.checked = false;
        envTotalSixthPositiveAction.checked = false;
        envTotalSixthLeadingAction.checked = false;
    }
})