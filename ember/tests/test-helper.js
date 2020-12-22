import Application from 'chatness-ember/app';
import config from 'chatness-ember/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
