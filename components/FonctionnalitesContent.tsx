'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Tablet, DashboardScreen, InventoryScreen, AlertsScreen, RecipesScreen, AddProductScreen, AddProductPhotoScreen, RecipesResultScreen } from './Mockup';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

interface FeatureBlockProps {
  number: string;
  label: string;
  headline: string;
  description: string;
  details: string[];
  screen: React.ReactNode;
  reverse?: boolean;
  accent?: string;
}

function FeatureBlock({ number, label, headline, description, details, screen, reverse, accent = '#30938d' }: FeatureBlockProps) {
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
      className={`max-w-5xl mx-auto px-6 py-20 md:py-28 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-16`}
    >
      {/* Text */}
      <div className="flex-1 min-w-0">
        <motion.div variants={reveal} className="flex items-center gap-3 mb-5">
          <span className="text-xs font-black text-white px-2.5 py-1 rounded-full" style={{ background: accent }}>{number}</span>
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>{label}</span>
        </motion.div>
        <motion.h2 variants={reveal} className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-black tracking-tight leading-tight text-[#0f1f1e] mb-4">
          {headline}
        </motion.h2>
        <motion.p variants={reveal} className="text-base text-gray-500 font-light leading-relaxed max-w-md mb-6">
          {description}
        </motion.p>
        <motion.ul variants={stagger} className="space-y-2.5">
          {details.map(d => (
            <motion.li key={d} variants={reveal} className="flex items-start gap-2.5 text-sm text-gray-600">
              <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-[9px] font-bold" style={{ background: accent }}>✓</span>
              {d}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Device */}
      <motion.div
        variants={{ hidden: { opacity: 0, y: 24, scale: 0.97 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
        className="relative shrink-0 flex items-center justify-center"
        style={{ width: 300, height: 440 }}
      >
        <div className="absolute inset-8 rounded-full pointer-events-none" style={{ background: `radial-gradient(ellipse, ${accent}12 0%, transparent 70%)`, filter: 'blur(20px)' }} />
        <Tablet width={240}>{screen}</Tablet>
      </motion.div>
    </motion.div>
  );
}

export default function FonctionnalitesContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto px-6"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#f0faf9] text-[#30938d] border border-[#d0f0ec] mb-6">
            Fonctionnalités
          </span>
          <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-black tracking-tight leading-tight text-[#0f1f1e] mb-4">
            Tout ce que fait Hestia,<br />
            <span style={{ color: '#30938d' }}>en détail.</span>
          </h1>
          <p className="text-gray-500 font-light text-lg leading-relaxed">
            Découvrez comment chaque fonctionnalité de l&apos;application fonctionne concrètement — avec les vrais écrans.
          </p>
        </motion.div>

      </section>

      {/* ── 1. TABLEAU DE BORD ── */}
      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-gray-100" /></div>
      <div id="dashboard">
        <FeatureBlock
          number="01"
          label="Tableau de bord"
          headline="Votre cuisine en un regard."
          description="Dès que vous ouvrez Hestia, vous avez une vue complète : alertes urgentes, répartition par emplacement et suggestion de recettes du jour."
          details={[
            "Alerte immédiate des produits périmés ou proches de leur date limite",
            "Comptage des produits par emplacement : Frigo, Placard, Congélateur",
            "Accès direct à la section recettes avec les produits urgents",
            "Section 'À consommer rapidement' avec les aliments prioritaires",
          ]}
          screen={<DashboardScreen />}
          accent="#22a085"
        />
      </div>

      {/* ── 2. INVENTAIRE ── */}
      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-gray-100" /></div>
      <div id="inventaire">
        <FeatureBlock
          number="02"
          label="Inventaire complet"
          headline="Tous vos aliments, organisés et triés."
          description="L'inventaire centralise tous vos produits. Filtrez par emplacement, triez par date de péremption, marquez comme consommé en un clic."
          details={[
            "Vue complète de tous vos produits avec emoji, nom, emplacement et quantité",
            "Filtres rapides : Tout, Frigo, Placard, Congélateur",
            "Tri automatique par date de péremption — les urgents en premier",
            "Barre de recherche pour trouver un aliment instantanément",
            "Bouton 'Consommé' pour retirer un produit de la liste en un clic",
          ]}
          screen={<InventoryScreen />}
          reverse
          accent="#30938d"
        />
      </div>

      {/* ── 3. AJOUT PRODUIT ── */}
      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-gray-100" /></div>
      <div id="ajout" className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.div variants={reveal} className="flex items-center justify-center gap-3 mb-5">
            <span className="text-xs font-black text-white px-2.5 py-1 rounded-full" style={{ background: '#8b5cf6' }}>03</span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#8b5cf6]">Ajout d&apos;un aliment</span>
          </motion.div>
          <motion.h2 variants={reveal} className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-black tracking-tight leading-tight text-[#0f1f1e] mb-4">
            Deux façons d&apos;ajouter<br />un produit.
          </motion.h2>
          <motion.p variants={reveal} className="text-base text-gray-500 font-light leading-relaxed max-w-xl mx-auto">
            Saisissez manuellement le nom, l&apos;emplacement et la date de péremption — ou prenez une photo du produit et laissez l&apos;IA détecter toutes les informations automatiquement.
          </motion.p>
        </motion.div>

        {/* 2 tablets côte à côte : Manuel / Photo IA */}
        <div className="flex flex-col sm:flex-row items-start justify-center gap-8 md:gap-14">
          {[
            {
              label: 'Saisie manuelle',
              desc: 'Renseignez le nom, choisissez l\'emplacement, la quantité et la date de péremption. En 10 secondes.',
              screen: <AddProductScreen />,
            },
            {
              label: 'Détection par photo',
              desc: "Photographiez un produit et l'IA détecte automatiquement le nom et la date de péremption si visible sur l'étiquette.",
              screen: <AddProductPhotoScreen />,
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-5 flex-1"
            >
              <div className="relative" style={{ width: 240, height: 350 }}>
                <div className="absolute inset-4 rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)', filter: 'blur(16px)' }} />
                <Tablet width={220}>{item.screen}</Tablet>
              </div>
              <div className="text-center max-w-xs">
                <p className="font-bold text-sm text-[#0f1f1e] mb-1">{item.label}</p>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Details list */}
        <motion.ul
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={stagger}
          className="mt-12 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto"
        >
          {[
            "Formulaire simplifié : nom, emplacement, quantité, unité, date",
            "Sélecteur visuel d'emplacement (Frigo / Placard / Congélateur)",
            "Mode photo : l'IA détecte le produit et la date de péremption",
            "Confirmation en un clic après détection automatique",
          ].map(d => (
            <motion.li key={d} variants={reveal} className="flex items-start gap-2.5 text-sm text-gray-600">
              <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-[9px] font-bold" style={{ background: '#8b5cf6' }}>✓</span>
              {d}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* ── 4. ALERTES ── */}
      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-gray-100" /></div>
      <div id="alertes">
        <FeatureBlock
          number="04"
          label="Alertes de péremption"
          headline="Sachez quoi manger avant qu'il ne soit trop tard."
          description="Une bannière d'alerte apparaît dès que des produits périment ou approchent de leur date limite. Hestia liste les produits concernés et vous suggère une action."
          details={[
            "Bannière rouge immédiate avec la liste des produits périmés",
            "Section 'À consommer rapidement' avec date précise pour chaque item",
            "Badge 'Périmé' visible sur chaque carte produit concerné",
            "Suggestion directe vers la page recettes pour cuisiner les produits urgents",
            "Action 'Consommé' accessible directement depuis l'alerte",
          ]}
          screen={<AlertsScreen />}
          reverse
          accent="#ef4444"
        />
      </div>

      {/* ── 5. RECETTES ── */}
      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-gray-100" /></div>
      <div id="recettes" className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.div variants={reveal} className="flex items-center justify-center gap-3 mb-5">
            <span className="text-xs font-black text-white px-2.5 py-1 rounded-full" style={{ background: '#f97316' }}>05</span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#f97316]">Génération de recettes</span>
          </motion.div>
          <motion.h2 variants={reveal} className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-black tracking-tight leading-tight text-[#0f1f1e] mb-4">
            L&apos;IA génère des recettes<br />avec ce que vous avez.
          </motion.h2>
          <motion.p variants={reveal} className="text-base text-gray-500 font-light leading-relaxed max-w-xl mx-auto">
            Sélectionnez vos ingrédients disponibles ou les produits bientôt périmés, appuyez sur &quot;Générer des recettes&quot; et laissez l&apos;IA travailler.
          </motion.p>
        </motion.div>

        {/* 2 tablets côte à côte : avant / pendant */}
        <div className="flex flex-col sm:flex-row items-start justify-center gap-8 md:gap-14">
          {[
            {
              label: 'Sélection des ingrédients',
              desc: 'Choisissez entre tous les ingrédients ou uniquement les produits bientôt périmés.',
              screen: <RecipesScreen />,
            },
            {
              label: 'Proposition de recettes',
              desc: "L'IA génère des recettes personnalisées basées sur votre inventaire réel — avec les ingrédients, le temps et la difficulté.",
              screen: <RecipesResultScreen />,
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-5 flex-1"
            >
              <div className="relative" style={{ width: 240, height: 350 }}>
                <div className="absolute inset-4 rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.1) 0%, transparent 70%)', filter: 'blur(16px)' }} />
                <Tablet width={220}>{item.screen}</Tablet>
              </div>
              <div className="text-center max-w-xs">
                <p className="font-bold text-sm text-[#0f1f1e] mb-1">{item.label}</p>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Details list */}
        <motion.ul
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={stagger}
          className="mt-12 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto"
        >
          {[
            "Filtre 'Tous les ingrédients' ou 'Bientôt périmés' pour cibler les urgents",
            "Ingrédients disponibles affichés sous forme de pastilles sélectionnables",
            "Génération IA en quelques secondes basée sur l'inventaire réel",
            "Recettes adaptées aux produits que vous avez déjà — aucun achat nécessaire",
          ].map(d => (
            <motion.li key={d} variants={reveal} className="flex items-start gap-2.5 text-sm text-gray-600">
              <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-[9px] font-bold" style={{ background: '#f97316' }}>✓</span>
              {d}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* CTA final */}
      <section className="bg-[#f8f9fa] py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-xl mx-auto px-6 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-[#0f1f1e] mb-3">Prêt à essayer Hestia ?</h2>
          <p className="text-gray-500 text-base font-light mb-8">Satisfait ou remboursé 30 jours. Paiement sécurisé.</p>
          <Link
            href="/tarifs"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0f2523] text-white text-sm font-semibold hover:bg-[#1a3a36] transition-colors"
          >
            Voir les tarifs
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
