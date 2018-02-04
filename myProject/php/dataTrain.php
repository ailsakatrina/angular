<?php
function test_input($data)
{
  // preprocess from data to provide security
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>