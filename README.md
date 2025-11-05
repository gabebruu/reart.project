# ♻️ ReArt — Moda Circular e Arte Sustentável

> Dar nova vida ao que já não usas.  
> Criar arte com propósito.  
> Vestir o futuro. 🌿

ReArt é uma plataforma mobile-first que conecta pessoas que desejam doar roupa usada ao nosso artista residente — que transforma estes materiais em **peças únicas de arte sustentável**.

A aplicação permite:

✨ Doar roupa têxtil  
🎁 Receber descontos pela quantidade doada  
🛍️ Comprar peças únicas criadas pelo artista  
📍 Ver pontos de entrega com geolocalização  
🔐 Login com Google ou email/password  

A ReArt existe para promover a **economia circular**, apoiar a **criação artística local** e reduzir o **desperdício têxtil no planeta**.

---

## 🚀 Funcionalidades

| Categoria | Funcionalidade |
|---|---|
👤 Autenticação | Google Auth + Credentials (Next-Auth) |
🧾 Doações | Registo de doações + cálculo automático de desconto |
🗺️ Mapa | Pontos de entrega + geolocalização com Leaflet |
🛒 Loja | Peças sustentáveis criadas pelo artista |
🧺 Carrinho | CRUD (em desenvolvimento) |
📱 UX | Interface totalmente mobile-first |

---

## 🧠 Tech Stack

| Área | Tecnologia |
|---|---|
Frontend | Next.js 14 + TailwindCSS |
Backend | Next.js API Routes |
BD | MongoDB Atlas + Mongoose |
Auth | Next-Auth (Google & Credentials) |
Mapas | React-Leaflet + OpenStreetMap |
Deploy | Vercel |

---

## 🗂️ Estrutura do Projeto

src/

├─ app/

│ ├─ page.jsx → Login

│ ├─ dashboard/

│ │ ├─ layout.jsx → Layout mobile + Nav

│ │ ├─ page.jsx → Catálogo

│ │ ├─ donate/

│ │ │ └─ page.jsx → Doar + Desconto + Mapa

│ │ ├─ cart/

│ │ │ └─ page.jsx

│ │ └─ artist/

│ │ └─ page.jsx → Sobre o artista

│ └─ api/ → Rotas (auth, produtos, carrinho)

├─ components/

│ ├─ ProductCard.jsx

│ ├─ MapLea.jsx

│ ├─ DonationsCalculator.jsx

│ └─ BottomNav.jsx

└─ database/

└─ models (User, Product, Donation...)


---

## 👥 Equipa

| Nome | Função |
|---|---|
Miguel | Fullstack & Gestão do Projeto |
Mishal | Fullstack |
Bruna | Frontend & UI |
Rodolfo | Frontend & Design |
Chris | Frontend |

---

## 🌿 Missão

A ReArt ajuda a:

- Combater o desperdício têxtil
- Apoiar artistas locais
- Estimular a economia circular
- Criar impacto ambiental real

Cada peça doada = menos resíduos  
Cada peça comprada = apoio direto ao artista ✨

---

## 🧪 Como correr o projeto localmente

### 1️⃣ Clonar
```bash
git clone <repo>
cd reart.project
2️⃣ Instalar dependências
bash
Copiar código
npm install
3️⃣ Criar .env.local
Adicionar credenciais Google + MongoDB + Next-Auth Secret

4️⃣ Iniciar Dev
bash
Copiar código
npm run dev
🌐 Deploy
🔗 Preview em Vercel: (link aqui)

🎤 Pitch
A ReArt transforma doações têxteis em arte sustentável.
Um ecossistema onde moda, cultura e tecnologia se encontram para criar impacto social e ambiental positivo.

🏁 Conclusão
ReArt não é apenas uma app.
É uma proposta de futuro: moda circular + arte consciente + tecnologia acessível.

🌱 ReArt — onde a roupa renasce e a arte floresce.