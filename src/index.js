import { Component, El, $ } from "strudel";
import "./components/button";

@Component(".app") // eslint-disable-next-line no-unused-vars
class Application {
  // Elements
  @El(".hero__content")
  content;

  @El(".hero__logo")
  logo;

  init() {
    // Properties
    this.header = "A front-end framework for the back-end powered web.";

    this.content.append(`
      <h1>${this.header}</h1>
      <a href="https://strudeljs.org/guide" class="button button--fixed">Get started</a>
      <a href="http://github.com/strudeljs" data-external="true" class="button button--fixed">Github</a>
    `);

    this.buttons = $(".button");
  }
}
