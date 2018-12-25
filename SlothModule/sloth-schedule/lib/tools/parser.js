'use strict';

function parser(data) {
  const res = [];

  const rows = data.split(/\r?\n/);
  const keys = rows.shift().split(',');

  for (let i = 0; i < rows.length; i++) {
    res[i] = {};
    const row = rows[i].split(',');
    for (let j = 0; j < keys.length; j++)
      res[i][keys[j]] = row[j];
  }

  return res;
}

module.exports = { parser };
