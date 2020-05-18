jest.mock("@arkecosystem/core-container", () => {
    return {
        app: {
            getConfig: () => {
                return {
                    get: () => 1000000 * 1e5,
                    getMilestone: () => ({
                        height: 1,
                        reward: 2 * 1e5,
                    }),
                    genesisBlock: {
                        totalAmount: 1000000 * 1e5,
                    },
                    all: () => ({
                        genesisBlock: { totalAmount: 1000000 * 1e5 },
                        milestones: [{ height: 1, reward: 2 * 1e5 }],
                    }),
                };
            },
            resolvePlugin: name => {
                if (name === "config") {
                    return {
                        getMilestone: () => ({
                            height: 1,
                            reward: 2 * 1e5,
                        }),
                        genesisBlock: {
                            totalAmount: 1000000 * 1e5,
                        },
                    };
                }

                if (name === "blockchain") {
                    return {
                        getLastBlock: () => ({
                            data: { height: 1 },
                        }),
                    };
                }

                return {};
            },
        },
    };
});
