# loot-table

Tabela de loot com peso (weighted random) para drops de inimigos, bau e recompensas.

## Instalacao

```bash
npm install loot-table
```

## Uso

```ts
import { LootTable } from "loot-table";

const table = new LootTable<string>()
  .add("common sword", 70)
  .add("rare bow", 25)
  .add("epic staff", 5);

console.log(table.roll());
```

## API

- `new LootTable<T>(entries?)`
- `add(item, weight)`, `remove(item)`
- `roll(rng?)`, `rollMany(n, rng?)`
- `probabilities()`, `size()`

## Licenca

MIT
