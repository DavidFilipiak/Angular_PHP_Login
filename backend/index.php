<?php
    require_once 'vendor/autoload.php';

    //nastavenie CORS headerov
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    //získaj user data z frontend POST requestu a vyber z toho id_token
    $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata)){
        $obj = json_decode($postdata);
        $data = $obj -> data; 
        $id_token = $data -> idToken;

        //väčšina nasledujúceho kódu pochazda z tejto stránky: https://developers.google.com/identity/sign-in/web/backend-auth

        $CLIENT_ID = '760139251567-oggptc8ibfhupeuqbunjp21gmfk431pr.apps.googleusercontent.com';
        $client = new Google_Client(['client_id' => $CLIENT_ID]);  // Specify the CLIENT_ID of the app that accesses the backend
        $payload = $client->verifyIdToken($id_token);
        
        //ak je id token platny, pošli do fronendu json {success:true}, inak false
        if ($payload) {
            $res = array('success' => true);
            echo json_encode($res);
        } else {
            $res = array('success' => false);
            echo json_encode($res);
        }
    }
?>