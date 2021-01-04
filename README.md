# Core Infinity Hedge

<p align="center">
    <img src="https://raw.githubusercontent.com/Plusid/core-master/core-master-hedge/banner_hedge.png" />
</p>

[![License: MIT](https://badgen.now.sh/badge/license/MIT/green)](https://opensource.org/licenses/MIT)

> Lead Maintainer: [Infinity developers](https://github.com/Plusid)

## Introduction

## Manual installation Node Stable Coin

### Server Prerequisites

- minimum VPS recommended 
4 vCPUs 8GB / 160GB Disk
- ubuntu 18

### Setup

<details><summary>Install</summary>

```bash
# Install Relay Infinity Hedge
git clone https://github.com/InfinitySoftwareLTD/core-master-EDGE.git
cd core-master-EDGE
bash install.sh

# choose a network
Mainnet

# Start Relay
cd core-master-EDGE
infinityhedge relay:start


# config database

```

</details>


#### Become a delegate (forge)

<details><summary>Configuration forger</summary>

```bash
# Entry your delegate phrase (wallet passphrase) as forger
infinityhedge config:forger

# Start Forging
infinityhedge forger:start

```

</details>

#### Check status and logs relay and delegate

<details><summary>Configuration forger</summary>

```bash
# status
pm2 status

# logs relay
pm2 logs infinityhedge-relay

# logs forging
pm2 logs infinityhedge-forger

```

</details>

## API Documentation

-   API v2 : https://api.hedge.infinitysolutions.io

## GitHub Development Bounty

-   Get involved with the development and start earning INFI : https://bounty.infinitysoftware.io

## Security

If you discover a security vulnerability within this package, please send an e-mail to security@infinitysoftware.io. All security vulnerabilities will be promptly addressed.

## License

[MIT](LICENSE) © [INFINITY Ecosystem](https://infinitysoftware.io)
