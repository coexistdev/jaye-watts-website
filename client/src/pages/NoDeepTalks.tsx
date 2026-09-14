import { useMemo, useState } from "react";
import { ArrowRight, Check, Dice5, Heart, Sparkles, Trophy, X } from "lucide-react";

type Card = { category: string; icon: string; prompt: string };

const cards: Card[] = [
  { category: "CHAOS", icon: "🎲", prompt: "If we opened a restaurant together, what would we call it?" },
  { category: "CHAOS", icon: "🎲", prompt: "Create a fake conspiracy theory about the two of us." },
  { category: "CHAOS", icon: "🎲", prompt: "If our friendship were a sitcom, what would the show be called?" },
  { category: "CHAOS", icon: "🎲", prompt: "Invent a holiday that celebrates our friendship." },
  { category: "CHAOS", icon: "🎲", prompt: "Give the other person a ridiculous new occupation." },
  { category: "WHO KNOWS WHO?", icon: "😂", prompt: "If I suddenly got $10 million tomorrow, what is the first ridiculous thing I'd buy?" },
  { category: "WHO KNOWS WHO?", icon: "😂", prompt: "What's my most unnecessary luxury?" },
  { category: "WHO KNOWS WHO?", icon: "😂", prompt: "What reality show would I absolutely dominate?" },
  { category: "WHO KNOWS WHO?", icon: "😂", prompt: "What's the most predictable thing about me?" },
  { category: "WHO KNOWS WHO?", icon: "😂", prompt: "If I could teleport anywhere tonight, where would I go?" },
  { category: "WOULD YOU RATHER?", icon: "🔥", prompt: "Unlimited money for travel or unlimited money for food?" },
  { category: "WOULD YOU RATHER?", icon: "🔥", prompt: "Read minds or see 10 years into the future?" },
  { category: "WOULD YOU RATHER?", icon: "🔥", prompt: "Perfect hair forever or perfect skin forever?" },
  { category: "WOULD YOU RATHER?", icon: "🔥", prompt: "Your dream house or your dream wardrobe?" },
  { category: "WOULD YOU RATHER?", icon: "🔥", prompt: "Be trapped in a romantic comedy or an action movie?" },
  { category: "DO THE MOST", icon: "🎭", prompt: "Give your best dramatic movie death." },
  { category: "DO THE MOST", icon: "🎭", prompt: "Sell the other person a completely useless product in 30 seconds." },
  { category: "DO THE MOST", icon: "🎭", prompt: "Do your best impression of the other person." },
  { category: "DO THE MOST", icon: "🎭", prompt: "Give a presidential speech about something completely insignificant." },
  { category: "DO THE MOST", icon: "🎭", prompt: "Make up a commercial for your friendship." },
  { category: "ACTUALLY, THAT'S CUTE", icon: "✨", prompt: "What's something about me that always makes you laugh?" },
  { category: "ACTUALLY, THAT'S CUTE", icon: "✨", prompt: "What's one thing I'm surprisingly good at?" },
  { category: "ACTUALLY, THAT'S CUTE", icon: "✨", prompt: "What's a random memory of us that still makes you laugh?" },
  { category: "ACTUALLY, THAT'S CUTE", icon: "✨", prompt: "What's something you think we'd actually be really good at doing together?" },
  { category: "ACTUALLY, THAT'S CUTE", icon: "✨", prompt: "What's one thing you genuinely admire about me?" },
  { category: "WILDCARD", icon: "🃏", prompt: "Pick the song that describes this exact moment." },
  { category: "WILDCARD", icon: "🃏", prompt: "Find a photo on your phone that represents our friendship." },
  { category: "WILDCARD", icon: "🃏", prompt: "You have 30 seconds to make the other person laugh." },
  { category: "WILDCARD", icon: "🃏", prompt: "For the next five minutes, you are completely different people. Decide who." },
  { category: "WILDCARD", icon: "🃏", prompt: "Say the first three words that come into your head. No explanation." },
];

const modes = ["CHAOS", "WHO KNOWS WHO?", "WOULD YOU RATHER?", "DO THE MOST", "ACTUALLY, THAT'S CUTE", "WILDCARD"];

export default function NoDeepTalks() {
  const [screen, setScreen] = useState<"home" | "names" | "modes" | "play" | "end">("home");
  const [names, setNames] = useState(["", ""]);
  const [mode, setMode] = useState("SURPRISE");
  const [turn, setTurn] = useState(0);
  const [scores, setScores] = useState([0, 0]);
  const [deck, setDeck] = useState<Card[]>([]);
  const [card, setCard] = useState<Card | null>(null);
  const [scored, setScored] = useState(false);

  const displayNames = useMemo(() => [names[0] || "Player 1", names[1] || "Player 2"], [names]);

  function startGame() {
    const filtered = mode === "SURPRISE" ? cards : cards.filter(c => c.category === mode);
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setDeck(shuffled.slice(0, Math.min(8, shuffled.length)));
    setTurn(0); setScores([0, 0]); setScreen("play"); setScored(false);
    setCard(shuffled[shuffled.length - 1] || null);
  }

  function drawNext(nextTurn = true) {
    const nextDeck = [...deck];
    const next = nextDeck.pop();
    if (!next) { setScreen("end"); return; }
    setDeck(nextDeck); setCard(next); setScored(false);
    if (nextTurn) setTurn(t => 1 - t);
  }

  function award(points: number) {
    if (scored) return;
    setScores(s => { const n = [...s]; n[turn] += points; return n; });
    setScored(true);
  }

  return (
    <div className="min-h-screen bg-[#08080c] text-white overflow-hidden">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,79,216,.20),transparent_35%),radial-gradient(circle_at_100%_100%,rgba(111,92,255,.16),transparent_35%)]" />
      <main className="relative mx-auto min-h-screen max-w-xl px-5 py-8 flex flex-col justify-center">
        {screen === "home" && <div className="text-center">
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold tracking-[.18em] text-white/70">A FRIENDSHIP RESET GAME</span>
          <h1 className="mt-7 text-6xl font-black leading-[.82] tracking-[-.06em] sm:text-7xl">NO DEEP<br/><span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">TALKS.</span></h1>
          <p className="mx-auto mt-7 max-w-md text-base leading-7 text-white/55">Two people. One deck. Zero emotional dissertations. The goal is simple: leave happier than you started.</p>
          <button onClick={() => setScreen("names")} className="mt-8 w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-500 px-5 py-4 font-black shadow-lg shadow-fuchsia-500/20">START GAME <ArrowRight className="ml-2 inline" size={18}/></button>
        </div>}

        {screen === "names" && <div>
          <span className="text-4xl">👋🏽</span><h2 className="mt-4 text-3xl font-black">Who's playing?</h2><p className="mt-2 text-white/50">Give yourselves names for the scoreboard.</p>
          {[0,1].map(i => <input key={i} value={names[i]} onChange={e => setNames(n => { const x=[...n]; x[i]=e.target.value; return x; })} placeholder={i===0?"Player 1":"Player 2"} className="mt-4 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none focus:border-fuchsia-400" />)}
          <button onClick={() => setScreen("modes")} className="mt-5 w-full rounded-2xl bg-white px-5 py-4 font-black text-black">LET'S PLAY →</button>
        </div>}

        {screen === "modes" && <div><h2 className="text-3xl font-black">Pick your mode</h2><p className="mt-2 text-white/50">Or hit Surprise Me and let fate choose.</p>
          <div className="mt-6 grid grid-cols-2 gap-3">{modes.map(m => <button key={m} onClick={() => {setMode(m); setTimeout(startGame, 0)}} className="min-h-24 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm font-black hover:bg-white/10">{cards.find(c=>c.category===m)?.icon}<br/>{m}</button>)}</div>
          <button onClick={() => {setMode("SURPRISE"); setTimeout(startGame,0)}} className="mt-3 w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-500 px-5 py-4 font-black">🎰 SURPRISE ME</button>
        </div>}

        {screen === "play" && <div>
          <div className="mb-5 grid grid-cols-2 gap-3">{displayNames.map((n,i)=><div key={n+i} className={`rounded-2xl border p-3 text-center ${turn===i?'border-fuchsia-400/60 bg-fuchsia-500/10':'border-white/10 bg-white/5'}`}><div className="text-[10px] font-bold uppercase tracking-widest text-white/40">{n}</div><div className="text-2xl font-black">{scores[i]}</div></div>)}</div>
          <div className="mb-3 flex items-center justify-between"><span className="text-sm text-white/50">{displayNames[turn]}'s turn</span><button onClick={()=>setScreen("modes")} className="text-xs text-white/40">CHANGE MODE</button></div>
          <div className="min-h-[380px] rounded-[30px] border border-white/10 bg-gradient-to-br from-[#1a1722] to-[#101016] p-7 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between"><span className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-black tracking-widest text-white/60">{card?.icon} {card?.category}</span><Dice5 className="text-white/20"/></div>
            <div className="flex min-h-[285px] items-center"><h3 className="text-3xl font-black leading-tight tracking-tight">{card?.prompt}</h3></div>
            <div className="text-center text-xs text-white/30">🚨 NO DEEP TALKS. PASS IF YOU WANT.</div>
          </div>
          {!scored ? <div className="mt-4 grid grid-cols-2 gap-2"><button onClick={()=>award(1)} className="rounded-xl border border-white/10 bg-white/5 py-3 text-xs font-black">+1 CORRECT</button><button onClick={()=>award(1)} className="rounded-xl border border-white/10 bg-white/5 py-3 text-xs font-black">+1 MADE ME LAUGH</button><button onClick={()=>award(2)} className="rounded-xl border border-white/10 bg-white/5 py-3 text-xs font-black">+2 UNEXPECTED</button><button onClick={()=>award(3)} className="rounded-xl border border-fuchsia-400/20 bg-fuchsia-500/10 py-3 text-xs font-black">+3 LEGENDARY</button></div> : <button onClick={()=>drawNext(true)} className="mt-4 w-full rounded-2xl bg-white py-4 font-black text-black">NEXT CARD <ArrowRight className="ml-2 inline" size={17}/></button>}
        </div>}

        {screen === "end" && <div className="text-center"><Trophy className="mx-auto text-fuchsia-400" size={48}/><span className="mt-6 inline-block rounded-full border border-white/15 px-3 py-1 text-[10px] font-black tracking-widest text-white/60">FRIENDSHIP STATUS</span><div className="mt-5 text-7xl">😂</div><h2 className="mt-3 text-3xl font-black">Y'ALL ARE ACTUALLY FUNNY TOGETHER.</h2><p className="mt-4 text-white/50">Final score: <b className="text-white">{scores[0]}</b> to <b className="text-white">{scores[1]}</b>. Now go do something ridiculous.</p><button onClick={()=>setScreen("modes")} className="mt-7 w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-500 py-4 font-black">PLAY AGAIN</button></div>}
      </main>
    </div>
  );
}
