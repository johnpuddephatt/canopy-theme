<!doctype html>
<html @php(language_attributes())>
  @include('partials.head')
  <body @php(body_class())>
    <!--[if IE]>
      <div class="alert alert-warning">
        {!! __('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'sage') !!}
      </div>
    <![endif]-->
    @php(do_action('get_header'))
    @include('partials.header')
    @yield('content')
    @php(do_action('get_footer'))
    @include('partials.footer')
    @php(do_action('before_footer'))
    @php(wp_footer())
    @php(do_action('after_footer'))
  </body>
</html>
