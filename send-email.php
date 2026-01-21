<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header("Content-Security-Policy: default-src 'self'; script-src 'self' https://www.gstatic.com/recaptcha/ https://www.google.com/recaptcha/; frame-src https://www.google.com/recaptcha/; style-src 'self' 'unsafe-inline';");


$RECAPTCHA_SECRET_KEY = '6LdxThYsAAAAABlXcytkH8-J2QW30QuBHuCislVw';
$RECAPTCHA_SITE_KEY   = '6LdxThYsAAAAAIaaP6jSLGRrK9tBkwhaU1EF8hz_';

$apiky = 'BA61E63B158879E7965FE61F379F066280C9DFC3AD20946C76A7874546154CA2ED7166384FFDB2308A22473067664598';
$url = 'https://api.elasticemail.com/v2/email/send';

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    echo json_encode(['success' => false, 'error' => 'Invalid JSON input']);
    exit;
}

// CHECK CAPTCHA TOKEN
$recaptchaToken = $input['recaptchaToken'] ?? null;

if (!$recaptchaToken) {
    echo json_encode(['success' => false, 'error' => 'Missing reCAPTCHA token']);
    exit;
}

// VERIFY reCAPTCHA WITH GOOGLE
$verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';

$verifyData = http_build_query([
    'secret'   => $RECAPTCHA_SECRET_KEY,
    'response' => $recaptchaToken,
    'remoteip' => $_SERVER['REMOTE_ADDR']
]);

$context = stream_context_create([
    'http' => [
        'method'  => 'POST',
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'content' => $verifyData,
        'timeout' => 5
    ]
]);

$verifyResponse = file_get_contents($verifyUrl, false, $context);
$captchaResult = json_decode($verifyResponse, true);

if (!$captchaResult || empty($captchaResult['success'])) {
    echo json_encode([
        'success' => false,
        'error' => 'reCAPTCHA verification failed'
    ]);
    exit;
}


$postData = [
    'apikey' => $apiky,
    'subject' => $input['subject'],
    'from' => $input['from'],
    'to' => $input['to'],
    'bodyHtml' => $input['body'],
    'isTransactional' => 'false'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$result = json_decode($response, true);

if ($result && isset($result['success']) && $result['success'] === true) {
    echo json_encode(['success' => true]);
} else {
    $errorMsg = $result['error'] ?? 'Unknown error from Elastic Email';
    echo json_encode(['success' => false, 'error' => $errorMsg]);
}
?>