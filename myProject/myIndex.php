<?php
   setcookie("userLogin",'no');
?>
      <!DOCTYPE html>
      <html>
      <head>
      	<title>myProject</title>
      	<meta charset='utf-8'>


      	<link rel="stylesheet" href="css/thirdParty/bootstrap.css">  
         	<link rel='stylesheet' href='css/myBody.css'>
         	<link rel='stylesheet' href='css/carousel.css'>
         	<link rel='stylesheet' href='css/signIn.css'>
            <link rel='stylesheet' href='css/test.css'>
            <link rel='stylesheet' href='css/panel.css'>
            <link rel='stylesheet' href='css/QR.css'>


      </head>
      <body>
      	<div ng-app='myApp'>
      		<ui-view></ui-view>
      	</div>

      	<script src="js/thirdParty/angular-1.3.0.js"></script>
      	<script src="js/thirdParty/angular-ui-router.js"></script>
      	<script src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>
      	<script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.js"></script>

      	<script type="text/javascript" src='js/myApp.js'></script>
      	<script type="text/javascript" src='js/carousel.js'></script>
      	<script type="text/javascript" src='js/controller/form.js'></script>
         <script type="text/javascript" src='js/controller/test.js'></script>
         <script type="text/javascript" src='js/controller/verify.js'></script>


      	<script type="text/javascript" src='js/service/checkPass.js'></script>
      	<script type="text/javascript" src='js/provider/jsonToStr.js'></script>
      	<script type="text/javascript" src='js/factory/serialize.js'></script>
         <script type="text/javascript" src='js/service/checkIdentity.js'></script>
         <script type="text/javascript" src='js/directive/QRcode.js'></script>
         <!-- <script type="text/javascript" src='js/directive/validation.js'></script>
          -->

         <script type="text/javascript" src="http://static.runoob.com/assets/qrcode/qrcode.min.js"></script>


         <script src='js/panel.js'></script>


       
      </body>
      </html>
