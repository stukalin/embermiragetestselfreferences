import Route from '@ember/routing/route';

export default class WebRoute extends Route {
  model() {
    return this.store.queryRecord('web', {});
  }
}
