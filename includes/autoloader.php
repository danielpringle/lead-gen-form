<?php
/**
 * Register plugin classes
 *
 * The autoloader registers plugin classes for later use.
 *
 * @package    WFRF_Core
 * @subpackage Includes
 * @category   Classes
 * @since      1.0.0
 */

namespace WFRF_Core;

// Restrict direct access.
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

/**
 * Class files
 *
 * Defines the class directory and file prefix.
 *
 * @since 1.0.0
 * @var   string Defines the class file path.
 */
define( 'AC_CLASS', AC_PATH . 'includes/classes/class-' );
define( 'AC_SC', AC_PATH . 'includes/shortcodes/sc-' );

/**
 * Array of classes to register
 *
 * @since 1.0.0
 * @var   array Defines an array of class files to register.
 */
define( 'AC_CLASSES', [
	__NAMESPACE__ . '\Classes\AssetVersioning'          	 => AC_CLASS . 'asset-versioning.php',
    __NAMESPACE__ . '\Classes\EnqueueAssets'            	 => AC_CLASS . 'enqueue-assets.php',
	__NAMESPACE__ . '\Shortcodes\SC_WF_Register_Journey'	     => AC_SC . 'wf-register-journey.php',
	__NAMESPACE__ . '\Classes\AdminPage'	     => AC_CLASS . 'admin-page.php',
] );



/**
 * Autoload class files
 *
 * @since  1.0.0
 * @access public
 * @return void
 */
spl_autoload_register(
	function ( string $class ) {
		if ( isset( AC_CLASSES[ $class ] ) ) {
			require AC_CLASSES[ $class ];
		}
	}
);