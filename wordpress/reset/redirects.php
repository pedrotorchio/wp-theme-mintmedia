<?php
// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown
add_action('init', function() {
    add_rewrite_rule('^/(.+)/?', 'index.php', 'top');
});
// Remove all default WP template redirects/lookups
remove_action('template_redirect', 'redirect_canonical');