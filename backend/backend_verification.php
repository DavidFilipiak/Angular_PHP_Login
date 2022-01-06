<?php
    require_once 'vendor/autoload.php';

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata)){
        $obj = json_decode($postdata);
        $data = $obj -> data; 
        $id_token = $data -> idToken;

        //https://developers.google.com/identity/sign-in/web/backend-auth

        $CLIENT_ID = '760139251567-oggptc8ibfhupeuqbunjp21gmfk431pr.apps.googleusercontent.com';
        $client = new Google_Client(['client_id' => $CLIENT_ID]);  // Specify the CLIENT_ID of the app that accesses the backend
        $payload = $client->verifyIdToken($id_token);
        if ($payload) {
            $res = array('success' => false);
            echo json_encode($res);
        } else {
            $res = array('success' => true);
            echo json_encode($res);
        }
    }
?>