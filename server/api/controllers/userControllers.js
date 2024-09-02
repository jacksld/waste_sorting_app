const mongoose = require('mongoose');
const User = require('../models/user');

// User Controllers
exports.list_all_users = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.create_a_user = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.view_a_user = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.edit_a_user = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.delete_a_user = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.userId);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).json({ message: 'User successfully deleted' });
    } catch (err) {
        res.status(500).send(err);
    }
};