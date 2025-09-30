import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Zap, 
  Users, 
  Clock, 
  Target, 
  TrendingUp, 
  Star, 
  Flame, 
  Award, 
  BookOpen, 
  Brain, 
  Gamepad2,
  Play,
  ChevronRight,
  Calendar,
  Shield,
  BarChart3,
  Swords,
  Crown,
  Timer,
  Medal,
  ArrowRight,
  Check,
  Sparkles,
  Home,
  Settings,
  User,
  ChevronLeft
} from 'lucide-react';

const MobileNavbar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'battles', icon: Swords, label: 'Battles' },
    { id: 'stats', icon: BarChart3, label: 'Stats' },
    { id: 'practice', icon: BookOpen, label: 'Practice' },
    { id: 'profile', icon: User, label: 'Profile' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 z-50 md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex flex-col items-center py-2 px-4 rounded-lg transition-all duration-200 ${
              activeTab === id 
                ? 'text-blue-400 bg-blue-500/10' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Icon className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const GameModeCard = ({ icon: Icon, title, color = "blue", onClick, isActive = false }) => (
  <button 
    onClick={onClick}
    className={`px-4 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 ${
      isActive 
        ? `bg-${color}-400 text-gray-900 shadow-lg shadow-${color}-400/30` 
        : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/80 hover:text-white border border-gray-600/50'
    }`}
  >
    <Icon className="w-4 h-4" />
    <span>{title}</span>
  </button>
);

const StatCard = ({ icon: Icon, title, value, subtitle, color = "blue" }) => (
  <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 hover:bg-gray-800 transition-all duration-300">
    <div className="flex items-center justify-between mb-3">
      <div className={`p-2 bg-${color}-500/10 rounded-lg`}>
        <Icon className={`w-5 h-5 text-${color}-400`} />
      </div>
      <div className="text-right">
        <div className={`text-lg font-bold text-${color}-400`}>{value}</div>
        <div className="text-xs text-gray-400">{title}</div>
      </div>
    </div>
    {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
  </div>
);

const QuickActionCard = ({ icon: Icon, title, description, color = "blue", onClick }) => (
  <button 
    onClick={onClick}
    className={`bg-gray-900 border border-gray-700 rounded-xl p-4 hover:bg-gray-800 transition-all duration-300 hover:border-${color}-500/50 text-left w-full`}
  >
    <div className="flex items-start space-x-3">
      <div className={`p-2 bg-${color}-500/10 rounded-lg`}>
        <Icon className={`w-5 h-5 text-${color}-400`} />
      </div>
      <div>
        <h4 className="font-semibold text-white text-sm mb-1">{title}</h4>
        <p className="text-gray-400 text-xs">{description}</p>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
    </div>
  </button>
);

const HomeTab = ({ setActiveTab }) => {
  const [selectedGameMode, setSelectedGameMode] = useState('1v1');
  
  const gameModes = [
    {
      id: 'khouts',
      icon: Zap,
      title: "Khouts",
      color: "green"
    },
    {
      id: '1v1',
      icon: Swords,
      title: "1v1 Battle",
      color: "blue"
    },
    {
      id: '30man',
      icon: Users,
      title: "30-Man",
      color: "purple"
    }
  ];

  return (
    <div className="pb-20 md:pb-0">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-4 py-8 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Good evening! 👋</h1>
            <p className="text-blue-100 text-sm">Ready to dominate JEE today?</p>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-lg font-bold">23</div>
            <div className="text-xs opacity-80">Day Streak</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-lg font-bold">#1,247</div>
            <div className="text-xs opacity-80">AIR Rank</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-lg font-bold">85%</div>
            <div className="text-xs opacity-80">Accuracy</div>
          </div>
        </div>
      </div>

      {/* Game Modes */}
      <div className="px-4 py-6">
        <h2 className="text-lg font-bold text-white mb-4">Battle Modes</h2>
        
        {/* Game Mode Selector */}
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-full p-1 flex space-x-1 mb-6">
          {gameModes.map((mode) => (
            <GameModeCard 
              key={mode.id} 
              {...mode} 
              isActive={selectedGameMode === mode.id}
              onClick={() => setSelectedGameMode(mode.id)}
            />
          ))}
        </div>
        
        {/* Selected Mode Action */}
        <div className="text-center">
          <button 
            onClick={() => setActiveTab('battles')}
            className={`w-full py-4 bg-gradient-to-r from-${gameModes.find(m => m.id === selectedGameMode)?.color}-500 to-${gameModes.find(m => m.id === selectedGameMode)?.color}-600 text-white rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl`}
          >
            Start {gameModes.find(m => m.id === selectedGameMode)?.title}
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-6">
        <h2 className="text-lg font-bold text-white mb-4">Quick Actions</h2>
        <div className="space-y-3">
          <QuickActionCard
            icon={Target}
            title="Daily Practice"
            description="Solve today's DPP questions"
            color="green"
            onClick={() => setActiveTab('practice')}
          />
          <QuickActionCard
            icon={Flame}
            title="Continue Streak"
            description="Keep your 23-day streak alive"
            color="orange"
            onClick={() => setActiveTab('practice')}
          />
          <QuickActionCard
            icon={Trophy}
            title="View Rankings"
            description="Check your position on leaderboards"
            color="yellow"
            onClick={() => setActiveTab('stats')}
          />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-4 py-6">
        <h2 className="text-lg font-bold text-white mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Won 1v1 Battle</div>
                  <div className="text-gray-400 text-xs">vs. Arjun K. • 2 hours ago</div>
                </div>
              </div>
              <div className="text-green-400 text-sm font-semibold">+25 pts</div>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Completed DPP</div>
                  <div className="text-gray-400 text-xs">Physics - Mechanics • Yesterday</div>
                </div>
              </div>
              <div className="text-blue-400 text-sm font-semibold">15/20</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BattlesTab = () => {
  const [selectedMode, setSelectedMode] = useState('1v1');
  
  const battleModes = {
    khouts: {
      title: "Khouts",
      icon: Zap,
      color: "green",
      description: "Quick classroom competitions",
      players: "Classroom",
      duration: "5-10 min"
    },
    "1v1": {
      title: "1v1 Battle",
      icon: Swords,
      color: "red",
      description: "Intense one-on-one duels",
      players: "2 players",
      duration: "10 min"
    },
    "30man": {
      title: "30-Man Battle",
      icon: Users,
      color: "purple",
      description: "Large scale competitions",
      players: "30 players",
      duration: "10 min"
    }
  };

  return (
    <div className="pb-20 md:pb-0">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-700 px-4 py-4">
        <h1 className="text-xl font-bold text-white">Battle Arena</h1>
        <p className="text-gray-400 text-sm">Choose your battle mode</p>
      </div>

      {/* Mode Selector */}
      <div className="px-4 py-4">
        <div className="flex space-x-2 bg-gray-800 p-1 rounded-lg">
          {Object.entries(battleModes).map(([key, mode]) => (
            <button
              key={key}
              onClick={() => setSelectedMode(key)}
              className={`flex-1 py-2 px-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                selectedMode === key
                  ? `bg-${mode.color}-500 text-white`
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {mode.title}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Mode Details */}
      <div className="px-4 py-4">
        {(() => {
          const mode = battleModes[selectedMode];
          const Icon = mode.icon;
          return (
            <div className={`bg-gray-900 border border-${mode.color}-500/30 rounded-xl p-6`}>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 bg-${mode.color}-500/10 rounded-xl`}>
                  <Icon className={`w-8 h-8 text-${mode.color}-400`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{mode.title}</h3>
                  <p className="text-gray-400 text-sm">{mode.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <div className="text-gray-400 text-xs">Players</div>
                  <div className="text-white font-semibold">{mode.players}</div>
                </div>
                <div className="bg-gray-800 p-3 rounded-lg">
                  <div className="text-gray-400 text-xs">Duration</div>
                  <div className="text-white font-semibold">{mode.duration}</div>
                </div>
              </div>
              
              <button className={`w-full py-4 bg-gradient-to-r from-${mode.color}-500 to-${mode.color}-600 text-white rounded-xl font-semibold text-lg shadow-lg transition-all duration-300`}>
                Find Match
              </button>
            </div>
          );
        })()}
      </div>

      {/* Live Battles */}
      <div className="px-4 py-4">
        <h2 className="text-lg font-bold text-white mb-4">Live Battles</h2>
        <div className="space-y-3">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-white font-medium">Physics Battle #1247</div>
              <div className="flex items-center space-x-1 text-green-400 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Live</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="text-gray-400">24 players • 3 min left</div>
              <button className="text-blue-400 font-medium">Join</button>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-white font-medium">Math Challenge #892</div>
              <div className="flex items-center space-x-1 text-yellow-400 text-sm">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>Starting</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="text-gray-400">18 players • Starting in 45s</div>
              <button className="text-blue-400 font-medium">Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsTab = () => {
  const [activeLeaderboard, setActiveLeaderboard] = useState('1v1');

  const leaderboardData1v1 = [
    { rank: 1, name: "Arjun Kumar", avatar: "AK", score: 2850, isCurrentUser: false },
    { rank: 2, name: "Priya Sharma", avatar: "PS", score: 2720, isCurrentUser: false },
    { rank: 3, name: "Rahul Singh", avatar: "RS", score: 2680, isCurrentUser: true },
    { rank: 4, name: "Sneha Patel", avatar: "SP", score: 2540, isCurrentUser: false },
    { rank: 5, name: "Vikram Rao", avatar: "VR", score: 2480, isCurrentUser: false }
  ];

  const leaderboard30Man = [
    { rank: 1, name: "Arjun Kumar", avatar: "AK", score: 8450, isCurrentUser: false },
    { rank: 2, name: "Rahul Singh", avatar: "RS", score: 8320, isCurrentUser: true },
    { rank: 3, name: "Priya Sharma", avatar: "PS", score: 8180, isCurrentUser: false },
    { rank: 4, name: "Sneha Patel", avatar: "SP", score: 7920, isCurrentUser: false },
    { rank: 5, name: "Vikram Rao", avatar: "VR", score: 7850, isCurrentUser: false }
  ];

  const streakData = Array.from({ length: 90 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (89 - i));
    return {
      date: date.toISOString().split('T')[0],
      count: Math.random() > 0.3 ? Math.floor(Math.random() * 5) : 0
    };
  });

  const getIntensity = (count) => {
    if (count === 0) return 'bg-gray-800';
    if (count <= 1) return 'bg-green-900';
    if (count <= 2) return 'bg-green-700';
    if (count <= 3) return 'bg-green-500';
    return 'bg-green-400';
  };

  const LeaderboardItem = ({ player, isFirst }) => (
    <div className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
      player.isCurrentUser 
        ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30' 
        : 'bg-gray-800 border border-gray-700'
    } ${isFirst ? 'ring-1 ring-yellow-500/50' : ''} mb-3`}>
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white mr-3 text-sm ${
        isFirst ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
        player.rank === 2 ? 'bg-gradient-to-r from-gray-300 to-gray-500 text-gray-900' :
        player.rank === 3 ? 'bg-gradient-to-r from-orange-400 to-orange-600' :
        'bg-gradient-to-r from-gray-600 to-gray-800'
      }`}>
        {isFirst ? '🏆' : player.avatar}
      </div>
      
      <div className="flex-grow">
        <div className="flex items-center">
          <span className={`font-semibold text-sm ${player.isCurrentUser ? 'text-blue-400' : 'text-white'}`}>
            {player.name}
          </span>
          {player.isCurrentUser && <Star className="w-3 h-3 text-blue-400 ml-1" />}
        </div>
        <p className="text-gray-400 text-xs">Rank #{player.rank}</p>
      </div>
      
      <div className="text-right">
        <p className={`font-bold ${player.isCurrentUser ? 'text-blue-400' : 'text-white'}`}>
          {player.score.toLocaleString()}
        </p>
        <p className="text-gray-400 text-xs">points</p>
      </div>
    </div>
  );

  return (
    <div className="pb-20 md:pb-0">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-700 px-4 py-4">
        <h1 className="text-xl font-bold text-white">JEE Learning Dashboard</h1>
        <p className="text-gray-400 text-sm">Track your progress and compete with others</p>
      </div>

      <div className="px-4 py-4 space-y-6">
        {/* Leaderboard Section */}
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-4">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center">
            <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
            Leaderboard
          </h2>
          
          {/* Tabs */}
          <div className="flex space-x-1 mb-4 bg-gray-800 p-1 rounded-lg">
            <button
              onClick={() => setActiveLeaderboard('1v1')}
              className={`flex-1 py-2 px-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeLeaderboard === '1v1'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              1v1 Ranking
            </button>
            <button
              onClick={() => setActiveLeaderboard('30man')}
              className={`flex-1 py-2 px-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeLeaderboard === '30man'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              30-Man Ranking
            </button>
          </div>

          {/* Leaderboard List */}
          <div>
            {(activeLeaderboard === '1v1' ? leaderboardData1v1 : leaderboard30Man).map((player, index) => (
              <LeaderboardItem key={player.name} player={player} isFirst={index === 0} />
            ))}
          </div>
        </div>

        {/* Activity Streak */}
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-4">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
            <Flame className="w-5 h-5 text-orange-400 mr-2" />
            Activity Streak
          </h3>
          
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">23</div>
              <div className="text-gray-400 text-xs">Current Streak</div>
              <div className="text-gray-500 text-xs">days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">45</div>
              <div className="text-gray-400 text-xs">Longest Streak</div>
              <div className="text-gray-500 text-xs">days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">12</div>
              <div className="text-gray-400 text-xs">This Month</div>
              <div className="text-gray-500 text-xs">days active</div>
            </div>
          </div>

          {/* Mini Heatmap - Last 3 months */}
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map(monthOffset => (
              <div key={monthOffset} className="bg-gray-800 rounded-lg p-2">
                <div className="text-gray-400 text-xs text-center mb-2">
                  {new Date(new Date().setMonth(new Date().getMonth() - (2 - monthOffset))).toLocaleDateString('en', { month: 'short', year: 'numeric' })}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 28 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-sm ${getIntensity(streakData[monthOffset * 30 + i]?.count || 0)} transition-all duration-200`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Overview */}
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-4">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
            <Clock className="w-5 h-5 text-green-400 mr-2" />
            Performance Overview
          </h3>
          
          {/* Accuracy Circle */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-24 h-24">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  className="text-gray-700"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - 85 / 100)}`}
                  className="text-green-400 transition-all duration-1000 ease-out"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">85%</div>
                  <div className="text-xs text-gray-400">Accuracy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Solving Time */}
          <div className="space-y-3 mb-4">
            {[
              { difficulty: 'Easy', time: 45, color: '#10B981' },
              { difficulty: 'Medium', time: 120, color: '#F59E0B' },
              { difficulty: 'Hard', time: 240, color: '#EF4444' }
            ].map((item) => (
              <div key={item.difficulty} className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">{item.difficulty}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-2 bg-gray-700 rounded-full">
                    <div 
                      className="h-2 rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${Math.min((item.time / 300) * 100, 100)}%`,
                        backgroundColor: item.color
                      }}
                    />
                  </div>
                  <span className="text-gray-300 text-xs font-medium w-8">{item.time}s</span>
                </div>
              </div>
            ))}
          </div>

          {/* Strengths & Weaknesses */}
          <div className="space-y-3">
            <div>
              <p className="text-gray-400 text-sm mb-2">Strengths</p>
              <div className="flex flex-wrap gap-1">
                {['Calculus', 'Mechanics', 'Organic Chemistry'].map((item) => (
                  <span key={item} className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/30">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Needs Improvement</p>
              <div className="flex flex-wrap gap-1">
                {['Electromagnetism', 'Thermodynamics'].map((item) => (
                  <span key={item} className="px-2 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/30">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Win Rates */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-400 font-semibold">1v1 Win Rate</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">78%</div>
            <div className="text-gray-400 text-xs">156W • 44L</div>
            <div className="text-green-400 text-xs mt-1">↗ +15% vs last week</div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Trophy className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-400 font-semibold">30-Man Win Rate</span>
            </div>
            <div className="text-2xl font-bold text-purple-400 mb-1">34%</div>
            <div className="text-gray-400 text-xs">Top 10 finish</div>
            <div className="text-purple-400 text-xs mt-1">↗ +18% vs last week</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PracticeTab = () => (
  <div className="pb-20 md:pb-0">
    {/* Header */}
    <div className="bg-gray-900 border-b border-gray-700 px-4 py-4">
      <h1 className="text-xl font-bold text-white">Practice</h1>
      <p className="text-gray-400 text-sm">Improve at your own pace</p>
    </div>

    {/* Practice Options */}
    <div className="px-4 py-6 space-y-4">
      <QuickActionCard
        icon={BookOpen}
        title="Daily Practice Problems (DPP)"
        description="Fresh questions updated daily"
        color="blue"
      />
      
      <QuickActionCard
        icon={Calendar}
        title="Previous Year Questions (PYQ)"
        description="25+ years of JEE questions"
        color="green"
      />
      
      <QuickActionCard
        icon={Target}
        title="Topic-wise Practice"
        description="Focus on specific subjects"
        color="purple"
      />
      
      <QuickActionCard
        icon={Timer}
        title="Mock Tests"
        description="Full-length practice tests"
        color="red"
      />
    </div>

    {/* Today's Progress */}
    <div className="px-4 py-4">
      <h3 className="text-lg font-bold text-white mb-4">Today's Progress</h3>
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-white font-medium">Questions Solved</span>
          <span className="text-blue-400 font-bold">15/20</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
          <div className="bg-blue-400 h-2 rounded-full" style={{ width: '75%' }}></div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-green-400 font-bold">8</div>
            <div className="text-gray-400 text-xs">Correct</div>
          </div>
          <div>
            <div className="text-red-400 font-bold">2</div>
            <div className="text-gray-400 text-xs">Wrong</div>
          </div>
          <div>
            <div className="text-gray-400 font-bold">5</div>
            <div className="text-gray-400 text-xs">Remaining</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProfileTab = () => (
  <div className="pb-20 md:pb-0">
    {/* Header */}
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-4 py-8 text-white">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
          <User className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-xl font-bold">Rahul Singh</h1>
          <p className="text-blue-100 text-sm">JEE Aspirant 2025</p>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/10 rounded-lg p-3 text-center">
          <div className="text-lg font-bold">#1,247</div>
          <div className="text-xs opacity-80">AIR Rank</div>
        </div>
        <div className="bg-white/10 rounded-lg p-3 text-center">
          <div className="text-lg font-bold">23</div>
          <div className="text-xs opacity-80">Day Streak</div>
        </div>
        <div className="bg-white/10 rounded-lg p-3 text-center">
          <div className="text-lg font-bold">1,247</div>
          <div className="text-xs opacity-80">Questions</div>
        </div>
      </div>
    </div>

    {/* Profile Options */}
    <div className="px-4 py-6 space-y-4">
      <QuickActionCard
        icon={Settings}
        title="Account Settings"
        description="Update profile and preferences"
        color="gray"
      />
      
      <QuickActionCard
        icon={Trophy}
        title="Achievements"
        description="View all badges and milestones"
        color="yellow"
      />
      
      <QuickActionCard
        icon={BarChart3}
        title="Detailed Analytics"
        description="Deep dive into your performance"
        color="blue"
      />
      
      <QuickActionCard
        icon={Shield}
        title="Privacy & Security"
        description="Manage your data and security"
        color="green"
      />
    </div>
  </div>
);

export default function JEEHomepage() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab setActiveTab={setActiveTab} />;
      case 'battles':
        return <BattlesTab />;
      case 'stats':
        return <StatsTab />;
      case 'practice':
        return <PracticeTab />;
      case 'profile':
        return <ProfileTab />;
      default:
        return <HomeTab setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Desktop Header */}
      <div className="hidden md:block bg-gray-900 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">JEE Master</span>
          </div>
          
          <div className="flex items-center space-x-6">
            {['Home', 'Battles', 'Stats', 'Practice', 'Profile'].map((item) => (
              <button
                key={item.toLowerCase()}
                onClick={() => setActiveTab(item.toLowerCase())}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === item.toLowerCase()
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto bg-gray-950 min-h-screen md:max-w-6xl">
        {renderContent()}
      </div>

      {/* Mobile Navigation */}
      <MobileNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
export {
  MobileNavbar,
  HomeTab,
  BattlesTab,
  StatsTab,
  PracticeTab,
  ProfileTab
};
