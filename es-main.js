let env_pillar_score = 0; 
let philanthropy_pillar_score = 0; 
let community_pillar_score = 0; 
let workplace_pillar_score = 0;
let env_text = "you currently take no action in this area or are not aware of any taken. CSR-A Offers a variety of services including consultation and advice to begin your journey in this area."
let philanthropy_text = "you currently take no action in this area or are not aware of any taken. CSR-A Offers a variety of services including consultation and advice to begin your journey in this area."
let community_text = "you currently take no action in this area or are not aware of any taken. CSR-A Offers a variety of services including consultation and advice to begin your journey in this area." 
let workplace_text = "you currently take no action in this area or are not aware of any taken. CSR-A Offers a variety of services including consultation and advice to begin your journey in this area.";

function getValue(value){
    let returnValue = ""; 
    if (value === 0){
        returnValue = 'there has been some action in this area but it is ad hoc and unmonitored. You are re-active rather than pro-active. There are no CSR processes and no clear roles and responsibilities in place. CSR-A Offers a variety of services including consultation and advice to improve your activity in this area.';
    }else if(value >=0 && value <10){
        returnValue = 'you do not necessarily have a policy in place but there is routine action in some areas. You may benefit from a dedicated CSR process and integrating CSR policy into your operations. CSR-A Offers a variety of services including consultation and advice to help your formulate policy and an independent Accreditation to validate your activity.';
    }else if(value >=10 && value < 18){
        returnValue = "you have a CSR policy in place that is routinely actioned and regularly reviewed. Success in many areas but with room for improvement. Excellent progress but you are yet to fully connect commercial benefits to your CSR policy.  CSR-A Offers a variety of services including consultation and advice to help your formulate policy and an independent Accreditation to validate your activity.";
    }else if(value >=18){
        returnValue = "you are a socially responsible organisation that records and constantly improves. Why not publicise and validate your CSR credentials with our independent CSR Accreditation."
    }
    return returnValue;
}

////Environment - each question total section

//variables

var env_q_1 = 0
var env_q_2 = 0
var env_q_3 = 0
var env_q_4 = 0
var env_q_5 = 0
var env_q_6 = 0

//Environment - question 1 function

function env_q1(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        env_q_1 = 0
    }
    else if (checkBox.checked == true && id == 'env-q-1-check-3'){
        env_q_1 = 2
    }
    else if(checkBox.checked == true && id == 'env-q-1-check-4'){
        env_q_1 = 3
    }
    else if(checkBox.checked == true){
        env_q_1 += num
    }
    else if(checkBox.checked == false){
        env_q_1 -= num
    }
    console.log("Env Q1", env_q_1)
}

//Environment - question 2 function

function env_q2(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        env_q_2 = 0
    }
    else if (checkBox.checked == true && id == 'env-q-2-check-3'){
        env_q_2 = 2
    }
    else if(checkBox.checked == true && id == 'env-q-2-check-4'){
        env_q_2 = 3
    }
    else if(checkBox.checked == true){
        env_q_2 += num
    }
    else if(checkBox.checked == false){
        env_q_2 -= num
    }
}

//Environment - question 3 function

function env_q3(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        env_q_3 = 0
    }
    else if (checkBox.checked == true && id == 'env-q-3-check-3'){
        env_q_3 = 2
    }
    else if(checkBox.checked == true && id == 'env-q-3-check-4'){
        env_q_3 = 3
    }
    else if(checkBox.checked == true){
        env_q_3 += num
    }
    else if(checkBox.checked == false){
        env_q_3 -= num
    }
}

//Environment - question 4 function

function env_q4(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        env_q_4 = 0
    }
    else if (checkBox.checked == true && id == 'env-q-4-check-3'){
        env_q_4 = 2
    }
    else if(checkBox.checked == true && id == 'env-q-4-check-4'){
        env_q_4 = 3
    }
    else if(checkBox.checked == true){
        env_q_4 += num
    }
    else if(checkBox.checked == false){
        env_q_4 -= num
    }
}

//Environment - question 5 function

function env_q5(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        env_q_5 = 0
    }
    else if (checkBox.checked == true && id == 'env-q-5-check-3'){
        env_q_5 = 2
    }
    else if(checkBox.checked == true && id == 'env-q-5-check-4'){
        env_q_5 = 3
    }
    else if(checkBox.checked == true){
        env_q_5 += num
    }
    else if(checkBox.checked == false){
        env_q_5 -= num
    }
}

//Environment - question 6 function

function env_q6(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        env_q_6 = 0
    }
    else if (checkBox.checked == true && id == 'env-q-6-check-3'){
        env_q_6 = 2
    }
    else if(checkBox.checked == true && id == 'env-q-6-check-4'){
        env_q_6 = 3
    }
    else if(checkBox.checked == true){
        env_q_6 += num
    }
    else if(checkBox.checked == false){
        env_q_6 -= num
    }
}

////Workplace - each question total section

//variables

var wrk_q_1 = 0
var wrk_q_2 = 0
var wrk_q_3 = 0
var wrk_q_4 = 0
var wrk_q_5 = 0
var wrk_q_6 = 0

//Workplace - question 1 function

function wrk_q1(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        wrk_q_1 = 0
    }
    else if (checkBox.checked == true && id == 'wrk-q-1-check-3'){
        wrk_q_1 = 2
    }
    else if(checkBox.checked == true && id == 'wrk-q-1-check-4'){
        wrk_q_1 = 3
    }
    else if(checkBox.checked == true){
        wrk_q_1 += num
    }
    else if(checkBox.checked == false){
        wrk_q_1 -= num
    }
}

//Workplace - question 2 function

function wrk_q2(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        wrk_q_2 = 0
    }
    else if (checkBox.checked == true && id == 'wrk-q-2-check-3'){
        wrk_q_2 = 2
    }
    else if(checkBox.checked == true && id == 'wrk-q-2-check-4'){
        wrk_q_2 = 3
    }
    else if(checkBox.checked == true){
        wrk_q_2 += num
    }
    else if(checkBox.checked == false){
        wrk_q_2 -= num
    }
}

//Workplace - question 3 function

function wrk_q3(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        wrk_q_3 = 0
    }
    else if (checkBox.checked == true && id == 'wrk-q-3-check-3'){
        wrk_q_3 = 2
    }
    else if(checkBox.checked == true && id == 'wrk-q-3-check-4'){
        wrk_q_3 = 3
    }
    else if(checkBox.checked == true){
        wrk_q_3 += num
    }
    else if(checkBox.checked == false){
        wrk_q_3 -= num
    }
}

//Workplace - question 4 function

function wrk_q4(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        wrk_q_4 = 0
    }
    else if (checkBox.checked == true && id == 'wrk-q-4-check-3'){
        wrk_q_4 = 2
    }
    else if(checkBox.checked == true && id == 'wrk-q-4-check-4'){
        wrk_q_4 = 3
    }
    else if(checkBox.checked == true){
        wrk_q_4 += num
    }
    else if(checkBox.checked == false){
        wrk_q_4 -= num
    }
}

//Workplace - question 5 function

function wrk_q5(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        wrk_q_5 = 0
    }
    else if (checkBox.checked == true && id == 'wrk-q-5-check-3'){
        wrk_q_5 = 2
    }
    else if(checkBox.checked == true && id == 'wrk-q-5-check-4'){
        wrk_q_5 = 3
    }
    else if(checkBox.checked == true){
        wrk_q_5 += num
    }
    else if(checkBox.checked == false){
        wrk_q_5 -= num
    }
}

//Workplace - question 6 function

function wrk_q6(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        wrk_q_6 = 0
    }
    else if (checkBox.checked == true && id == 'wrk-q-6-check-3'){
        wrk_q_6 = 2
    }
    else if(checkBox.checked == true && id == 'wrk-q-6-check-4'){
        wrk_q_6 = 3
    }
    else if(checkBox.checked == true){
        wrk_q_6 += num
    }
    else if(checkBox.checked == false){
        wrk_q_6 -= num
    }
}

////Community - each question total section

//variables

var com_q_1 = 0
var com_q_2 = 0
var com_q_3 = 0
var com_q_4 = 0
var com_q_5 = 0
var com_q_6 = 0

//Community - question 1 function

function com_q1(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        com_q_1 = 0
    }
    else if (checkBox.checked == true && id == 'com-q-1-check-3'){
        com_q_1 = 2
    }
    else if(checkBox.checked == true && id == 'com-q-1-check-4'){
        com_q_1 = 3
    }
    else if(checkBox.checked == true){
        com_q_1 += num
    }
    else if(checkBox.checked == false){
        com_q_1 -= num
    }
}

//Community - question 2 function

function com_q2(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        com_q_2 = 0
    }
    else if (checkBox.checked == true && id == 'com-q-2-check-3'){
        com_q_2 = 2
    }
    else if(checkBox.checked == true && id == 'com-q-2-check-4'){
        com_q_2 = 3
    }
    else if(checkBox.checked == true){
        com_q_2 += num
    }
    else if(checkBox.checked == false){
        com_q_2 -= num
    }
}

//Community - question 3 function

function com_q3(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        com_q_3 = 0
    }
    else if (checkBox.checked == true && id == 'com-q-3-check-3'){
        com_q_3 = 2
    }
    else if(checkBox.checked == true && id == 'com-q-3-check-4'){
        com_q_3 = 3
    }
    else if(checkBox.checked == true){
        com_q_3 += num
    }
    else if(checkBox.checked == false){
        com_q_3 -= num
    }
}

//Community - question 4 function

function com_q4(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        com_q_4 = 0
    }
    else if (checkBox.checked == true && id == 'com-q-4-check-3'){
        com_q_4 = 2
    }
    else if(checkBox.checked == true && id == 'com-q-4-check-4'){
        com_q_4 = 3
    }
    else if(checkBox.checked == true){
        com_q_4 += num
    }
    else if(checkBox.checked == false){
        com_q_4 -= num
    }
}

//Community - question 5 function

function com_q5(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        com_q_5 = 0
    }
    else if (checkBox.checked == true && id == 'com-q-5-check-3'){
        com_q_5 = 2
    }
    else if(checkBox.checked == true && id == 'com-q-5-check-4'){
        com_q_5 = 3
    }
    else if(checkBox.checked == true){
        com_q_5 += num
    }
    else if(checkBox.checked == false){
        com_q_5 -= num
    }
}

//Community - question 6 function

function com_q6(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        com_q_6 = 0
    }
    else if (checkBox.checked == true && id == 'com-q-6-check-3'){
        com_q_6 = 2
    }
    else if(checkBox.checked == true && id == 'com-q-6-check-4'){
        com_q_6 = 3
    }
    else if(checkBox.checked == true){
        com_q_6 += num
    }
    else if(checkBox.checked == false){
        com_q_6 -= num
    }
}

////Philanthropic - each question total section

//variables

var phl_q_1 = 0
var phl_q_2 = 0
var phl_q_3 = 0
var phl_q_4 = 0
var phl_q_5 = 0
var phl_q_6 = 0

//Philanthropic - question 1 function

function phl_q1(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        phl_q_1 = 0
    }
    else if (checkBox.checked == true && id == 'phl-q-1-check-3'){
        phl_q_1 = 2
    }
    else if(checkBox.checked == true && id == 'phl-q-1-check-4'){
        phl_q_1 = 3
    }
    else if(checkBox.checked == true){
        phl_q_1 += num
    }
    else if(checkBox.checked == false){
        phl_q_1 -= num
    }
}

//Philanthropic - question 2 function

function phl_q2(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        phl_q_2 = 0
    }
    else if (checkBox.checked == true && id == 'phl-q-2-check-3'){
        phl_q_2 = 2
    }
    else if(checkBox.checked == true && id == 'phl-q-2-check-4'){
        phl_q_2 = 3
    }
    else if(checkBox.checked == true){
        phl_q_2 += num
    }
    else if(checkBox.checked == false){
        phl_q_2 -= num
    }
}

//Philanthropic - question 3 function

function phl_q3(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        phl_q_3 = 0
    }
    else if (checkBox.checked == true && id == 'phl-q-3-check-3'){
        phl_q_3 = 2
    }
    else if(checkBox.checked == true && id == 'phl-q-3-check-4'){
        phl_q_3 = 3
    }
    else if(checkBox.checked == true){
        phl_q_3 += num
    }
    else if(checkBox.checked == false){
        phl_q_3 -= num
    }
}

//Philanthropic - question 4 function

function phl_q4(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        phl_q_4 = 0
    }
    else if (checkBox.checked == true && id == 'phl-q-4-check-3'){
        phl_q_4 = 2
    }
    else if(checkBox.checked == true && id == 'phl-q-4-check-4'){
        phl_q_4 = 3
    }
    else if(checkBox.checked == true){
        phl_q_4 += num
    }
    else if(checkBox.checked == false){
        phl_q_4 -= num
    }
}

//Philanthropic - question 5 function

function phl_q5(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        phl_q_5 = 0
    }
    else if (checkBox.checked == true && id == 'phl-q-5-check-3'){
        phl_q_5 = 2
    }
    else if(checkBox.checked == true && id == 'phl-q-5-check-4'){
        phl_q_5 = 3
    }
    else if(checkBox.checked == true){
        phl_q_5 += num
    }
    else if(checkBox.checked == false){
        phl_q_5 -= num
    }
}

//Philanthropic - question 6 function

function phl_q6(num, id){
    var checkBox = document.getElementById(id);

    if(checkBox.checked == true && num == 0){
        phl_q_6 = 0
    }
    else if (checkBox.checked == true && id == 'phl-q-6-check-3'){
        phl_q_6 = 2
    }
    else if(checkBox.checked == true && id == 'phl-q-6-check-4'){
        phl_q_6 = 3
    }
    else if(checkBox.checked == true){
        phl_q_6 += num
    }
    else if(checkBox.checked == false){
        phl_q_6 -= num
    }
}
 
////

const handle_pillars  = function(){
    let row = $(this).data('row')
    let pillar = $(this).data('pillar')
    let score = 0; 
    //handle no action disabling other actions 
    if($(this).hasClass(pillar+'-no-action')){
        $('.'+pillar+'-action-row-'+row).each(function(){
            this.checked = false
        });
    }else if($(this).hasClass(pillar+'-positive-action')){
        if(this.checked === true){
            $('.'+pillar+'-limit-action-'+row).each(function(){
                this.checked = true
            });
            
            $('.'+pillar+'-no-action-row-'+row).each(function(){
                this.checked = false;
            })
        }
    }else if($(this).hasClass(pillar+'-leading-action')){
        if(this.checked === true){
            $('.'+pillar+'-action-row-'+row).each(function(){
                this.checked = true
            });
            
            $('.'+pillar+'-no-action-row-'+row).each(function(){
                this.checked = false;
            })
        }
    }else if($(this).hasClass(pillar+'-action')){
        $('.'+pillar+'-no-action-row-'+row).each(function(){
            this.checked = false
        })
    }

    no_action_count = 0
    action_count = 0
    // get all the clicked no actions first 

    $('.'+pillar+'-no-action').each(function(){
        // console.log($(obj)[index].is(':checked'))
        if(this.checked === true){
            no_action_count += 1
        }
    });
    
    // get all the clicked actiions 
    $('.'+pillar+'-action').each(function(){
        if(this.checked === true){
            action_count += 1
        }
    });
    // uncheck the entire results first 
    $('.'+pillar+'-result').each(function(){
        this.checked = false; 
        $(this).attr('style','background-color: white; width: 25px; height: 25px;')
     });

     //store counters in temp value 
     let temp_no_action_count = no_action_count; 
     let temp_action_count = action_count;

    // represent answer in result 
    $('.'+pillar+'-result').each(function(){
       if(no_action_count > 0){
          // check element
          this.checked = true;
          // afterwards turn check to red
          $(this).attr('style','background-color: red; width: 25px; height: 25px;')
          // then decrement the count
          no_action_count -= 1
       }
       else if(action_count > 0){
        // check element
        this.checked = true;
        action_count -= 1
        $(this).attr('style','background-color: grey; width: 25px; height: 25px;')
       }
    });

    //set back counts
    no_action_count = temp_no_action_count; 
    action_count = temp_action_count;
    
    // represent answer in final result 
    $('.'+pillar+'-final-result').each(function(){
        // if(no_action_count > 0){
        //     // check element
        //     this.checked = true;
        //     // afterwards turn check to red
        //     $(this).attr('style','background-color: red; width: 25px; height: 25px;')
        //     // then decrement the count
        //     no_action_count -= 1
        // }
        if(action_count > 0){
            score = score + 1;
            // check element
            this.checked = true;
            action_count -= 1
            $(this).attr('style','background-color: grey; width: 25px; height: 25px;')
        }
     });
    //  alert('score for '+pillar+'= '+score)
     if(pillar === 'env'){
         env_pillar_score = score; 
         env_text = getValue(env_pillar_score)
     }else if(pillar === 'workplace'){
         workplace_pillar_score = score;
         workplace_text = getValue(workplace_pillar_score)
     }else if (pillar === 'philanthropic'){
         philanthropy_pillar_score = score; 
         philanthropy_text = getValue(philanthropy_pillar_score)
     }else if(pillar === 'community'){
         community_pillar_score = score; 
         community_text = getValue(community_pillar_score)
     }
}

// apply function to all checkboxes 
$('.action').on('change', handle_pillars)

$('#submission-form').on('submit', (e)=>{
    e.preventDefault(); 
    sendEmail();
})
function sendEmail() {
    let userEmail = $('input[name="userEmail"]').val()
    let userName =  $('input[name="userName"]').val()
    let companyName =  $('input[name="companyName"]').val()

    let mailList = ['kole.audu@gmail.com']

    if(!userEmail){
        swal.fire("Email input cannot be empty")
    }

    else if(!/\S+@\S+\.\S+/.test(userEmail)){
        swal.fire("Email address is invalid")
    }

    else{
        mailList.push(userEmail);
        Email.send({
            Host : "smtp.gmail.com",
            Username : "csraccreditation@gmail.com",
            Password : "bulgpxbnklszzcsn",
            To : mailList,
            From :     "csraccreditation@gmail.com",
            Subject : "Roadmap Result",
            Body : `
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>HTML2PDF</title>

    <style type="text/css">
        body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: large;
        }
        #empty-container {
            background-color:  RGB(0,161,154) !important;
            height: 40px; 
            margin-top: 30px;
        }
    </style>
</head>
<body>
    <div id="element-to-print">
        <div class="container-fluid">
            <div id = "empty-container" style="background-color: #00a199; height: 40px; margin-top: 20px;">

            </div>
            <div class="container" style="padding: 5%; font-size: 135%">
                <div style="display: flex; align-items: center; width: 100%;">
                    <h3 style="color: #00a199; font-size: 25px">
                        Thank you for completing 
                        <strong>The CSR Interactive Roadmap!</strong>
                    </h3>
                    <img src="https://csr-accreditation.co.uk/wp-content/uploads/2022/01/CSR-A_Logo-RGB.jpg" alt="" style="display: flex; height: 80px; width: 110px; margin-left: auto;">
                </div>
                <section style="background-color: #eaeaea; margin-top: 30px;">
                    <div class="container" style="display: flex;">
                        <label for="client-name" class="col-sm-2" style="color: #00a199; padding: 10px; margin-inline-start: 20px;">Results for:</label>
                        <div class="col-sm-8" style="margin-inline-start: 20px; padding: 10px;">
                            ${userName}, ${companyName}, <span>${userEmail} </span>
                        </div>
                    </div>
                </section>
                <section style="background-color: #eaeaea;  margin-top: 20px;">
                    <div class="container">
                        <div style="display: flex;">
                            <h3 style="color: #00a199; margin-inline-start: 20px; padding: 10px; margin-left: 12px">
                                ENVIRONMENT
                            </h3>
                            <img src="https://csr-accreditation.co.uk/wp-content/uploads/2022/01/ENV-ICON.png" alt="" srcset="" style="width: 100px; height: 100px; margin-left: auto; padding: 10px;">
                        </div>
                        <div>
                          <div>
                            <p style="color: #7f7e7d; margin-left: 29px; ">Does your organisation implement and monitor energy saving initiatives?
                              <span style="background-color: white; padding: 2px;">${env_q_1}</span></p>
                            
                            <p style="color: #7f7e7d; margin-left: 29px;">Does your organisation provide for sustainable resource use?
                              <span style="background-color: white; padding: 2px;">${env_q_2}</span></p>

                            <p style="color: #7f7e7d; margin-left: 29px;">Does your organisation have a travel policy in place?
                              <span style="background-color: white; padding: 2px;">${env_q_3}</span></p>

                            <p style="color: #7f7e7d; margin-left: 29px;">Does your organisation operate sustainable supply chan policy?
                              <span style="background-color: white; padding: 2px;">${env_q_4}</span></p>

                            <p style="color: #7f7e7d; margin-left: 29px;">Does your organisation have a waste management policy?
                              <span style="background-color: white; padding: 2px;">${env_q_5}</span></p>

                            <p style="color: #7f7e7d; margin-left: 29px;">Any other activity?
                              <span style="background-color: white; padding: 2px;">${env_q_6}</span></p>
                          </div>

                            <p style="color: #7f7e7d; padding-inline-start: 10px; padding-top: 20px; padding-bottom: 20px; margin-inline-start: 20px; margin-left: 19px">
                                You scored <span style="background-color: white;"> ${env_pillar_score}</span> from a possible <span style="background-color: white;"> 18</span>
                                <br>
                                <br>
                                <span style="color: #00A199"><b>This indicates that ${env_text}</b></span
                            </p>
                        </div>
                    </div>
                </section>
                <section style="background-color: #eaeaea;  margin-top: 20px;">
                    <div class="container">
                        <div style="display: flex;">
                            <h3 style="color: #00a199; margin-inline-start: 20px; padding: 10px; margin-left: 12px">
                                WORKPLACE
                            </h3>
                            <img src="https://csr-accreditation.co.uk/wp-content/uploads/2022/01/WORK-ICON.png" alt="" srcset="" style="width: 100px; height: 100px; margin-left: auto; padding: 10px;">
                        </div>
                        <div>
                          <div>
                            <p style="color: #7f7e7d; margin-left: 29px; ">Does your organisation have a apprenticeship scheme policy?
                              <span style="background-color: white; padding: 2px;">${wrk_q_1}</span></p>
                            
                            <p style="color: #7f7e7d; margin-left: 29px;">Does your organisation have a diversity & inclusion policy?
                              <span style="background-color: white; padding: 2px;">${wrk_q_2}</span></p>

                            <p style="color: #7f7e7d; margin-left: 29px;">Does your organisation have a Training/skills policy?
                              <span style="background-color: white; padding: 2px;">${wrk_q_3}</span></p>

                            <p style="color: #7f7e7d; margin-left: 29px;">Does your organisation have a health & well-being policy?
                              <span style="background-color: white; padding: 2px;">${wrk_q_4}</span></p>

                            <p style="color: #7f7e7d; margin-left: 29px;">Does your organisation have a family commitment policy?
                              <span style="background-color: white; padding: 2px;">${wrk_q_5}</span></p>

                            <p style="color: #7f7e7d; margin-left: 29px;">Any other activity?
                              <span style="background-color: white; padding: 2px;">${wrk_q_6}</span></p>
                          </div>

                            <p style="color: #7f7e7d; padding-inline-start: 10px; padding-top: 20px; padding-bottom: 20px; margin-inline-start: 20px; margin-left: 19px">
                                You scored <span style="background-color: white;"> ${workplace_pillar_score}</span> from a possible <span style="background-color: white;"> 18</span>
                                <br>
                                <br>
                                <span style="color: #00A199"><b>This indicates that ${workplace_text}</b></span>
                            </p>
                        </div>
                    </div>
                </section>
                <section style=" background-color: #eaeaea; margin-top: 20px;">
                    <div class="container">
                        <div style="display: flex;">
                            <h3 style="color: #00a199; margin-inline-start: 20px; padding: 10px; margin-left: 12px" class="fs-4">
                                COMMUNITY
                            </h3>
                            <img src="https://csr-accreditation.co.uk/wp-content/uploads/2022/01/COMM-ICON.png" alt="" srcset="" style="width: 100px; height: 100px; margin-left: auto; padding: 10px;">
                        </div>
                        <div>

                          <div>
                            <p style="color: #7f7e7d; margin-left: 29px; ">Does your organisation support a project such as community hub?
                              <span style="background-color: white; padding: 2px;">${com_q_1}</span></p>
                            
                            <p style="color: #7f7e7d; margin-left: 29px;">Does your organisation provide support to your local community?
                              <span style="background-color: white; padding: 2px;">${com_q_2}</span></p>

                            <p style="color: #7f7e7d; margin-left: 29px;">Does your organisation provide support to school & colleges?

                              <span style="background-color: white; padding: 2px;">${com_q_3}</span></p>

                            <p style="color: #7f7e7d; margin-left: 29px;">Does your organisation provide support to an enterprise scheme?
                              <span style="background-color: white; padding: 2px;">${com_q_4}</span></p>

                            <p style="color: #7f7e7d; margin-left: 29px;">Does your organisation record and impact report community activity?
                              <span style="background-color: white; padding: 2px;">${com_q_5}</span></p>

                            <p style="color: #7f7e7d; margin-left: 29px;">Any other activity?
                              <span style="background-color: white; padding: 2px;">${com_q_6}</span></p>
                          </div>

                            <p style="color: #7f7e7d; padding-inline-start: 10px; padding-top: 20px; padding-bottom: 20px; margin-inline-start: 20px; margin-left: 19px">
                                You scored <span style="background-color: white;"> ${community_pillar_score}</span> from a possible <span style="background-color: white;"> 18</span>
                                <br>
                                <br>
                                <span style="color: #00A199"><b>This indicates that ${community_text}</b></span>
                            </p>
                        </div>
                    </div>
                </section>
                <section style="background-color: #eaeaea; margin-top: 20px;">
                    <div class="container">
                        <div style="display: flex;">
                            <h3 style="color: #00a199; margin-inline-start: 20px; padding: 10px; margin-left: 12px">
                                PHILANTHROPY
                            </h3>
                            <img src="https://csr-accreditation.co.uk/wp-content/uploads/2022/01/PHIL-ICON.png" alt="" srcset="" style="width: 100px; height: 100px; margin-left: auto; padding: 10px;">
                        </div>
                        <div>

                          <div>
                            <p style="color: #7f7e7d; margin-left: 29px; ">Does your organisation have a policy for supporting charities?
                              <span style="background-color: white; padding: 2px;">${phl_q_1}</span></p>
                            
                            <p style="color: #7f7e7d; margin-left: 29px;">Does your organisation give financial donations to charity?

                              <span style="background-color: white; padding: 2px;">${phl_q_2}</span></p>

                            <p style="color: #7f7e7d; margin-left: 29px;">Does your organisation provide pro bono time and services?
                              <span style="background-color: white; padding: 2px;">${phl_q_3}</span></p>

                            <p style="color: #7f7e7d; margin-left: 29px;">Does your organisation support staff in philanthropic activity?
                              <span style="background-color: white; padding: 2px;">${phl_q_4}</span></p>

                            <p style="color: #7f7e7d; margin-left: 29px;">Does your organisation record and impact report philanthropic activity?
                              <span style="background-color: white; padding: 2px;">${phl_q_5}</span></p>

                            <p style="color: #7f7e7d; margin-left: 29px;">Any other activity?
                              <span style="background-color: white; padding: 2px;">${phl_q_6}</span></p>
                          </div>

                            <p style="color: #7f7e7d; padding-inline-start: 10px; padding-top: 20px; padding-bottom: 20px; margin-inline-start: 20px; margin-left: 19px">
                                You scored <span style="background-color: white;"> ${philanthropy_pillar_score}</span> from a possible <span style="background-color: white;"> 18</span>
                                <br>
                                <br>
                                <span style="color: #00A199"><b>This indicates that ${philanthropy_text}</b></span>
                            </p>
                        </div>
                    </div>
                </section>
                <section style="margin-top: 30px; background-color: white; padding: 10px;">
                    <div class="container">
                        <h1 style="color: #00a199;">
                            <strong>Become CSR Accredited click <a style="color: #00A19A;" href="https://csr-accreditation.co.uk/apply-for-csr-accreditation/">here</a> to Register for FREE</strong>
                        </h1>
                        <p>
                            CSR Accreditation provides independent recognition of an organisation's
                            socially responsible activities. We encourage you to build on these results
                            and register for CSR Accreditation. Registration is FREE and we will supply 
                            you with guidance, tools and the confidence to develop an effective CSR policy
                            to build into your organisation strategy.
                        </p>
                    </div>
                </section>
                <section style="margin-top: 30px;">
                    <div class="container" style="background-color: #00a199 !important; height: 70px;"></div>
                </section>
            </div>
        </div>
    </div>
    
</body>
</html>
            `
        }).then(()=>{
            Swal.fire({
                title: "Your result has been successfully sent",
                confirmButtonText: 'Okay',
              }).then((result) => {
                window.location.href = "https://csr-accreditation.co.uk/apply-for-csr-accreditation/";
              })
        }).catch(() => swal.fire('Your email was not sent.'))
    }

}
