{{--
  Template Name: Full-width Template
--}}


@extends('layouts.base')

@section('content')
<div class="page-wrapper wrapper">
  @while(have_posts()) @php(the_post())
    <main class="page-content-full">
      @include('partials.page-header')
      @include('partials.content-page')
    </main>
  @endwhile
</div>
@endsection