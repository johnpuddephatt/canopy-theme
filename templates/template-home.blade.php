{{--
  Template Name: Homepage Template
--}}

@extends('layouts.base')

@section('content')

@include('partials.home-hero')
@include('partials.home-intro')
@include('partials.home-instagram')
@include('partials.home-stories')
@include('partials.home-donate')

@endsection
