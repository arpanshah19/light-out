export const getRandomState = () => Boolean(Math.round(Math.random())); 

export const randomInitialValue = () => [[getRandomState(), getRandomState(), getRandomState(), getRandomState(), getRandomState()],
                                    [getRandomState(), getRandomState(), getRandomState(), getRandomState(), getRandomState()],
                                    [getRandomState(), getRandomState(), getRandomState(), getRandomState(), getRandomState()],
                                    [getRandomState(), getRandomState(), getRandomState(), getRandomState(), getRandomState()],
                                    [getRandomState(), getRandomState(), getRandomState(), getRandomState(), getRandomState()]];