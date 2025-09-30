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
  Sparkles
} from 'lucide-react';

const HeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const stats = [
    { value: '50K+', label: 'Active Students' },
    { value: '2M+', label: 'Questions Solved' },
    { value: '95%', label: 'Success Rate' },
    { value: '15K+', label: 'Daily Battles' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-purple-400/20 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-green-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-yellow-400/20 rounded-lg rotate-12 animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Master JEE with
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Gamified Learning
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Compete in real-time battles, climb leaderboards, and achieve your IIT dreams through our AI-powered competitive platform
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Start Your Journey</span>
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold text-lg border border-gray-600 hover:border-gray-500 transition-all duration-300 flex items-center justify-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <span>View Features</span>
            </button>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`p-4 rounded-xl border transition-all duration-500 ${
                  currentStat === index 
                    ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30 shadow-lg shadow-blue-500/20' 
                    : 'bg-gray-800/50 border-gray-700'
                }`}
              >
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GameModeCard = ({ icon: Icon, title, description, duration, players, difficulty, features, color = "blue" }) => (
  <div className={`bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-${color}-500/20 hover:border-${color}-500/50 group`}>
    <div className="flex items-start justify-between mb-4">
      <div className={`p-3 bg-${color}-500/10 rounded-xl`}>
        <Icon className={`w-8 h-8 text-${color}-400`} />
      </div>
      <div className={`px-3 py-1 bg-${color}-500/20 text-${color}-400 text-xs font-medium rounded-full`}>
        {difficulty}
      </div>
    </div>
    
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm mb-4">{description}</p>
    
    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-300">
      <div className="flex items-center space-x-1">
        <Clock className="w-4 h-4" />
        <span>{duration}</span>
      </div>
      <div className="flex items-center space-x-1">
        <Users className="w-4 h-4" />
        <span>{players}</span>
      </div>
    </div>
    
    <div className="space-y-2 mb-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
          <Check className="w-4 h-4 text-green-400" />
          <span>{feature}</span>
        </div>
      ))}
    </div>
    
    <button className={`w-full py-3 bg-gradient-to-r from-${color}-500 to-${color}-600 hover:from-${color}-600 hover:to-${color}-700 text-white rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-${color}-500/25 flex items-center justify-center space-x-2`}>
      <span>Join Battle</span>
      <ArrowRight className="w-4 h-4" />
    </button>
  </div>
);



const FeatureCard = ({ icon: Icon, title, description, stats }) => (
  <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 hover:border-blue-500/30">
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-blue-500/10 rounded-lg">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <div className="flex-grow">
        <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
        <p className="text-gray-400 text-sm mb-3">{description}</p>
        {stats && (
          <div className="flex items-center space-x-4 text-xs">
            {stats.map((stat, index) => (
              <div key={index} className="text-blue-400">
                <span className="font-semibold">{stat.value}</span>
                <span className="text-gray-500 ml-1">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default function JEEHomepage() {
  const gameModes = [
    {
      icon: Zap,
      title: "Khouts",
      description: "Quick classroom battles where first to solve wins points",
      duration: "5-10 min",
      players: "Class",
      difficulty: "Easy",
      features: ["Real-time competition", "Instant results", "Class leaderboard"],
      color: "green"
    },
    {
      icon: Swords,
      title: "1v1 Battle",
      description: "Intense duels with rank-matched opponents",
      duration: "10 min",
      players: "2 players",
      difficulty: "Medium",
      features: ["Rank-based matching", "Rating system", "4×3 questions (PCM)"],
      color: "red"
    },
    {
      icon: Users,
      title: "30-Man Battle",
      description: "Large-scale battles with multiple competitors",
      duration: "10 min",
      players: "30 players",
      difficulty: "Hard",
      features: ["Mass competition", "Top 10 rewards", "Advanced rankings"],
      color: "purple"
    }
  ];

  const tournaments = [];

  const features = [
    {
      icon: Flame,
      title: "Interactive Streak System",
      description: "Track daily activity with visual streak calendar and milestone rewards",
      stats: [{ value: "23", label: "current" }, { value: "45", label: "longest" }]
    },
    {
      icon: Target,
      title: "Question Analytics",
      description: "Detailed breakdown of Easy, Medium, Hard questions solved with progress tracking",
      stats: [{ value: "1.2K", label: "solved" }, { value: "85%", label: "accuracy" }]
    },
    {
      icon: Trophy,
      title: "AIR Rankings",
      description: "All India Rank system for 1v1 and 30-man competitions with monthly updates",
      stats: [{ value: "#1,247", label: "1v1 rank" }, { value: "#892", label: "30-man rank" }]
    },
    {
      icon: Award,
      title: "Achievement Badges",
      description: "Unlock exclusive badges for streaks, performance milestones, and tournament wins",
      stats: [{ value: "12", label: "gold" }, { value: "28", label: "silver" }]
    }
  ];

  return (
    <div className="bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">JEE Master</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#practice" className="text-gray-300 hover:text-white transition-colors">Practice</a>
              <a href="#stats" className="text-gray-300 hover:text-white transition-colors">Statistics</a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Game Modes Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Battle Mode</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Multiple competitive formats designed to challenge your skills and improve your JEE preparation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gameModes.map((mode, index) => (
              <GameModeCard key={index} {...mode} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Statistics</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive analytics to track your progress and identify improvement areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section id="practice" className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="bg-gray-900 border border-gray-700 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Not Ready for Competition?
                </h2>
                <p className="text-xl text-gray-400 mb-6">
                  Practice at your own pace with our extensive question bank
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Daily Practice Problems (DPP)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Previous Year Questions (PYQ)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Topic-wise Practice Sets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Progress Tracking & Analytics</span>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Start Practice</span>
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">10K+</div>
                  <div className="text-gray-400 text-sm">Practice Questions</div>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
                  <div className="text-gray-400 text-sm">Years of PYQ</div>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
                  <div className="text-gray-400 text-sm">Topics Covered</div>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Access Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Dominate</span> JEE?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already improving their ranks through competitive learning
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Start Free Trial</span>
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-12 py-4 rounded-xl font-semibold text-lg border border-gray-600 hover:border-gray-500 transition-all duration-300 flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Schedule Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 JEE Master. All rights reserved. Made with ❤️ for JEE aspirants.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}