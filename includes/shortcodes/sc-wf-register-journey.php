<?php
/**
 * Displays Display the People post types
 * Usage: [az_people]
 * [az_people display="executive-team"]
 * [az_people display="executive-team", show-category-title ="true"]
 * [az_people show-category-title ="true"]
 * [az_people display="module"]
 * [az_people display="module" col="4"]
 */
namespace WFRF_Core\Shortcodes;

class SC_WF_Register_Journey {

    public function __construct(){

        add_shortcode( 'wf_register_journey', array($this,'wf_register_journey_cb') );
        add_action( 'wp_enqueue_scripts', [ $this, 'enqueue' ] );
    }


    public function enqueue() {

        wp_enqueue_script(
            'wf-register-journey',
            AC_URL . 'assets/js/wf-register-journey.js',
            [],
            filemtime(AC_PATH . 'assets/js/wf-register-journey.js'),
            true, 
        );
    }

        /**
     * Callback function
     */
    public function wf_register_journey_cb($atts) {

        // Card atts
        $attributes = shortcode_atts(
            array(
               'display' => '',
               'show-category-title' => 'false',
               'col' => '3',
             ), 
            $atts
        );

                // Grab the html for the card
                //include AC_PATH . 'includes/partials/card.php';

        $t1_btn_1_value = 'Freelance';
        $t1_btn_2_value = 'Big Business';
        $t1_btn_3_value = 'Really Realy Big Business';
        $t1_btn_4_value = 'Other';

        $output = '';


        $output .= '<div class="abutton">';
        $output .= '<input type="radio" id="a25" name="check-substitution-2" />';
        $output .= '<label class="btn btn-default" for="a25">Læg i kurv</label>';
        $output .= '</div>';



        $output .= '<div class="wfjf-container">';

        // Tier One

        $output .= '<div class="wfjf-tier-one-title-area">';
        
        $output .= '<div class="wfjf--title-container">';
        $output .= '<h1>Tier One</h1>';
        $output .= '<h1>Some blurb here</h1>';
        $output .= '</div>';
        $output .= '</div>';

        $output .= '<div class="wfjr-radio-as-buttons">';

        $output .= '<input type="radio" id="wfjf-t1-btn-1" name="wfrj-tier-one-radios" data-box="wfjf-tier-1--section-a" value="'.$t1_btn_1_value.'">';
        $output .= '<label for="wfjf-t1-btn-1">'.$t1_btn_1_value.'</label>';

        $output .= '<input type="radio" id="wfjf-t1-btn-2" name="wfrj-tier-one-radios" data-box="wfjf-tier-1--section-b" value="'.$t1_btn_2_value.'">';
        $output .= '<label for="wfjf-t1-btn-2">'.$t1_btn_2_value.'</label>';

        $output .= '<input type="radio" id="wfjf-t1-btn-3" name="wfrj-tier-one-radios" data-box="wfjf-tier-1--section-c" value="'.$t1_btn_3_value.'">';
        $output .= '<label for="wfjf-t1-btn-3">'.$t1_btn_3_value.'</label>';

        $output .= '<input type="radio" id="wfjf-t1-btn-4" name="wfrj-tier-one-radios" data-box="wfjf-tier-1--section-c" value="'.$t1_btn_4_value.'">';
        $output .= '<label for="wfjf-t1-btn-4">'.$t1_btn_4_value.'</label>';

        $output .= '</div>';


        // Tier Two
        $output .= '<div id="wfjf-tier-1">';
        // Section A
        
        $output .= '<div id="wfjf-tier-1--section-a" class="wfjf-tier-1 wfjf-tier-1--section-a tier-2-hidden" >';
        $output .= '<h2>Section A</h2>';

        $output .= '<div class="wfjr-radio-as-buttons">';
        $output .= '<input type="radio" id="t2sa1" name="tier-two-radios" data-box="wfjf-tier-1--section-c" value="orange">';
        $output .= '<label for="t2sa1">Orange</label>';

        $output .= '<input type="radio" id="t2sa2" name="tier-two-radios" data-box="wfjf-tier-1--section-c" value="orange">';
        $output .= '<label for="t2sa2">Orange</label>';
        $output .= '</div>'; //.container

        $output .= '</div>'; //.container 

        // Section B
        $output .= '<div id="wfjf-tier-1--section-b" class="wfjf-tier-1 wfjf-tier-1--section-b tier-2-hidden" >';
        $output .= '<h2>Section B</h2>';
        $output .= '<div class="wfjr-radio-as-buttons">';
        $output .= '<input type="radio" id="t2sb1" name="tier-two-radios" data-box="wfjf-tier-1--section-c" value="orange">';
        $output .= '<label for="t2sb1">Orange</label>';

        $output .= '<input type="radio" id="t2sb2" name="tier-two-radios" data-box="wfjf-tier-1--section-c" value="orange">';
        $output .= '<label for="t2sb2">Orange</label>';
        $output .= '</div>'; //.container
        
        $output .= '</div>'; //.container
        // Section C
        $output .= '<div id="wfjf-tier-1--section-c" class="wfjf-tier-1 wfjf-tier-1--section-c tier-2-hidden" >';
        $output .= '<h2>Section C</h2>';
        $output .= '<div class="wfjr-radio-as-buttons">';
        $output .= '<input type="radio" id="t2sc1" name="tier-two-radios" data-box="wfjf-tier-1--section-c" value="orange">';
        $output .= '<label for="t2sc1">Orange</label>';

        $output .= '<input type="radio" id="t2sc2" name="tier-two-radios" data-box="wfjf-tier-1--section-c" value="orange">';
        $output .= '<label for="t2sc2">Orange</label>';
        $output .= '</div>'; //.container
        $output .= '</div>'; //.container

        $output .= '</div>'; //.container 

        // Tier Three
        $output .= '<div id="wfrj-tier-3" class="wfrj-tier-3 tier-3-hidden">'; //.container 
        $output .= '<ul class="wfrj-tier-3-list is-radio-btn">';
        $output .= '<li class="wfrj-tier-3-item">';
        $output .= '<input type="radio" id="f-option" name="tier-three-radios" data-box="wfrj-tier-4-register">';
        $output .= '<label for="f-option">In Depth Knowledge</label>';
        $output .= '</li>';
        $output .= '<li class="slider-item">';
        $output .= '<input type="radio" id="g-option" name="tier-three-radios" data-box="wfrj-tier-4-register">';
        $output .= '<label for="g-option">Exellence & Education</label>';
        $output .= '</li>';
        $output .= '<li class="slider-item">';
        $output .= '<input type="radio" id="k-option" name="tier-three-radios" data-box="wfrj-tier-4-contact">';
        $output .= '<label for="k-option">In Depth Knowledge</label>';
        $output .= '</li>';
        $output .= '<li class="slider-item">';
        $output .= '<input type="radio" id="k-option" name="tier-three-radios" data-box="wfrj-tier-4-contact">';
        $output .= '<label for="k-option">In Depth Knowledge</label>';
        $output .= '</li>';        
        $output .= '<li class="slider-item">';
        $output .= '<input type="radio" id="k-option" name="tier-three-radios" data-box="wfrj-tier-4-contact">';
        $output .= '<label for="k-option">In Depth Knowledge</label>';
        $output .= '</li>';
        $output .= '</ul>';
        $output .= '</div>'; //.container 

        // Tier Four
        $output .= '<div id="wfrj-tier-4-register" class="wfrj-tier-4 tier-4-hidden">'; //.container
        $output .= '<h2>Tier Four A</h2>';
        $output .= '</div>'; //.container
        
        $output .= '<div id="wfrj-tier-4-contact" class="wfrj-tier-4 tier-4-hidden">'; //.container
        $output .= '<h2>Tier Four B</h2>';
        $output .= '</div>'; //.container

        $output .= '</div>'; //.wfjf-container
        return $output;
    }



}


