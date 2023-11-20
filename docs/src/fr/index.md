---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
description: Documentation pour intégrer Vite dans votre application Symfony.

hero:
  name: "Symfony + Vite"
  text: "Documentation"
  tagline: Donnez des ailes à votre application Sym[ph]on[ie].
  image:
    src: /symfony-vite.svg
    alt: Symfony & Vite
  actions:
    - theme: brand
      text: Démarrer
      link: /fr/guide/getting-started
    - theme: alt
      text: Installation
      link: /fr/guide/installation
    - theme: alt
      text: Migration v6
      link: /extra/migration

features:
  - icon: ⚡️
    title: Configuration facile
    details: Installation rapide avec la recette Bundle Flex et le plugin Vite préconfiguré.
  - icon:
      src: /images/twig.svg
      wrap: true
      width: 32
      height: 23
    title: Fonctions Twig
    details: Associez vos points d'entrée dans vos modèles Twig avec des fonctions Twig.
  - icon: 📦
    title: Gestion des ressources
    details: Intégrez vos ressources dans Symfony avec une stratégie de version d'asset personnalisée.
  - icon:
      src: /images/stimulus.svg
      width: 32
      height: 32
      wrap: true
    title: Stimulus / Symfony UX
    details: Intégration de vos composants Symfony UX avec HMR.
  - icon: 🧩
    title: Fonctionnalités avancées
    details: Attributs personnalisés, configuration multiple, injection de dépendances.
  - icon: 🚀
    title: Performances
    details: Préchargement de vos fichiers, mise en cache de votre configuration.

---

