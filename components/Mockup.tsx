'use client';

/* ─── Screens fidèles à l'app réelle tieproject.base44.app ─── */

/* Barre de navigation basse commune */
function BottomNav({ active }: { active: 'home' | 'inventory' | 'recipes' }) {
  const tabs = [
    { key: 'home', label: 'Accueil', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    )},
    { key: 'inventory', label: 'Inventaire', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    )},
    { key: 'recipes', label: 'Recettes', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/><path d="M12 8v4l3 3"/>
      </svg>
    )},
  ];
  return (
    <div className="bg-white border-t border-gray-100 flex items-center">
      {tabs.map(t => (
        <div key={t.key} className={`flex-1 flex flex-col items-center py-1.5 gap-0.5 ${active === t.key ? 'text-[#22a085]' : 'text-gray-400'}`}>
          {t.icon}
          <span className="text-[7px] font-semibold">{t.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Dashboard (Accueil) ── */
export function DashboardScreen() {
  return (
    <div className="w-full h-full bg-[#f5f6f7] flex flex-col text-[#111]" style={{ fontSize: 11 }}>
      {/* Header */}
      <div className="bg-white px-4 pt-3 pb-2.5 border-b border-gray-100">
        <p className="text-gray-400 text-[9px]">Bonjour 👋</p>
        <p className="font-black text-base leading-tight">Mon Frigo</p>
      </div>

      <div className="flex-1 overflow-hidden px-3 py-2.5 space-y-2.5">
        {/* Alerte péremption */}
        <div className="rounded-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)' }}>
          <div className="px-3 py-2.5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white font-bold text-[10px]">⚠ Attention !</p>
                <p className="text-white/80 text-[9px] mt-0.5">3 produits périmés</p>
              </div>
              <span className="text-white/60 text-[10px]">×</span>
            </div>
            <div className="flex gap-1 flex-wrap mt-2">
              {['Yaourt nature', 'Poulet rôti', 'Salade verte'].map(p => (
                <span key={p} className="text-[8px] px-1.5 py-0.5 rounded-full bg-white/25 text-white font-medium">{p}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats par emplacement */}
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { icon: '🧊', label: 'Frigo', value: '5' },
            { icon: '🗄', label: 'Placard', value: '7' },
            { icon: '❄️', label: 'Congélateur', value: '1' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl py-2 px-1 text-center border border-gray-100">
              <div className="text-sm">{s.icon}</div>
              <div className="font-black text-sm mt-0.5">{s.value}</div>
              <div className="text-[8px] text-gray-400 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Recettes */}
        <div className="rounded-xl flex items-center gap-2.5 px-3 py-2.5" style={{ background: '#22a085' }}>
          <span className="text-base">🍽</span>
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-[10px]">Idées recettes</p>
            <p className="text-white/70 text-[9px]">3 produits à cuisiner rapidement</p>
          </div>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </div>

        {/* À consommer rapidement */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[9px] font-bold text-gray-600">À consommer rapidement</p>
            <p className="text-[8px] text-[#22a085] font-semibold">Tout voir</p>
          </div>
          <div className="space-y-1.5">
            {[
              { emoji: '🧀', name: 'Yaourt nature', loc: 'Frigo', qty: '4 pièce', exp: '16 mars 2026' },
              { emoji: '🥦', name: 'Salade verte',  loc: 'Frigo', qty: '1 pièce', exp: '16 mars 2026' },
            ].map(item => (
              <div key={item.name} className="bg-white rounded-xl border border-gray-100 px-3 py-2">
                <div className="flex items-center gap-2">
                  <span className="text-base leading-none">{item.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-bold text-gray-800 truncate">{item.name}</p>
                      <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-red-100 text-red-600 shrink-0 ml-1">Périmé</span>
                    </div>
                    <p className="text-[8px] text-gray-400 mt-0.5">📍 {item.loc} · {item.qty} · Exp: {item.exp}</p>
                  </div>
                </div>
                <div className="mt-1.5 text-[8px] font-semibold text-[#22a085]">✓ Consommé</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav active="home" />
    </div>
  );
}

/* ── Inventaire ── */
export function InventoryScreen() {
  const items = [
    { emoji: '🧀', name: 'Yaourt nature',   loc: 'Frigo',       qty: '4 pièce', exp: '16 mars 2026', badge: 'Périmé',    bc: '#fef2f2', tc: '#dc2626' },
    { emoji: '🥦', name: 'Salade verte',    loc: 'Frigo',       qty: '1 pièce', exp: '16 mars 2026', badge: 'Périmé',    bc: '#fef2f2', tc: '#dc2626' },
    { emoji: '🥩', name: 'Poulet rôti',     loc: 'Frigo',       qty: '1 pièce', exp: '17 mars 2026', badge: 'Périmé',    bc: '#fef2f2', tc: '#dc2626' },
    { emoji: '🧊', name: 'Pizza surgelée',  loc: 'Congélateur', qty: '1 pièce', exp: '1 juil. 2026', badge: '93 jours',  bc: '#f0fdf4', tc: '#16a34a' },
    { emoji: '🍪', name: 'Speculoos',       loc: 'Placard',     qty: '1 tube',  exp: '7 juil. 2026', badge: '99 jours',  bc: '#f0fdf4', tc: '#16a34a' },
    { emoji: '🍞', name: 'Pâtes spaghetti', loc: 'Placard',     qty: '500g',    exp: '15 sept. 2026',badge: '169 jours', bc: '#f0fdf4', tc: '#16a34a' },
  ];
  return (
    <div className="w-full h-full bg-[#f5f6f7] flex flex-col text-[#111]" style={{ fontSize: 11 }}>
      {/* Header */}
      <div className="bg-white px-4 pt-3 pb-2 border-b border-gray-100">
        <p className="font-black text-base">Inventaire</p>
        <p className="text-[9px] text-gray-400 mt-0.5">13 produits</p>
        {/* Search */}
        <div className="mt-2 flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-gray-100">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <span className="text-[9px] text-gray-400">Rechercher un aliment…</span>
        </div>
        {/* Tabs */}
        <div className="flex gap-1 mt-2">
          {['Tout (13)', 'Frigo', 'Placard', 'Congel.'].map((t, i) => (
            <div key={t} className={`px-2 py-0.5 rounded-full text-[8px] font-semibold ${i === 0 ? 'bg-[#0f2523] text-white' : 'bg-gray-100 text-gray-500'}`}>{t}</div>
          ))}
        </div>
        <p className="text-[8px] text-gray-400 mt-1.5">Tri: Date de péremption</p>
      </div>

      {/* List */}
      <div className="flex-1 overflow-hidden px-2.5 py-2 space-y-1.5">
        {items.map(item => (
          <div key={item.name} className="bg-white rounded-xl border border-gray-100 px-2.5 py-2">
            <div className="flex items-center gap-2">
              <span className="text-base leading-none">{item.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <p className="text-[10px] font-bold text-gray-800 truncate">{item.name}</p>
                  <span className="text-[7px] font-bold px-1.5 py-0.5 rounded-full shrink-0" style={{ background: item.bc, color: item.tc }}>{item.badge}</span>
                </div>
                <p className="text-[7.5px] text-gray-400 mt-0.5">📍 {item.loc} · {item.qty} · Exp: {item.exp}</p>
              </div>
            </div>
            <div className="mt-1 text-[7.5px] font-semibold text-[#22a085]">✓ Consommé</div>
          </div>
        ))}
      </div>

      <BottomNav active="inventory" />
    </div>
  );
}

/* ── Alertes (vue Accueil focalisée sur l'alerte) ── */
export function AlertsScreen() {
  return (
    <div className="w-full h-full bg-[#f5f6f7] flex flex-col text-[#111]" style={{ fontSize: 11 }}>
      <div className="bg-white px-4 pt-3 pb-2.5 border-b border-gray-100">
        <p className="text-gray-400 text-[9px]">Bonjour 👋</p>
        <p className="font-black text-base leading-tight">Mon Frigo</p>
      </div>
      <div className="flex-1 overflow-hidden px-3 py-2.5 space-y-2">
        {/* Grande alerte */}
        <div className="rounded-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)' }}>
          <div className="px-3 py-3">
            <p className="text-white font-bold text-[11px]">⚠ Attention !</p>
            <p className="text-white font-black text-base mt-0.5">5 produits périmés</p>
            <div className="flex gap-1 flex-wrap mt-2">
              {['Lait entier', 'Yaourt nature', 'Poulet rôti', 'Salade verte', 'Tomates'].map(p => (
                <span key={p} className="text-[8px] px-1.5 py-0.5 rounded-full bg-white/25 text-white font-medium">{p}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Produits à consommer */}
        <div>
          <p className="text-[9px] font-bold text-gray-600 mb-1.5">À consommer rapidement</p>
          <div className="space-y-1.5">
            {[
              { emoji: '🧀', name: 'Yaourt nature', exp: '16 mars 2026' },
              { emoji: '🥦', name: 'Salade verte',  exp: '16 mars 2026' },
              { emoji: '🥩', name: 'Poulet rôti',   exp: '17 mars 2026' },
              { emoji: '🥦', name: 'Tomates',       exp: '18 mars 2026' },
            ].map(item => (
              <div key={item.name} className="bg-white rounded-xl border border-gray-100 px-3 py-2">
                <div className="flex items-center gap-2">
                  <span className="text-base leading-none">{item.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-bold text-gray-800">{item.name}</p>
                      <span className="text-[7.5px] font-bold px-1.5 py-0.5 rounded-full bg-red-100 text-red-600">Périmé</span>
                    </div>
                    <p className="text-[8px] text-gray-400 mt-0.5">Frigo · Exp: {item.exp}</p>
                  </div>
                </div>
                <div className="mt-1 text-[8px] font-semibold text-[#22a085]">✓ Consommé</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav active="home" />
    </div>
  );
}

/* ── Recettes ── */
export function RecipesScreen() {
  const ingredients = ['Biscoff Speculoos', 'Dinosaurus', 'Eau SPA Reine', 'Mélange de noix', 'Lait entier', 'Pizza surgelée', 'Pâtes spaghetti', 'Yaourt nature', 'Poulet rôti'];
  return (
    <div className="w-full h-full bg-[#f5f6f7] flex flex-col text-[#111]" style={{ fontSize: 11 }}>
      <div className="bg-white px-4 pt-3 pb-2.5 border-b border-gray-100">
        <p className="font-black text-base">Recettes</p>
        <p className="text-[9px] text-gray-500 mt-0.5">Des idées avec ce que vous avez</p>
      </div>

      <div className="flex-1 overflow-hidden px-3 py-2.5 space-y-3">
        {/* Tabs */}
        <div className="flex gap-1.5">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[8.5px] font-semibold" style={{ background: '#22a085', color: 'white' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            Tous les ingrédients
          </div>
          <div className="px-2.5 py-1 rounded-full text-[8.5px] font-semibold border border-gray-200 text-gray-500">
            Bientôt périmés (0)
          </div>
        </div>

        {/* Ingrédients disponibles */}
        <div>
          <p className="text-[8.5px] font-bold text-gray-500 mb-2">13 ingrédients disponibles</p>
          <div className="flex flex-wrap gap-1">
            {ingredients.map(ing => (
              <span key={ing} className="text-[8px] px-2 py-0.5 rounded-full bg-white border border-gray-200 text-gray-600 font-medium">{ing}</span>
            ))}
          </div>
        </div>

        {/* Bouton générer */}
        <div className="pt-2">
          <div className="w-full py-2.5 rounded-xl flex items-center justify-center gap-1.5" style={{ background: '#22a085' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            <span className="text-white font-bold text-[10px]">Générer des recettes</span>
          </div>
          <p className="text-center text-[8px] text-gray-400 mt-1.5">L&apos;IA propose des recettes selon votre inventaire</p>
        </div>
      </div>

      <BottomNav active="recipes" />
    </div>
  );
}

/* ── Ajout d'un aliment ── */
export function AddProductScreen() {
  return (
    <div className="w-full h-full bg-[#f5f6f7] flex flex-col text-[#111]" style={{ fontSize: 11 }}>
      {/* Header */}
      <div className="bg-white px-4 pt-3 pb-2.5 border-b border-gray-100 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        </div>
        <p className="font-black text-sm">Ajouter un aliment</p>
      </div>

      <div className="flex-1 overflow-hidden px-3 py-3 space-y-3">
        {/* Nom */}
        <div>
          <p className="text-[8.5px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Nom du produit</p>
          <div className="bg-white border border-gray-200 rounded-xl px-3 py-2 flex items-center gap-2">
            <span className="text-base">🔍</span>
            <span className="text-[10px] text-gray-400">Ex: Yaourt nature, Lait…</span>
          </div>
        </div>

        {/* Emplacement */}
        <div>
          <p className="text-[8.5px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Emplacement</p>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { label: 'Frigo', emoji: '🧊', active: true },
              { label: 'Placard', emoji: '🗄', active: false },
              { label: 'Congélateur', emoji: '❄️', active: false },
            ].map(loc => (
              <div key={loc.label} className={`rounded-xl py-2 flex flex-col items-center gap-0.5 border text-center ${loc.active ? 'border-[#22a085] bg-[#f0faf9]' : 'border-gray-200 bg-white'}`}>
                <span className="text-sm">{loc.emoji}</span>
                <span className={`text-[8px] font-semibold ${loc.active ? 'text-[#22a085]' : 'text-gray-500'}`}>{loc.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quantité + Unité */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-[8.5px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Quantité</p>
            <div className="bg-white border border-gray-200 rounded-xl px-3 py-2">
              <span className="text-[10px] text-gray-400">1</span>
            </div>
          </div>
          <div>
            <p className="text-[8.5px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Unité</p>
            <div className="bg-white border border-gray-200 rounded-xl px-3 py-2 flex items-center justify-between">
              <span className="text-[10px] text-gray-700">pièce</span>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>
        </div>

        {/* Date péremption */}
        <div>
          <p className="text-[8.5px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Date de péremption</p>
          <div className="bg-white border border-gray-200 rounded-xl px-3 py-2 flex items-center justify-between">
            <span className="text-[10px] text-gray-400">jj/mm/aaaa</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
        </div>

        {/* Bouton ajouter */}
        <button className="w-full py-2.5 rounded-xl text-white text-[10px] font-bold flex items-center justify-center gap-1.5" style={{ background: '#22a085' }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Ajouter à l&apos;inventaire
        </button>
      </div>

      <BottomNav active="inventory" />
    </div>
  );
}

/* ── Recettes en cours de génération ── */
export function RecipesGeneratingScreen() {
  return (
    <div className="w-full h-full bg-[#f5f6f7] flex flex-col text-[#111]" style={{ fontSize: 11 }}>
      <div className="bg-white px-4 pt-3 pb-2.5 border-b border-gray-100">
        <p className="font-black text-sm">Recettes</p>
        <p className="text-[9px] text-gray-500 mt-0.5">Des idées avec ce que vous avez</p>
      </div>
      <div className="flex-1 overflow-hidden px-3 py-2.5 space-y-3">
        {/* Tabs */}
        <div className="flex gap-1.5">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[8.5px] font-semibold" style={{ background: '#22a085', color: 'white' }}>
            Tous les ingrédients
          </div>
          <div className="px-2.5 py-1 rounded-full text-[8.5px] font-semibold border border-gray-200 text-gray-500">
            Bientôt périmés
          </div>
        </div>

        <p className="text-[8.5px] font-bold text-gray-500">13 ingrédients disponibles</p>
        <div className="flex flex-wrap gap-1">
          {['Speculoos', 'Dinosaurus', 'Eau SPA', 'Lait entier', 'Pizza', 'Pâtes', 'Yaourt', 'Poulet'].map(ing => (
            <span key={ing} className="text-[8px] px-2 py-0.5 rounded-full bg-white border border-gray-200 text-gray-600">{ing}</span>
          ))}
        </div>

        {/* Génération en cours */}
        <div className="mt-2">
          <div className="w-full py-3 rounded-xl flex items-center justify-center gap-2" style={{ background: '#d1fae5', border: '1px solid #6ee7b7' }}>
            <svg className="animate-spin" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22a085" strokeWidth="2.5" strokeLinecap="round">
              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity=".25"/>
              <path d="M21 12c0-4.97-4.03-9-9-9"/>
            </svg>
            <span className="text-[10px] font-bold text-[#22a085]">Génération en cours…</span>
          </div>
          <p className="text-center text-[8px] text-gray-400 mt-2">L&apos;IA analyse vos 13 ingrédients</p>
        </div>
      </div>
      <BottomNav active="recipes" />
    </div>
  );
}

/* ── Proposition de recettes (résultat IA) ── */
export function RecipesResultScreen() {
  const recipes = [
    {
      emoji: '🍝',
      name: 'Pâtes au poulet & parmesan',
      time: '20 min',
      diff: 'Facile',
      tags: ['Poulet rôti', 'Pâtes spaghetti', 'Lait entier'],
      bg: '#0f2523',
    },
    {
      emoji: '🥗',
      name: 'Salade yaourt & speculoos',
      time: '10 min',
      diff: 'Très facile',
      tags: ['Yaourt nature', 'Speculoos'],
      bg: '#1e3a5f',
    },
    {
      emoji: '🍕',
      name: 'Pizza gratinée maison',
      time: '25 min',
      diff: 'Facile',
      tags: ['Pizza surgelée', 'Lait entier'],
      bg: '#4c1d6e',
    },
  ];
  return (
    <div className="w-full h-full bg-[#f5f6f7] flex flex-col text-[#111]" style={{ fontSize: 11 }}>
      <div className="bg-white px-4 pt-3 pb-2.5 border-b border-gray-100">
        <p className="font-black text-sm">Recettes</p>
        <p className="text-[9px] text-gray-500 mt-0.5">Des idées avec ce que vous avez</p>
      </div>

      <div className="flex-1 overflow-hidden px-3 py-2.5 space-y-2">
        {/* Tabs */}
        <div className="flex gap-1.5 mb-1">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[8.5px] font-semibold" style={{ background: '#22a085', color: 'white' }}>
            Tous les ingrédients
          </div>
          <div className="px-2.5 py-1 rounded-full text-[8.5px] font-semibold border border-gray-200 text-gray-500">
            Bientôt périmés
          </div>
        </div>

        <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">3 recettes proposées</p>

        {recipes.map(r => (
          <div key={r.name} className="rounded-xl overflow-hidden">
            <div className="px-3 py-2.5" style={{ background: r.bg }}>
              <div className="flex items-start justify-between gap-1">
                <div className="flex items-start gap-1.5">
                  <span className="text-base leading-none">{r.emoji}</span>
                  <div>
                    <p className="text-white font-bold text-[9.5px] leading-tight">{r.name}</p>
                    <p className="text-white/50 text-[7.5px] mt-0.5">{r.time} · {r.diff}</p>
                  </div>
                </div>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
              <div className="flex gap-1 flex-wrap mt-1.5">
                {r.tags.map(t => (
                  <span key={t} className="text-[7px] px-1.5 py-0.5 rounded-full bg-white/15 text-white/70">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNav active="recipes" />
    </div>
  );
}

/* ── Ajout par photo (mode IA) ── */
export function AddProductPhotoScreen() {
  return (
    <div className="w-full h-full bg-[#f5f6f7] flex flex-col text-[#111]" style={{ fontSize: 11 }}>
      {/* Header */}
      <div className="bg-white px-4 pt-3 pb-2.5 border-b border-gray-100 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        </div>
        <p className="font-black text-sm">Ajouter un aliment</p>
      </div>

      <div className="flex-1 overflow-hidden px-3 py-2.5 space-y-2.5">
        {/* Mode switcher */}
        <div className="flex gap-1.5 p-1 bg-white rounded-xl border border-gray-200">
          <div className="flex-1 py-1.5 rounded-lg text-center text-[9px] font-semibold text-gray-400">
            Manuel
          </div>
          <div className="flex-1 py-1.5 rounded-lg text-center text-[9px] font-bold text-white flex items-center justify-center gap-1" style={{ background: '#22a085' }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
            Photo IA
          </div>
        </div>

        {/* Photo capturée */}
        <div className="rounded-xl overflow-hidden border border-gray-200 bg-[#e8f4f0]" style={{ height: 80 }}>
          <div className="w-full h-full flex flex-col items-center justify-center gap-1 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-12 rounded-lg border-2 border-[#22a085] flex items-center justify-center" style={{ background: 'rgba(34,160,133,0.08)' }}>
                <span className="text-2xl">🥛</span>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ background: '#22a085' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="text-[7px] text-white font-bold">Détecté</span>
            </div>
          </div>
        </div>

        {/* Résultat IA */}
        <div className="bg-white rounded-xl border border-[#22a085]/30 px-3 py-2.5">
          <div className="flex items-center gap-1 mb-2">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#22a085" strokeWidth="2.5" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            <p className="text-[8.5px] font-bold text-[#22a085]">Produit détecté par l&apos;IA</p>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[8px] text-gray-400">Nom</span>
              <span className="text-[9px] font-bold text-gray-800">Lait demi-écrémé</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[8px] text-gray-400">Date exp.</span>
              <span className="text-[9px] font-bold text-gray-800">28/04/2026</span>
            </div>
          </div>
        </div>

        {/* Emplacement */}
        <div>
          <p className="text-[8.5px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Emplacement</p>
          <div className="grid grid-cols-3 gap-1">
            {[
              { label: 'Frigo', emoji: '🧊', active: true },
              { label: 'Placard', emoji: '🗄', active: false },
              { label: 'Congélateur', emoji: '❄️', active: false },
            ].map(loc => (
              <div key={loc.label} className={`rounded-xl py-1.5 flex flex-col items-center gap-0.5 border ${loc.active ? 'border-[#22a085] bg-[#f0faf9]' : 'border-gray-200 bg-white'}`}>
                <span className="text-sm">{loc.emoji}</span>
                <span className={`text-[7.5px] font-semibold ${loc.active ? 'text-[#22a085]' : 'text-gray-500'}`}>{loc.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton confirmer */}
        <button className="w-full py-2.5 rounded-xl text-white text-[10px] font-bold flex items-center justify-center gap-1.5" style={{ background: '#22a085' }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          Confirmer et ajouter
        </button>
      </div>

      <BottomNav active="inventory" />
    </div>
  );
}

/* ─── Tablet frame ─── */
interface TabletProps { children: React.ReactNode; width?: number; }

export function Tablet({ children, width = 280 }: TabletProps) {
  const height = Math.round(width * 1.42);
  const bezel = Math.round(width * 0.035);
  const radius = Math.round(width * 0.075);
  return (
    <div className="relative select-none" style={{ width, height }}>
      <div className="absolute inset-0" style={{
        borderRadius: radius,
        background: 'linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 40%, #111 100%)',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 2px 1px 0 rgba(255,255,255,0.06) inset, 0 40px 80px -10px rgba(0,0,0,0.35), 0 20px 40px -5px rgba(0,0,0,0.2)',
      }} />
      <div className="absolute left-1/2 -translate-x-1/2 bg-[#222] rounded-full" style={{ top: bezel - 1, width: 6, height: 6 }}>
        <div className="absolute inset-1 rounded-full bg-[#1a1a1a]" />
      </div>
      <div className="absolute overflow-hidden" style={{
        top: bezel * 2.2, bottom: bezel * 2.2, left: bezel, right: bezel,
        borderRadius: radius * 0.55,
        background: '#fff',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.08)',
      }}>
        {children}
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white/20" style={{ width: width * 0.28, height: 3 }} />
    </div>
  );
}
