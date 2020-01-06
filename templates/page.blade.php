@extends('layouts.base')

@section('content')

  @while(have_posts()) @php(the_post())
    @include('partials.page-header')
    <div class="page-wrapper wrapper">
      <nav class="page-navigation">
        <ul role="menu" class="page-navigation-menu fixedsticky" data-module="stickySidebar">
          <li class="active"><a>{!! App\title() !!}</a>
            @include('partials.sidebar')
          </li>
        </ul>
      </nav>
      <main class="page-content">
        @include('partials.content-page')
      </main>
    @endwhile
  </div>
@endsection
