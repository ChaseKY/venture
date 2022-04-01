const { User } = require('../models');

const userdata = [
  {
    username: 'IamNotaRobot',
    email: 'NotaRobot@definitelyahuman.com',
    password: 'Imarealboy',
  },
  {
    username: 'ImaRobot',
    email: 'ImaRobot@beepboop.com',
    password: 'theRobotswillRise',
  },
  {
    username: 'HiImBob',
    email: 'HiImBob@Bobsociety.com',
    password: 'PlotTwistMyNameIsPhil',
  },
  {
    username: 'HeyImPhil',
    email: 'HiImPhil@Philsociety.com',
    password: 'PlotTwistThereIsNoPlotTwist',
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;