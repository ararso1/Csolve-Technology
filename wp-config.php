<?php
/**
 * The base configuration for WordPress
 *
 * Loads secrets from .env when present (local or cPanel).
 * Copy .env.example → .env and fill values. Never commit .env.
 *
 * @package WordPress
 */

/** Load .env from this directory (simple KEY=VALUE parser). */
$env_file = __DIR__ . '/.env';
if ( is_readable( $env_file ) ) {
	$lines = file( $env_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES );
	foreach ( $lines as $line ) {
		$line = trim( $line );
		if ( $line === '' || $line[0] === '#' || strpos( $line, '=' ) === false ) {
			continue;
		}
		list( $name, $value ) = explode( '=', $line, 2 );
		$name  = trim( $name );
		$value = trim( $value );
		$value = trim( $value, "\"'" );
		if ( $name !== '' && getenv( $name ) === false ) {
			putenv( "{$name}={$value}" );
			$_ENV[ $name ]    = $value;
			$_SERVER[ $name ] = $value;
		}
	}
}

if ( ! function_exists( 'csolvetech_env' ) ) {
	/**
	 * @param string $key
	 * @param mixed  $default
	 * @return mixed
	 */
	function csolvetech_env( $key, $default = null ) {
		$val = getenv( $key );
		if ( $val === false || $val === null || $val === '' ) {
			return $default;
		}
		$lower = strtolower( (string) $val );
		if ( in_array( $lower, array( 'true', 'false' ), true ) ) {
			return $lower === 'true';
		}
		return $val;
	}
}

// ** Database settings ** //
define( 'DB_NAME', csolvetech_env( 'DB_NAME', 'csolve' ) );
define( 'DB_USER', csolvetech_env( 'DB_USER', 'root' ) );
define( 'DB_PASSWORD', csolvetech_env( 'DB_PASSWORD', '' ) );
define( 'DB_HOST', csolvetech_env( 'DB_HOST', 'localhost' ) );
define( 'DB_CHARSET', 'utf8' );
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 * @since 2.6.0
 */
define( 'AUTH_KEY', '&*OU[&2#0T*2RU!8V_#-5q7La7Y|*5QN2S12/rtg5axy_T6+R9&&kNR#&o6x5:]h' );
define( 'SECURE_AUTH_KEY', 'o2i08b-T8oOGXNp|IeGp)9Q4[N5[Rpr-r8/[O/7TorJX9o2Qsz10SnZ7]!_s|941' );
define( 'LOGGED_IN_KEY', '/d+6Q:)(/R:1zO%W0hB67dztQ971[M;87loVTi8:we176qc51A8!Y18-|7PlK)[Q' );
define( 'NONCE_KEY', 'q(Z#U*RvnDC@d_8-iY0FG&y!N0/8Qfs-h4xI+!4|Cx*3~@1w7Ov(4:j8%7L3679o' );
define( 'AUTH_SALT', 'nW/:sQ%h;&8KPP8]AKesn5I+1-tw*847g*/!QwtI0-EU:|(D9:2ym@|2O_4Ym+09' );
define( 'SECURE_AUTH_SALT', '&mK5QMOhN*27zK9a2psU*E;JuFLUKn9deELV9*z&75Y~0%_zqIe%A5)+qvIz8SIO' );
define( 'LOGGED_IN_SALT', 'Rb68YgT91d6Lzm6;|7&@+5ZQRre~n6#6RZ0/46McY1T96GBY]Ch#kplu/&]k1%:v' );
define( 'NONCE_SALT', '0;Od&29n(|Y3/~]Ms-065t~:63xD_A5wiGhO9:g8Qu8|X7)YA2d+A:NyXAp95Oy!' );
/**#@-*/

$table_prefix = csolvetech_env( 'TABLE_PREFIX', 'qPpq8_' );

/* Add any custom values between this line and the "stop editing" line. */

define( 'WP_HOME', csolvetech_env( 'WP_HOME', 'http://localhost/csolvetechnology' ) );
define( 'WP_SITEURL', csolvetech_env( 'WP_SITEURL', 'http://localhost/csolvetechnology' ) );
define( 'WP_ALLOW_MULTISITE', true );

if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', (bool) csolvetech_env( 'WP_DEBUG', false ) );
}
define( 'WP_DEBUG_LOG', (bool) csolvetech_env( 'WP_DEBUG_LOG', false ) );
define( 'WP_DEBUG_DISPLAY', (bool) csolvetech_env( 'WP_DEBUG_DISPLAY', false ) );
@ini_set( 'display_errors', 0 );

define( 'WPFC_CLEAR_CACHE_AFTER_THEME_UPDATE', true );
define( 'WP_MEMORY_LIMIT', '768M' );
define( 'WP_MAX_MEMORY_LIMIT', '768M' );

define( 'WPFC_CLEAR_CACHE_AFTER_PLUGIN_UPDATE', true );
define( 'SURECART_ENCRYPTION_KEY', '/d+6Q:)(/R:1zO%W0hB67dztQ971[M;87loVTi8:we176qc51A8!Y18-|7PlK)[Q' );
define( 'DUPLICATOR_AUTH_KEY', 't0p*6|aedZ9WSXAxYy<lydi&H5i46~K&}?}N~Tz(5=:q]EHvJEWO7sm*~_0s&)#N' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
