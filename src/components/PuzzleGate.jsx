import React, { useState, useEffect } from 'react';

const PuzzleGate = ({ children }) => {
    const [unlocked, setUnlocked] = useState(false);
    const [currentPuzzle, setCurrentPuzzle] = useState(0);
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(false);

    // Check local storage on mount
    useEffect(() => {
        const isUnlocked = localStorage.getItem('portfolio_unlocked');
        if (isUnlocked === 'true') {
            setUnlocked(true);
        }
    }, []);

    const puzzles = [
        {
            id: 0,
            title: "Security Check: Statistics",
            question: "In a standard normal distribution, what integer percentage of data falls within one standard deviation of the mean? (Just the number)",
            placeholder: "e.g., 50",
            validate: (ans) => ans.trim() === '68'
        },
        {
            id: 1,
            title: "Security Check: Markov Chains",
            question: "A system transitions between State A and B. P(A->B) = 0.3, P(B->A) = 0.4. What is the steady-state probability of State A? (Enter as fraction x/y)",
            placeholder: "e.g., 1/2",
            validate: (ans) => {
                return ans.trim() === '4/7';
            }
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (puzzles[currentPuzzle].validate(answer)) {
            setAnswer('');
            setError(false);
            if (currentPuzzle < puzzles.length - 1) {
                setCurrentPuzzle(prev => prev + 1);
            } else {
                localStorage.setItem('portfolio_unlocked', 'true');
                setUnlocked(true);
            }
        } else {
            setError(true);
            setTimeout(() => setError(false), 1000);
        }
    };

    if (unlocked) {
        return (
            <div className="relative">
                <div className="fixed top-0 left-0 w-full bg-green-500/10 text-green-400 text-center text-xs py-1 z-50 border-b border-green-500/20 backdrop-blur-sm">
                    Access Granted: Deployment Links Unlocked
                </div>
                {children}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 font-mono text-white">
            <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                    <h2 className="text-xl font-bold text-zinc-200">
                        {puzzles[currentPuzzle].title}
                    </h2>
                </div>

                <p className="text-zinc-400 mb-8 leading-relaxed">
                    {puzzles[currentPuzzle].question}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            placeholder={puzzles[currentPuzzle].placeholder}
                            className={`w-full bg-black/50 border ${error ? 'border-red-500' : 'border-zinc-700 focus:border-blue-500'} rounded-lg px-4 py-3 outline-none transition-colors text-zinc-100 placeholder-zinc-600`}
                            autoFocus
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-zinc-200 transition-colors"
                    >
                        Unlock Access
                    </button>
                </form>

                <div className="mt-6 flex justify-between text-xs text-zinc-600">
                    <span>Gate {currentPuzzle + 1} of {puzzles.length}</span>
                    <span>{error ? 'Access Denied' : 'System Locked'}</span>
                </div>
            </div>
        </div>
    );
};

export default PuzzleGate;
