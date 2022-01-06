<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata)){
        $res = array('success' => true);
        echo json_encode($res);
    }
    /*
    require_once 'googleTokeValidationAPI/vendor/autoload.php';

    // Get $id_token via HTTPS POST.

    $client = new Google_Client(['client_id' => $CLIENT_ID]);  // Specify the CLIENT_ID of the app that accesses the backend
    $payload = $client->verifyIdToken($id_token);
    if ($payload) {
    $userid = $payload['sub'];
    // If request specified a G Suite domain:
    //$domain = $payload['hd'];
    } else {
    // Invalid ID token
    }*/

?>