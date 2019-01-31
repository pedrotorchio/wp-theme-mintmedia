<?php
define('THEME_ROOT', get_stylesheet_directory());

require_once(THEME_ROOT . '/build/options.php');

define('IS_PRODUCTION', OPTIONS['isProduction']);

require_once(THEME_ROOT . '/wordpress/includes.php');

