<!DOCTYPE html>
<html>
<head>
  <title>My Dynamic Website</title>
</head>
<body>
  <h1>Welcome to my site!</h1>

  <?php
    // PHP code runs here
    $name = "Shakear";
    $hour = date("H");

    if ($hour < 12) {
      $greeting = "Good morning";
    } elseif ($hour < 18 && $hour > 12) {
      $greeting = "Good afternoon";
    } else {
      $greeting = "Good evening";
    }

    echo "<p>$greeting, $name!</p>";
  ?>
</body>
</html>