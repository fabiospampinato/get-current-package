# Get Current Package

Get the `package.json` of the currently executing bin.

This is meant to be used in combination with [`tiny-updater`](https://github.com/fabiospampinato/tiny-updater) or similar, in order to get the name and the version of the currently executing bin very conveniently, without importing a "package.json" and without hard-coding the values yourself.

## Install

```sh
npm install --save get-current-package
```

## Usage

You should have something like this in your bin app:

```ts
import getCurrentPackage from 'get-current-package';

console.log ( getCurrentPackage () );
```

Then executing the bin would produce this:

```
> my-bin
< { name: 'my-bin', version: '1.0.0', ... }
```

Basically it detects which entrypoint file is being executed and retrieves its `package.json`.

## License

MIT © Fabio Spampinato
