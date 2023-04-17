<?php
/**
 * Plugin configuration
 *
 * Defines constants used throughout the plugin files.
 *
 * @package    WFRF_Core
 * @subpackage Configuration
 * @category   Core
 * @since      1.0.0
 */

namespace WFRF_Core;

// Restrict direct access.
if ( ! defined( 'ABSPATH' ) ) {
	die;
}


/**
 * Constant: Plugin folder path
 *
 * @since 1.0.0
 * @var   string The filesystem directory path (with trailing slash)
 *               for the plugin __FILE__ passed in.
 */
define( 'AC_PATH', plugin_dir_path( __FILE__ ) );

/**
 * Constant: Plugin folder URL
 *
 * @since 1.0.0
 * @var   string The URL directory path (with trailing slash)
 *               for the plugin __FILE__ passed in.
 */
define( 'AC_URL', plugin_dir_url(__FILE__ ) );

