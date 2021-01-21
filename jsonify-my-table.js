HTMLTableElement.prototype.jsonify = function() {
  const result = {};
  result["error"] = false;
  // 1. Does table have rows?
  if (this.rows.length < 1) {
    result["error"] = "There are no rows in the table.";
    return result;
  }

  // 2. Extract headers.
  const headers = [...this.rows[0].cells].map(cell => {
    if (cell.childElementCount == 0) return cell.innerText;
    if (cell.childElementCount != 1) {
      result["error"] = "Can't extract headers.";
      return undefined;
    }
    while (cell.childElementCount == 1) cell = cell.children[0];
    return cell.innerText;
  });

  // 3. Are headers unique?
  if (headers.length > new Set(headers).size) {
    result["error"] = "Headers repeat";
    return result;
  }

  // 4. Prepare the result.
  const res = [...this.rows].map((row, index) => {
    if (index == 0) return; // This is header
    const cells = [...row.cells].map(cell => {
      if (cell.childElementCount == 0) return cell.innerText;
      if (cell.childElementCount != 1) {
        result["error"] = "Can't extract information.";
        return undefined;
      }
      while (cell.childElementCount == 1) cell = cell.children[0];
      return cell.innerText;
    });
    return headers.reduce(
      (acc, cur, index) => (acc = { ...acc, [cur.valueOf()]: cells[index] }),
      {}
    );
  });

  res.shift(); // Remove header
  result["res"] = res;
  result["headers"] = headers;
  return result;
};

if (!window) module.exports = jsonify;
