♻️ ReArt — Moda Circular e Arte Sustentável

Dar nova vida ao que já não usas.
Criar arte com propósito.
Vestir o futuro. 🌿

ReArt é uma plataforma mobile-first que conecta pessoas que desejam doar roupa usada ao nosso artista residente — que transforma estes materiais em peças únicas de arte sustentável.

A aplicação permite que qualquer pessoa:

✨ Doe roupa têxtil
🎁 Receba descontos proporcionais à quantidade doada
🛍️ Explore e compre peças exclusivas criadas a partir das doações
📍 Consulte pontos de entrega e use geolocalização
🔐 Faça login com Google ou email/password

A ReArt existe para promover a economia circular, apoiar a criação artística local e reduzir o impacto têxtil no planeta.

🚀 Funcionalidades Principais
Categoria	Funcionalidade
👤 Autenticação	Login via Google & Credenciais
🧾 Doação	Sistema de registo de materiais doados com cálculo de desconto
📍 Mapa	Pontos de entrega com geolocalização (Leaflet + OpenStreetMap)
🛒 Loja	Catálogo de peças únicas criadas pelo artista
💳 Carrinho	CRUD do carrinho (in progress)
📱 UI/UX	Mobile-first, interface moderna e focada no utilizador
🧠 Tecnologias Utilizadas
Área	Tech
Frontend	Next.js 14 (App Router), TailwindCSS, Next/Image, Lucide
Backend	Next.js API Routes
Autenticação	Next-Auth (Google + Credentials)
Base de Dados	MongoDB Atlas + Mongoose
Mapa	React-Leaflet + OpenStreetMap
Deploy	Vercel
🗂️ Estrutura do Projeto
src/
 ├─ app/
 │   ├─ page.jsx            → Login
 │   ├─ dashboard/
 │   │   ├─ page.jsx        → Catálogo
 │   │   ├─ layout.jsx      → Container mobile + Navbar
 │   │   ├─ donate/
 │   │   │   ├─ page.jsx    → Doar + Desconto + Mapa
 │   │   ├─ cart/
 │   │   │   └─ page.jsx
 │   │   ├─ artist/
 │   │   │   └─ page.jsx     → Sobre o artista
 │   └─ api/
 │       └─ (auth, produtos, carrinho...)
 ├─ components/
 │   ├─ ProductCard.jsx
 │   ├─ BottomNav.jsx
 │   ├─ MapLea.jsx
 │   └─ DonationsCalculator.jsx
 └─ database/
     └─ models (User, Product, Donation...)

👥 Equipa
Nome	Função
Miguel	Fullstack & Gestão do Projeto
Mishal	Fullstack
Bruna	Frontend & UI
Rodolfo	Frontend
Chris	Frontend & Design
🌍 Missão Social & Ambiental

A ReArt nasce com o compromisso de:

Combater o desperdício têxtil

Sensibilizar para a moda sustentável

Apoiar produção artística local

Criar uma comunidade que valoriza a reutilização

Cada peça comprada e cada peça de roupa doada contribui para um ciclo mais humano e mais verde 🌱

🧪 Como correr o projeto localmente
1️⃣ Clonar o repositório
git clone <repo>
cd reart

2️⃣ Instalar dependências
npm install

3️⃣ Configurar variáveis de ambiente

Criar .env.local e inserir credenciais Google + MongoDB.

4️⃣ Iniciar
npm run dev

🌐 Deploy

🔗 Vercel Live Preview: (link aqui)

🎤 Pitch rápido

A ReArt transforma doações têxteis em arte sustentável.
Criamos impacto social, ambiental e cultural — com moda circular como motor e tecnologia como ponte entre comunidade e artista.

🏁 Conclusão

Este é mais do que um marketplace — é um movimento criativo para um planeta mais consciente.

ReArt — onde a roupa renasce e a arte floresce.