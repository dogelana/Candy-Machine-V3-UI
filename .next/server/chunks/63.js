"use strict";
exports.id = 63;
exports.ids = [63];
exports.modules = {

/***/ 5812:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7061);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1247);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8847);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5245);
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(canvas_confetti__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4449);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4866);
/* harmony import */ var _civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6704);
/* harmony import */ var _MultiMintButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(824);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7461);
/* harmony import */ var _NftsModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6217);
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3364);
/* harmony import */ var _hooks_useCandyMachineV3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9758);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__, _config__WEBPACK_IMPORTED_MODULE_12__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_16__, _hooks_useCandyMachineV3__WEBPACK_IMPORTED_MODULE_17__]);
([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__, _config__WEBPACK_IMPORTED_MODULE_12__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_16__, _hooks_useCandyMachineV3__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const Header = styled_components__WEBPACK_IMPORTED_MODULE_10___default().div.withConfig({
    componentId: "sc-b0f0a2b1-0"
})`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const WalletContainer = styled_components__WEBPACK_IMPORTED_MODULE_10___default().div.withConfig({
    componentId: "sc-b0f0a2b1-1"
})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: right;
  margin: 30px;
  z-index: 999;
  position: relative;

  .wallet-adapter-dropdown-list {
    background: #ffffff;
  }
  .wallet-adapter-dropdown-list-item {
    background: #000000;
  }
  .wallet-adapter-dropdown-list {
    grid-row-gap: 5px;
  }
`;
const WalletAmount = styled_components__WEBPACK_IMPORTED_MODULE_10___default().div.withConfig({
    componentId: "sc-b0f0a2b1-2"
})`
  color: black;
  width: auto;
  padding: 5px 5px 5px 16px;
  min-width: 48px;
  min-height: auto;
  border-radius: 5px;
  background-color: #85b1e2;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-weight: 500;
  line-height: 1.75;
  text-transform: uppercase;
  border: 0;
  margin: 0;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: flex-start;
  gap: 10px;
`;
const Wallet = styled_components__WEBPACK_IMPORTED_MODULE_10___default().ul.withConfig({
    componentId: "sc-b0f0a2b1-3"
})`
  flex: 0 0 auto;
  margin: 0;
  padding: 0;
`;
const ConnectButton = styled_components__WEBPACK_IMPORTED_MODULE_10___default()(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__.WalletMultiButton).withConfig({
    componentId: "sc-b0f0a2b1-4"
})`
  border-radius: 5px !important;
  padding: 6px 16px;
  background-color: #fff;
  color: #000;
  margin: 0 auto;
`;
const Card = styled_components__WEBPACK_IMPORTED_MODULE_10___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Paper).withConfig({
    componentId: "sc-b0f0a2b1-5"
})`
  display: inline-block;
  background-color: var(--countdown-background-color) !important;
  margin: 5px;
  min-width: 40px;
  padding: 24px;
  h1 {
    margin: 0px;
  }
`;
const candyMachinOps = {
    allowLists: [
        {
            list: __webpack_require__(6244),
            groupLabel: "waoed"
        }, 
    ]
};
const Home = (props)=>{
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useConnection)();
    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet)();
    const candyMachineV3 = (0,_hooks_useCandyMachineV3__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(props.candyMachineId, candyMachinOps);
    const { 0: balance , 1: setBalance  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: mintedItems , 1: setMintedItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: alertState , 1: setAlertState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        open: false,
        message: "",
        severity: undefined
    });
    const { guardLabel , guards , guardStates , prices  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const guardLabel = _config__WEBPACK_IMPORTED_MODULE_12__/* .defaultGuardGroup */ .VC;
        return {
            guardLabel,
            guards: candyMachineV3.guards[guardLabel] || candyMachineV3.guards.default || {},
            guardStates: candyMachineV3.guardStates[guardLabel] || candyMachineV3.guardStates.default || {
                isStarted: true,
                isEnded: false,
                isLimitReached: false,
                canPayFor: 10,
                messages: [],
                isWalletWhitelisted: true,
                hasGatekeeper: false
            },
            prices: candyMachineV3.prices[guardLabel] || candyMachineV3.prices.default || {
                payment: [],
                burn: [],
                gate: []
            }
        };
    }, [
        candyMachineV3.guards,
        candyMachineV3.guardStates,
        candyMachineV3.prices, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log({
            guardLabel,
            guards,
            guardStates,
            prices
        });
    }, [
        guardLabel,
        guards,
        guardStates,
        prices
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            if (wallet?.publicKey) {
                const balance = await connection.getBalance(wallet.publicKey);
                setBalance(balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.LAMPORTS_PER_SOL);
            }
        })();
    }, [
        wallet,
        connection
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (mintedItems?.length === 0) throwConfetti();
    }, [
        mintedItems
    ]);
    const openOnSolscan = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((mint)=>{
        window.open(`https://solscan.io/address/${mint}${[
            _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_16__.WalletAdapterNetwork.Devnet,
            _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_16__.WalletAdapterNetwork.Testnet
        ].includes(_config__WEBPACK_IMPORTED_MODULE_12__/* .network */ .L5) ? `?cluster=${_config__WEBPACK_IMPORTED_MODULE_12__/* .network */ .L5}` : ""}`);
    }, []);
    const throwConfetti = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        canvas_confetti__WEBPACK_IMPORTED_MODULE_7___default()({
            particleCount: 400,
            spread: 70,
            origin: {
                y: 0.6
            }
        });
    }, [
        (canvas_confetti__WEBPACK_IMPORTED_MODULE_7___default())
    ]);
    const startMint = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (quantityString = 1)=>{
        const nftGuards = Array(quantityString).fill(undefined).map((_, i)=>{
            return {
                burn: guards.burn?.nfts?.length ? {
                    mint: guards.burn.nfts[i]?.mintAddress
                } : undefined,
                payment: guards.payment?.nfts?.length ? {
                    mint: guards.payment.nfts[i]?.mintAddress
                } : undefined,
                gate: guards.gate?.nfts?.length ? {
                    mint: guards.gate.nfts[i]?.mintAddress
                } : undefined
            };
        });
        console.log({
            nftGuards
        });
        // debugger;
        candyMachineV3.mint(quantityString, {
            groupLabel: guardLabel,
            nftGuards
        }).then((items)=>{
            setMintedItems(items);
        }).catch((e)=>setAlertState({
                open: true,
                message: e.message,
                severity: "error"
            }));
    }, [
        candyMachineV3.mint,
        guards
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log({
            candyMachine: candyMachineV3.candyMachine
        });
    }, [
        candyMachineV3.candyMachine
    ]);
    const MintButton = ({ gatekeeperNetwork  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MultiMintButton__WEBPACK_IMPORTED_MODULE_13__/* .MultiMintButton */ .Vk, {
            candyMachine: candyMachineV3.candyMachine,
            gatekeeperNetwork: gatekeeperNetwork,
            isMinting: candyMachineV3.status.minting,
            setIsMinting: ()=>{},
            isActive: !!candyMachineV3.items.remaining,
            isEnded: guardStates.isEnded,
            isSoldOut: !candyMachineV3.items.remaining,
            guardStates: guardStates,
            onMint: startMint,
            prices: prices
        });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WalletContainer, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wallet, {
                                children: wallet ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(WalletAmount, {
                                    children: [
                                        (balance || 0).toLocaleString(),
                                        " SOL",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConnectButton, {})
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConnectButton, {
                                    children: "Connect Wallet"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_14__/* .Root */ .fC, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "cloud-content",
                                children: [
                                    ...Array(7)
                                ].map((cloud, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `cloud-${index + 1} cloud-block`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "cloud"
                                        })
                                    }, index))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_14__/* .StyledContainer */ .PQ, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_14__/* .Hero */ .VM, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_14__/* .Heading */ .X6, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    href: "https://www.dogelana.com",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        style: {
                                                            maxWidth: "350px"
                                                        },
                                                        src: "/logo.png",
                                                        alt: "logo"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    "There are now 222 top-tier Dogelana NFTs joining the existing Dogelana NFT collection.",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Discover 162 Legendary and 60 Perfect Dogelana NFTs in this mint that are ready to bring the collection to the next level."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "You must pay 1 SOL and burn ONE random DGLNFT to mint here."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "When minting more than one, be sure to send each new mint to a different wallet so that they will not get burnt!"
                                                    })
                                                ]
                                            }),
                                            guardStates.isStarted && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_14__/* .MintCount */ .Uk, {
                                                children: [
                                                    "Total Minted: ",
                                                    candyMachineV3.items.redeemed,
                                                    "/",
                                                    candyMachineV3.items.available,
                                                    " ",
                                                    (guards?.mintLimit?.mintCounter?.count || guards?.mintLimit?.settings?.limit) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            "(",
                                                            guards?.mintLimit?.mintCounter?.count || "0",
                                                            guards?.mintLimit?.settings?.limit && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: [
                                                                    "/",
                                                                    guards?.mintLimit?.settings?.limit,
                                                                    " "
                                                                ]
                                                            }),
                                                            "by you)"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            !guardStates.isStarted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countdown__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                date: guards.startTime,
                                                renderer: renderGoLiveDateCounter,
                                                onComplete: ()=>{
                                                    candyMachineV3.refresh();
                                                }
                                            }) : !wallet?.publicKey ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConnectButton, {
                                                children: "Connect Wallet"
                                            }) : !guardStates.isWalletWhitelisted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                children: "Mint is private."
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: !!candyMachineV3.items.remaining && guardStates.hasGatekeeper && wallet.publicKey && wallet.signTransaction ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_11__.GatewayProvider, {
                                                        wallet: {
                                                            publicKey: wallet.publicKey,
                                                            //@ts-ignore
                                                            signTransaction: wallet.signTransaction
                                                        },
                                                        gatekeeperNetwork: guards.gatekeeperNetwork,
                                                        connection: connection,
                                                        cluster: process.env.NEXT_PUBLIC_SOLANA_NETWORK || "devnet",
                                                        options: {
                                                            autoShowModal: false
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MintButton, {
                                                            gatekeeperNetwork: guards.gatekeeperNetwork
                                                        })
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MintButton, {})
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NftsModal__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        openOnSolscan: openOnSolscan,
                                        mintedItems: mintedItems || [],
                                        setMintedItems: setMintedItems
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_14__/* .NftWrapper */ .zQ, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "marquee-wrapper",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "marquee",
                                        children: [
                                            ...Array(21)
                                        ].map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: `/nfts/${index + 1}.jpg`,
                                                height: "200px",
                                                width: "200px",
                                                alt: ""
                                            }, index))
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_14__/* .NftWrapper2 */ .RW, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "marquee-wrapper second",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "marquee",
                                        children: [
                                            ...Array(21)
                                        ].map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: `/nfts/${index + 1}.png`,
                                                height: "200px",
                                                width: "200px",
                                                alt: ""
                                            }, index))
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Snackbar, {
                open: alertState.open,
                autoHideDuration: 6000,
                onClose: ()=>setAlertState({
                        ...alertState,
                        open: false
                    }),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3___default()), {
                    onClose: ()=>setAlertState({
                            ...alertState,
                            open: false
                        }),
                    severity: alertState.severity,
                    children: alertState.message
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
const renderGoLiveDateCounter = ({ days , hours , minutes , seconds  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Card, {
                elevation: 1,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: days
                    }),
                    "Days"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Card, {
                elevation: 1,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: hours
                    }),
                    "Hours"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Card, {
                elevation: 1,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: minutes
                    }),
                    "Mins"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Card, {
                elevation: 1,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: seconds
                    }),
                    "Secs"
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vk": () => (/* binding */ MultiMintButton)
/* harmony export */ });
/* unused harmony exports CTAButton, Minus, Plus, NumericField */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2610);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4866);
/* harmony import */ var _civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_5__);






const CTAButton = styled_components__WEBPACK_IMPORTED_MODULE_4___default()((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default())).withConfig({
    componentId: "sc-fd570929-0"
})`
  display: inline-block !important;
  margin: 10px auto !important;
  background-color: #fff !important;
  color: #000 !important;
  min-width: 258px !important;
  font-size: 1em !important;
  font-family: "Patrick Hand", cursive;
  font-weight: bold !important;
`;
const Minus = styled_components__WEBPACK_IMPORTED_MODULE_4___default().button.withConfig({
    componentId: "sc-fd570929-1"
})`
  font-size: 2em;
  padding: 25px 35px;
  font-weight: bold;
  line-height: 0.5px;
  color: #000;
  background: #fff;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  border: 0;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: "Patrick Hand", cursive;
  vertical-align: middle;
  transition: all linear 0.3s;

  :hover {
    border: none;
    outline: none !important;
    background: #d09a69;
  }
  :not(disabled) {
    cursor: pointer;
  }

  :not(disabled):hover {
    outline: 1px solid var(--title-text-color);
  }
`;
const Plus = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(Minus).withConfig({
    componentId: "sc-fd570929-2"
})`
  margin-left: 0;
`;
const NumericField = styled_components__WEBPACK_IMPORTED_MODULE_4___default().input.withConfig({
    componentId: "sc-fd570929-3"
})`
  font-size: 2em !important;
  padding: 0;
  vertical-align: middle;
  background-color: var(--main-text-color);
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  box-sizing: border-box;
  font-family: "Patrick Hand", cursive;
  font-weight: 500;
  line-height: 1px;
  border: none;
  text-align: center;
  border-radius: 5px;
  transition: all 0.4s ease;
  -moz-appearance: textfield;
  -webkit-appearance: none;
  margin: 0 10px;

  :hover,
  :focus {
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 40%),
      0px 6px 10px 0px rgb(0 0 0 / 34%), 0px 1px 18px 0px rgb(0 0 0 / 32%);
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
function usePrevious(value) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        ref.current = value;
    }, [
        value
    ]);
    return ref.current;
}
const deepClone = (items)=>items.map((item)=>({
            ...item
        }));
const MultiMintButton = ({ onMint , candyMachine , isMinting , setIsMinting , isEnded , isActive , isSoldOut , prices , guardStates , gatekeeperNetwork  })=>{
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: mintCount , 1: setMintCount  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
    const { requestGatewayToken , gatewayStatus  } = (0,_civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_5__.useGateway)();
    const { 0: waitForActiveToken , 1: setWaitForActiveToken  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const limit = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>guardStates.canPayFor, [
        guardStates
    ]);
    const totalSolCost = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>prices ? mintCount * (prices.payment.filter(({ kind  })=>kind === "sol").reduce((a, { price  })=>a + price, 0) + 0.012) : 0.012, [
        mintCount,
        prices
    ]);
    const totalTokenCosts = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        if (!prices) return [];
        const maxPriceHash = {};
        const payment$burn$lenth = prices.payment.length + prices.burn.length;
        let payments = deepClone(prices.payment.concat(prices.burn).concat(prices.gate)).filter((price, index)=>{
            const cacheKey = price.mint?.toString();
            if (![
                "token",
                "nft"
            ].includes(price.kind)) return false;
            const alreadyFound = !!maxPriceHash[cacheKey];
            if (index < payment$burn$lenth) price.price *= mintCount;
            price.price = maxPriceHash[cacheKey] = Math.max(maxPriceHash[cacheKey] || 0, price.price);
            return !alreadyFound;
        });
        return payments;
    }, [
        mintCount,
        prices
    ]);
    const totalTokenCostsString = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return totalTokenCosts.reduce((text, price)=>`${text} (You must also burn ONE random DGLNFT!)`, "");
    }, [
        totalTokenCosts
    ]);
    const previousGatewayStatus = usePrevious(gatewayStatus);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const fromStates = [
            _civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_5__.GatewayStatus.NOT_REQUESTED,
            _civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_5__.GatewayStatus.REFRESH_TOKEN_REQUIRED, 
        ];
        const invalidToStates = [
            ...fromStates,
            _civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_5__.GatewayStatus.UNKNOWN
        ];
        if (fromStates.find((state)=>previousGatewayStatus === state) && !invalidToStates.find((state)=>gatewayStatus === state)) {
            setIsMinting(true);
        }
    // console.log("change: ", GatewayStatus[gatewayStatus]);
    }, [
        previousGatewayStatus,
        gatewayStatus,
        setIsMinting
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (waitForActiveToken && gatewayStatus === _civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_5__.GatewayStatus.ACTIVE) {
            console.log("Minting after token active");
            setWaitForActiveToken(false);
            onMint(mintCount);
        }
    }, [
        waitForActiveToken,
        gatewayStatus,
        onMint,
        mintCount
    ]);
    function incrementValue() {
        var numericField = document.querySelector(".mint-qty");
        if (numericField) {
            var value = parseInt(numericField.value);
            if (!isNaN(value) && value < 10) {
                value++;
                numericField.value = "" + value;
                updateAmounts(value);
            }
        }
    }
    function decrementValue() {
        var numericField = document.querySelector(".mint-qty");
        if (numericField) {
            var value = parseInt(numericField.value);
            if (!isNaN(value) && value > 1) {
                value--;
                numericField.value = "" + value;
                updateAmounts(value);
            }
        }
    }
    function updateMintCount(target) {
        var value = parseInt(target.value);
        if (!isNaN(value)) {
            if (value > 10) {
                value = 10;
                target.value = "" + value;
            } else if (value < 1) {
                value = 1;
                target.value = "" + value;
            }
            updateAmounts(value);
        }
    }
    function updateAmounts(qty) {
        setMintCount(qty);
    // setTotalCost(Math.round(qty * (price + 0.012) * 1000) / 1000); // 0.012 = approx of account creation fees
    }
    const disabled = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>loading || isSoldOut || isMinting || isEnded || !isActive || mintCount > limit, [
        loading,
        isSoldOut,
        isMinting,
        isEnded,
        !isActive
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Minus, {
                        disabled: disabled || mintCount <= 1,
                        onClick: ()=>decrementValue(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            style: {
                                marginTop: "-5px !important"
                            },
                            children: "-"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NumericField, {
                        disabled: disabled,
                        type: "number",
                        className: "mint-qty",
                        step: 1,
                        min: 1,
                        max: Math.min(limit, 10),
                        value: mintCount,
                        onChange: (e)=>updateMintCount(e.target)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Plus, {
                        disabled: disabled || limit <= mintCount,
                        onClick: ()=>incrementValue(),
                        children: "+"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CTAButton, {
                        disabled: disabled,
                        onClick: async ()=>{
                            console.log("isActive gatekeeperNetwork", {
                                isActive,
                                gatekeeperNetwork
                            });
                            if (isActive && gatekeeperNetwork) {
                                if (gatewayStatus === _civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_5__.GatewayStatus.ACTIVE) {
                                    await onMint(mintCount);
                                } else {
                                    setWaitForActiveToken(true);
                                    await requestGatewayToken();
                                }
                            } else {
                                await onMint(mintCount);
                            }
                        },
                        variant: "contained",
                        children: !candyMachine ? "CONNECTING..." : isSoldOut ? "SOLD OUT" : isActive ? guardStates.messages.length ? guardStates.messages[0] : mintCount > limit ? "LIMIT REACHED" : isMinting || loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CircularProgress, {}) : "MINT" : isEnded ? "ENDED" : "UNAVAILABLE"
                    })
                ]
            }),
            !isSoldOut && isActive && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                children: [
                    "Total Cost: ",
                    totalSolCost,
                    " SOL",
                    totalTokenCostsString
                ]
            }),
            guardStates.messages?.map((m, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: m
                }, i))
        ]
    });
};


/***/ }),

/***/ 6217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NftsModal)
/* harmony export */ });
/* unused harmony export Action */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1961);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(929);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6856);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5233);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2400);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7943);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6711);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6329);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(898);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6833);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4104);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5798);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3266);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_15__);
















const Action = styled_components__WEBPACK_IMPORTED_MODULE_15___default().button.withConfig({
    componentId: "sc-3496777a-0"
})`
  font-size: 1.2em;
  padding: 15px 20px;
  font-weight: bold;
  line-height: 0.5px;
  color: #000;
  background: #fff;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  border: 0;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: "Patrick Hand", cursive;
  vertical-align: middle;
  transition: all linear 0.3s;

  :hover {
    border: none;
    outline: none !important;
    background: #d09a69;
  }
  :not(disabled) {
    cursor: pointer;
  }

  :not(disabled):hover {
    outline: 1px solid var(--title-text-color);
  }
`;
function NftsModal({ mintedItems , setMintedItems , openOnSolscan  }) {
    const handleClose = ()=>{
        setMintedItems([]);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2___default()), {
        open: !!mintedItems.length,
        keepMounted: true,
        onClose: handleClose,
        "aria-labelledby": "alert-dialog-slide-title",
        "aria-describedby": "alert-dialog-slide-description",
        maxWidth: "md",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6___default()), {
                id: "alert-dialog-slide-title",
                children: "Congratulations on your new Dogelana NFT(s)!"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5___default()), {
                    id: "alert-dialog-slide-description",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default()), {
                        container: true,
                        spacing: 1,
                        children: mintedItems.map((nft, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default()), {
                                item: true,
                                xs: 4,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            children: [
                                                nft.json.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                    component: "img",
                                                    //   alt="Contemplative Reptile"
                                                    //   height="140"
                                                    image: nft.json.image
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                    children: [
                                                        nft.json.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            gutterBottom: true,
                                                            variant: "h5",
                                                            component: "h2",
                                                            children: nft.json.name
                                                        }),
                                                        nft.json.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            variant: "body2",
                                                            color: "textSecondary",
                                                            component: "p",
                                                            children: nft.json.description
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                    children: nft.json.attributes?.map(({ trait_type , value  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                            label: `${trait_type}: ${value}`,
                                                            variant: "outlined",
                                                            style: {
                                                                margin: 2
                                                            }
                                                        }, trait_type))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Action, {
                                                style: {
                                                    width: "100%"
                                                },
                                                onClick: ()=>openOnSolscan(nft.address.toString()),
                                                children: "View on SolScan"
                                            })
                                        })
                                    ]
                                })
                            }, key))
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Action, {
                    onClick: handleClose,
                    children: "Close"
                })
            })
        ]
    });
}


/***/ }),

/***/ 6704:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gl": () => (/* binding */ candyMachineId),
/* harmony export */   "L5": () => (/* binding */ network),
/* harmony export */   "VC": () => (/* binding */ defaultGuardGroup),
/* harmony export */   "pv": () => (/* binding */ rpcHost)
/* harmony export */ });
/* unused harmony export whitelistedWallets */
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3364);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__]);
_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const network = process.env.NEXT_PUBLIC_SOLANA_NETWORK || _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletAdapterNetwork.Mainnet;
const rpcHost = "https://fittest-bold-smoke.solana-mainnet.discover.quiknode.pro/724c0f3ca62c79d270f7dcf47583e3591e0a9b31/";
const candyMachineId = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID || "2R9Gvswj6y3M9oC91KwCXsVuB66b3LksUjnU3RBTkkUn");
const defaultGuardGroup = process.env.NEXT_PUBLIC_DEFAULT_GUARD_GROUP || undefined;
const whitelistedWallets = (/* unused pure expression or super */ null && ([]));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9758:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useCandyMachineV3)
/* harmony export */ });
/* harmony import */ var _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1644);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1247);
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1057);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7525);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_0__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _solana_spl_token__WEBPACK_IMPORTED_MODULE_2__]);
([_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_0__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _solana_spl_token__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function useCandyMachineV3(candyMachineId, candyMachineOpts = {}) {
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useConnection)();
    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)();
    const [guardsAndGroups, setGuardsAndGroups] = react__WEBPACK_IMPORTED_MODULE_3___default().useState({});
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_3___default().useState({
        candyMachine: false,
        guardGroups: false,
        minting: false,
        initialFetchGuardGroupsDone: false
    });
    const [balance, setBalance] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(0);
    const [allTokens, setAllTokens] = react__WEBPACK_IMPORTED_MODULE_3___default().useState([]);
    const [nftHoldings, setNftHoldings] = react__WEBPACK_IMPORTED_MODULE_3___default().useState([]);
    const tokenHoldings = react__WEBPACK_IMPORTED_MODULE_3___default().useMemo(()=>{
        if (!nftHoldings?.length || !allTokens?.length) return [];
        return allTokens.filter((x)=>!nftHoldings.find((y)=>x.mint.equals(y.address)));
    }, [
        nftHoldings,
        allTokens
    ]);
    const [candyMachine, setCandyMachine] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(null);
    const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_3___default().useState({
        available: 0,
        remaining: 0,
        redeemed: 0
    });
    const mx = react__WEBPACK_IMPORTED_MODULE_3___default().useMemo(()=>connection && _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_0__.Metaplex.make(connection), [
        connection
    ]);
    const proofMemo = react__WEBPACK_IMPORTED_MODULE_3___default().useMemo(()=>{
        if (!candyMachineOpts.allowLists?.length) {
            return {
                merkles: {},
                verifyProof () {
                    return true;
                }
            };
        }
        if (!wallet.publicKey) {
            return {
                merkles: {},
                verifyProof () {
                    return false;
                }
            };
        }
        const merkles = candyMachineOpts.allowLists.reduce((prev, { groupLabel , list  })=>Object.assign(prev, {
                [groupLabel]: {
                    tree: (0,_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_0__.getMerkleTree)(list),
                    proof: (0,_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_0__.getMerkleProof)(list, wallet.publicKey.toString())
                }
            }), {});
        const verifyProof = (merkleRoot, label = "default")=>{
            let merkle = merkles[label];
            if (!merkle) return;
            const verifiedProof = !!merkle.proof.length;
            const compareRoot = merkle.tree.getRoot().equals(Buffer.from(merkleRoot));
            return verifiedProof && compareRoot;
        };
        return {
            merkles,
            verifyProof
        };
    }, [
        wallet.publicKey,
        candyMachineOpts.allowLists?.length
    ]);
    const fetchCandyMachine = react__WEBPACK_IMPORTED_MODULE_3___default().useCallback(async ()=>{
        return await mx.candyMachines().findByAddress({
            address: new _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(candyMachineId)
        });
    }, [
        candyMachineId
    ]);
    const refresh = react__WEBPACK_IMPORTED_MODULE_3___default().useCallback(async ()=>{
        if (!wallet.publicKey) throw new Error("Wallet not loaded yet!");
        setStatus((x)=>({
                ...x,
                candyMachine: true
            }));
        await fetchCandyMachine().then((cndy)=>{
            setCandyMachine(cndy);
            setItems({
                available: cndy.itemsAvailable.toNumber(),
                remaining: cndy.itemsRemaining.toNumber(),
                redeemed: cndy.itemsMinted.toNumber()
            });
            return cndy;
        }).catch((e)=>console.error("Error while fetching candy machine", e)).finally(()=>setStatus((x)=>({
                    ...x,
                    candyMachine: false
                })));
    }, [
        fetchCandyMachine,
        wallet.publicKey
    ]);
    const mint = react__WEBPACK_IMPORTED_MODULE_3___default().useCallback(async (quantityString = 1, opts = {})=>{
        if (!guardsAndGroups[opts.groupLabel || "default"]) throw new Error("Unknown guard group label");
        const allowList = opts.groupLabel && proofMemo.merkles[opts.groupLabel] && {
            proof: proofMemo.merkles[opts.groupLabel].proof
        };
        let nfts = [];
        try {
            if (!candyMachine) throw new Error("Candy Machine not loaded yet!");
            setStatus((x)=>({
                    ...x,
                    minting: true
                }));
            const transactionBuilders = [];
            if (allowList) {
                if (!proofMemo.merkles[opts.groupLabel || "default"].proof.length) throw new Error("User is not in allowed list");
                transactionBuilders.push((0,_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_0__.callCandyGuardRouteBuilder)(mx, {
                    candyMachine,
                    guard: "allowList",
                    group: opts.groupLabel,
                    settings: {
                        path: "proof",
                        merkleProof: proofMemo.merkles[opts.groupLabel || "default"].proof
                    }
                }));
            }
            for(let index = 0; index < quantityString; index++){
                transactionBuilders.push(await (0,_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_0__.mintFromCandyMachineBuilder)(mx, {
                    candyMachine,
                    collectionUpdateAuthority: candyMachine.authorityAddress,
                    group: opts.groupLabel,
                    guards: {
                        nftBurn: opts.nftGuards && opts.nftGuards[index]?.burn,
                        nftPayment: opts.nftGuards && opts.nftGuards[index]?.payment,
                        nftGate: opts.nftGuards && opts.nftGuards[index]?.gate,
                        allowList
                    }
                }));
            }
            const blockhash = await mx.rpc().getLatestBlockhash();
            const transactions = transactionBuilders.map((t)=>t.toTransaction(blockhash));
            const signers = {};
            transactions.forEach((tx, i)=>{
                tx.feePayer = wallet.publicKey;
                tx.recentBlockhash = blockhash.blockhash;
                transactionBuilders[i].getSigners().forEach((s)=>{
                    if ("signAllTransactions" in s) signers[s.publicKey.toString()] = s;
                    else if ("secretKey" in s) tx.partialSign(s);
                    else if ("_signer" in s) tx.partialSign(s._signer);
                });
            });
            let signedTransactions = transactions;
            for(let signer in signers){
                await signers[signer].signAllTransactions(transactions);
            }
            if (allowList) {
                const allowListCallGuardRouteTx = signedTransactions.shift();
                const allowListCallGuardRouteTxBuilder = transactionBuilders.shift();
                await mx.rpc().sendAndConfirmTransaction(allowListCallGuardRouteTx, {
                    commitment: "processed"
                });
            }
            const output = await Promise.all(signedTransactions.map((tx, i)=>{
                return mx.rpc().sendAndConfirmTransaction(tx, {
                    commitment: "finalized"
                }).then((tx)=>({
                        ...tx,
                        context: transactionBuilders[i].getContext()
                    }));
            }));
            nfts = await Promise.all(output.map(({ context  })=>mx.nfts().findByMint({
                    mintAddress: context.mintSigner.publicKey,
                    tokenAddress: context.tokenAddress
                }).catch((e)=>null)));
            Object.values(guardsAndGroups).forEach((guards)=>{
                if (guards.mintLimit?.mintCounter) guards.mintLimit.mintCounter.count += nfts.length;
            });
        // setItems((x) => ({
        //   ...x,
        //   remaining: x.remaining - nfts.length,
        //   redeemed: x.redeemed + nfts.length,
        // }));
        } catch (error) {
            let message = error.msg || "Minting failed! Please try again!";
            if (!error.msg) {
                if (!error.message) {
                    message = "Transaction Timeout! Please try again.";
                } else if (error.message.indexOf("0x138")) {} else if (error.message.indexOf("0x137")) {
                    message = `SOLD OUT!`;
                } else if (error.message.indexOf("0x135")) {
                    message = `Insufficient funds to mint. Please fund your wallet.`;
                }
            } else {
                if (error.code === 311) {
                    message = `SOLD OUT!`;
                } else if (error.code === 312) {
                    message = `Minting period hasn't started yet.`;
                }
            }
            console.error(error);
            throw new Error(message);
        } finally{
            setStatus((x)=>({
                    ...x,
                    minting: false
                }));
            refresh();
            return nfts.filter((a)=>a);
        }
    }, [
        candyMachine,
        guardsAndGroups,
        mx,
        wallet?.publicKey,
        proofMemo,
        refresh
    ]);
    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{
        if (!mx || !wallet.publicKey) return;
        console.log("useEffact([mx, wallet.publicKey])");
        mx.use((0,_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_0__.walletAdapterIdentity)(wallet));
        mx.rpc().getBalance(wallet.publicKey).then((x)=>x.basisPoints.toNumber()).then(setBalance).catch((e)=>console.error("Error to fetch wallet balance", e));
        mx.nfts().findAllByOwner({
            owner: wallet.publicKey
        }).then((x)=>setNftHoldings(x.filter((a)=>a.model == "metadata"))).catch((e)=>console.error("Failed to fetch wallet nft holdings", e));
        (async (walletAddress)=>{
            const tokenAccounts = (await connection.getParsedTokenAccountsByOwner(walletAddress, {
                programId: _solana_spl_token__WEBPACK_IMPORTED_MODULE_2__.TOKEN_PROGRAM_ID
            })).value.filter((x)=>parseInt(x.account.data.parsed.info.tokenAmount.amount) > 1);
            return tokenAccounts.map((x)=>({
                    mint: new _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(x.account.data.parsed.info.mint),
                    balance: parseInt(x.account.data.parsed.info.tokenAmount.amount),
                    decimals: x.account.data.parsed.info.tokenAmount.decimals
                }));
        })(wallet.publicKey).then(setAllTokens);
    }, [
        mx,
        wallet.publicKey
    ]);
    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{
        refresh().catch((e)=>console.error("Error while fetching candy machine", e));
    }, [
        refresh
    ]);
    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{
        const walletAddress = wallet.publicKey;
        if (!walletAddress || !candyMachine) return;
        console.log("useEffact([mx, wallet, nftHoldings, proofMemo, candyMachine])");
        (async ()=>{
            const guards = {
                default: await (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .parseGuardGroup */ .mg)({
                    guards: candyMachine.candyGuard.guards,
                    candyMachine,
                    nftHoldings,
                    verifyProof: proofMemo.verifyProof,
                    walletAddress
                }, mx)
            };
            await Promise.all(candyMachine.candyGuard.groups.map(async (x)=>{
                guards[x.label] = await (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .parseGuardGroup */ .mg)({
                    guards: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .mergeGuards */ .Gv)([
                        candyMachine.candyGuard.guards,
                        x.guards
                    ]),
                    label: x.label,
                    candyMachine,
                    nftHoldings,
                    verifyProof: proofMemo.verifyProof,
                    walletAddress
                }, mx);
            }));
            setGuardsAndGroups(guards);
        })();
    }, [
        wallet.publicKey,
        nftHoldings,
        proofMemo,
        candyMachine
    ]);
    const prices = react__WEBPACK_IMPORTED_MODULE_3___default().useMemo(()=>{
        // if (!status.initialFetchGuardGroupsDone) return {};
        // const prices = {
        // };
        return Object.entries(guardsAndGroups).reduce((groupPayments, [label, guards])=>{
            // console.log(label, guards);
            return Object.assign(groupPayments, {
                [label]: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .guardToPaymentUtil */ .ah)(guards)
            });
        }, {});
    }, [
        guardsAndGroups
    ]);
    const guardStates = react__WEBPACK_IMPORTED_MODULE_3___default().useMemo(()=>{
        return Object.entries(guardsAndGroups).reduce((groupPayments, [label, guards])=>Object.assign(groupPayments, {
                [label]: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .parseGuardStates */ .mj)({
                    guards: guards,
                    candyMachine,
                    walletAddress: wallet.publicKey,
                    tokenHoldings,
                    balance
                })
            }), {});
    }, [
        guardsAndGroups,
        tokenHoldings,
        balance
    ]);
    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{
        console.log({
            guardsAndGroups,
            guardStates,
            prices
        });
    }, [
        guardsAndGroups,
        guardStates,
        prices
    ]);
    return {
        candyMachine,
        guards: guardsAndGroups,
        guardStates,
        status,
        items,
        merkles: proofMemo.merkles,
        prices,
        mint,
        refresh
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ah": () => (/* binding */ guardToPaymentUtil),
  "Gv": () => (/* binding */ mergeGuards),
  "mg": () => (/* binding */ parseGuardGroup),
  "mj": () => (/* binding */ parseGuardStates)
});

// UNUSED EXPORTS: fetchMintLimit, guardToLimitUtil, mintLimitCaches, tokenSymbolCaches, updateTokenSymbolAndDecimalsFromChainAsync

// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(7831);
// EXTERNAL MODULE: external "borsh"
var external_borsh_ = __webpack_require__(6771);
;// CONCATENATED MODULE: ./src/borsh/mintCounter.ts

class MintCounterBorsh {
    constructor(args){
        Object.assign(this, args);
    }
    static schema = new Map([
        [
            MintCounterBorsh,
            {
                kind: "struct",
                fields: [
                    //   ["accountDiscriminator", "Uint8Array"],
                    [
                        "count",
                        "u16"
                    ], 
                ]
            }, 
        ], 
    ]);
    static fromBuffer(buffer) {
        return (0,external_borsh_.deserialize)(MintCounterBorsh.schema, MintCounterBorsh, buffer);
    }
}

;// CONCATENATED MODULE: ./src/hooks/utils.ts


const guardToPaymentUtil = (guards)=>{
    const paymentsRequired = {
        payment: [],
        gate: [],
        burn: []
    };
    if (!guards) return paymentsRequired;
    // console.log("guardToPaymentUtil", { guards });
    const actions = [
        "payment",
        "burn",
        "gate"
    ];
    if (actions.find((action)=>guards[action])) {
        if (guards.payment?.sol) {
            paymentsRequired.payment.push({
                label: "SOL",
                price: guards.payment.sol.amount / web3_js_.LAMPORTS_PER_SOL,
                kind: "sol"
            });
        }
        for (let action of actions){
            if (guards[action]?.token) {
                paymentsRequired[action].push({
                    label: guards[action].token.symbol || "token",
                    price: guards[action].token.amount / 10 ** guards[action].token.decimals,
                    decimals: guards[action].token.decimals,
                    mint: guards[action].token.mint,
                    kind: "token"
                });
            }
            if (guards[action]?.nfts?.length) {
                paymentsRequired[action].push({
                    label: guards[action].nfts[0].symbol || "NFT",
                    mint: guards[action].requiredCollection,
                    price: 1,
                    kind: "nft"
                });
            }
        }
    }
    return paymentsRequired;
};
const mintLimitCaches = {};
const fetchMintLimit = (mx, candyMachine, guardsInput$mintLimit, rerenderer)=>{
    const cacheKey = `${guardsInput$mintLimit.id}-${candyMachine.candyGuard.address.toString()}-${mx.identity().publicKey.toString()}`;
    if (!mintLimitCaches[cacheKey]) {
        mintLimitCaches[cacheKey] = (async ()=>{
            const mintLimit = {
                settings: guardsInput$mintLimit
            };
            if (!mintLimit.pda) mintLimit.pda = await mx.candyMachines().pdas().mintLimitCounter({
                candyGuard: candyMachine.candyGuard.address,
                id: guardsInput$mintLimit.id,
                candyMachine: candyMachine.address,
                user: mx.identity().publicKey
            });
            if (mintLimit.pda) {
                mintLimit.accountInfo = await mx.connection.getAccountInfo(mintLimit.pda);
                if (mintLimit.accountInfo) mintLimit.mintCounter = MintCounterBorsh.fromBuffer(mintLimit.accountInfo.data);
            }
            if (rerenderer) setTimeout(()=>rerenderer(), 100);
            return mintLimit;
        })();
    }
    return mintLimitCaches[cacheKey];
};
const mergeGuards = (guardsArray)=>{
    const guards = guardsArray.reduce((acc, guards)=>{
        acc = {
            ...acc
        };
        Object.entries(guards).forEach(([key, guard])=>{
            if (guard) acc[key] = guard;
        });
        return acc;
    } //,
    );
    //   console.log({ guards });
    return guards;
};
const parseGuardGroup = async ({ candyMachine , guards: guardsInput , label , walletAddress , nftHoldings , verifyProof  }, mx)=>{
    const guardsParsed = {};
    //   console.log(guardsInput);
    // Check for start date
    if (guardsInput.startDate) {
        const date = new Date(guardsInput.startDate.date.toNumber() * 1000);
        if (date.getTime() > Date.now()) {
            guardsParsed.startTime = date;
        } else {
            guardsParsed.startTime = null;
        }
    }
    // Check for end date
    if (guardsInput.endDate) {
        guardsParsed.endTime = new Date(guardsInput.endDate.date.toNumber() * 1000);
    }
    // Check for mint limit
    if (guardsInput.mintLimit) {
        guardsParsed.mintLimit = {
            settings: guardsInput.mintLimit
        };
        if (mx) await fetchMintLimit(mx, candyMachine, guardsInput.mintLimit).then((mintLimit)=>{
            guardsParsed.mintLimit = mintLimit;
        }).catch(console.error);
    }
    // Check for redeemed list
    if (guardsInput.redeemedAmount) {
        guardsParsed.redeemLimit = guardsInput.redeemedAmount.maximum.toNumber();
    }
    // Check for payment guards
    // guardsParsed.payments = []
    if (guardsInput.solPayment) {
        guardsParsed.payment = {
            sol: {
                amount: guardsInput.solPayment.amount.basisPoints.toNumber(),
                decimals: guardsInput.solPayment.amount.currency.decimals
            }
        };
    // guardsParsed.payments.push({
    //   criteria: 'pay',
    //   type: 'sol',
    //   amount: guardsInput.solPayment.amount.basisPoints.toNumber(),
    //   decimals: guardsInput.solPayment.amount.currency.decimals
    // })
    }
    if (guardsInput.tokenPayment) {
        guardsParsed.payment = {
            token: {
                mint: guardsInput.tokenPayment.mint,
                symbol: guardsInput.tokenPayment.amount.currency.symbol,
                amount: guardsInput.tokenPayment.amount.basisPoints.toNumber(),
                decimals: guardsInput.tokenPayment.amount.currency.decimals
            }
        };
        // guardsParsed.payments.push({
        //   criteria: 'pay',
        //   type: 'token',
        //   mint: guardsInput.tokenPayment.mint,
        //   symbol: guardsInput.tokenPayment.amount.currency.symbol,
        //   amount: guardsInput.tokenPayment.amount.basisPoints.toNumber(),
        //   decimals: guardsInput.tokenPayment.amount.currency.decimals,
        // })
        await updateTokenSymbolAndDecimalsFromChainAsync(mx, guardsParsed.payment.token);
    }
    if (guardsInput.nftPayment) {
        guardsParsed.payment = {
            nfts: nftHoldings.filter((y)=>y.collection?.address.equals(guardsInput.nftPayment.requiredCollection)),
            requiredCollection: guardsInput.nftPayment.requiredCollection
        };
    // guardsParsed.payments.push({
    //   criteria: 'pay',
    //   type: 'nft',
    //   nfts: nftHoldings.filter((y) =>
    //     y.collection?.address.equals(guardsInput.nftPayment.requiredCollection)
    //   ),
    // })
    }
    // Check for burn guards
    if (guardsInput.tokenBurn) {
        guardsParsed.burn = {
            token: {
                mint: guardsInput.tokenBurn.mint,
                symbol: guardsInput.tokenBurn.amount.currency.symbol,
                amount: guardsInput.tokenBurn.amount.basisPoints.toNumber(),
                decimals: guardsInput.tokenBurn.amount.currency.decimals
            }
        };
        // guardsParsed.payments.push({
        //   criteria: 'pay',
        //   type: 'token',
        //   mint: guardsInput.tokenBurn.mint,
        //   symbol: guardsInput.tokenBurn.amount.currency.symbol,
        //   amount: guardsInput.tokenBurn.amount.basisPoints.toNumber(),
        //   decimals: guardsInput.tokenBurn.amount.currency.decimals,
        // })
        await updateTokenSymbolAndDecimalsFromChainAsync(mx, guardsParsed.burn.token);
    }
    if (guardsInput.nftBurn) {
        guardsParsed.burn = {
            nfts: nftHoldings.filter((y)=>y.collection?.address.equals(guardsInput.nftBurn.requiredCollection)),
            requiredCollection: guardsInput.nftBurn.requiredCollection
        };
    // guardsParsed.payments.push({
    //   criteria: 'pay',
    //   type: 'nft',
    //   nfts: nftHoldings.filter((y) =>
    //     y.collection?.address.equals(guardsInput.nftBurn.requiredCollection)
    //   )
    // })
    }
    // Check for gates
    if (guardsInput.tokenGate) {
        guardsParsed.gate = {
            token: {
                mint: guardsInput.tokenGate.mint,
                symbol: guardsInput.tokenGate.amount.currency.symbol,
                amount: guardsInput.tokenGate.amount.basisPoints.toNumber(),
                decimals: guardsInput.tokenGate.amount.currency.decimals
            }
        };
        // guardsParsed.payments.push({
        //   criteria: 'have',
        //   type: 'token',
        //   mint: guardsInput.tokenGate.mint,
        //     symbol: guardsInput.tokenGate.amount.currency.symbol,
        //     amount: guardsInput.tokenGate.amount.basisPoints.toNumber(),
        //     decimals: guardsInput.tokenGate.amount.currency.decimals,
        // })
        await updateTokenSymbolAndDecimalsFromChainAsync(mx, guardsParsed.gate.token);
    }
    if (guardsInput.nftGate) {
        guardsParsed.gate = {
            nfts: nftHoldings.filter((y)=>y.collection?.address.equals(guardsInput.nftGate.requiredCollection)),
            requiredCollection: guardsInput.nftGate.requiredCollection
        };
    // guardsParsed.payments.push({
    //   criteria: 'have',
    //   type: 'nft',
    //   nfts: nftHoldings.filter((y) =>
    //     y.collection?.address.equals(guardsInput.nftGate.requiredCollection)
    //   )
    // })
    }
    // Check for whitelisted addresses
    if (guardsInput.addressGate || guardsInput.allowList) {
        let allowed = [];
        if (guardsInput.addressGate) allowed.push(guardsInput.addressGate.address);
        if (guardsInput.allowList?.merkleRoot) {
            const isValid = verifyProof(guardsInput.allowList.merkleRoot, label || "default");
            if (isValid) allowed.push(walletAddress);
        }
        guardsParsed.allowed = allowed;
    }
    if (guardsInput.gatekeeper) {
        guardsParsed.gatekeeperNetwork = guardsInput.gatekeeper.network;
    }
    return guardsParsed;
};
const parseGuardStates = ({ guards , candyMachine , walletAddress , tokenHoldings , balance  })=>{
    const states = {
        isStarted: true,
        isEnded: false,
        isLimitReached: false,
        canPayFor: 10,
        messages: [],
        isWalletWhitelisted: true,
        hasGatekeeper: false
    };
    // if (guards.payment?.nfts?.length) debugger;
    // Check for start date
    if (guards.startTime) {
        states.isStarted = guards.startTime.getTime() < Date.now();
    }
    // Check for start date
    if (guards.endTime) {
        states.isEnded = guards.endTime.getTime() < Date.now();
    }
    // Check for mint limit
    if (guards.mintLimit) {
        let canPayFor = typeof guards.mintLimit?.settings?.limit == "number" ? guards.mintLimit.settings.limit - (guards.mintLimit?.mintCounter?.count || 0) : 10;
        states.isLimitReached = !canPayFor;
        if (!canPayFor) states.messages.push("Thanks for minting!");
        states.canPayFor = Math.min(states.canPayFor, canPayFor);
    }
    // Check for redeemed list
    if (typeof guards.redeemLimit == "number") {
        let canPayFor1 = Math.max(guards.redeemLimit - candyMachine.itemsMinted.toNumber(), 0);
        states.isLimitReached = !canPayFor1;
        if (!canPayFor1) states.messages.push("Limit reached!");
        states.canPayFor = Math.min(states.canPayFor, canPayFor1);
    }
    // Check for payment guards
    if (guards.payment?.sol) {
        let canPayFor2 = Math.floor(balance / (guards.payment?.sol.amount + 0.012 * web3_js_.LAMPORTS_PER_SOL));
        if (!canPayFor2) states.messages.push("Insufficient SOL!");
        states.canPayFor = Math.min(states.canPayFor, canPayFor2);
    }
    if (guards.payment?.token) {
        const tokenAccount = tokenHoldings.find((x)=>x.mint.equals(guards.payment?.token.mint));
        let canPayFor3 = tokenAccount ? Math.floor(tokenAccount.balance / guards.payment?.token.amount) : 0;
        if (!canPayFor3) states.messages.push(`Insufficient ${guards.payment?.token.symbol}!`);
        states.canPayFor = Math.min(states.canPayFor, canPayFor3);
    }
    if (guards.payment?.nfts) {
        let canPayFor4 = guards.payment?.nfts.length || 0;
        if (!canPayFor4) states.messages.push(`Insufficient NFTs!`);
        states.canPayFor = Math.min(states.canPayFor, canPayFor4);
    }
    // Check for burn guards
    if (guards.burn?.token) {
        const tokenAccount1 = tokenHoldings.find((x)=>x.mint.equals(guards.burn?.token.mint));
        let canPayFor5 = tokenAccount1 ? Math.floor(tokenAccount1.balance / guards.burn?.token.amount) : 0;
        if (!canPayFor5) states.messages.push(`Don't have enough ${guards.burn?.token.symbol || "token"} to burn.`);
        states.canPayFor = Math.min(states.canPayFor, canPayFor5);
    }
    if (guards.burn?.nfts) {
        let canPayFor6 = guards.burn?.nfts.length || 0;
        if (!canPayFor6) states.messages.push(`Don't have enough nfts to burn.`);
        states.canPayFor = Math.min(states.canPayFor, canPayFor6);
    }
    // Check for gates
    if (guards.gate?.token) {
        const tokenAccount2 = tokenHoldings.find((x)=>x.mint.equals(guards.gate?.token.mint));
        let canPayFor7 = tokenAccount2 && tokenAccount2.balance > guards.gate?.token.amount ? 10 : 0;
        if (!canPayFor7) states.messages.push(`Insufficient DGLN!`);
        states.canPayFor = Math.min(states.canPayFor, canPayFor7);
    }
    if (guards.gate?.nfts) {
        let canPayFor8 = guards.burn?.nfts.length ? 10 : 0;
        if (!canPayFor8) states.messages.push(`Don't have enough nfts to pass gate.`);
        states.canPayFor = Math.min(states.canPayFor, canPayFor8);
    }
    // Check for whitelisted addresses
    if (guards.allowed) {
        states.isWalletWhitelisted = !!guards.allowed.find((x)=>x.equals(walletAddress));
        if (!states.isWalletWhitelisted) states.messages.push(`Not allowed to mint.`);
    }
    if (guards.gatekeeperNetwork) {
        states.hasGatekeeper = true;
    }
    return states;
};
const tokenSymbolCaches = {};
const updateTokenSymbolAndDecimalsFromChainAsync = async (mx, token)=>{
    const chacheKey = token.mint.toString();
    if (!tokenSymbolCaches[chacheKey]) {
        tokenSymbolCaches[chacheKey] = mx.tokens().findMintByAddress({
            address: token.mint
        }).then((mint)=>mint.currency).catch(()=>{
            delete tokenSymbolCaches[chacheKey];
        });
    }
    const res = await tokenSymbolCaches[chacheKey];
    if (res) {
        token.decimals = res.decimals;
        token.symbol = res.symbol;
    }
};
const guardToLimitUtil = (guards, defaultLimit = 10)=>(guards.payment?.nfts ? guards.payment.nfts.length : guards.burn?.nfts ? guards.burn.nfts.length : guards.gate?.nfts ? guards.gate.nfts.length : guards.redeemLimit) || (guards.mintLimit?.settings?.limit ? guards.mintLimit?.settings?.limit - (guards.mintLimit?.mintCounter?.count || 0) : defaultLimit);


/***/ }),

/***/ 8063:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1247);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8847);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7280);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5812);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6704);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__, _Home__WEBPACK_IMPORTED_MODULE_6__, _config__WEBPACK_IMPORTED_MODULE_7__]);
([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__, _Home__WEBPACK_IMPORTED_MODULE_6__, _config__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.createTheme)({
    palette: {
        type: "dark"
    },
    overrides: {
        MuiButtonBase: {
            root: {
                justifyContent: "flex-start"
            }
        },
        MuiButton: {
            root: {
                textTransform: undefined,
                padding: "12px 16px"
            },
            startIcon: {
                marginRight: 8
            },
            endIcon: {
                marginLeft: 8
            }
        }
    }
});
const Main = ({})=>{
    // Custom RPC endpoint.
    const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>_config__WEBPACK_IMPORTED_MODULE_7__/* .rpcHost */ .pv, []);
    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
    // Only the wallets you configure here will be compiled into your application, and only the dependencies
    // of wallets that your users connect to will be loaded.
    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>[
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__.LedgerWalletAdapter(),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__.PhantomWalletAdapter(),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__.SafePalWalletAdapter(),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__.SlopeWalletAdapter({
                network: _config__WEBPACK_IMPORTED_MODULE_7__/* .network */ .L5
            }),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__.SolflareWalletAdapter({
                network: _config__WEBPACK_IMPORTED_MODULE_7__/* .network */ .L5
            }),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__.SolletExtensionWalletAdapter(),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__.SolletWalletAdapter(),
            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__.SolongWalletAdapter(), 
        ], []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
        theme: theme,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.ConnectionProvider, {
            endpoint: endpoint,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.WalletProvider, {
                wallets: wallets,
                autoConnect: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__.WalletModalProvider, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Home__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        candyMachineId: _config__WEBPACK_IMPORTED_MODULE_7__/* .candyMachineId */ .Gl
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PQ": () => (/* binding */ StyledContainer),
/* harmony export */   "RW": () => (/* binding */ NftWrapper2),
/* harmony export */   "Uk": () => (/* binding */ MintCount),
/* harmony export */   "VM": () => (/* binding */ Hero),
/* harmony export */   "X6": () => (/* binding */ Heading),
/* harmony export */   "fC": () => (/* binding */ Root),
/* harmony export */   "zQ": () => (/* binding */ NftWrapper)
/* harmony export */ });
/* unused harmony export MintButtonStyled */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div").withConfig({
    componentId: "sc-bf53aa40-0"
})`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 60px;
  border-top: ${(p)=>p.border ? "1px solid #CDD1D4" : ""};
  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 0 18px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 18px;
  }
`;
const Root = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div").withConfig({
    componentId: "sc-bf53aa40-1"
})`
  position: relative;
  z-index: 99;
  .cloud-content {
    bottom: 0;
    left: 0;
    padding-top: 50px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: -1;
  }

  .cloud-block {
    position: absolute;
    opacity: 0.4;
  }
  .cloud-1 {
    top: 50px;
  }
  .cloud-2 {
    top: 40vh;
  }
  .cloud-3 {
    top: 20vh;
  }
  .cloud-4 {
    top: 40vh;
  }
  .cloud-5 {
    top: 65vh;
  }
  .cloud-6 {
    top: 35vh;
  }
  .cloud-7 {
    bottom: 30px;
  }

  .cloud-1 {
    animation: animate-1 32s linear infinite;
    -webkit-animation: animate-1 83s linear infinite;
    transform: scale(0.75);
    -webkit-transform: scale(0.95);
  }

  .MuiCard-root {
    width: 30em;
  }

  .cloud-2 {
    animation: animate-2 37s linear infinite;
    -webkit-animation: animate-2 87s linear infinite;
    transform: scale(0.45);
    -webkit-transform: scale(0.45);
  }

  .cloud-3 {
    animation: animate-3 45s linear infinite;
    -webkit-animation: animate-3 85s linear infinite;
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
  }

  .cloud-4 {
    animation: animate-4 50s linear infinite;
    -webkit-animation: animate-4 100s linear infinite;
    transform: scale(0.8);
    -webkit-transform: scale(0.2);
  }

  .cloud-5 {
    animation: animate-5 55s linear infinite;
    -webkit-animation: animate-5 105s linear infinite;
    transform: scale(0.55);
    -webkit-transform: scale(0.55);
  }

  .cloud-6 {
    animation: animate-6 60s linear infinite;
    -webkit-animation: animate-6 110s linear infinite;
    transform: scale(0.85);
    -webkit-transform: scale(0.85);
  }

  .cloud-7 {
    animation: animate-7 65s linear infinite;
    -webkit-animation: animate-7 115s linear infinite;
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
  }

  /* Cloud Objects */

  .cloud {
    width: 350px;
    height: 350px;
    position: relative;
    background: url(/mf.png);
    background-repeat: no-repeat;
  }

  // .cloud:after,
  // .cloud:before {
  //   background: #fff;
  //   content: '';
  //   position: absolute;
  //   z-index: -1;
  // }

  // .cloud:after {
  //   width: 100px;
  //   height: 100px;
  //   left: 50px;
  //   top: -50px;
  //   border-radius: 100px;
  // }

  // .cloud:before {
  //   width: 180px;
  //   height: 180px;
  //   right: 50px;
  //   top: -90px;
  //   border-radius: 200px;
  // }

  /* KEYFRAMES */

  @keyframes animate-1 {
    0% {
      left: 90%;
    }
    10% {
      left: 110%;
    }
    10.001% {
      left: -10%;
    }
    100% {
      left: 90%;
    }
  }

  @keyframes animate-2 {
    0% {
      left: 75%;
    }
    25% {
      left: 110%;
    }
    25.001% {
      left: -10%;
    }
    100% {
      left: 75%;
    }
  }

  @keyframes animate-3 {
    0% {
      left: 60%;
    }
    40% {
      left: 110%;
    }
    40.001% {
      left: -10%;
    }
    100% {
      left: 60%;
    }
  }

  @keyframes animate-4 {
    0% {
      left: 45%;
    }
    55% {
      left: 110%;
    }
    55.001% {
      left: -10%;
    }
    100% {
      left: 45%;
    }
  }

  @keyframes animate-5 {
    0% {
      left: 30%;
    }
    70% {
      left: 110%;
    }
    70.001% {
      left: -10%;
    }
    100% {
      left: 30%;
    }
  }

  @keyframes animate-6 {
    0% {
      left: 10%;
    }
    90% {
      left: 110%;
    }
    90.001% {
      left: -10%;
    }
    100% {
      left: 10%;
    }
  }

  @keyframes animate-7 {
    0% {
      left: -10%;
    }

    99.99% {
      left: 110%;
    }
    100% {
      left: -10%;
    }
  }

  /* ANIMATIONS */

  .sun {
    margin: 0px auto;
    width: 170px;
    height: 170px;
    border-radius: 100%;
    background-color: #fcc952;
    background-image: linear-gradient(
      145deg,
      rgba(252, 201, 82, 1) 0%,
      rgba(252, 201, 82, 1) 61%,
      rgba(248, 160, 55, 1) 100%
    );
    -webkit-background-image: linear-gradient(
      145deg,
      rgba(252, 201, 82, 1) 0%,
      rgba(252, 201, 82, 1) 61%,
      rgba(248, 160, 55, 1) 100%
    );
    box-shadow: inset 2px 2px 8px 0 rgba(252, 201, 82, 0),
      inset -3px -3px 8px 0 rgba(245, 169, 76, 0),
      6px 6px 18px 0 rgba(204, 123, 35, 0.35),
      -6px -6px 18px 0 rgba(205, 157, 35, 0.5);
    -webkit-box-shadow: inset 2px 2px 8px 0 rgba(252, 201, 82, 0),
      inset -3px -3px 8px 0 rgba(245, 169, 76, 0),
      6px 6px 18px 0 rgba(204, 123, 35, 0.35),
      -6px -6px 18px 0 rgba(205, 157, 35, 0.5);
    position: relative;
    z-index: 2;
  }
  .sunlight-content {
    bottom: 0;
    left: 50%;
    position: fixed;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    width: max-content;
    height: max-content;
  }
  .sun-face {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
  }
  .eyes-block {
    width: 80px;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
  }
  .eyes {
    background-color: #2e261a;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    display: inline-flex;
    display: -webkit-inline-flex;
    position: relative;
  }
  .eyes:before {
    content: '';
    height: 6px;
    width: 6px;
    display: block;
    position: absolute;
    top: 3px;
    background-color: #fff;
    border-radius: 100%;
    animation: Rotate-eye 4s ease-in-out alternate infinite;
    -webkit-animation: Rotate-eye 4s ease-in-out alternate infinite;
  }
  .mouth {
    width: 18px;
    height: 18px;
    background-color: #2f261a;
    text-align: center;
    margin: 0px auto;
    position: absolute;
    overflow: hidden;
    border-radius: 0px 0px 25px 25px;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    top: 100%;
    animation: scale-mouth 2s linear infinite;
    -webkit-animation: scale-mouth 2s linear infinite;
  }
  .tongue {
    width: 100%;
    height: 16px;
    background-color: #f54b2e;
    border-radius: 100%;
    position: absolute;
    bottom: -6px;
    left: 0;
    animation: scale-tongue 2s linear infinite;
    -webkit-animation: scale-tongue 2s linear infinite;
  }

  .sunlight-box {
    filter: drop-shadow(0px 0px 12px rgba(252, 201, 82, 0.8));
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    animation: Rotate 20s linear infinite;
    -webkit-animation: Rotate 20s linear infinite;
  }
  .sunlight-box span {
    height: 170px;
    width: 170px;
    background-color: #f8a037;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
  }
  .sunlight-box span:first-child {
    transform: rotate(30deg);
    -webkit-transform: rotate(30deg);
  }
  .sunlight-box span:nth-child(2) {
    transform: rotate(60deg);
    -webkit-transform: rotate(60deg);
  }
  .sunlight-box span:nth-child(3) {
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
  }

  /* keyframe animation */
  @keyframes Rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes Rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes Rotate-eye {
    0%,
    35% {
      right: 3px;
    }
    65%,
    100% {
      right: 10px;
    }
  }

  @-webkit-keyframes Rotate-eye {
    0%,
    35% {
      right: 3px;
    }
    65%,
    100% {
      right: 10px;
    }
  }

  @keyframes scale-mouth {
    0% {
      height: 18px;
    }

    100% {
      height: 24px;
    }
  }

  @-webkit-keyframes scale-mouth {
    0% {
      height: 18px;
    }

    100% {
      height: 24px;
    }
  }

  @keyframes scale-tongue {
    0% {
      height: 16px;
    }

    100% {
      height: 20px;
    }
  }

  @-webkit-keyframes scale-tongue {
    0% {
      height: 16px;
    }

    100% {
      height: 20px;
    }
  }

  /* Responsive media query */
  @media screen and (max-width: 767px) {
    .sun {
      width: 140px;
      height: 140px;
    }
    .sunlight-box span {
      height: 140px;
      width: 140px;
    }
    .cloud {
      width: 150px;
      height: 260px;
    }
    // .cloud:before {
    //   width: 120px;
    //   height: 120px;
    //   top: -80px;
    //   right: 50px;
    // }
    .eyes-block {
      width: 70px;
    }
    .eyes {
      width: 18px;
      height: 18px;
    }
    .eyes:before {
      height: 5px;
      width: 5px;
    }
    .mouth {
      width: 15px;
      height: 15px;
    }
    .tongue {
      bottom: -8px;
    }
    /* KEYFRAMES */

    @keyframes scale-mouth {
      0% {
        height: 15px;
      }

      100% {
        height: 22px;
      }
    }

    @-webkit-keyframes scale-mouth {
      0% {
        height: 15px;
      }

      100% {
        height: 22px;
      }
    }

    @keyframes scale-tongue {
      0% {
        height: 14px;
      }

      100% {
        height: 20px;
      }
    }

    @-webkit-keyframes scale-tongue {
      0% {
        height: 14px;
      }

      100% {
        height: 20px;
      }
    }

    .cloud-1 {
      animation: animate-1 32s linear infinite;
      -webkit-animation: animate-1 43s linear infinite;
      transform: scale(0.45);
      -webkit-transform: scale(0.45);
    }

    .cloud-2 {
      animation: animate-2 37s linear infinite;
      -webkit-animation: animate-2 47s linear infinite;
      transform: scale(0.25);
      -webkit-transform: scale(0.25);
    }

    .cloud-3 {
      animation: animate-3 45s linear infinite;
      -webkit-animation: animate-3 45s linear infinite;
      transform: scale(0.3);
      -webkit-transform: scale(0.3);
    }

    .cloud-4 {
      animation: animate-4 50s linear infinite;
      -webkit-animation: animate-4 60s linear infinite;
      transform: scale(0.6);
      -webkit-transform: scale(0.6);
    }

    .cloud-5 {
      animation: animate-5 55s linear infinite;
      -webkit-animation: animate-5 65s linear infinite;
      transform: scale(0.45);
      -webkit-transform: scale(0.45);
    }

    .cloud-6 {
      animation: animate-6 60s linear infinite;
      -webkit-animation: animate-6 70s linear infinite;
      transform: scale(0.55);
      -webkit-transform: scale(0.55);
    }

    .cloud-7 {
      animation: animate-7 65s linear infinite;
      -webkit-animation: animate-7 75s linear infinite;
      transform: scale(0.3);
      -webkit-transform: scale(0.3);
    }

    .marquee {
      -webkit-animation-duration: 30s;
      animation-duration: 30s;
    }
  }

  // .wallet-adapter-modal-wrapper {
  //   background: #ffffff;
  // }

  // .wallet-adapter-button {
  //   background-color: #000000;
  // }

  // .wallet-adapter-modal-list {
  //   margin: 0 0 4px !important;
  // }
  // .wallet-adapter-modal-list li:not(:first-of-type) {
  //   margin-top: 4px !important;
  // }

  // .wallet-adapter-modal-title {
  //   color: #000000;
  // }
`;
const Hero = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div").withConfig({
    componentId: "sc-bf53aa40-2"
})`
  text-align: center;
  margin: 80px 0 80px;
`;
const MintCount = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("h3").withConfig({
    componentId: "sc-bf53aa40-3"
})`
  font-family: 'Patrick Hand', cursive;
  font-size: 30px;
  line-height: 1;
  margin-bottom: 20px;
  margin-top: 25px;
  font-weight: 700;
`;
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("h1").withConfig({
    componentId: "sc-bf53aa40-4"
})`
  font-family: nabana;
  letter-spacing: 2px;
  margin-bottom: -20px;
  color: #897ea5;
  font-size: 60px;
`;
const MintButtonStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("button").withConfig({
    componentId: "sc-bf53aa40-5"
})`
  border: 0.1px solid #424242;
  background: #000000b0;
  border-radius: 10px;
  padding: 6px;
  font-size: 28px;
  min-width: 300px;
  box-shadow: 2px 3px 1px 0px #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    background: #0000;
  }
`;
const NftWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div").withConfig({
    componentId: "sc-bf53aa40-6"
})`
  position: relative;
  z-index: 99;
  .marquee-wrapper {
    overflow: hidden;
    transform: skew(360deg, 356deg);
  }

  .marquee {
    display: flex;
    animation-name: marquee;
    animation-duration: 50s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: alternate;
    transform: translateX(0);
    img {
      padding: 5px;
      max-width: 200px;
      border-radius: 10px;
      animation: pulse 5s infinite;
    }
  }

@keyframes pulse {
0% {
  filter: brightness(1);
}
50% {
  filter: brightness(1.3);
}

100% {
  filter: brightness (1);
}
  
}


  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
const NftWrapper2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div").withConfig({
    componentId: "sc-bf53aa40-7"
})`
  position: relative;
  z-index: 99;
  .marquee-wrapper {
    overflow: hidden;
    transform: skew(360deg, 356deg);
  }

  .marquee {
    display: flex;
    animation-name: marquee2;
    animation-duration: 50s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: alternate;
    transform: translateX(0);

    img {
      padding: 5px;
      max-width: 200px;
      border-radius: 10px;
      animation: pulse 3s infinite;
    }
  }

  @keyframes marquee2 {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;


/***/ }),

/***/ 6244:
/***/ ((module) => {

module.exports = JSON.parse('["53VVFtLzzi3nL2p1QF591PAB8rbcbsirYepwUphtHU9Q","85gHs1pKkZcNCDEbcfxqhfFNPWCsNFqPTMMbTQARspWy","FXoth7ba7LALmJGFaidCcMnhsxEagBDBDKCmkpr2QuDr","232Z5QNvQ4wRyraGWFpC5i3HEbqozEWgBCV95eWASaG1","D8ivzpXkG66VknRdVjEF1HjqS3T1tzcqraVR6FYaeLsV","sTAKERL4U8fbn2nUte6rPVdcrz2z3fEh1adQEDrGULr","5PCFZP3pNXxYwWrr84qxm9UMpbmVq7Mi8PM5QKBeQxKQ"]');

/***/ })

};
;