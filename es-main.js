const handle_pillars  = function(){
    let row = $(this).data('row')
    let pillar = $(this).data('pillar')

    //handle no action disabling other actions 
    if($(this).hasClass(pillar+'-no-action')){
        $('.'+pillar+'-action-row-'+row).each(function(){
            this.checked = false
        });
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
}

// apply function to all checkboxes 
$('.action').on('change', handle_pillars)

$('#download-pdf').on('click', function() {
    // var element = document.getElementById('element-to-print');
    var element = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <!-- Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>HTML2PDF</title>
    </head>
    <body>
        <div id="element-to-print">
            <div class="container-fluid">
                <div style="background-color: RGB(0,161,154) !important; height: 40px;" class="mt-4">
    
                </div>
                <div class="container">
                    <div class="mt-3 d-flex">
                        <h1 class="text-start display-5" style="color: RGB(0,161,154);">
                            Thank you for completing 
                            <br>
                            <strong>The CSR Interactive Roadmap!</strong>
                        </h1>
                        <img src="./assets/images/CSR-A_Logo-RGB.jpg" alt="" class="img-fluid rounded float-end ms-auto" style="height: 100px;">
                    </div>
                    <section class="bg-secondary mt-3">
                        <div class="d-flex container">
                            <label for="client-name" class="col-sm-2 col-form-label ms-4 p-2 fs-4" style="color: RGB(0,161,154);">Results for</label>
                            <div class="col-sm-8 ms-2 p-2">
                                <input type="text" class="form-control" id="client-name" placeholder="CLIENT NAME HERE">
                            </div>
                        </div>
                    </section>
                    <section class="bg-secondary mt-3">
                        <div class="container">
                            <div class="d-flex">
                                <h5 style="color: RGB(0,161,154);" class="ms-4 fs-4 p-2">
                                    ENVIRONMENT
                                </h5>
                                <img src="./assets/images/ENV-ICON.png" alt="" srcset="" style="width: 100px; height: 100px;" class="p-2 img-fluid ms-auto">
                            </div>
                            <div>
                                <p class="ms-4 fs-4 pb-2 ps-2">
                                    You scored 00 from a possible 00
                                    <br>
                                    This indicates you are <input type="text"> involved in environmental CSR
                                </p>
                            </div>
                        </div>
                    </section>
                    <section class="bg-secondary mt-3">
                        <div class="container">
                            <div class="d-flex">
                                <h5 style="color: RGB(0,161,154);" class="ms-4 fs-4 p-2">
                                    WORKPLACE
                                </h5>
                                <img src="./assets/images/WORK-ICON.png" alt="" srcset="" style="width: 100px; height: 100px;" class="p-2 img-fluid ms-auto">
                            </div>
                            <div>
                                <p class="ms-4 fs-4 pb-2 ps-2">
                                    You scored 00 from a possible 00
                                    <br>
                                    This indicates you are <input type="text"> involved in environmental CSR
                                </p>
                            </div>
                        </div>
                    </section>
                    <section class="bg-secondary mt-3">
                        <div class="container">
                            <div class="d-flex">
                                <h5 style="color: RGB(0,161,154);" class="ms-4 fs-4 p-2">
                                    COMMUNITY
                                </h5>
                                <img src="./assets/images/COMM-ICON.png" alt="" srcset="" style="width: 100px; height: 100px;" class="p-2 img-fluid ms-auto">
                            </div>
                            <div>
                                <p class="ms-4 fs-4 pb-2 ps-2">
                                    You scored 00 from a possible 00
                                    <br>
                                    This indicates you are <input type="text"> involved in environmental CSR
                                </p>
                            </div>
                        </div>
                    </section>
                    <section class="bg-secondary mt-3">
                        <div class="container">
                            <div class="d-flex">
                                <h5 style="color: RGB(0,161,154);" class="ms-4 fs-4 p-2">
                                    PHILANTHROPY
                                </h5>
                                <img src="./assets/images/PHIL-ICON.png" alt="" srcset="" style="width: 100px; height: 100px;" class="p-2 img-fluid ms-auto">
                            </div>
                            <div>
                                <p class="ms-4 fs-4 pb-2 ps-2">
                                    You scored 00 from a possible 00
                                    <br>
                                    This indicates you are <input type="text"> involved in environmental CSR
                                </p>
                            </div>
                        </div>
                    </section>
                    <section class="bg-light mt-3 p-2">
                        <div class="container">
                            <h6 class="display-6" style="color: RGB(0,161,154);">
                                <strong>Become CSR Accredited Click Here to Register for FREE</strong>
                            </h6>
                            <p class="lead">
                                CSR Accreditation provides independent recognition of an organisation's
                                socially responsible activities. We encourage you to build on these results
                                and register for CSR Accreditation. Registration is FREE and we will supply 
                                you with guidance, tools and the confidence to develop an effective CSR policy
                                to build into your organisation strategy.
                            </p>
                        </div>
                    </section>
                    <section class="mt-4">
                        <div class="container" style="background-color: RGB(0,161,154) !important; height: 70px;"></div>
                    </section>
                </div>
            </div>
        </div>
        
        <!-- Bundle -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
        <script src="html2pdf.js-master\dist\html2pdf.bundle.min.js"></script>
        
    
        <script>
            var element = document.getElementById('element-to-print');
            html2pdf(element);
        </script>
    </body>
    </html>
    `;
    // html2pdf(element);

    var doc = new jsPDF("l", "px");   

    doc.setFontSize(1);

    doc.html(element, {
    callback: function (doc) {
        doc.save('roadmap-result.pdf');
    }
    });

    console.log(doc.getFontSize());

});