# 🧧 JinQian Gua – Changelog

All notable changes to this project will be documented in this file.
This project follows [Semantic Versioning](https://semver.org/).

---

## [v1.0.0] – 2025-10-14
**Milestone:** MVP Release
**Description:** First public version with full divination workflow.

### ✨ Added
- Basic workflow: query input → coin casting (6 lines) → hexagram result
- UI with Tailwind v4 + shadcn/ui components
- Hexagram computation logic (upper/lower trigrams + guaci display)
- Animated “casting coins” transition
- Display of upper/lower trigram and 64-hexagram name with explanation

### 🧱 Changed
- Project structure refactored for modular logic (`/components`, `/utils`)
- English translation of guaci for all hexagrams

### 🐞 Fixed
- Corrected trigram indexing (bottom-up bit order)
- Improved responsive layout for mobile

---

## [Unreleased]
### Planned Enhancements
- Add “之卦 (Changed Hexagram)” calculation and display
- Add sound or haptic feedback during coin casting
- Add bilingual toggle (中 / EN)
- Add shareable image generator for divination result
