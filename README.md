# slugify-cli-lite

slugify for your terminal

## Install

```bash
$ npm install --global slugify-cli-lite
```

## Usage

This utility supports arguments or pipes. Data sent in via stdin is processed as a list via newlines.

```bash
$ slugify Foo Bar
foo-bar
$ slugify "Foo Bar"
foo-bar
$ cat list.txt | slugify
foo-bar
simple-ranch
$ echo "Yay! Piping" | slugify
yay!-piping
```

## Credits

Inspired by [`slugify-cli`](https://www.npmjs.com/package/slugify-cli) but without external deps save for [`slugify`](http://npm.im/slugify).

## License

MIT © [John Weis](https://johnweis.com)