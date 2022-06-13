import {JSDOM} from 'jsdom';

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

(global as any).window = dom.window;
global.Element = dom.window.Element;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.DOMParser = dom.window.DOMParser;