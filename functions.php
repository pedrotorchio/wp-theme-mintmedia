<?php
add_action( 'wp_enqueue_scripts', function() {
    //* Parent CSS
    wp_enqueue_style( 'parent-styles', 
      get_template_directory_uri() . '/style.css' );

    //* Child CSS
    wp_enqueue_style( 'child-styles', 
      get_stylesheet_directory_uri() . '/style.css', [ 'parent-styles' ] );
} );