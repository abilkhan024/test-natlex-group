import Vuetify from "vuetify";
import Vue from "vue";

Vue.use(Vuetify);

const hasMatchMediaApi = Boolean(window.matchMedia);

const hasPreferedColorScheme =
  window.matchMedia("(prefers-color-scheme)").media !== "not all";

const isLightPreffered = window.matchMedia(
  "(prefers-color-scheme: light)"
).matches;

const isDarkPreffered =
  hasMatchMediaApi && hasPreferedColorScheme && !isLightPreffered;

const vuetify = new Vuetify({ theme: { dark: false } });

export default vuetify;
