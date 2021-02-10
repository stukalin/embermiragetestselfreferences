import Model, {hasMany, belongsTo} from '@ember-data/model';

export default class SpaceviewModel extends Model {
  @hasMany('space', {async: false}) spaces;
  @belongsTo('web', {async: false}) web;
}
