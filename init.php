<?php
/**
 * Initialize plugin functionality
 *
 * Loads the text domain for translation and
 * instantiates various classes.
 *
 * @package    Plugin Template
 * @subpackage Init
 * @category   Core
 * @since      1.0.0
 */

namespace WFRF_Core;

// Alias namespaces.
use WFRF_Core\Classes as Classes;
use WFRF_Core\Shortcodes as Shortcodes;
use WFRF_Core\Admin as Admin;

// Restrict direct access.
if ( ! defined( 'ABSPATH' ) ) {
	die;
}





// Hook initialization functions.
add_action( 'plugins_loaded', __NAMESPACE__ . '\init' );
//add_action( 'plugins_loaded', __NAMESPACE__ . '\admin_init' );


/**
 * Initialization function
 *
 * Loads PHP classes and text domain.
 * Instantiates various classes.
 * Adds settings link in the plugin row.
 *
 * @since  1.0.0
 * @access public
 * @return void
 */
function init() {

	// Load plugin text domain.
	load_plugin_textdomain(
		'wf-register-form',
		false,
		dirname( AC_BASENAME ) . '/languages'
	);

	// If this is in the must-use plugins directory.
	load_muplugin_textdomain(
		'wf-register-form',
		dirname( AC_BASENAME ) . '/languages'
	);



	/**
	 * Class autoloader
	 *
	 * The autoloader registers plugin classes for later use,
	 * such as running new instances below.
	 */
	require_once AC_PATH . 'includes/autoloader.php';

	// Settings and core methods.
	new Classes\EnqueueAssets;
	new Shortcodes\SC_WF_Register_Journey;
}

/**
 * Admin initialization function
 *
 * Instantiates various classes.
 *
 * @since  1.0.0
 * @access public
 * @global $pagenow Get the current admin screen.
 * @return void
 */
function admin_init() {


	$customWPMenu = new Admin\AdminSettings( array(
		'slug' => 'wpmenu',
		'title' => 'WP Menu',
		'desc' => 'Settings for theme custom WordPress Menu',
		'icon' => 'dashicons-welcome-widgets-menus',
		'position' => 99,
	));



}

