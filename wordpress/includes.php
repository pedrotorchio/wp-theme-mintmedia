<?php
$register = [
    THEME_ROOT . '/wordpress/vue/register.php',
    THEME_ROOT . '/wordpress/reset/redirects.php',
    THEME_ROOT . '/wordpress/assets/fonts.php',
];
foreach($register as $file) {
    require_once($file);
}
    