export interface LootEntry<T> {
  item: T;
  weight: number;
}

export type RandomFn = () => number;

export class LootTable<T> {
  private entries: LootEntry<T>[] = [];
  private totalWeight = 0;

  constructor(entries: LootEntry<T>[] = []) {
    for (const e of entries) this.add(e.item, e.weight);
  }

  add(item: T, weight: number): this {
    if (weight <= 0) throw new Error("weight must be > 0");
    this.entries.push({ item, weight });
    this.totalWeight += weight;
    return this;
  }

  remove(item: T): boolean {
    const idx = this.entries.findIndex((e) => e.item === item);
    if (idx < 0) return false;
    this.totalWeight -= this.entries[idx].weight;
    this.entries.splice(idx, 1);
    return true;
  }

  roll(rng: RandomFn = Math.random): T {
    if (this.entries.length === 0) throw new Error("Loot table is empty");
    let r = rng() * this.totalWeight;
    for (const e of this.entries) {
      r -= e.weight;
      if (r <= 0) return e.item;
    }
    return this.entries[this.entries.length - 1].item;
  }

  rollMany(n: number, rng: RandomFn = Math.random): T[] {
    const out: T[] = [];
    for (let i = 0; i < n; i++) out.push(this.roll(rng));
    return out;
  }

  probabilities(): Array<{ item: T; probability: number }> {
    return this.entries.map((e) => ({
      item: e.item,
      probability: e.weight / this.totalWeight,
    }));
  }

  size(): number {
    return this.entries.length;
  }
}
