import Application from "@ember/application";
import Resolver from "ember-resolver";
import loadInitializers from "ember-load-initializers";
import config from "chatness-ember/config/environment";

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);

// apply dark theme
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
uiToggleDark(prefersDark.matches);
prefersDark.addListener((mediaQuery) => uiToggleDark(mediaQuery.matches));
function uiToggleDark(shouldAdd) {
  document.body.classList.toggle("dark", shouldAdd);
}
