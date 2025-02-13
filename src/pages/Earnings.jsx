import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from "../assets/images/logo_blue.png";

const Earnings = () => {
  const [earnings, setEarnings] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [canClaim, setCanClaim] = useState(false);
  const [lastClaimDate, setLastClaimDate] = useState(null);
  const [completedMovies, setCompletedMovies] = useState([]);

  useEffect(() => {
    // Load earnings and claim data from localStorage
    const savedEarnings = JSON.parse(localStorage.getItem('earnings') || '[]');
    const savedCompletedMovies = JSON.parse(localStorage.getItem('completedMovies') || '[]');
    const lastClaim = localStorage.getItem('lastClaimDate');
    
    // Sort earnings by last updated time
    const sortedEarnings = savedEarnings.sort((a, b) => 
      new Date(b.lastUpdated) - new Date(a.lastUpdated)
    );
    
    setEarnings(sortedEarnings);
    setCompletedMovies(savedCompletedMovies);
    setLastClaimDate(lastClaim);

    // Calculate total points
    const total = sortedEarnings.reduce((sum, record) => sum + record.points, 0);
    setTotalPoints(total);

    // Check if today is 28th and hasn't been claimed this month
    const today = new Date();
    const isClaimDay = today.getDate() === 28;
    const lastClaimMonth = lastClaim ? new Date(lastClaim).getMonth() : -1;
    
    setCanClaim(isClaimDay && lastClaimMonth !== today.getMonth());
  }, []);

  const handleClaim = () => {
    if (!canClaim) return;

    // Save claim date
    const today = new Date().toISOString();
    localStorage.setItem('lastClaimDate', today);
    setLastClaimDate(today);
    setCanClaim(false);

    // Clear earnings after claiming
    localStorage.setItem('earnings', '[]');
    setEarnings([]);
    
    // Here you would typically make an API call to process the reward
    alert(`Successfully claimed ${totalPoints} points!`);
  };

  const getNextClaimDate = () => {
    const today = new Date();
    let nextClaim = new Date(today.getFullYear(), today.getMonth(), 28);
    
    if (today.getDate() > 28) {
      nextClaim = new Date(today.getFullYear(), today.getMonth() + 1, 28);
    }
    
    return nextClaim.toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="w-full min-h-screen bg-[#0F172A] pt-6 pb-16">
      {/* Header with Logo */}
      <div className="px-4 tablet:px-8 mb-8 flex items-center gap-4">
        <img src={Logo} className="w-[100px] mobile:w-[150px] brightness-0 invert" alt="Ustream Logo" />
      </div>

      {/* Points Summary Section */}
      <div className="px-4 tablet:px-8 mb-8">
        <motion.div 
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 relative overflow-hidden"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="relative z-10">
            <h2 className="text-white text-lg mb-2">Total Points Earned</h2>
            <p className="text-4xl font-bold text-white mb-4">{totalPoints}</p>
            
            {canClaim ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleClaim}
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Claim Rewards
              </motion.button>
            ) : (
              <p className="text-white/80 text-sm">
                Next claim available on {getNextClaimDate()}
              </p>
            )}
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        </motion.div>
      </div>

      {/* Earnings History */}
      <div className="px-4 tablet:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">Earning History</h2>
          <span className="text-sm text-gray-400">
            This Month
          </span>
        </div>
        
        <div className="space-y-4">
          {earnings.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-[#1E293B] rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎬</span>
              </div>
              <h3 className="text-white font-medium mb-2">No earnings yet</h3>
              <p className="text-gray-400 text-sm">
                Start watching movies to earn points!<br />
                Earn 10 points for every minute watched.
              </p>
            </motion.div>
          ) : (
            earnings.map((record, index) => (
              <motion.div
                key={index}
                className="bg-[#1E293B] rounded-lg p-4 hover:bg-[#232f44] transition-colors"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-medium">{record.movieName}</h3>
                      {completedMovies.includes(record.movieName) && (
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                          Completed
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">
                      Watched for {record.watchTimeMinutes} minutes
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-blue-400 font-semibold">+{record.points} points</span>
                    <p className="text-gray-400 text-xs mt-1">
                      {new Date(record.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Earnings; 