const extrasLanding = Vue.extend({
  template: `
    <div class="content-image">
      <img src="images/schuster.jpeg" width="100%" />
      <p align="center" style="margin-top:0.5em; background: #fff; padding: 1.25em 1em 1.25em 1em;">
        zs [dot] schuster [at] gmail [dot] com
      </p>
    </div>
    <div class="content">
      <h1>Let's call this a "potpourri" of extras because that seems like a fun thing to do</h1>
      <ul class="padding">
        <li>I wrote a short story based on Kimbra lyrics and I called it, uh, <a ui-sref="extras.places({name:'kimbra'})" class="extras">Kimbra</a>.</li>
        <li>In a past life, <a href="images/trackback-cover-old.jpg" target="_blank" class="extras">this</a> was the cover art for Trackback</li>
        <li>This is an <a ui-sref="extras.places({name:'cool-places'})" class="extras">image list of cool places I like</a> inspired by John Campbell's old image list of webcomics he liked.</li>
        <li>Did you know I love to take photos? And that I've been paid to do it? <a href="http://zackschuster.carbonmade.com" class="extras">Here's my portfolio.</a>
        </li>
        <li>I made a <a href="http://fuckyeahjdawinslow.tumblr.com" class="extras">shrine</a> to JDA Winslow. Stand in awe.</li>
      </ul>
      <h1 style="padding-top:2em;">Here's a bit more about me, Zack Schuster</h1>
      <p>I'm a 24-year-old dude from The Midwest who sometimes moonlights as a dead prussian general. My greatest accomplishment to date is failing miserably at doing a Kickstarter.</p>
      <p>Fun fact: I used to be in the Army National Guard, specifically a <a href="http://www.goarmy.com/careers-and-jobs/browse-career-and-job-categories/arts-and-media/public-affairs-specialist.html">public affairs specialist</a>.</p>
      <p>When I was in training for my Army job, one of my instructors said that inside every novelist is a cheap philosopher. It's true. (Also, this next paragraph has a lot of 'I's in it.)</p>
      <p>I like writing all kinds of things, especially stories and essays. I'm very conversational and self-deprecating; I like making people smile, and I try to say familiar things in new ways. I try to be positive a lot, but a lot of times I get really angry instead because there are a lot of awful things in the world and it's impossible for me to fix even a small portion of them. As a result, I try to end everything I write with either "Everything will be alright" or "I hope you have a wonderful life," because it makes me smile and I hope it'll make you smile too.</p>
      <p>I love the semicolon; however, my love is unrequited. I find solace — however fleeting — in the arms of the hyphen.</p>
      <p>*<a ui-sref="extras.places({name:'write-her-a-thank-you-note'})">smiles</a> for the non-existent <a ui-sref="extras.places({name:'falling-onto-a-hot-griddle'})">camera</a>*</p>
    </div>
  `,
});