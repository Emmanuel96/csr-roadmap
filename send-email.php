<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    echo json_encode(['success' => false, 'error' => 'Invalid input']);
    exit;
}

// Configuration from your es-main.js
$apiKey = 'BA61E63B158879E7965FE61F379F066280C9DFC3AD20946C76A7874546154CA2ED7166384FFDB2308A22473067664598'; 
$url = 'https://api.elasticemail.com/v2/email/send';

$postData = [
    'apikey' => $apiKey,
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