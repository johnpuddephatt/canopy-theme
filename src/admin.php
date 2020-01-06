<?php

namespace App;

/**
 * Theme customizer
 */
add_action('customize_register', function (\WP_Customize_Manager $wp_customize) {
    // Add postMessage support
    $wp_customize->get_setting('blogname')->transport = 'postMessage';
    $wp_customize->selective_refresh->add_partial('blogname', [
        'selector' => '.brand',
        'render_callback' => function () {
            bloginfo('name');
        }
    ]);
});

/**
 * Customizer JS
 */
add_action('customize_preview_init', function () {
    wp_enqueue_script('sage/customizer.js', asset_path('scripts/customizer.js'), ['customize-preview'], null, true);
});

add_action( 'add_meta_boxes_page', function() {
  add_meta_box( 'page-colour-meta', 'Page colour', 'App\render_page_colour_meta', 'page', 'side', 'default' );
});

function render_page_colour_meta($post) {
  global $post;
  $values = get_post_custom( $post->ID );
  $selected = isset( $values['page_colour'] ) ? esc_attr( $values['page_colour'][0] ) : "";
  ?>
  <p>
    <label for="page_colour">Color</label>
    <select name="page_colour" id="page_colour">
        <option value="orange" <?php selected( $selected, 'orange' ); ?>>Orange</option>
        <option value="blue" <?php selected( $selected, 'blue' ); ?>>Blue</option>
        <option value="teal" <?php selected( $selected, 'teal' ); ?>>Teal</option>
        <option value="green" <?php selected( $selected, 'green' ); ?>>Green</option>
    </select>
  </p>
  <?php
}

add_action( 'save_post', 'App\save_page_colour_meta' );

function save_page_colour_meta( $post_id )
{
  // Bail if we're doing an auto save
  // if( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
  // if our nonce isn't there, or we can't verify it, bail
  // if( !isset( $_POST['meta_box_nonce'] ) || !wp_verify_nonce( $_POST['meta_box_nonce'], 'my_meta_box_nonce' ) ) return;
  // if our current user can't edit this post, bail
  // if( !current_user_can( 'edit_post' ) ) return;
  if( isset( $_POST['page_colour'] ) )
    update_post_meta( $post_id, 'page_colour', esc_attr( $_POST['page_colour'] ) );
}

  add_filter( 'body_class', function( $classes ) {
    global $post;
    if (!is_front_page() && $post ) {
      $post_custom = get_post_custom( $post->ID );
      if($post_custom) {
        $page_colour = isset( $post_custom['page_colour'] ) ? "page-colour-" . esc_attr( get_post_custom( $post->ID )['page_colour'][0] ) : "";
      }
      else {
        $page_colour = '';
      }
    }
    else {
      $page_colour = '';
    }
    return array_merge( $classes, array( $page_colour ) );
  });
