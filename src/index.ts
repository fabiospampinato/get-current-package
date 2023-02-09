
/* IMPORT */

import findUp from 'find-up-json';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

/* MAIN */

const getCurrentPackage = (): Record<string, any> | undefined => {

  try {

    const filePath = fs.realpathSync ( process.argv[1] );
    const folderPath = path.dirname ( filePath );
    const pkg = findUp ( 'package.json', folderPath );

    return pkg?.content;

  } catch {

    return;

  }

};

/* EXPORT */

export default getCurrentPackage;
