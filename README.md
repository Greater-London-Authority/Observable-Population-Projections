# Observable Framework Style

This repo is an experiment to tweak the styling of an [Observable Framework](https://observablehq.com/framework) project to match the CIU house style.

To start the local preview server, run:

```
npm run dev
```

Then visit <http://localhost:3000> to preview your project.


The [docs](https://observablehq.com/framework/config#style) describe the following CSS variables:


 *  --theme-foreground - page foreground color, e.g. black
 *  --theme-background - page background color, e.g. white
 *  --theme-background-alt - block background color, e.g. light gray
 *  --theme-foreground-alt - heading foreground color, e.g. brown
 *  --theme-foreground-muted - secondary text foreground color, e.g. dark gray
 *  --theme-foreground-faint - faint border color, e.g. middle gray
 *  --theme-foreground-fainter - fainter border color, e.g. light gray
 *  --theme-foreground-faintest - faintest border color, e.g. almost white
 *  --theme-foreground-focus - emphasis foreground color, e.g. blue


The theme file is in `docs/theme.css`.

Theme files can import CSS files that are part of the Observable project: these are in [this directory](https://github.com/observablehq/framework/tree/main/src/style) of the [`observablehq/framework`](https://github.com/observablehq/framework) repo.

As well as adding a CSS file, I've added the HTML for a footer to `observablehq.config.js`.

