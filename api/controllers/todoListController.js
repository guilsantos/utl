'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

var spawn = require('child_process').spawn;
var exec = require('child_process').exec;

exports.execute_bat = function(req, res){
    /*const bat = spawn(".\\script_bat\\Abre_CMD.bat", []);

    bat.stdout.on('data', (data) => {
        console.log(data.toString());
    });
    
    bat.stderr.on('data', (data) => {
        console.log(data.toString());
    });
    
    bat.on('exit', (code) => {
        console.log(`Child exited with code ${code}`);
    });*/

    exec(".\\script_bat\\Abre_CMD.bat", (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
      });
    }