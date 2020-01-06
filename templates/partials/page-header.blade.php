<header class="page-header @if (has_post_thumbnail()) page-header-banner @endif" style="background-image: url('{{ get_the_post_thumbnail_url(null, 'page-banner') }}')">

    <div class="wrapper">
      <h1 class="page-title">{!! App\title() !!}</h1>
    </div>

</header>