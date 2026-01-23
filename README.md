# 🎧 Web App de Foco Sonoro com Pomodoro

Este projeto é um **web app de produtividade e foco**, desenvolvido em **JavaScript puro**, que permite ao usuário criar um ambiente sonoro personalizado para estudo ou trabalho, combinando **ruídos**, **sons da natureza** e **lofi**, além de contar com um **timer Pomodoro integrado**.

O projeto foi pensado como um **primeiro projeto prático**, com foco em aprendizado progressivo, arquitetura simples e boas práticas básicas.

---

## 🧠 Visão Geral

O usuário pode:

- Ouvir múltiplos sons simultaneamente
- Controlar o volume de cada som individualmente
- Combinar ruídos artificiais e sons naturais
- Utilizar um Pomodoro para ciclos de foco e pausa

O objetivo é criar um ambiente que ajude na **concentração**, **relaxamento** e **gestão de tempo**.

---

## ✨ Funcionalidades

### 🔊 Sons

- Ruído branco
- Ruído marrom
- Sons da natureza (chuva, floresta, mar, etc.)
- Playlist lo‑fi
- Reprodução simultânea de múltiplos sons
- Controle de volume individual
- Loop contínuo

### ⏲️ Pomodoro

- Timer regressivo
- Ciclos de foco e pausa
- Controles: iniciar, pausar e resetar
- Indicação visual do estado atual

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** – estrutura da aplicação
- **CSS3** – layout e estilos
- **JavaScript (ES6+)** – lógica da aplicação
- **Web Audio API** – mixagem e controle de áudio

> Nenhum framework foi utilizado. O objetivo é compreender os fundamentos do JavaScript e da Web Audio API.

---

## 📂 Estrutura de Pastas

```
src/
├── index.html
├── styles/
│   └── main.css
├── audio/
│   ├── nature/
│   └── lofi/
├── js/
│   ├── audio/
│   │   ├── AudioManager.js
│   │   └── NoiseGenerator.js
│   ├── pomodoro/
│   │   └── PomodoroTimer.js
│   ├── ui/
│   │   └── controls.js
│   └── app.js

```

---

## 🧩 Arquitetura

O projeto segue uma separação simples de responsabilidades:

- **AudioManager**: gerencia todos os sons ativos
- **NoiseGenerator**: gera ruídos artificiais via código
- **PomodoroTimer**: controla o tempo e os estados do Pomodoro
- **UI Controls**: conecta a interface com a lógica

A aplicação utiliza **programação orientada a objetos**, facilitando manutenção e evolução futura.

---

## 🏃 Metodologia de Desenvolvimento

O desenvolvimento foi organizado como um **Épico**, dividido em **5 sprints**:

1. Fundamentos de JavaScript e primeiro som
2. Múltiplos sons simultâneos e controle individual
3. Geração de ruídos (branco e marrom)
4. Implementação do Pomodoro
5. Refinamento de UI e entrega

Cada sprint entrega uma funcionalidade utilizável.

---

## 🚧 Status do Projeto

🚧 Em desenvolvimento

---

## 🎯 Objetivos de Aprendizado

- Aprender JavaScript na prática
- Entender manipulação de DOM
- Trabalhar com áudio na web
- Aplicar lógica orientada a objetos
- Desenvolver um projeto completo do zero

---

## 🌱 Possíveis Evoluções Futuras

- Presets de sons salvos
- Persistência com localStorage
- Temas claro/escuro
- Responsividade mobile
- Migração para framework (React/Vue)

---

## 👩‍💻 Autoria

Projeto desenvolvido por **Vivian Magda** como projeto de aprendizado e portfólio.

---

## 📄 Licença

Este projeto é de uso educacional e pessoal.
