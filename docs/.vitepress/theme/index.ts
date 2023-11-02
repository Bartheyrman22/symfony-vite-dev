// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import Theme from 'vitepress/theme';
import './style.css';
import { rippleDirective } from './directives';

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {});
  },
  enhanceApp({ app }) {
    app.directive('ripple', rippleDirective);
  }
};
