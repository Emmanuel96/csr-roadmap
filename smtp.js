function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "odamie3@gmail.com",
        Password : "btfghjdpdrutrxuu",
        To : 'opeoluborode@yahoo.com',
        From : "odamie3@gmail.com",
        Subject : "Test email",
        Body : `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>HTML2PDF</title>

    <style type="text/css">
        body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: large;
        }
        
    </style>
</head>
<body>
    <div id="element-to-print">
        <div class="container-fluid">
            <div style="background-color: RGB(0,161,154) !important; height: 40px; margin-top: 30px;">

            </div>
            <div class="container" style="padding: 5%;">
                <div style="display: flex;">
                    <h1 style="color: RGB(0,161,154);">
                        Thank you for completing 
                        <br>
                        <strong>The CSR Interactive Roadmap!</strong>
                    </h1>
                    <img src="https://csr-accreditation.co.uk/wp-content/uploads/2022/01/CSR-A_Logo-RGB.jpg" alt="" style="height: 90px; margin-left: auto;">
                </div>
                <section style="background-color: RGB(234,234,234); margin-top: 30px;">
                    <div class="container" style="display: flex;">
                        <label for="client-name" class="col-sm-2" style="color: RGB(0,161,154); padding: 10px; margin-inline-start: 20px;">Results for</label>
                        <div class="col-sm-8" style="margin-inline-start: 20px; padding: 10px;">
                            <input type="text" class="form-control" id="client-name" placeholder="CLIENT NAME HERE">
                        </div>
                    </div>
                </section>
                <section style="background-color: RGB(234,234,234); margin-top: 20px;">
                    <div class="container">
                        <div style="display: flex;">
                            <h3 style="color: RGB(0,161,154); margin-inline-start: 20px; padding: 10px;">
                                ENVIRONMENT
                            </h3>
                            <img src="https://csr-accreditation.co.uk/wp-content/uploads/2022/01/ENV-ICON.png" alt="" srcset="" style="width: 100px; height: 100px; margin-left: auto; padding: 10px;">
                        </div>
                        <div>
                            <p style="color: RGB(127, 126, 125); padding-inline-start: 10px; padding-bottom: 10px; margin-inline-start: 20px;">
                                You scored 00 from a possible 00
                                <br>
                                This indicates you are <input type="text"> involved in environmental CSR
                            </p>
                        </div>
                    </div>
                </section>
                <section style="background-color: RGB(234,234,234); margin-top: 20px;">
                    <div class="container">
                        <div style="display: flex;">
                            <h3 style="color: RGB(0,161,154); margin-inline-start: 20px; padding: 10px;">
                                WORKPLACE
                            </h3>
                            <img src="https://csr-accreditation.co.uk/wp-content/uploads/2022/01/WORK-ICON.png" alt="" srcset="" style="width: 100px; height: 100px; margin-left: auto; padding: 10px;">
                        </div>
                        <div>
                            <p style="color: RGB(127, 126, 125); padding-inline-start: 10px; padding-bottom: 10px; margin-inline-start: 20px;">
                                You scored 00 from a possible 00
                                <br>
                                This indicates you are <input type="text"> involved in environmental CSR
                            </p>
                        </div>
                    </div>
                </section>
                <section style="background-color: RGB(234,234,234); margin-top: 20px;">
                    <div class="container">
                        <div style="display: flex;">
                            <h3 style="color: RGB(0,161,154); margin-inline-start: 20px; padding: 10px;" class="fs-4">
                                COMMUNITY
                            </h3>
                            <img src="https://csr-accreditation.co.uk/wp-content/uploads/2022/01/COMM-ICON.png" alt="" srcset="" style="width: 100px; height: 100px; margin-left: auto; padding: 10px;">
                        </div>
                        <div>
                            <p style="color: RGB(127, 126, 125); padding-inline-start: 10px; padding-bottom: 10px; margin-inline-start: 20px;">
                                You scored 00 from a possible 00
                                <br>
                                This indicates you are <input type="text"> involved in environmental CSR
                            </p>
                        </div>
                    </div>
                </section>
                <section style="background-color: RGB(234,234,234); margin-top: 20px;">
                    <div class="container">
                        <div style="display: flex;">
                            <h3 style="color: RGB(0,161,154); margin-inline-start: 20px; padding: 10px;">
                                PHILANTHROPY
                            </h3>
                            <img src="https://csr-accreditation.co.uk/wp-content/uploads/2022/01/PHIL-ICON.png" alt="" srcset="" style="width: 100px; height: 100px; margin-left: auto; padding: 10px;">
                        </div>
                        <div>
                            <p style="color: RGB(127, 126, 125); padding-inline-start: 10px; padding-bottom: 10px; margin-inline-start: 20px;">
                                You scored 00 from a possible 00
                                <br>
                                This indicates you are <input type="text"> involved in environmental CSR
                            </p>
                        </div>
                    </div>
                </section>
                <section style="margin-top: 30px; background-color: white; padding: 10px;">
                    <div class="container">
                        <h1 style="color: RGB(0,161,154);">
                            <strong>Become CSR Accredited Click Here to Register for FREE</strong>
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
                    <div class="container" style="background-color: RGB(0,161,154) !important; height: 70px;"></div>
                </section>
            </div>
        </div>
    </div>
    
</body>
</html>
        `
    }).then(
      message => console.log(message)
    );
}