# 2.0.0

## API changes

- `jsonifyMyTable` is no longer a class.
- New function is called `jsonify`, and works on tables (`HTMLTableElement`).

```javascript
const myTable = document.getElementById('tableID');
const data = myTable.jsonify();
```

There is no change in the result object, it contains:

1. `error` if any, else set to `false`.
2. `res` array of objects.
3. `headers` array of headers.

# 1.1.0

- Eliminated `table` as the data member.
- `error` is now a permanent data member: set to `false` if there was no error, or to the error message if there was an error.

```javascript
const data = new jsonifyMyTable('id');

if (!data.error) {
  // data.res...
}
```
