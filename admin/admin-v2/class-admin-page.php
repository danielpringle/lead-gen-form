<?php
//namespace WFRF_Core;
namespace WFRF_Core\Admin;
class AdminPage {

    private $page_title;
    public $menu_title = 'ABA';
    public $capability = 'manage_options';
    public $menu_slug = 'abba';
    public $function = 'ABA';
    public $icon_url = 'dashicons-welcome-widgets-menus';
    public $position = 99;

    /**
     * Admin_Page constructor.
     */
    // $page_title,
    // $menu_title,
    // $capability,
    // $menu_slug,
    // $function,
    // $icon_url,
    // $position
    public function __construct($page_title){

        $this->page_title = $page_title;
        // $this->menu_title = $menu_title;
        // $this->capability = $capability;
        // $this->menu_slug = $menu_slug;
        // $this->function = $function;
        // $this->icon_url = $icon_url;
        // $this->position = $position;  
        add_action( 'admin_menu', array( $this, 'add_toplevel_menu' ) );
    }  

    // add top-level administrative menu
    public function add_toplevel_menu() {
      
        add_menu_page(
            array( $this, 'get_page_title' ),
            $this->menu_title,
            $this->capability,
            $this->menu_slug,
            array( $this, 'render' ),
            $this->icon_url,
            $this->position,
        );
        
    }

    public function get_page_title() 
    {
        return $this->page_title;
    }

    function render() {
	
        // check if user is allowed access
        if ( ! current_user_can( 'manage_options' ) ) return;
        
        ?>
        
        <div class="wrap">
            <h1><?php echo esc_html( $this->page_title ); ?></h1>
            <form action="options.php" method="post">
                
                <?php
                
                // output security fields
                settings_fields( $this->menu_slug.'_options' );
                
                // output setting sections
                do_settings_sections( $this->menu_slug );
                
                // submit button
                //submit_button();
                submit_button( __( 'Save Options', 'text-domian' ) );
                
                ?>
                
            </form>
        </div>
        
        <?php
        
    }



}