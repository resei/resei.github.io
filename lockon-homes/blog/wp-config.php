<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'lockonho_wp534');

/** MySQL database username */
define('DB_USER', 'lockonho_wp534');

/** MySQL database password */
define('DB_PASSWORD', 'k0)[48SIP3');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'yn6gweoyr7jc5cbn2mrs0ikhz9mu7f0f7p3xwngtmdmh8xeurhuqvecnx6dndajx');
define('SECURE_AUTH_KEY',  'gxxdwkugjnqanmqatuhybuqcat2mbz1fkzqasqfns0girlslapgot5falnndz8dm');
define('LOGGED_IN_KEY',    'mwflkhygbfq5vgv5fkbcvtpxnqax8tunfih90fzxpg2haaqjwhzg07e5sofiqyn6');
define('NONCE_KEY',        'terx413gje8zkn2pyxetm0i0vji7q1lwddwnvnlwjojmvhl5osq9i3hvw9mdrxky');
define('AUTH_SALT',        'sj3ma0lvvagkzjzdwqvaysix9l0ybwpvor4wiq0aem3gz1tomivq9hlbknjeh5gk');
define('SECURE_AUTH_SALT', 't50yzoftlx366a9sffl78dfzpstrxtcadeqgtywnj92pk5qpodrc0kbg5nnldxro');
define('LOGGED_IN_SALT',   'o6awdn5nmtowi217q7d7ch1py16jucfftykmshkbvrhzja09wu3xjlh36qjiuzc4');
define('NONCE_SALT',       'uni3wvsjmklp4tz1bldmmz7uhng09bqfsjyfxmivslc8boodldvqszdqucy8awdo');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_lockon';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
