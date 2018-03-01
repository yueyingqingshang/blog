import path from 'path';
import Express from 'express';
import favicon from 'serve-favicon'
import httpProxy from 'http-proxy';
import compression from 'compression';
import connectHistoryApiFallback from 'connect-history-api-fallback';
import config from '../config/config';

const app = new Express();