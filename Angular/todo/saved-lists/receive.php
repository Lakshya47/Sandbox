<?php echo json_encode(scandir('C:\wamp\www\GitRepo\Angular\todo\saved-lists'));
file_put_contents($_GET["newFileName"], '{"todo": '.$_GET["todoList"].'}');
?>