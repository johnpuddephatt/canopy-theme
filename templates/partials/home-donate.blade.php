<div class="slide slide-full-width slide-full" id="slide-donate">
  <div class="donate">

    @php(dynamic_sidebar('sidebar-donation-gallery'))


    {{-- <div class="image-slider" data-module="donationSlideshow" data-images="donate1,donate2,donate3,donate4"></div> --}}
    <div class="donate--text">
      <h3>Canopy relies on your donations</h3>
      <input class="ranger" data-module="donationSlider" type="range" min="5" value="10" max="25" value="10" step="5">
      <h4 class="total">
        Donate
        <span class="wrap">
          £<output>10</output>
        </span>
      </h4>
      <label><input type="checkbox" value="monthly" name="monthly" class="monthly-check"/>make it monthly</label>
      <input type="submit" value="Donate" class="donation-submit"/>
      <p class="small">You’ll be taken to localgiving.org to complete your donation.</p>

    </div>
  </div>
</div>