import { Component } from "strudel";

@Component(".app") // eslint-disable-next-line no-unused-vars
class Application {
  init() {
    this.$element.html(`
      <section class="hero">
        <div class="hero__content">
          <img class="hero__logo" src="https://strudeljs.org/images/strudel.svg" />
          <h1>A front-end framework for the back-end powered web.</h1>
          <a href="https://strudeljs.org/guide" class="button button--fixed" role="button">Get started</a>
          <a href="http://github.com/strudeljs" rel="external nofollow" target="_blank" class="button button--secondary button--fixed" role="button"> Github 
            <svg x="0px" y="0px" viewBox="0 0 100 100" width="25" height="25">
              <path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
              <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
            </svg>
          </a>
        </div>
      </section>
    `);
  }
}
