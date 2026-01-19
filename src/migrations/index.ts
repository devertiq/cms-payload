import * as migration_20260119_211944 from './20260119_211944';

export const migrations = [
  {
    up: migration_20260119_211944.up,
    down: migration_20260119_211944.down,
    name: '20260119_211944'
  },
];
