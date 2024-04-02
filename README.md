# cs-doppler-phase

> Get the phase of a Counter-Strike Doppler skin

Based on `icon_url` of an item from Steam.

## Install

```sh
npm install cs-doppler-phase
```

## Usage

```ts
import { getDopplerPhase } from "cs-doppler-phase";

getDopplerPhase("-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-KmsjwPKvBmm5D19V5i_rEpLPigVC7vCwwOj6rYJjHcAFtN1mB_1TryevvjJTu7p6bwHJjunIhsH6PzRzlgE0YbrA9gaSaVxzAUM53KYio")
// => phase1

getDopplerPhase("test")
// => null
```

## API

### `getDopplerPhase(iconUrl)`

Returns `phase1`, `phase2`, `phase3`, `phase4`, `ruby`, `sapphire` or `blackpearl` if `iconUrl` matches a phase or `null` if not.

#### `iconUrl`

Type: `string`

The `icon_url` of the item from Steam.