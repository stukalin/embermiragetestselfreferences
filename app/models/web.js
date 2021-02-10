import Model, {hasMany} from '@ember-data/model';

export default class WebModel extends Model {
  @hasMany('space', {async: false}) spaces;
  @hasMany('spaceview', {async: false}) spaceviews;

}
