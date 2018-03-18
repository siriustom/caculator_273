var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var utils = require('./utils');

function getConnection() {
    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '111111',
        database: 'calculator',
        port: 3306,
    });
    return conn;
}

function getResult(result) {
    return result;
}

function fetchData(sql, callback) {
    var conn = getConnection();
    conn.query(sql, function (err, result, fields) {
        if (err) {
            console.log("error: " + err.message);
        } else {
            callback(err, result);
        }
    });
}

var tempResult = 0;
var tempOp = '';

router.get('/', function(req, res) {
    res.render('index')
});

router.post('/clear', function(req, res) {
    tempResult = 0;
    tempOp = '';
    res.send('0');
});

router.post('/', function(req, res) {
    var op = req.body.operator;
    var num = req.body.number;
    if (op !== '=') {
        switch (tempOp) {
            case '':
                tempResult = num;
                tempOp = op;
                break;
            case '+':
                tempResult = utils.add(tempResult, num);
                tempOp = op;
                break;
            case '-':
                tempResult = utils.sub(tempResult, num);
                tempOp = op;
                break;
            case '*':
                tempResult = utils.mul(tempResult, num);
                tempOp = op;
                break;
            case '/':
                tempResult = utils.div(tempResult, num);
                tempOp = op;
                break;
        }
        res.send(String(tempResult));
    } else {
        var finalResult = 0;
        switch (tempOp) {
            case '+':
                finalResult = tempResult + num;
                break;
            case '-':
                finalResult = tempResult - num;
                break;
            case 'x':
                finalResult = tempResult * num;
                break;
            case '/':
                if (num !== 0) {
                    finalResult = tempResult / num;
                } else {
                    tempResult = 0;
                    tempOp = '';
                    res.send('error');
                }
                break;
            default:
                break;
        }
        // reset
        tempResult = 0;
        tempOp = '';
        res.send(String(finalResult));
    }
});


module.exports = router;