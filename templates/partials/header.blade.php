<nav class="primary-navigation">
  <div class="wrapper">
    <div class="hamburger" data-module="hamburgerNav">≡</div>
    <h2 class="site-title"><a href="{{ home_url('/') }}">{{ get_bloginfo('name', 'display') }}</a></h2>
    @if (has_nav_menu('primary_navigation'))
      {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav-left']) !!}
    @endif
    <ul class="nav-right">
      <li><a class="button navigation-button" href="/donate">Donate</a></li>
    </ul>


  </div>
</nav>