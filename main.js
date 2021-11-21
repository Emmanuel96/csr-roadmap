const environmentalNoAction = document.querySelector("#first_option_no_action");
const envTotalNoAction = document.querySelector('#first_option_total_environmental_no_action');

const firstLimitedAction = document.querySelector('#first_option_limited_action');
const envTotalLimitedAction = document.querySelector('#first_option_total_environmental_limited_action');

const firstPositiveAction = document.querySelector('#first_option_positive_action');
const envTotalPositiveAction = document.querySelector('#first_option_total_environmental_positive_action');

const firstLeadingAction = document.querySelector('#first_option_leading_action');
const envTotalLeadingAction = document.querySelector('#first_option_total_environmental_leading_action');

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
        envTotalLimitedAction.checked = true;
        envTotalPositiveAction.checked = true;
    } else {
        envTotalLimitedAction.checked = false;
        envTotalPositiveAction.checked = false;
    }
})

firstLeadingAction.addEventListener('change', () => {
    if(firstLeadingAction.checked) {
        envTotalLimitedAction.checked = true;
        envTotalPositiveAction.checked = true;
        envTotalLeadingAction.checked = true;
    } else {
        envTotalLimitedAction.checked = false;
        envTotalPositiveAction.checked = false;
        envTotalLeadingAction.checked = false;
    }
})
