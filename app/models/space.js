import Model, {hasMany, belongsTo} from '@ember-data/model';

export default class SpaceModel extends Model {
  @hasMany('spaceview', {async: false}) spaceviews;
  @belongsTo('web', {async: false}) web;
}
