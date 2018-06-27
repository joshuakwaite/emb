import Component from '@ember/component';

export default Component.extend({
  actions: {
    showMessage(message) {
      alert(message);
    },

    sort(item) {
      alert(item);
    }
  }
});
