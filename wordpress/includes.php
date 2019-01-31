<?php
$register = [
    THEME_ROOT . '/wordpress/vue/register.php'
];
foreach($register as $file) {
    require_once($file);
}
    