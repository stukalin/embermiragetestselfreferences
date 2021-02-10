import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import {setupMirage} from 'ember-cli-mirage/test-support';

module('Acceptance | web', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /web', async function(assert) {
    let space = this.server.create('space', {
      id: 1
    });

    let spaceview = this.server.create('spaceview', {
      id: 1,
      spaceIds: [1]
    });

    let web = this.server.create('web', {
      id: 1,
      spaceIds: [1],
      spaceviewIds: [1]
    })

    this.server.get('/webs', (s, r) => {
      return web;
    });

    await visit('/web');

    assert.equal(currentURL(), '/web');
  });
});
