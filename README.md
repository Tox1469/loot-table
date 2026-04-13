[![CI](https://img.shields.io/github/actions/workflow/status/Tox1469/loot-table/ci.yml?style=flat-square&label=ci)](https://github.com/Tox1469/loot-table/actions)
[![License](https://img.shields.io/github/license/Tox1469/loot-table?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/github/v/release/Tox1469/loot-table?style=flat-square)](https://github.com/Tox1469/loot-table/releases)
[![Stars](https://img.shields.io/github/stars/Tox1469/loot-table?style=flat-square)](https://github.com/Tox1469/loot-table/stargazers)

---

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