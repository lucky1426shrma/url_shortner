import express from 'express';
import { nanoid } from 'nanoid';
import {handelGenerateNewShortUrl} from '../controllers/url.controller.js';
import { handleRedirectedPage } from '../controllers/url.controller.js';

export const router = express.Router();

router.post('/',handelGenerateNewShortUrl);

router.get('/:id',handleRedirectedPage);

