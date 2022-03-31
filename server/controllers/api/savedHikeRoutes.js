const router = require('express').Router();
const { SavedHikes, User } = require('../../models/');
const withAuth = require('../../utils/auth');
