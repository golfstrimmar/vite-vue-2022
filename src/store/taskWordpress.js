export const useWordpress = {
  dataWordpress: [
    [
      { title: "Common" },
      {
        dataText: `https://github.com/golfstrimmar/library/tree/master/%D0%B1%D0%B8%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0%20%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE%D0%B2/wordpress`,
        description: "",
      },
      {
        dataText: `functions.php
        <?php
/**
 * dub functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package dub
 */

if (!defined('_S_VERSION')) {
	// Replace the version number of the theme on each release.
	define('_S_VERSION', '1.0.0');
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function dub_setup()
{
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on dub, use a find and replace
	 * to change 'dub' to the name of your theme in all the template files.
	 */
	load_theme_textdomain('dub', get_template_directory() . '/languages');

	// Add default posts and comments RSS feed links to head.
	add_theme_support('automatic-feed-links');

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support('title-tag');

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support('post-thumbnails');

	// This theme uses wp_nav_menu() in one location.
	// register_nav_menus(
	// 	array(
	// 		'menu-1' => esc_html__( 'Primary', 'dub' ),
	// 	)
	// );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'dub_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support('customize-selective-refresh-widgets');

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height' => 250,
			'width' => 250,
			'flex-width' => true,
			'flex-height' => true,
		)
	);

}
add_action('after_setup_theme', 'dub_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function dub_content_width()
{
	$GLOBALS['content_width'] = apply_filters('dub_content_width', 640);
}
add_action('after_setup_theme', 'dub_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */



function dub_widgets_init()
{
	register_sidebar(array(
		'name' => 'Sidebar dub',
		'id' => 'sidebar-dub',
		'before_widget' => '<div>',
		'after_widget' => '</div>',
		'before_title' => '<h2>',
		'after_title' => '</h2>',
	));
}
add_action('widgets_init', 'dub_widgets_init');
/**
 * Enqueue scripts and styles.

*function dub_scripts() {
*	wp_enqueue_style( 'dub-style', get_stylesheet_uri(), array(), _S_VERSION );
*	wp_style_add_data( 'dub-style', 'rtl', 'replace' );

*	wp_enqueue_script( 'dub-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

*	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
*		wp_enqueue_script( 'comment-reply' );
*	}
*}
*add_action( 'wp_enqueue_scripts', 'dub_scripts' );
 */
/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
	require get_template_directory() . '/inc/jetpack.php';
}

// -------------admin_bar---------------
add_filter('show_admin_bar', '__return_false');
// -------------menus---------------
require get_template_directory() . '/includes/register-menus.php';

// -------------style-script---------------
require get_template_directory() . '/includes/enqueue-style-script.php';

//------acf---------
require get_template_directory() . '/includes/acf-options.php';

// -----пользовательские поля--------
require get_template_directory() . '/includes/reg-post-type.php';

// function dequeue_jquery() {
//     wp_deregister_script( 'jquery' );
// }
// add_action( 'wp_enqueue_scripts', 'dequeue_jquery' );
function custom_scripts()
{
	?>
	<script>
		document.addEventListener('wpcf7submit', function (event) {
			let successMessage = [...document.querySelectorAll('.wpcf7-response-output')];
			if (successMessage.length > 0) {
				successMessage.forEach(car => { car.style.display = "grid"; });
			}
		}, false);

		document.addEventListener('wpcf7mailsent', function (event) {
			let bodyMessage = document.querySelector('body');
			bodyMessage.classList.add("lock");

			setTimeout(() => {
				let successMessage = [...document.querySelectorAll('.wpcf7-response-output')];
				if (successMessage.length > 0) {
					successMessage.forEach(car => { car.style.display = "none"; });
					bodyMessage.classList.remove("lock");
				}
			}, 4000);
		}, false);

		document.addEventListener('DOMContentLoaded', function () {
			window.addEventListener('resize', function () {
				if (window.innerWidth >= 1510) {
					document.querySelector('body').classList.remove("lock");
				}
			});
		});

	</script>
	<?php
}
add_action('wp_footer', 'custom_scripts');


// Disables the block editor from managing widgets in the Gutenberg plugin.
add_filter('gutenberg_use_widgets_block_editor', '__return_false');
// Disables the block editor from managing widgets.
add_filter('use_widgets_block_editor', '__return_false');
`,
        description: "вставка шорткода",
      },
      {
        dataText: `вставка шорткода
        <?php echo do_shortcode( '[...]' ); ?>`,
        description: "вставка шорткода",
      },
      {
        dataText: `показать-скрыть админпанель
        add_filter('show_admin_bar', '__return_false');`,
        description: "показать-скрыть админпанель",
      },
      {
        dataText: `<?php get_template_part('./includes/bunner-slider') ?>  `,
        description: " ",
      },
      {
        dataText: `<?php if (get_the_ID() !== get_page_by_path("about")->ID) { ?>
<?php }?>`,
        description: "если страница не about",
      },
      {
        dataText: `if (strpos($post_slug, 'houses') !== false) {
        $category = 'houses';}`,
        description:
          "Чтобы написать условие в PHP, которое проверяет, содержит ли slug страницы слово 'houses',",
      },
      {
        dataText: `add_filter('gutenberg_use_widgets_block_editor', '__return_false');
add_filter('use_widgets_block_editor', '__return_false');`,
        description: "востанавливает обычную страницу виджетов",
      },
      {
        dataText: `//add category string
function setup_filter_query_vars( $query_vars ) {
$query_vars[] = 'phone';
return $query_vars;
}
add_filter( 'query_vars', 'setup_filter_query_vars' );
function add_my_endpoint() {
add_rewrite_endpoint( 'phone', EP_PAGES ); //ендпоинт 'phone' на всех индивидуальных страниц
}
add_action( 'init', 'add_my_endpoint' );
//использование
$parent_category = get_query_var( 'phone' );`,
        description:
          "как задать глобальную переменную и использовать ее на всем сайте",
      },
      {
        dataText: `<?php echo get_the_title(); ?>`,
        description: "заголовок страницы",
      },
    ],
    [
      { title: "Вывод" },
      {
        dataText: `<?php
global $post;
$args = array(
    'posts_per_page' => 30,
    'post_type' => 'post',
);
$query = new WP_Query($args);

if ( $query->have_posts() ) {
	while ( $query->have_posts() ) {
		$query->the_post();
?>

<?php the_ID(); ?>
<?php the_permalink(); ?>
<?php post_class(); ?>
<?php the_content();?> 
<?php the_date(); ?> 
<?php the_title(); ?> 
<?php the_excerpt(); ?> 
<?php the_post_thumbnail(); ?> 
<?php next_posts_link(); ?>
<?php previous_posts_link(); ?>


<li class="blog__card  blog-card">
              <div class="blog-card__img rel">
                <div class="imgs">
                 <?php the_post_thumbnail(); ?>
                </div>
              </div>
              <div class="blog-card__low">
                <h3><?php the_title(); ?></h3>
                <p class="blog-card__text"> <?php the_content();?></p>
                
                <a class="btn-empty btn" href="<?the_permalink()?>">Learn more
                  <svg>
                    <use xlink:href="#chevron-right"></use>
                  </svg>
                </a>
              </div>
  </li>
		<?php
	}
} else {
	echo "<h2>No posts found</h2>";
}
wp_reset_postdata(); 
?>
`,
        description: "стандартныцй цикл вывода всех записей ",
      },
      {
        dataText: `<?php  if (get_page_by_path("services")->ID == get_the_ID()) {   ?>
<?php get_template_part('./includes/paq') ?>
<?php } ?>
<?php endif; ?>`,
        description:
          "если нужно вывести что-то только на одной странице по слагу страницы",
      },
      {
        dataText: `<ul class="blog__body look__container">

        <?php
     
        $post_slug = get_post_field('post_name', get_the_ID());
        if (strpos($post_slug, 'sale') !== false) {
          $tag = 'sale';

        } else if (strpos($post_slug, 'rent') !== false) {
          $tag = 'rent';
        }

        if (strpos($post_slug, 'houses') !== false) {
          $category = 'houses';

        } else if (strpos($post_slug, 'villas') !== false) {
          $category = 'villas';
        }

        
        $page_title = get_the_title();
        $args = array(
          'post_type' => 'post',
          'posts_per_page' => -1,
          'tax_query' => array(
            'relation' => 'AND',
            array(
              'taxonomy' => 'category',
              'field' => 'slug',
              'terms' => $category
            ),
            array(
              'taxonomy' => 'post_tag',
              'field' => 'slug',
              'terms' => $tag
            )
          )
        );
        $query = new WP_Query($args);

        if ($query->have_posts()) {
          while ($query->have_posts()) {
            $query->the_post(); ?>
            <li class="blog__card blog-card">
              <div class="blog-card__img rel">
                <div class="imgs">
                  <?php the_post_thumbnail(); ?>
                </div>
              </div>
              <div class="blog-card__low">
                <h3><?php the_title(); ?> </h3>
                <p class="blog-card__text"><?php the_content(); ?> </p>
                <a class="btn-empty btn" href="<?php the_permalink(); ?>">
                  Learn more
                  <svg>
                    <use xlink:href="#chevron-right"></use>
                  </svg>
                </a>
              </div>
            </li>
            <?php
          }
          wp_reset_postdata();
        }
        ?>

      </ul>`,
        description: "выбираем по тэгу и категории",
      },
      {
        dataText: `<?php
if (have_posts()):
    while (have_posts()):
        the_post();

        // Проверяем, есть ли у поста тег "best"
        if (has_tag('best')): ?>
            <li class="blog__card blog-card">
                <div class="blog-card__img rel">
                    <div class="imgs">
                        <?php the_post_thumbnail(); ?>
                    </div>
                </div>
                <div class="blog-card__low">
                    <h3><?php the_title(); ?></h3>
                    <p class="blog-card__text">
                        <?php the_content(); ?>
                    </p>
                    <a class="btn-empty btn" href="<?php the_permalink(); ?>">Learn more
                        <svg>
                            <use xlink:href="#chevron-right"></use>
                        </svg>
                    </a>
                </div>
            </li>
        <?php endif;

    endwhile;
    the_posts_navigation();
else:
    get_template_part('template-parts/content', 'none');
endif;
?>`,
        description: "выбираем по тэгу best (страница категории)",
      },
      {
        dataText: `<?php if ( is_active_sidebar( 'sidebar-header' ) ) : ?>
<div id="sidebar-header">
  <?php dynamic_sidebar( 'sidebar-header' ); ?>
</div>
<?php endif; ?>`,
        description: "вывод сайтбара",
      },
      {
        dataText: `<?php
$post_slug = get_post_field('post_name', get_the_ID());
if (strpos($post_slug, 'sell') !== false) {
    $tag = 'sell';
} else if (strpos($post_slug, 'rent') !== false){
   $tag = 'rent';
}
<?php endif; ?>`,
        description:
          "если нужно вывести что-то только на одной странице по слагу страницы",
      },
      {
        dataText: `поле ввода телефона по маске в contact form 7
https://www.youtube.com/watch?v=00cV8FbGnjo&ab_channel=InwebPress-отлендингадоинтернетмагазина
скачать плагин и установить https://ru.wordpress.org/plugins/cf7-phone-mask-field/
открыть соответствующую фориу в админке. найти новое поле "маска ввода"
заполнить и заменить в соответствующем месте формы или если не было телефона---добавить именно такой шорткод(маска ввода)
`,
        description: "поле ввода телефона по маске",
      },
    ],
    [
      { title: "ACF" },
      {
        dataText: `<?php
$file = get_field('look__text');
if( $file ): ?>
<?php echo $file; ?>
<?php endif; ?>`,
        description: "вывод поля",
      },
      {
        dataText: `<video class="player-1" id="player-1" playsinline="" controls=""   data-poster="assets/img/paralax.jpg">
<source src="
<?php
$file = get_field('home-video');
if( $file ): ?>
<?php echo $file['url']; ?>
<?php endif; ?>
" type="video/mp4" />
</video>`,
        description: "вывод  видео из медиатеки",
      },
      {
        dataText: `<div class="imgs">
                    <img src="
<?php
$file = get_field('look__img2');
if( $file ): ?>
<?php echo $file['url']; ?>
<?php endif; ?>
" alt="img" />
</div>`,
        description: "вывод картинок из медиатеки",
      },
      { dataText: ``, description: "" },
      { dataText: ``, description: "" },
      { dataText: ``, description: "" },
    ],
    [
      { title: "МЕНЮ" },
      {
        dataText: `wp_nav_menu( [
'menu' => '',
'theme_location' => '',
'container' => 'div',
'container_class' => '',
'container_id' => '',
'menu_class' => 'menu',
'menu_id' => '',
'echo' => true,
'fallback_cb' => 'wp_page_menu',
'before' => '',
'after' => '',
'link_before' => '',
'link_after' => '',
'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
'depth' => 0,
'walker' => '',
] );`,
        description:
          "все аргументы на сайте cama https://wp-kama.ru/function/wp_nav_menu",
      },
      {
        dataText: `---в functions.php---
        // -------------menus---------------
require get_template_directory() . '/includes/register-menus.php';
       --- в файле register-menu.php---
        <?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
} 
//---------------- регистрация меню----------------
register_nav_menus(
array(
'header-menu' => esc_html__( 'header-menu', 'header-menu' ),
'test-menu' => esc_html__( 'test-menu', 'test-menu' ),
)
);`,
        description: "регистрация меню в файле register-menu.php",
      },
      {
        dataText: `вывести меню
при верстке меню нужно учитывать, что wp оборачивает меню в контейнер сам. даже если не указать обертку.
поэтому меню всегда должно иметь свою обертку и потом уже внутри делать ul с классом меню.

===================================================================================
Например было так
<div class="site_menu">
<ul id="sdt_menu" class="sdt_menu ">
  <li>
    <a href="#"></a>
  </li>
  <li>
    <a href="#"></a>
  </li>
  <li>
    <a href="#"></a>
  </li>
</ul>
</div>


если прописать такое меню
register_nav_menus(
array(
'Header_menu' => esc_html__( 'Header_menu', 'port' ),
)
);

потом вывести меню

<div class="site_menu">
  <?php wp_nav_menu([
  'theme_location' => 'Header_menu',
	'container'       => null, 
  'menu_class'      => 'sdt_menu ',
  'menu_id' => 'sdt_menu',
  'echo' => true
])?>
</div>


то на сайте выйдет

<div class="site_menu">
  <ul id="sdt_menu" class="sdt_menu ">
    <li
      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-99">
      <a href="http://yushinbox.zzz.com.ua/portfolio/" aria-current="page">Главная</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100"><a
        href="http://yushinbox.zzz.com.ua/portfolio/jk-park/">JK-park</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-101"><a
        href="http://yushinbox.zzz.com.ua/portfolio/blog/">Блог</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-102"><a
        href="http://yushinbox.zzz.com.ua/portfolio/kontakty/">Контакты</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-103"><a
        href="http://yushinbox.zzz.com.ua/portfolio/nedavnie-prekty/">Недавние проекты</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-104"><a
        href="http://yushinbox.zzz.com.ua/portfolio/obo-mne/">Обо мне</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-105"><a
        href="http://yushinbox.zzz.com.ua/portfolio/sajt-j-uno/">Сайт J-Uno</a></li>
  </ul>
</div>

то есть wp сформировал div с class="sdt_menu " и id="sdt_menu" на автомате сдалал ul и li/ но не создал сам конттейнер

--------------------------------------
если вывести так-- без <div class="site_menu"></div>

<?php wp_nav_menu([
  'theme_location' => 'Header_menu',
	'menu'            => 'Header_menu', 
  'container'       => 'div',                  <----------если написать nav то контейнер будет nav 
  'container_class' => 'site_menu',
	'menu_class'      => 'sdt_menu', 
  'menu_id' => 'sdt_menu',
	'echo'            => true,
	'depth'           => 0,
])?>

на сайте выйдет так

<div class="site_menu">
  <ul id="sdt_menu" class="sdt_menu">
    <li
      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-99">
      <a href="http://yushinbox.zzz.com.ua/portfolio/" aria-current="page">Главная</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100"><a
        href="http://yushinbox.zzz.com.ua/portfolio/jk-park/">JK-park</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-101"><a
        href="http://yushinbox.zzz.com.ua/portfolio/blog/">Блог</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-102"><a
        href="http://yushinbox.zzz.com.ua/portfolio/kontakty/">Контакты</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-103"><a
        href="http://yushinbox.zzz.com.ua/portfolio/nedavnie-prekty/">Недавние проекты</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-104"><a
        href="http://yushinbox.zzz.com.ua/portfolio/obo-mne/">Обо мне</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-105"><a
        href="http://yushinbox.zzz.com.ua/portfolio/sajt-j-uno/">Сайт J-Uno</a></li>
  </ul>
</div>
то есть это одно и то же!!!
------------------------------------
если вывести так-- без <div class="site_menu"></div>

<?php wp_nav_menu([
  'theme_location' => 'Header_menu',
	'menu'            => 'Header_menu', 
	'menu_class'      => 'sdt_menu', 
  'menu_id' => 'sdt_menu',
	'echo'            => true,
	'depth'           => 0,
])?>


то на сайте будет так

<div class="menu-menu-1-container">
  <ul id="sdt_menu" class="sdt_menu">
    <li
      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-99">
      <a href="http://yushinbox.zzz.com.ua/portfolio/" aria-current="page">Главная</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-100"><a
        href="http://yushinbox.zzz.com.ua/portfolio/jk-park/">JK-park</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-101"><a
        href="http://yushinbox.zzz.com.ua/portfolio/blog/">Блог</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-102"><a
        href="http://yushinbox.zzz.com.ua/portfolio/kontakty/">Контакты</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-103"><a
        href="http://yushinbox.zzz.com.ua/portfolio/nedavnie-prekty/">Недавние проекты</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-104"><a
        href="http://yushinbox.zzz.com.ua/portfolio/obo-mne/">Обо мне</a></li>
    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-105"><a
        href="http://yushinbox.zzz.com.ua/portfolio/sajt-j-uno/">Сайт J-Uno</a></li>
  </ul>
</div>

то есть wp сам сформировал контейнер по умолчанию и присвоил ему какой-то свой класс

-----------------// этот код добавляет ссылкам меню нужные классы. иначе к ссыкам не подобраться.

---здесь если меню одно на сайте и ссылки везде одинаковые

function add_menuclass($ulclass) {
return preg_replace('/<a /', '<a class="menu__link animation-letters"' , $ulclass); }
  add_filter('wp_nav_menu','add_menuclass');


  
--здесь если в разных меню разные классы для ссылок--

function my_walker_nav_menu_start_el($item_output, $item, $depth, $args) {
$menu_locations = get_nav_menu_locations();
if ( has_term($menu_locations['menu-header'], 'nav_menu', $item) ) {
$item_output = preg_replace('/<a /', '<a class="menu__link animation-letters" ' , $item_output, 1); } if (
  has_term($menu_locations['menu-header-white'], 'nav_menu' , $item) ) { $item_output=preg_replace('/<a
  /', '<a class="menu__link menu__link_black animation-letters" ' , $item_output, 1); } return $item_output; }
  add_filter('walker_nav_menu_start_el', 'my_walker_nav_menu_start_el' , 10, 4);


для вывода меню.при этом чтобы вывелись классы меню их нужно специально прописать в поле админки
а именно нажать на плашку страницы и раскроются настройки. выбрать классы меню и добавить класс пункта menu

--самы простой способ вывода
<?php wp_nav_menu([
        'theme_location' => 'menu_main_header',
	'container'       => null, 
	'menu_class'      => 'header-page__ul', 
])?>

---сложнее
<?php wp_nav_menu([
        'theme_location' => 'menu-header',
	'menu'            => 'menu-header', 
	'container'       => 'nav', 
	'container_class' => 'header__menu', 
	// 'container_id'    => '',
	'menu_class'      => 'menu__body', 
	'menu_id'         => '',
	'echo'            => true,
  'items_wrap'      => '<ul class="menu__body">
               %3$s
                  </ul>',
	'depth'           => 0,
	// 'walker'          => '',
])?>




// ------------это walker для поддержки описания пункта меню.
этот код добавляется в functions.php а потом в вывод меню добавляется строка 
'walker' => new Description_Walker()
после этого можно в админке при формировании меню добавить еще и описание .
--------------------------------
/**
* Create HTML list of nav menu items.
* Replacement for the native Walker, using the description.
*
* @see https://wordpress.stackexchange.com/q/14037/
* @author fuxia
*/
class Description_Walker extends Walker_Nav_Menu
{
/**
* Start the element output.
*
* @param string $output Passed by reference. Used to append additional content.
* @param object $item Menu item data object.
* @param int $depth Depth of menu item. May be used for padding.
* @param array|object $args Additional strings. Actually always an
instance of stdClass. But this is WordPress.
* @return void
*/
function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 )
{
$classes = empty ( $item->classes ) ? array () : (array) $item->classes;

$class_names = join(
' '
, apply_filters(
'nav_menu_css_class'
, array_filter( $classes ), $item
)
);

! empty ( $class_names )
and $class_names = ' class="'. esc_attr( $class_names ) . '"';

$output .= "<li id='menu-item-$item->ID' $class_names>";

  $attributes = '';

  ! empty( $item->attr_title )
  and $attributes .= ' title="' . esc_attr( $item->attr_title ) .'"';
  ! empty( $item->target )
  and $attributes .= ' target="' . esc_attr( $item->target ) .'"';
  ! empty( $item->xfn )
  and $attributes .= ' rel="' . esc_attr( $item->xfn ) .'"';
  ! empty( $item->url )
  and $attributes .= ' href="' . esc_attr( $item->url ) .'"';

  // insert description for top level elements only
  // you may change this
  $description = ( ! empty ( $item->description ) and 0 == $depth )
  ? '<small class="nav_desc">' . esc_attr( $item->description ) . '</small>' : '';

  $title = apply_filters( 'the_title', $item->title, $item->ID );

  $item_output = $args->before
  . "<a $attributes>"
    . $args->link_before
    . $title
    . '</a> '
  . $args->link_after
  . $description
  . $args->after;

  // Since $output is called by reference we don't need to return anything.
  $output .= apply_filters(
  'walker_nav_menu_start_el'
  , $item_output
  , $item
  , $depth
  , $args
  );
  }
  }`,
        description: "вывести меню",
      },
    ],
    [
      { title: "кастомные поля" },

      {
        dataText: `регистрация кастомных полей в отдельном файле.
        потом добавитть в functions.php---// -----пользовательские поля--------
require get_template_directory() . '/includes/reg-post-type.php';
в отдельном файле---
<?php
if (!defined('ABSPATH')) {
    exit;
}
        function my_custom_init(){
register_post_type('boards', array(
'labels' => array(
'name' => 'Борды', // Основное название типа записи
'singular_name' => 'Борды слайдера', // отдельное название записи типа Book
'add_new' => 'Добавить новый борд',
// 'add_new_item' => 'Добавить новую книгу',
// 'edit_item' => 'Редактировать книгу',
// 'new_item' => 'Новая книга',
// 'view_item' => 'Посмотреть книгу',
// 'search_items' => 'Найти книгу',
// 'not_found' => 'Книг не найдено',
// 'not_found_in_trash' => 'В корзине книг не найдено',
// 'parent_item_colon' => '',
// 'menu_name' => 'Книги'

),
'public' => true,
'menu_position' => 5,
'menu_icon' =>'dashicons-palmtree', -----тут меняется иконка на панели возле названия
https://developer.wordpress.org/resource/dashicons
'supports' => array('title','editor','thumbnail','excerpt','comments','post-format'),
'taxonomies' => array( 'category' ), ---------будет выводить рубрики и можно будет прикрепить запись к определенной
рубрике и вывести ее по рубрике
) );
}
add_action('init', 'my_custom_init');

--------------- можно задать размер превью картинки----
if (function_exists( 'add_image_size' )){
add_image_size('board-slider',225,490,true);
}
---------------- регистрация вывода меток именно для этого типа поста
https://wp-kama.ru/function/register_taxonomy_for_object_type

add_action( 'init', 'post_tag_for_pages' );
function post_tag_for_pages(){
register_taxonomy_for_object_type( 'post_tag', 'projects');
}`,
        description: "",
      },
      {
        dataText: `вывод кастомного типа полей в верстку

<!-- здесь тип кастомных полей 'projects'. его выбираю в массив $args обязательно указать количество выбираемых полей 'numberposts' иначе выведет 5 по умолчанию
      можно задать рубрику к которой пренадлежит запись и вывести только по рубрике. для этого должна быть возможность присваивать рубрикики таким записям. 'taxonomies' => array( 'category' ), --вот это добавляется при регистрации типа записи
      -->

<?php  
      global $post;
      $args = array(       
         'post_type'=>'projects',
         'publish' => true,
         'numberposts' => 20,
          'category' => 10, 
          'p' => здесь id поста. который нужно вывести.<!--  --выйдет один пост -->
        'tag'=>'image-left'<!-- название метки -->

        );
        
      $projects = get_posts($args);  
      $reversed = array_reverse($projects);
     
     if ($projects ) {
     
      foreach($reversed as $post){
        setup_postdata( $post );
        $post_id = $post->ID;
        $post_title = $post->post_title; <!-- выйдет заголовок записи. не acf -->
        $post_text=$post->post_content;  <!-- выйдет содержание записи. не acf -->
        $image=get_the_post_thumbnail_url($post_id, 'projects');  <!-- выйдет изображение записи. не acf -->



<!-- если нужно оганизовать переход из записи на отдельную страницу, 
  на которой будет отображаться только содержимое этой записи. 
  содержимое организовывается по шаблону записи. создается шаблон например template-projects-post.php  прописывается вверху если тип записи projects 
<?php
/**
*Template Name: Шаблон отдельного проекта
*Template Post Type: post,projects
 */
get_header();
?>
потом в самой записи выбирается в виджете выбора этот шаблон. теперь по ссылке будет переход на такую страницу и
открываться именно информация для этого проекта. полями acf прописывается нужная информация прямо в админке записи. все
это реализовано на https://split.splitdev.pro/ -->


$link = esc_url( get_permalink( $post_id ) );
?>

<!-- html -->
<!-- html -->
<!-- html -->
<!-- здесь как раз линк на страницу записи. -->
<a href="<?php echo $link ?>">See Case</a>

<?php echo $link ?>
<?php echo $post_title ?>
<?php echo $post_id ?>
<?php echo $post_text ?>
<?php echo $image ?>


<!-- html -->
<!-- html -->
<?php 
  	}
  } else {
    ?>
<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php  
    }
    	
                  
              ?>



+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
вывод меток
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

<?php the_tags( $before, $separator, $after ); ?>

$before(строка)
Текст перед ссылками.
По умолчанию: 'Tags: '
$separator(строка)
Разделитель между ссылками.
По умолчанию: ', '
$after(строка)
Текст после ссылок.
По умолчанию: нет

<?php the_tags( 'Связи поста: ', ' > '); ?>
<!-- выведет   Связи поста: WordPress > Computers > Blogging -->
        `,
        description: "",
      },
      {
        dataText: `video
        https://www.youtube.com/watch?v=eNURjX3L7oM
https://www.youtube.com/watch?v=O9j-R-GwCt4
https://wp-kama.ru/function/register_post_type
https://developer.wordpress.org/resource/dashicons/#menu-alt2`,
        description: "",
      },
    ],
  ],
};
