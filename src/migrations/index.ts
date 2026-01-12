import * as migration_20241125_222020_initial from './20241125_222020_initial';
import * as migration_20241214_124128 from './20241214_124128';
import * as migration_20260105_204640 from './20260105_204640';
import * as migration_20260107_194145 from './20260107_194145';
import * as migration_20260107_194255 from './20260107_194255';
import * as migration_20260112_215129 from './20260112_215129';

export const migrations = [
  {
    up: migration_20241125_222020_initial.up,
    down: migration_20241125_222020_initial.down,
    name: '20241125_222020_initial',
  },
  {
    up: migration_20241214_124128.up,
    down: migration_20241214_124128.down,
    name: '20241214_124128',
  },
  {
    up: migration_20260105_204640.up,
    down: migration_20260105_204640.down,
    name: '20260105_204640',
  },
  {
    up: migration_20260107_194145.up,
    down: migration_20260107_194145.down,
    name: '20260107_194145',
  },
  {
    up: migration_20260107_194255.up,
    down: migration_20260107_194255.down,
    name: '20260107_194255',
  },
  {
    up: migration_20260112_215129.up,
    down: migration_20260112_215129.down,
    name: '20260112_215129'
  },
];
