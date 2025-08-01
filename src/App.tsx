import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NoviaPage() {
  const [isBot, setIsBot] = useState<boolean | null>(null);
  const [showText, setShowText] = useState(false);
  const [showSecretButton, setShowSecretButton] = useState(false);
  const [showSecret, setShowSecret] = useState(false);

  const handleBotClick = () => setIsBot(true);
  const handleNoBotClick = () => setIsBot(false);
  const reset = () => {
    setIsBot(null);
    setShowText(false);
    setShowSecretButton(false);
    setShowSecret(false);
  };
  const handleSecretClick = () => setShowSecret(true);

  useEffect(() => {
    if (isBot) {
      const timeout = setTimeout(() => setShowText(true), 8000);
      const buttonTimeout = setTimeout(() => setShowSecretButton(true), 9000);
      return () => {
        clearTimeout(timeout);
        clearTimeout(buttonTimeout);
      };
    }
  }, [isBot]);

  const stems = [
    { d: "M200 450 Q190 350 180 220 Q176 140 170 80", delay: 0 },
    { d: "M200 450 Q210 360 220 240 Q224 160 230 100", delay: 0.5 },
    { d: "M200 450 Q180 380 190 260 Q186 180 180 120", delay: 1 },
    { d: "M200 450 Q220 350 210 220 Q214 145 220 90", delay: 1.5 },
    { d: "M200 450 Q200 350 200 220 Q200 140 200 70", delay: 2 }
  ];

  const flowers = [
    { x: 170, y: 80, delay: 3, color: "#ff69b4", size: 12 },
    { x: 230, y: 100, delay: 3.5, color: "#ff1493", size: 14 },
    { x: 180, y: 120, delay: 4, color: "#ffc0cb", size: 13 },
    { x: 220, y: 90, delay: 4.5, color: "#ff69b4", size: 15 },
    { x: 200, y: 70, delay: 5, color: "#ff1493", size: 16 },
    { x: 180, y: 220, delay: 3.2, color: "#ffc0cb", size: 11 },
    { x: 220, y: 240, delay: 3.7, color: "#ff69b4", size: 13 },
    { x: 190, y: 260, delay: 4.2, color: "#ff1493", size: 12 },
    { x: 210, y: 220, delay: 4.7, color: "#ffc0cb", size: 14 },
    { x: 160, y: 150, delay: 3.8, color: "#ff69b4", size: 10 },
    { x: 240, y: 170, delay: 4.3, color: "#ffc0cb", size: 11 },
    { x: 195, y: 160, delay: 4.8, color: "#ff1493", size: 13 },
  ];

  const leaves = [
    { x: 150, y: 180, delay: 2.5, size: 15 },
    { x: 250, y: 200, delay: 3, size: 18 },
    { x: 160, y: 280, delay: 2.8, size: 16 },
    { x: 240, y: 300, delay: 3.3, size: 17 },
    { x: 170, y: 350, delay: 2.2, size: 14 },
    { x: 230, y: 370, delay: 2.7, size: 19 },
    { x: 185, y: 320, delay: 2.9, size: 13 },
    { x: 215, y: 340, delay: 3.1, size: 15 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900 flex items-center justify-center flex-col gap-6 p-6 relative overflow-hidden h-screen">
      {/* Estrellas de fondo */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {isBot === null && (
        <>
          <h1 className="text-3xl font-bold text-white mb-4">¿Eres un bot?</h1>
          <div className="flex gap-6">
            <button
              onClick={handleBotClick}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Soy bot
            </button>
            <button
              onClick={handleNoBotClick}
              className="px-6 py-3 border-2 border-pink-500 text-pink-300 rounded-xl hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              No soy bot
            </button>
          </div>
        </>
      )}

      {isBot && !showSecret && (
        <div className="relative w-[500px] h-[700px] mt-10">
          {/* Texto superior con luciérnagas */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.h2 
              className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-2"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
            >
              Eres un bot muy bot! 
            </motion.h2>
            <motion.h3 
              className="text-2xl font-semibold text-pink-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Feliz día de la novia niña popolona 
            </motion.h3>

            {/* Luciérnagas alrededor del texto */}
            {[...Array(12)].map((_, i) => {
              const textFireflyDelay = Math.random() * 2 + 2;
              const textFireflyDuration = 3 + Math.random() * 2;
              const randomTextX = Math.random() * 40 - 20;
              const randomTextY = Math.random() * 20 - 10;
              const randomTextX2 = Math.random() * 30 - 15;
              const randomTextY2 = Math.random() * 25 - 12;
              
              return (
                <motion.div
                  key={`text-firefly-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: Math.random() * 4 + 2,
                    height: Math.random() * 4 + 2,
                    top: `${Math.random() * 80 - 10}px`,
                    left: `${(Math.random() * 300 - 150)}px`,
                    background: `radial-gradient(circle, ${
                      ['#ffd700', '#ffff00', '#ff69b4', '#98fb98'][Math.floor(Math.random() * 4)]
                    } 0%, transparent 70%)`,
                    boxShadow: `0 0 ${Math.random() * 12 + 6}px ${
                      ['#ffd700', '#ffff00', '#ff69b4', '#98fb98'][Math.floor(Math.random() * 4)]
                    }`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0.7, 1, 0],
                    scale: [0, 1, 0.8, 1.3, 0],
                    x: [0, randomTextX, randomTextX2],
                    y: [0, randomTextY, randomTextY2],
                  }}
                  transition={{
                    duration: textFireflyDuration,
                    repeat: Infinity,
                    delay: textFireflyDelay,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </motion.div>

          {/* Ramo de flores */}
          {/* Ramo de flores */}
          <motion.svg
            width="500"
            height="600"
            viewBox="0 0 400 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-1/2 top-25 transform -translate-x-1/2"
          >
            {/* Tallos */}
            {stems.map((stem, i) => (
              <motion.path
                key={i}
                d={stem.d}
                stroke="#4ade80"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ 
                  duration: 2, 
                  delay: stem.delay,
                  ease: 'easeInOut' 
                }}
              />
            ))}

            {/* Hojas */}
            {leaves.map((leaf, i) => (
              <motion.ellipse
                key={i}
                cx={leaf.x}
                cy={leaf.y}
                rx={leaf.size}
                ry={leaf.size * 1.8}
                fill="#22c55e"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.8 }}
                transition={{ 
                  delay: leaf.delay,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
              />
            ))}

            {/* Flores */}
            {flowers.map((flower, i) => (
              <motion.g key={i}>
                {/* Pétalos */}
                {[0, 1, 2, 3, 4].map((petal) => (
                  <motion.ellipse
                    key={petal}
                    cx={flower.x}
                    cy={flower.y}
                    rx={flower.size}
                    ry={flower.size * 1.8}
                    fill={flower.color}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.9 }}
                    transition={{ 
                      delay: flower.delay + petal * 0.1,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 300
                    }}
                    transform={`rotate(${petal * 72} ${flower.x} ${flower.y})`}
                  />
                ))}
                {/* Centro de la flor */}
                <motion.circle
                  cx={flower.x}
                  cy={flower.y}
                  r={flower.size * 0.6}
                  fill="#ffd700"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: flower.delay + 0.5,
                    duration: 0.3,
                    type: "spring",
                    stiffness: 400
                  }}
                />
              </motion.g>
            ))}

            {/* Lazo del ramo */}
            <motion.path
              d="M170 430 Q200 450 230 430 Q200 470 170 430"
              fill="#ff69b4"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 6, duration: 0.5 }}
            />
            <motion.path
              d="M170 430 Q200 410 230 430 Q200 390 170 430"
              fill="#ff1493"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 6.2, duration: 0.5 }}
            />
          </motion.svg>

          {/* Luciérnagas mágicas */}
          {[...Array(35)].map((_, i) => {
            const randomDelay = Math.random() * 2;
            const randomDuration = 4 + Math.random() * 3;
            const randomX = Math.random() * 80 - 40;
            const randomY = Math.random() * 60 - 30;
            const randomX2 = Math.random() * 50 - 25;
            const randomY2 = Math.random() * 80 - 40;
            
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 6 + 3,
                  height: Math.random() * 6 + 3,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  background: `radial-gradient(circle, ${
                    ['#ffd700', '#ffff00', '#00ffff', '#ff69b4', '#98fb98'][Math.floor(Math.random() * 5)]
                  } 0%, transparent 70%)`,
                  boxShadow: `0 0 ${Math.random() * 15 + 8}px ${
                    ['#ffd700', '#ffff00', '#00ffff', '#ff69b4', '#98fb98'][Math.floor(Math.random() * 5)]
                  }`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0.7, 1, 0],
                  scale: [0, 1, 0.8, 1.2, 0],
                  x: [0, randomX, randomX2],
                  y: [0, randomY, randomY2],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: randomDelay,
                  ease: "easeInOut",
                }}
              />
            );
          })}

          {/* Partículas brillantes adicionales */}
          {[...Array(20)].map((_, i) => {
            const sparkleDelay = Math.random() * 3;
            const sparkleDuration = 2 + Math.random() * 2;
            
            return (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 3 + 1,
                  height: Math.random() * 3 + 1,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  backgroundColor: "#ffffff",
                  boxShadow: "0 0 10px #ffffff",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 2, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: sparkleDuration,
                  repeat: Infinity,
                  delay: sparkleDelay,
                }}
              />
            );
          })}

          {/* Texto final */}
          {showText && (
            <motion.div
              className="absolute bottom-[-80px] w-full text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <motion.p 
                className="text-pink-300 text-xl font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Con amor y luciérnagas mágicas
              </motion.p>
            </motion.div>
          )}

          {/* Botón secreto */}
          {showSecretButton && (
            <motion.button
              onClick={handleSecretClick}
              className="absolute top-1/2 right-[-120px] transform -translate-y-1/2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 z-20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            >
              Presiona aquí
            </motion.button>
          )}

          {/* Botón regresar para el estado bot */}
          <motion.button
            onClick={reset}
            className="absolute top-1/2 left-[-120px] transform -translate-y-1/2 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: showText ? 1 : 0 }}
            transition={{ delay: 1 }}
          >
            Escoger de nuevo
          </motion.button>
        </div>
      )}

      {/* Pantalla secreta */}
      {showSecret && (
        <motion.div 
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-red-400 mb-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3 }}
          >
            TU POTO WELE MUY FEOOOOOOOOOO
          </motion.h2>
          
          <motion.img
            src="/main.png"
            alt="Imagen secreta"
            className="w-80 h-60 rounded-lg shadow-2xl object-cover"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
          />
          
          <motion.button
            onClick={reset}
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl hover:from-red-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Escoger de nuevo
          </motion.button>
        </motion.div>
      )}

      {isBot === false && (
        <div className="flex flex-col items-center gap-6">
          <img
            src="angry.gif"
            alt="Imagen personalizada"
            className="w-64 h-48 rounded-lg shadow-2xl object-cover"
          />
          <p className="text-red-400 text-xl font-semibold">Por mentirosa tu poto wele muy feo</p>
          <button
            onClick={reset}
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl hover:from-red-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Escoger de nuevo
          </button>
        </div>
      )}
    </div>
  );
}