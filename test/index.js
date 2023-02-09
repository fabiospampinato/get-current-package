
/* IMPORT */

import {describe} from 'fava';
import findUp from 'find-up-json';
import getCurrentPackage from '../dist/index.js';

/* MAIN */

describe ( 'Get Current Package', it => {

  it ( 'works', t => {

    const pkg = findUp ( 'package.json' );

    t.deepEqual ( getCurrentPackage (), pkg.content );

  });

});
