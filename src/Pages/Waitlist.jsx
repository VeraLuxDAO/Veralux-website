import React, { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDiscord,
  FaXTwitter,
  FaEnvelope,
  FaWallet,
  FaCheck,
  FaXmark,
} from "react-icons/fa6";

const Waitlist = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    discordUsername: "",
    twitterUsername: "",
    email: "",
    walletAddress: "",
  });
  const [completedSteps, setCompletedSteps] = useState({
    discord: false,
    twitter: false,
    email: false,
    wallet: false,
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [hasFollowedTwitter, setHasFollowedTwitter] = useState(() => {
    // Check localStorage for previous follow state
    return localStorage.getItem("veralux_twitter_followed") === "true";
  });

  const handleDiscordClick = () => {
    window.open("https://discord.gg/gWTFWwaVbD", "_blank");
  };

  const handleTwitterClick = () => {
    window.open("https://x.com/VeraLux_LUX", "_blank");
    // Mark that user has clicked to follow and save to localStorage
    setHasFollowedTwitter(true);
    localStorage.setItem("veralux_twitter_followed", "true");
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Mark step as completed when input is filled
    if (value.trim()) {
      setCompletedSteps((prev) => ({
        ...prev,
        [field.replace("Username", "").replace("Address", "")]: true,
      }));

      // Auto-advance to next step
      if (field === "discordUsername" && currentStep === 1) {
        setCurrentStep(2);
      } else if (field === "twitterUsername" && currentStep === 2) {
        setCurrentStep(3);
      } else if (field === "email" && currentStep === 3) {
        setCurrentStep(4);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(completedSteps).every((step) => step)) {
      setShowSuccessModal(true);
      console.log("Waitlist submission:", formData);
    }
  };

  const isStepAccessible = (step) => {
    if (step === 1) return true;
    if (step === 2) return completedSteps.discord;
    if (step === 3) return completedSteps.twitter;
    if (step === 4) return completedSteps.email;
    return false;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen text-white pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 scroll-optimized">
      <motion.div
        className="max-w-4xl mx-auto hardware-accelerated"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          variants={itemVariants}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 font-tactic bg-gradient-to-r from-[#3366FF] to-[#4DF3FF] bg-clip-text text-transparent">
            Join the Waitlist
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-2">
            Join early, get exclusive drops!
          </p>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Complete all steps to secure your spot in the VeraLux ecosystem.
            Early members get priority access to features, airdrops, and
            exclusive rewards.
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          className="flex justify-center mb-8 sm:mb-12 px-4"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-2 sm:space-x-4 max-w-full overflow-x-auto">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-shrink-0">
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 ${
                    completedSteps[Object.keys(completedSteps)[step - 1]]
                      ? "bg-green-500 text-white"
                      : currentStep >= step
                      ? "bg-gradient-to-r from-[#3366FF] to-[#4DF3FF] text-white"
                      : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {completedSteps[Object.keys(completedSteps)[step - 1]] ? (
                    <FaCheck className="text-xs sm:text-sm" />
                  ) : (
                    step
                  )}
                </div>
                {step < 4 && (
                  <div
                    className={`w-4 sm:w-8 h-0.5 sm:h-1 mx-1 sm:mx-2 transition-all duration-300 ${
                      currentStep > step
                        ? "bg-gradient-to-r from-[#3366FF] to-[#4DF3FF]"
                        : "bg-gray-700"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form Steps */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-8">
          {/* Step 1: Discord */}
          <motion.div
            className={`p-4 sm:p-6 rounded-xl border transition-all duration-300 ${
              currentStep === 1
                ? "border-blue-500 bg-blue-500/10"
                : completedSteps.discord
                ? "border-green-500 bg-green-500/10"
                : "border-gray-700 bg-gray-800/50"
            } ${!isStepAccessible(1) ? "opacity-50 pointer-events-none" : ""}`}
            variants={itemVariants}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <div className="flex items-center space-x-4">
                <FaDiscord className="text-2xl text-[#5865F2]" />
                <div>
                  <h3 className="text-xl font-semibold">
                    Step 1: Join Discord
                  </h3>
                  <p className="text-gray-400">
                    Join our community and enter your username
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 sm:items-center">
                <button
                  type="button"
                  onClick={handleDiscordClick}
                  className="bg-[#5865F2] hover:bg-[#4752C4] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base"
                >
                  Join Discord
                </button>
              </div>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter your Discord username"
                value={formData.discordUsername}
                onChange={(e) =>
                  handleInputChange("discordUsername", e.target.value)
                }
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200"
                required
              />
            </div>
          </motion.div>

          {/* Step 2: Twitter */}
          <motion.div
            className={`p-4 sm:p-6 rounded-xl border transition-all duration-300 ${
              currentStep === 2
                ? "border-blue-500 bg-blue-500/10"
                : completedSteps.twitter
                ? "border-green-500 bg-green-500/10"
                : "border-gray-700 bg-gray-800/50"
            } ${!isStepAccessible(2) ? "opacity-50 pointer-events-none" : ""}`}
            variants={itemVariants}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <div className="flex items-center space-x-4">
                <FaXTwitter className="text-2xl" />
                <div>
                  <h3 className="text-xl font-semibold">
                    {!hasFollowedTwitter
                      ? "Step 2: Follow on X"
                      : "Step 2: Enter X Username"}
                  </h3>
                  <p className="text-gray-400">
                    {!hasFollowedTwitter
                      ? "Follow us on X first"
                      : "Enter your X username to continue"}
                  </p>
                </div>
              </div>
              {isStepAccessible(2) && !hasFollowedTwitter && (
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 sm:items-center">
                  <button
                    type="button"
                    onClick={handleTwitterClick}
                    className="bg-black hover:bg-gray-800 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base transform hover:scale-105 shadow-lg"
                  >
                    Follow on X
                  </button>
                </div>
              )}
            </div>

            {/* Show input field only after following or if already followed */}
            {isStepAccessible(2) && hasFollowedTwitter && (
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="space-y-3">
                  {/* Confirmation message */}
                  <motion.div
                    className="flex items-center justify-between text-sm text-green-400 bg-green-400/10 p-3 rounded-lg border border-green-400/20"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    <div className="flex items-center space-x-2">
                      <FaCheck className="w-4 h-4" />
                      <span>Great! Now enter your X username to proceed</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setHasFollowedTwitter(false);
                        localStorage.removeItem("veralux_twitter_followed");
                      }}
                      className="text-xs text-gray-400 hover:text-white underline"
                      title="Reset follow status"
                    >
                      Reset
                    </button>
                  </motion.div>

                  {/* Username input */}
                  <input
                    type="text"
                    placeholder="Enter your X username (without @)"
                    value={formData.twitterUsername}
                    onChange={(e) =>
                      handleInputChange("twitterUsername", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/20"
                    required
                    autoFocus
                  />
                </div>
              </motion.div>
            )}

            {/* Show hint if step is accessible but not followed yet */}
            {isStepAccessible(2) && !hasFollowedTwitter && (
              <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-sm text-blue-300">
                  <FaXTwitter className="inline w-4 h-4 mr-2" />
                  Click "Follow on X" to open our profile, then return here to
                  enter your username
                </p>
              </div>
            )}
          </motion.div>

          {/* Step 3: Email */}
          <motion.div
            className={`p-4 sm:p-6 rounded-xl border transition-all duration-300 ${
              currentStep === 3
                ? "border-blue-500 bg-blue-500/10"
                : completedSteps.email
                ? "border-green-500 bg-green-500/10"
                : "border-gray-700 bg-gray-800/50"
            } ${!isStepAccessible(3) ? "opacity-50 pointer-events-none" : ""}`}
            variants={itemVariants}
          >
            <div className="flex items-center space-x-4 mb-4">
              <FaEnvelope className="text-2xl text-blue-400" />
              <div>
                <h3 className="text-xl font-semibold">Step 3: Enter Email</h3>
                <p className="text-gray-400">
                  We'll send you updates and exclusive offers
                </p>
              </div>
            </div>
            {isStepAccessible(3) && (
              <input
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200"
                required
              />
            )}
          </motion.div>

          {/* Step 4: Wallet */}
          <motion.div
            className={`p-4 sm:p-6 rounded-xl border transition-all duration-300 ${
              currentStep === 4
                ? "border-blue-500 bg-blue-500/10"
                : completedSteps.wallet
                ? "border-green-500 bg-green-500/10"
                : "border-gray-700 bg-gray-800/50"
            } ${!isStepAccessible(4) ? "opacity-50 pointer-events-none" : ""}`}
            variants={itemVariants}
          >
            <div className="flex items-center space-x-4 mb-4">
              <FaWallet className="text-2xl text-green-400" />
              <div>
                <h3 className="text-xl font-semibold">
                  Step 4: Wallet Address
                </h3>
                <p className="text-gray-400">
                  For early token/NFT drops and rewards
                </p>
              </div>
            </div>
            {isStepAccessible(4) && (
              <input
                type="text"
                placeholder="Enter your wallet address"
                value={formData.walletAddress}
                onChange={(e) =>
                  handleInputChange("walletAddress", e.target.value)
                }
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200"
                required
              />
            )}
          </motion.div>

          {/* Submit Button responsveed*/}
          <motion.div
            className="text-center pt-6 sm:pt-8"
            variants={itemVariants}
          >
            <button
              type="submit"
              disabled={!Object.values(completedSteps).every((step) => step)}
              className="w-full sm:w-auto bg-gradient-to-r from-[#3366FF] to-[#4DF3FF] hover:from-[#2952CC] hover:to-[#3DD1E6] disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
            >
              {Object.values(completedSteps).every((step) => step)
                ? "Join Waitlist"
                : "Complete All Steps to Continue"}
            </button>
            <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4 px-4">
              By joining, you agree to receive updates about VeraLux launches
              and exclusive opportunities.
            </p>
          </motion.div>
        </form>
      </motion.div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 border border-gray-700 shadow-2xl"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaXmark className="w-5 h-5" />
              </button>

              {/* Success Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <FaCheck className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 bg-gradient-to-r from-[#3366FF] to-[#4DF3FF] bg-clip-text text-transparent font-tactic">
                Welcome to VeraLux!
              </h2>

              {/* Message */}
              <p className="text-gray-300 text-center mb-6 leading-relaxed">
                Thank you for joining the waitlist! We'll be in touch soon with
                exclusive updates and early access opportunities.
              </p>

              {/* User Info Summary */}
              <div className="bg-gray-800/50 rounded-lg p-4 mb-6 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Discord:</span>
                  <span className="text-white font-medium">
                    {formData.discordUsername}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">X (Twitter):</span>
                  <span className="text-white font-medium">
                    @{formData.twitterUsername}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-white font-medium">
                    {formData.email}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="flex-1 bg-gradient-to-r from-[#3366FF] to-[#4DF3FF] hover:from-[#2952CC] hover:to-[#3DD1E6] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Continue
                </button>
                <button
                  onClick={() => {
                    window.open("https://discord.gg/gWTFWwaVbD", "_blank");
                    setShowSuccessModal(false);
                  }}
                  className="flex-1 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <FaDiscord className="w-4 h-4" />
                  Join Discord
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(Waitlist);
