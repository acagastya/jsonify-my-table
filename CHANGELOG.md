# 1.1.0

- Eliminated `table` as the data member.
- `error` is now a permanent data member: set to `false` if there was no error, or to the error message if there was an error.

```javascript
const data = new jsonifyMyTable('id');

if (!data.error) {
  // data.res...
}
```
