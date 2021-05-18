import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import {setupMirage} from 'ember-cli-mirage/test-support';

module('Acceptance | web', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /web', async function(assert) {
    // let space = this.server.create('space', {
    //   id: 1,
    //   spaceviewIds: []
    // });
    //
    // let spaceview = this.server.create('spaceview', {
    //   id: 1,
    //   spaceIds: [1]
    // });
    //
    // let web = this.server.create('web', {
    //   id: 1,
    //   spaceIds: [1],
    //   spaceviewIds: [1]
    // })

    // debugger;

    this.server.get('/webs', (s, r) => {
      return {
        web: {
          id: 1,
        },
        spaces: [{
          id: 1,
          web:1
        },{
          id: 2,
          web:1
        }],
        spaceviews: [{
          id: 1,
          spaces: [2],
          web:1
        },{
          id: 2,
          spaces: [1, 2],
          web:1
        }]
      }
    });

    await visit('/web');

    assert.equal(currentURL(), '/web');
    assert.dom().hasText('hello from web My id is 1 I have following space views: view ID 1 which has following spaces ...space ID 2 view ID 2 which has following spaces ...space ID 1 ...space ID 2 And I have following spaces space id 1 which belongs to following space views ... spaceview id 2 space id 2 which belongs to following space views ... spaceview id 1 ... spaceview id 2');
  });
});
