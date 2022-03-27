# Some Learnings

If child class doesn't have constructor, it will adapt the constructor of the parent.

```typescript
class Model<T> {
  constructor(public modelParameter1: T, public modelParameter2: T) {}

  printModel() {
    console.log(this.modelParameter1)
    console.log(this.modelParameter2)
  }
}

class User extends Model<string> {}

const user = new User('FirstName', 'LastName')
user.printModel()
```

Gives

```bash
FirstName
LastName
```
