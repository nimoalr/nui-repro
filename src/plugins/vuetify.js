import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'md',
  },
  theme: {
  themes: {
    dark: {
      primary: colors.shades.black,
        secondary: '#9C27b0',
        accent: '#9C27b0',
        info: '#00CAE3',
    },
    light: {
      primary: colors.grey.lighten3,
        secondary: '#9C27b0',
        accent: '#9C27b0',
        info: '#00CAE3',
    }
  }
}
});