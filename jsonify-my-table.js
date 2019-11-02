HTMLTableElement.prototype.jsonify = function() {
  // 1. Does table have rows?
  if (this.rows < 1)
    return { error: `There are no rows in the table.` };

  // 2. Extract headers.
  const headers = [...this.rows[0].cells].map(
    cell => cell.innerText
  );

  // 3. Are headers unique?
  if (headers.length > new Set(headers).size)
    return { error: `Headers repeat.` };

  // 4. Prepare the result.
  const res = [...this.rows].map((row, index) => {
    if (index == 0) return; // This is header
    const cells = [...row.cells].map(
      cell => cell.innerText
    );
    return headers.reduce(
      (acc, cur, index) =>
        (acc = { ...acc, [cur.valueOf()]: cells[index] }),
      {}
    );
  });

  res.shift(); // Remove header
  return { error: false, res, headers };
};

if (!window) module.exports = jsonify;
