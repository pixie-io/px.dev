
[![Netlify Status](https://api.netlify.com/api/v1/badges/27e33099-7489-49fd-b235-c1653e5f4224/deploy-status)](https://app.netlify.com/sites/px-dev/deploys)

# Pixie Labs website ([px.dev](https://px.dev/))

Built with [Gatsby](https://www.gatsbyjs.com/).

For the documentation code, see [`pixie-docs`](https://github.com/pixie-labs/pixie-docs).

## Contributing
We're excited to have you contribute to Pixie's website.
Our community has adopted the [Contributor Covenant](https://github.com/pixie-labs/pixie/blob/main/CODE_OF_CONDUCT.md) as its code of conduct, and we expect all participants to adhere to it.
Please report any violations to <community@pixielabs.ai>.
All code contributions require the [Contributor License Agreement](https://github.com/pixie-labs/pixie/blob/main/CLA.md).
The CLA can be signed when creating your first PR.

There are many other ways to contribute to Pixie, as well:

- **Bugs:** Something not working as expected? [Send a bug report](https://github.com/pixie-labs/pixie/issues/new?template=Bug_report.md).
- **Features:** Need new Pixie capabilities? [Send a feature request](https://github.com/pixie-labs/pixie/issues/new?template=Feature_request.md).
- **Views & Scripts Requests:** Need help building a live view or pxl scripts? [Send a live view request](https://github.com/pixie-labs/pixie/issues/new?template=Live_view_request.md).
- **PxL Scripts:** PxL scripts are used by Pixie's API to query telemetry data collected by the Pixie Platform (DNS events, HTTP events, etc) and to extend the platform to collect new data sources.
  PxL can be executed using the web based Live UI, CLI or API. Look [here](https://github.com/pixie-labs/pixie/blob/main/pxl_scripts/README.md#Contributing) for more information.
- **Documentation:** Is the [documentation](https://docs.pixielabs.ai) not explaining something well enough? Contribute to its [repository](https://github.com/pixie-labs/pixie-docs/).
- **Pixienaut Community:** Interested in becoming a [Pixienaut](https://github.com/pixie-labs/pixie/tree/master/pixienauts) and in helping shape our community? [Apply here](https://px.dev/community/).
- **Community Slack:** Pixie users can also chat with one another in our [community Slack](https://pixie-community.slack.com).

## 🚀 Quickstart for contributors

To run in development mode, run the following commands:
```shell
yarn install
yarn start
```
Then visit `http://localhost:8000/` to view the app.

To generate a production build, run:
```shell
yarn install
yarn build
```

## Updating content
The bulk of the content for this website lives under the [`src/pages` path](https://github.com/pixie-labs/pixielabs-website/tree/main/src/pages).
Some can also be found under [`content/pages`](https://github.com/pixie-labs/pixielabs-website/tree/main/content/pages).
Content under the latter path is written using [MDX Frontmatter](https://www.gatsbyjs.com/docs/mdx/writing-pages/), and allows setting SEO-friendly metadata by putting a block like this at the top of the file:
```markdown
---
title: "Title of the page"
metaTitle: "Meta Title Tag for this page"
metaDescription: "Meta Description Tag for this page"
---
```

Canonical URLs for MDX content are generated automatically.

## Website License

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is license
d under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

Please note the Creative Commons Attribution 4.0 license applies to the creative work of this site (documentation, visual assets, etc.) and not to the underlying code and does not supersede any licenses of the source code, its dependencies, etc.
