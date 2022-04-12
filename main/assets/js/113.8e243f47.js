(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{626:function(t,e,o){"use strict";o.r(e);var a=o(1),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"join-the-public-testnet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#join-the-public-testnet"}},[t._v("#")]),t._v(" Join the Public Testnet")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Current Upgrade")]),t._v(" "),o("th",[t._v("Chain Id")]),t._v(" "),o("th",[t._v("Upgrade Block Height")]),t._v(" "),o("th",[t._v("Upgrade Date")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Theta")]),t._v(" "),o("td",[o("code",[t._v("theta-testnet-001")])]),t._v(" "),o("td",[t._v("9283650")]),t._v(" "),o("td",[t._v("March 17 2021")])])])]),t._v(" "),o("h2",{attrs:{id:"background"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[t._v("#")]),t._v(" Background")]),t._v(" "),o("p",[t._v("The current Cosmos Hub Testnet is running on the "),o("a",{attrs:{href:"https://interchain-io.medium.com/preparing-for-the-cosmos-hub-v7-theta-upgrade-2fc41ce34787",target:"_blank",rel:"noopener noreferrer"}},[t._v("Theta Upgrade"),o("OutboundLink")],1),t._v(". Visit the "),o("a",{attrs:{href:"https://explorer.theta-testnet.polypore.xyz/",target:"_blank",rel:"noopener noreferrer"}},[t._v("testnet explorer"),o("OutboundLink")],1),t._v(" to view all on chain activity.")]),t._v(" "),o("p",[t._v("For those who just need instructions on performing the upgrade, see the "),o("a",{attrs:{href:"#upgrading"}},[t._v("Upgrade")]),t._v(" section.")]),t._v(" "),o("h2",{attrs:{id:"releases"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#releases"}},[t._v("#")]),t._v(" Releases")]),t._v(" "),o("p",[t._v("If syncing before the Theta update, checkout "),o("a",{attrs:{href:"https://github.com/cosmos/gaia/tree/v6.0.0",target:"_blank",rel:"noopener noreferrer"}},[o("code",[t._v("v6.0.0")]),o("OutboundLink")],1),t._v(". "),o("strong",[t._v("If syncing after the upgrade, see "),o("a",{attrs:{href:"https://github.com/cosmos/gaia/tree/v7.0.0-rc0",target:"_blank",rel:"noopener noreferrer"}},[o("code",[t._v("v7.0.0-rc0")]),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("h2",{attrs:{id:"prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),o("p",[o("strong",[t._v("Hardware")])]),t._v(" "),o("p",[t._v("It's recommended that public testnet nodes are running on machines with at least "),o("code",[t._v("16GB")]),t._v(" of RAM.")]),t._v(" "),o("p",[o("strong",[t._v("Make sure Go & Gaia are "),o("RouterLink",{attrs:{to:"/getting-started/installation.html"}},[t._v("properly installed")]),t._v(". The most recent Gaia version for the Theta Testnet is "),o("a",{attrs:{href:"https://github.com/cosmos/gaia/tree/v7.0.0-rc0",target:"_blank",rel:"noopener noreferrer"}},[o("code",[t._v("v7.0.0-rc0")]),o("OutboundLink")],1),t._v(".")],1)]),t._v(" "),o("p",[t._v("This tutorial will provide all necessary instructions for joining the current public testnet. If you're interested in more advanced configuration and synchronization options, see "),o("RouterLink",{attrs:{to:"/hub-tutorials/join-mainnet.html"}},[t._v("Join Mainnet")]),t._v(" for a detailed walkthrough.")],1),t._v(" "),o("h2",{attrs:{id:"sync-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sync-options"}},[t._v("#")]),t._v(" Sync Options")]),t._v(" "),o("p",[t._v("There are two ways to sync a testnet node, Blocksync and State Sync. "),o("a",{attrs:{href:"https://docs.tendermint.com/v0.35/tendermint-core/block-sync/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blocksync"),o("OutboundLink")],1),t._v(" syncs the chain from genesis by downloading blocks in paralell and then verifying them. "),o("a",{attrs:{href:"https://docs.tendermint.com/master/tendermint-core/state-sync/#",target:"_blank",rel:"noopener noreferrer"}},[t._v("State Sync"),o("OutboundLink")],1),t._v(" will look for snapshots from peers at a trusted height and then verifying a minimal set of snapshot chunks against the network.")]),t._v(" "),o("p",[t._v("State Sync is far faster and more efficient than Blocksync, but Blocksync offers higher data integrity and more robust history. For those who are concerned about storage and costs, State Sync can be the better option as it minimizes storage usage when rebuilding initial state.")]),t._v(" "),o("h3",{attrs:{id:"configuration-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration-setup"}},[t._v("#")]),t._v(" Configuration & Setup")]),t._v(" "),o("p",[t._v("To get started, you'll need to install and configure the Gaia binary using the script below. "),o("strong",[t._v("For Blocksync, it is important to checkout Gaia "),o("code",[t._v("release/v6.0.0")]),t._v(". For State Sync checkout the most recent Theta release "),o("a",{attrs:{href:"https://github.com/cosmos/gaia/tree/v7.0.0-rc0",target:"_blank",rel:"noopener noreferrer"}},[o("code",[t._v("v7.0.0-rc0")]),o("OutboundLink")],1)])]),t._v(" "),o("p",[t._v("This example is using the Theta testnet genesis. For up to date values like "),o("code",[t._v("seeds")]),t._v(", visit the "),o("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("testnet repository"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v(": Cosmos Hub recommends running "),o("code",[t._v("gaiad")]),t._v(" or "),o("code",[t._v("cosmovisor")]),t._v(" with the "),o("code",[t._v("--x-crisis-skip-assert-invariants")]),t._v(" flag. If checking for invariants, operators are likely to see "),o("code",[t._v("rounding error withdrawing rewards from validator")]),t._v(". These are expected. For more information see "),o("RouterLink",{attrs:{to:"/hub-tutorials/join-mainnet.html#verify-mainnet"}},[t._v("Verify Mainnet")])],1)]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"IyBCdWlsZCBnYWlhZCBiaW5hcnkgYW5kIGluaXRpYWxpemUgY2hhaW4KY2QgJEhPTUUKZ2l0IGNsb25lIC1iIHJlbGVhc2UvJmx0O3JlbGVhc2VfdmVyc2lvbiZndDsgaHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9nYWlhCmNkIGdhaWEKbWFrZSBpbnN0YWxsCmdhaWFkIGluaXQgJmx0O2N1c3RvbV9tb25pa2VyJmd0OwoKIyBQcmVwYXJlIGdlbmVzaXMgZmlsZQp3Z2V0IGh0dHBzOi8vZ2l0aHViLmNvbS9oeXBoYWNvb3AvdGVzdG5ldHMvcmF3L2FkZC10aGV0YS10ZXN0bmV0L3Y3LXRoZXRhL3B1YmxpYy10ZXN0bmV0L2dlbmVzaXMuanNvbi5negpnemlwIC1kIGdlbmVzaXMuanNvbi5negptdiBnZW5lc2lzLmpzb24gJEhPTUUvLmdhaWEvY29uZmlnL2dlbmVzaXMuanNvbgoKIyBTZXQgbWluaW11bSBnYXMgcHJpY2UgJmFtcDsgcGVlcnMKY2QgJEhPTUUvLmdhaWEvY29uZmlnCnNlZCAtaSAncy9taW5pbXVtLWdhcy1wcmljZXMgPSAmcXVvdDsmcXVvdDsvbWluaW11bS1nYXMtcHJpY2VzID0gJnF1b3Q7MC4wMDF1YXRvbSZxdW90Oy8nIGFwcC50b21sCnNlZCAtaSAncy9wZXJzaXN0ZW50X3BlZXJzID0gJnF1b3Q7JnF1b3Q7L3BlcnNpc3RlbnRfcGVlcnMgPSAmcXVvdDsmbHQ7cGVyc2lzdGVudF9wZWVyX25vZGVfaWRfMUBwZXJzaXN0ZW50X3BlZXJfYWRkcmVzc18xOnAycF9wb3J0Jmd0OywmbHQ7cGVyc2lzdGVudF9wZWVyX25vZGVfaWRfMkBwZXJzaXN0ZW50X3BlZXJfYWRkcmVzc18yOnAycF9wb3J0Jmd0OyZxdW90Oy8nIGNvbmZpZy50b21sCg=="}}),t._v(" "),o("h3",{attrs:{id:"state-sync"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#state-sync"}},[t._v("#")]),t._v(" State Sync")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",[t._v("State Sync requires Gaia version "),o("a",{attrs:{href:"https://github.com/cosmos/gaia/tree/v6.0.0",target:"_blank",rel:"noopener noreferrer"}},[o("code",[t._v("v6.0.0")]),o("OutboundLink")],1),t._v(" until the upgrade is performed.")])]),t._v(" "),o("p",[o("strong",[t._v("Check out the "),o("a",{attrs:{href:"https://github.com/cosmos/testnets/tree/master/v7-theta/public-testnet#quickstart-on-a-fresh-machine-eg-on-digital-ocean-droplet",target:"_blank",rel:"noopener noreferrer"}},[t._v("quickstart script"),o("OutboundLink")],1),t._v(" to bootstrap a Theta testnet node and configure as needed")])]),t._v(" "),o("p",[t._v("There will need to be additional configuration to enable State Sync on the testnet. State Sync requires setting an initial list of "),o("code",[t._v("persistent_peers")]),t._v(" to fetch snapshots from. This will change and eventually move to the p2p layer when the Cosmos Hub upgrades to "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/6491",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint "),o("code",[t._v("v0.35")]),o("OutboundLink")],1),t._v(". For the sake of simplicity, this step is already done in the "),o("a",{attrs:{href:"#configuration-amp=-setup"}},[t._v("Configuration & Setup")]),t._v(" section.")]),t._v(" "),o("p",[t._v("Visit a "),o("a",{attrs:{href:"https://explorer.theta-testnet.polypore.xyz/",target:"_blank",rel:"noopener noreferrer"}},[t._v("testnet explorer"),o("OutboundLink")],1),t._v(" to get a recent block height and corresponding hash. A node operator can choose any height/hash in the current bonding period, but as the recommended snapshot period is 1000 blocks, it is advised to choose something close to current height - 1000. Set these parameters in the code snippet below "),o("code",[t._v("<BLOCK_HEIGHT>")]),t._v(" and "),o("code",[t._v("<BLOCK_HASH>")])]),t._v(" "),o("p",[t._v("For up to date values like "),o("code",[t._v("rpc_servers")]),t._v(", visit the current "),o("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("testnet repository"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y2QgJEhPTUUvLmdhaWEvY29uZmlnCnNlZCAtaSAncy9lbmFibGUgPSBmYWxzZS9lbmFibGUgPSB0cnVlLycgY29uZmlnLnRvbWwKc2VkIC1pICdzL3RydXN0X2hlaWdodCA9IDAvdHJ1c3RfaGVpZ2h0ID0gJmx0O0JMT0NLX0hFSUdIVCZndDsvJyBjb25maWcudG9tbApzZWQgLWkgJ3MvdHJ1c3RfaGFzaCA9ICZxdW90OyZxdW90Oy90cnVzdF9oYXNoID0gJnF1b3Q7Jmx0O0JMT0NLX0hBU0gmZ3Q7JnF1b3Q7LycgY29uZmlnLnRvbWwKc2VkIC1pICdzL3JwY19zZXJ2ZXJzID0gJnF1b3Q7JnF1b3Q7L3JwY19zZXJ2ZXJzID0gJnF1b3Q7Jmx0O3JwY19hZGRyZXNzXzEmZ3Q7OjI2NjU3LCZsdDtycGNfYWRkcmVzc18yJmd0OzoyNjY1NyZxdW90Oy8nIGNvbmZpZy50b21sCg=="}}),t._v(" "),o("p",[t._v("Now run "),o("code",[t._v("gaiad start --x-crisis-skip-assert-invariants")]),t._v(" or if using "),o("a",{attrs:{href:"#using-cosmovisor"}},[t._v("Cosmovisor")]),t._v(",  "),o("code",[t._v("cosmovisor start --x-crisis-skip-assert-invariants")]),t._v(". Once a snapshot is found and verified, the chain will start syncing via regular consensus within minutes.")]),t._v(" "),o("h3",{attrs:{id:"using-cosmovisor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-cosmovisor"}},[t._v("#")]),t._v(" Using Cosmovisor")]),t._v(" "),o("p",[t._v("Cosmovisor is a process manager that monitors the governance module for incoming chain upgrade proposals. When a proposal is approved, Cosmovisor can automatically download the new binary, stop the chain when it hits the upgrade height, switch to the new binary, and restart the daemon. This tutorial will provide instructions for the most efficient way to sync via Cosmovisor. For more information on configuration, check out the Cosmos SDK's "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/cosmovisor#auto-download",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cosmovisor repository documentation"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("Cosmovisor can be used when syncing with Blocksync or State Sync. Make sure to follow the Cosmovisor setup below, and then run "),o("code",[t._v("cosmovisor start")]),t._v(" in place of "),o("code",[t._v("gaiad start")]),t._v(".")]),t._v(" "),o("p",[t._v("Cosmovisor requires the creation the following directory structure:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"LgrilJzilIDilIAgY3VycmVudCAtJmd0OyBnZW5lc2lzIG9yIHVwZ3JhZGVzLyZsdDtuYW1lJmd0OwrilJzilIDilIAgZ2VuZXNpcwrilIIgICDilJTilIDilIAgYmluCuKUgiAgICAgICDilJTilIDilIAgZ2FpYWQK4pSU4pSA4pSAIHVwZ3JhZGVzCiAgICDilJTilIDilIAgdjctVGhldGEKICAgICAgICDilJzilIDilIAgYmluCiAgICAgICAg4pSCICAg4pSU4pSA4pSAIGdhaWFkCiAgICAgICAg4pSU4pSA4pSAIHVwZ3JhZGUtaW5mby5qc29uCg=="}}),t._v(" "),o("p",[t._v("It is possible to enable autodownload for the new binary, but for the purpose of this tutorial, the setup instructions will include how to do this manually. For more information on autodownload with Cosmovisor, see the full docs on "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/cosmovisor/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("setting up Cosmosvisor"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("The following script installs, configures and starts Cosmovisor:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"IyBJbnN0YWxsIENvc21vdmlzb3IKZ28gZ2V0IGdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY29zbW92aXNvci9jbWQvY29zbW92aXNvcgoKIyBTZXQgZW52aXJvbm1lbnQgdmFyaWFibGVzCmVjaG8gJnF1b3Q7ZXhwb3J0IERBRU1PTl9OQU1FPWdhaWFkJnF1b3Q7ICZndDsmZ3Q7IH4vLnByb2ZpbGUKZWNobyAmcXVvdDtleHBvcnQgREFFTU9OX0hPTUU9JEhPTUUvLmdhaWEmcXVvdDsgJmd0OyZndDsgfi8ucHJvZmlsZQpzb3VyY2Ugfi8ucHJvZmlsZQoKbWtkaXIgLXAgfi8uZ2FpYS9jb3Ntb3Zpc29yL3VwZ3JhZGVzCm1rZGlyIC1wIH4vLmdhaWEvY29zbW92aXNvci9nZW5lc2lzL2Jpbi8KY3AgJCh3aGljaCBnYWlhZCkgfi8uZ2FpYS9jb3Ntb3Zpc29yL2dlbmVzaXMvYmluLwoKIyBWZXJpZnkgY29zbW92aXNvciBhbmQgZ2FpYWQgdmVyc2lvbnMgYXJlIHRoZSBzYW1lLgpjb3Ntb3Zpc29yIHZlcnNpb24KCiMgU3RhcnQgQ29zbW92aXNvcgpjb3Ntb3Zpc29yIHN0YXJ0IC0teC1jcmlzaXMtc2tpcC1hc3NlcnQtaW52YXJpYW50cwo="}}),t._v(" "),o("h4",{attrs:{id:"upgrading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upgrading"}},[t._v("#")]),t._v(" Upgrading")]),t._v(" "),o("p",[t._v("Cosmovisor will continually poll the "),o("code",[t._v("$DAEMON_HOME/data/upgrade-info.json")]),t._v(" for new upgrade instructions. When an upgrade is ready, node operators can download the new binary and place it under "),o("code",[t._v("$DAEMON_HOME/cosmovisor/upgrades/<name>/bin")]),t._v(" where "),o("code",[t._v("<name>")]),t._v(" is the URI-encoded name of the upgrade as specified in the upgrade module plan.")]),t._v(" "),o("p",[t._v("When the chain reaches the upgrade block height, the chain will halt and you will have to download the new binary and move it to the correct folder. For the "),o("code",[t._v("Theta")]),t._v(" upgrade, this would look like:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"IyBQcmVwYXJlIFRoZXRhIHVwZ3JhZGUgZGlyZWN0b3J5Cm1rZGlyIC1wIH4vLmdhaWEvY29zbW92aXNvci91cGdyYWRlcy9UaGV0YS9iaW4KCiMgRG93bmxvYWQgYW5kIGluc3RhbGwgdGhlIG5ldyBiaW5hcnkgdmVyc2lvbi4KY2QgJEhPTUUvZ2FpYQpnaXQgcHVsbApnaXQgY2hlY2tvdXQgJmx0O3VwZ3JhZGUtcmVsZWFzZSZndDsKbWFrZSBpbnN0YWxsCgojIE1vdmUgdGhlIG5ldyBiaW5hcnkgdG8gdGhlIFRoZXRhIHVwZ3JhZGUgZGlyZWN0b3J5CmNwICRHT1BBVEgvYmluL2dhaWFkIH4vLmdhaWEvY29zbW92aXNvci91cGdyYWRlcy9UaGV0YS9iaW4K"}}),t._v(" "),o("p",[t._v("If Cosmovisor is already running, there's nothing left to do, otherwise run "),o("code",[t._v("cosmovisor start")]),t._v(" to start the daemon.")]),t._v(" "),o("h3",{attrs:{id:"blocksync"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#blocksync"}},[t._v("#")]),t._v(" Blocksync")]),t._v(" "),o("p",[t._v("Blocksync will require navigating the Theta upgrade either via "),o("a",{attrs:{href:"#using-cosmovisor"}},[t._v("Cosmovisor")]),t._v(" or manually.")]),t._v(" "),o("p",[t._v("Manually updating "),o("code",[t._v("gaiad")]),t._v(" will require stopping the chain and installing the new binary once it halts at the expected block height (some time on March 17, TBA).")]),t._v(" "),o("p",[t._v("Logs will show "),o("code",[t._v('ERR UPGRADE "Theta" NEEDED at height: XXXX')]),t._v(". Stop "),o("code",[t._v("gaiad")]),t._v(" and run the following:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y2QgJEhPTUUvZ2FpYQpnaXQgY2hlY2tvdXQgJmx0O3RoZXRhIHJlbGVhc2UgY2FuZGlkYXRlJmd0OwptYWtlIGluc3RhbGwKCiMgVmVyaWZ5IHRoZSBjb3JyZWN0IGluc3RhbGxhdGlvbgpnYWlhZCAtdmVyc2lvbgo="}}),t._v(" "),o("p",[t._v("Once the new binary is installed, restart the Gaia daemon. Logs will show "),o("code",[t._v('INF applying upgrade "Theta" at height: XXXXX')]),t._v(". After a few minutes, the node will start syncing blocks.")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);