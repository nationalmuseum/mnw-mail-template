<?php
ob_start();

// debug
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


// PEAR Mail
require( dirname( __FILE__) . '/Mail.php' );
require( dirname( __FILE__) . '/inc/smtp.php' );
require( dirname( __FILE__) . '/inc/mime.php' );

/** @var array $config */
$config = json_decode( file_get_contents( "config.json" ), true );

$from =         $config[ 'username' ];
$to =           $config[ 'to' ];
$subject =      $config[ 'title' ]; 
$crlf =         "\n";

/**
 * HTML body
 */

 // Creating the Mime message

/** @var object $mime */
$mime = new Mail_mime($crlf);

// Setting the body of the email
$mime->setTXTBody( 'Please use HTML client' );
$mime->setHTMLBody( file_get_contents(  dirname( __FILE__) . '/pub/mail.html' ) );

$headers = array(
    'From' => $from,
    'To' => $to,
    'Subject' => $subject,
);

$headers = $mime->headers($headers);

echo "\n\n". 'HEADERS:' . "\n\n";
var_dump( $headers );

$smtp = Mail::factory('smtp', array(
        'host' => $config[ 'host' ],
        'port' => $config[ 'port' ],
        'auth' => 'LOGIN',
        'username' => $config[ 'username' ], 
        'password' => $config[ 'password' ],
        'debug' => true,
        'pipelining' => true
    ));


echo "\n\n" . 'SERVER DEBUG:' . "\n\n";


// Send the mail
if (PEAR::isError($smtp)) {
    echo $smtp->getMessage() . "\n" . $smtp->getUserInfo() . "\n";
    die();
}

$mail = $smtp->send( $to, $headers, $mime->get() );

if (PEAR::isError($mail)) {
    echo("Email not sent. " .$mail->getMessage() ."\n");
  } else {
    echo("Email sent!"."\n");
}

/** @var strint $output */
$output = nl2br( htmlspecialchars( ob_get_contents() ) );

ob_end_clean();

echo $output;