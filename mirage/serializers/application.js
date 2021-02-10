import {RestSerializer} from 'ember-cli-mirage';

export default RestSerializer.extend({
  include: function (request) {
    let queryBeginning = request.url.indexOf('?');
    let url = queryBeginning >= 0 ? request.url.slice(0, queryBeginning) : request.url;

    switch (url) {
      case "/webs":
        return ['spaces', 'spaceviews'];
      default:
        return [];
    }
  }
});
