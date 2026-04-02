'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useCart } from './CartContext';

export default function Header() {
  const { scrollY } = useScroll();
  const shadow = useTransform(scrollY, [0, 40], ['0 0 0 0 rgba(0,0,0,0)', '0 1px 0 0 rgba(0,0,0,0.12)']);
  const { count, add, remove, isCartOpen, openCart, closeCart } = useCart();
  const path = usePathname();
  const popupRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    { label: 'Accueil', href: '/' },
    { label: 'Fonctionnalités', href: '/fonctionnalites' },
    { label: 'Tarifs', href: '/tarifs' },
  ];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        closeCart();
      }
    }
    if (isCartOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isCartOpen, closeCart]);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [path]);

  return (
    <>
      <motion.header
        style={{ boxShadow: shadow }}
        className="fixed top-0 inset-x-0 z-50 bg-[#103a39] h-20 flex items-center px-6 md:px-10"
      >
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/screenshots/Logo-TIEproject-crop.png"
              alt="Hestia"
              width={200}
              height={90}
              className="object-contain"
              priority
            />
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-7">
            {nav.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${path === item.href ? 'text-white font-medium' : 'text-white/50 hover:text-white/90'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: cart + CTA + burger */}
          <div className="flex items-center gap-3">
            {/* Cart icon + popup */}
            <div className="relative" ref={popupRef}>
              <button
                onClick={() => isCartOpen ? closeCart() : openCart()}
                className="relative p-1.5"
                aria-label="Panier"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.98-1.61L23 6H6"/>
                </svg>
                {count > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#55ddc7] text-[#0d3332] text-[9px] font-black flex items-center justify-center">
                    {count}
                  </span>
                )}
              </button>

              {/* Mini cart popup */}
              <AnimatePresence>
                {isCartOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 top-10 w-[min(320px,calc(100vw-2rem))] bg-white rounded-2xl z-50 overflow-hidden"
                    style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)' }}
                  >
                    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                      <p className="font-bold text-[#0f1f1e] text-sm">Votre panier</p>
                      <button onClick={closeCart} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Fermer">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      </button>
                    </div>

                    {count === 0 ? (
                      <div className="px-5 py-8 text-center">
                        <p className="text-gray-400 text-sm">Votre panier est vide.</p>
                        <Link href="/tarifs" onClick={closeCart} className="mt-4 inline-block text-[#30938d] text-sm font-semibold hover:underline">
                          Voir les tarifs →
                        </Link>
                      </div>
                    ) : (
                      <>
                        <div className="px-5 py-4">
                          <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                            <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #55ddc7, #30938d)' }}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                                <polyline points="9 22 9 12 15 12 15 22"/>
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[#0f1f1e] font-semibold text-sm">Hestia</p>
                              <p className="text-gray-400 text-xs mt-0.5">Tablette intelligente</p>
                              <div className="flex items-center gap-2 mt-2">
                                <button onClick={remove} className="w-6 h-6 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-gray-400 transition-colors" aria-label="Retirer un article">
                                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                                </button>
                                <span className="text-sm font-bold text-[#0f1f1e] w-4 text-center">{count}</span>
                                <button onClick={add} className="w-6 h-6 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-gray-400 transition-colors" aria-label="Ajouter un article">
                                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                                </button>
                              </div>
                            </div>
                            <p className="font-black text-[#0f1f1e] text-sm shrink-0">
                              {(173.99 * count).toFixed(2).replace('.', ',')} €
                            </p>
                          </div>
                        </div>

                        <div className="px-5 pb-4">
                          <div className="flex items-center justify-between py-3 border-t border-gray-100">
                            <span className="text-sm text-gray-500">Total TTC</span>
                            <span className="font-black text-[#0f1f1e] text-base">
                              {(173.99 * count).toFixed(2).replace('.', ',')} €
                            </span>
                          </div>
                          <Link
                            href="/checkout"
                            onClick={closeCart}
                            className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-[#0d3332] hover:bg-[#1a3a36] transition-colors flex items-center justify-center gap-2"
                          >
                            Finaliser votre commande
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
                          </Link>
                          <p className="text-center text-gray-300 text-xs mt-2.5">Satisfait ou remboursé 30 jours</p>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA desktop */}
            <Link
              href="/tarifs"
              className="hidden md:block text-sm font-semibold px-4 py-1.5 rounded-full text-[#0d3332] bg-white hover:bg-white/90 transition-colors"
            >
              Commander
            </Link>

            {/* Burger mobile */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="md:hidden p-1.5 text-white"
              aria-label="Menu"
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 inset-x-0 z-40 bg-[#103a39] border-t border-white/10 px-6 py-4 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {nav.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-3 text-base font-semibold border-b border-white/10 last:border-0 transition-colors ${path === item.href ? 'text-white' : 'text-white/60'}`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/tarifs"
                className="mt-3 w-full py-3 rounded-xl text-center font-bold text-sm text-[#0d3332] bg-white"
              >
                Commander
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
