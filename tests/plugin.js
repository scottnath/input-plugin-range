import test from 'ava';
import contentTypes from 'holmes-content-types';

import plugin from '../';

contentTypes.pluginTests(test, plugin);
