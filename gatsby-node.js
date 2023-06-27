const path = require('path');
const fetch = require('node-fetch');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({
  node, actions, getNode, getNodesByType,
}) => {
  const { createNodeField, createParentChildLink } = actions;

  if (node.internal.type === 'Directory') {
    const parentDirectory = path.normalize(`${node.dir}/`);
    const parent = getNodesByType('Directory')
      .find(
        (n) => path.normalize(`${n.absolutePath}/`) === parentDirectory,
      );
    if (parent) {
      // eslint-disable-next-line no-param-reassign
      node.parent = parent.id;
      createParentChildLink({
        child: node,
        parent,
      });
    }
  }

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = (node.parent && node.parent !== 'undefined')
      ? getNode(node.parent)
      : node;

    const slug = createFilePath({
      node,
      getNode,
    });
    const fullSlug = fileNode.sourceInstanceName !== 'posts'
      ? path.posix.join(fileNode.sourceInstanceName, slug)
      : slug;
    const parent = getNodesByType('Directory')
      .find(
        (n) => n.name === fileNode.relativeDirectory,
      );
    if (parent) {
      createParentChildLink({
        child: node,
        parent,
      });
    }
    createNodeField({
      name: 'slug',
      node,
      value: fullSlug,
    });
  }
};

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const slackReq = await fetch('https://slackin.px.dev/data');
  const slack = await slackReq.json();

  const gitReq = await fetch('https://api.github.com/repos/pixie-io/pixie');
  const github = await gitReq.json();

  createNode({
    slack: slack.total,
    github: github.watchers,
    id: 'header-counters-data',
    parent: null,
    children: [],
    internal: {
      type: 'HeaderCountersData',
      contentDigest: createContentDigest({}),
    },
  });
};
