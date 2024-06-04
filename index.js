/* eslint-disable no-param-reassign */
const fs = require('node:fs');
const { Liquid } = require('liquidjs');
const { dateDiff } = require('./lib/filters');

const render = (resume) => {
  try {
    const engine = new Liquid({
      root: `${__dirname}/templates`,
      ext: '.liquid',
      dynamicPartials: true,
      strictVariables: false,
      strictFilters: false,
    });
    engine.registerFilter('dateDiff', dateDiff);
    const template = fs.readFileSync(`${__dirname}/templates/base.liquid`, 'utf8');

    // Inline CSS into the template
    resume.meta = resume.meta || {};
    resume.meta.css = fs.readFileSync(`${__dirname}/resources/style.css`, 'utf8');

    return engine.parseAndRender(template, { resume });
  } catch (error) {
    throw new Error(`Output generation failed in render step: ${error.message}`);
  }
};

module.exports = {
  render,
  pdfRenderOptions: {
    format: 'letter',
    mediaType: 'print',
    pdfViewport: {
      width: 1240,
      height: 1754,
    },
    margin: {
      top: '0.4in',
      bottom: '0.4in',
      left: '0.4in',
      right: '0.4in',
    },
  },
};
