# 🌸 Juma Store - Perfumaria Premium

Bem-vindo à Juma Store! Uma loja de perfumes moderna e elegante, construída com tecnologias web atuais.

## ✨ Características

✅ **Design Responsivo** - Funciona perfeitamente em mobile, tablet e desktop  
✅ **Carrinho de Compras** - Com LocalStorage para persistência  
✅ **Quantidade Variável** - Ajuste quantidades no carrinho  
✅ **Integração WhatsApp** - Finalizar pedidos direto no WhatsApp  
✅ **Produtos Dinâmicos** - Fácil adicionar novos perfumes  
✅ **Otimizado para SEO** - Metadados adequados  
✅ **Performance** - Carregamento rápido  

## 🛠 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos
- **JavaScript (Vanilla)** - Sem dependências
- **Tailwind CSS** - Framework de CSS
- **LocalStorage** - Persistência de dados
- **WhatsApp API** - Integração de pedidos

## 📂 Estrutura do Projeto

```
juma-store/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos customizados
├── js/
│   ├── products.js     # Dados e renderização de produtos
│   └── cart.js         # Lógica do carrinho
├── README.md           # Este arquivo
└── .gitignore          # Arquivos ignorados

```

## 🚀 Como Usar

### 1. Clone o repositório
```bash
git clone https://github.com/sabrinacamille605-create/juma-store.git
cd juma-store
```

### 2. Abra o projeto
Simplesmente abra o arquivo `index.html` no navegador.

**Ou**, para melhor desenvolvimento, use um servidor local:
```bash
# Python 3
python -m http.server 8000

# Node.js (com http-server)
npx http-server
```

Acesse: `http://localhost:8000`

## 📱 Funcionalidades

### Adicionar Produtos
Edite o arquivo `js/products.js` e adicione novos produtos ao array:

```javascript
{
  id: 7,
  name: "Seu Perfume",
  description: "Descrição aqui",
  price: 199.90,
  image: "URL_DA_IMAGEM",
  rating: 4.8,
  reviews: 45
}
```

### Personalizar WhatsApp
Edite o número em `js/cart.js`:
```javascript
const WHATSAPP_NUMBER = "34984315785";
```

### Customizar Cores
Edite as variáveis CSS em `css/style.css`:
```css
:root {
  --primary: #9333ea;      /* Roxo principal */
  --secondary: #ec4899;    /* Rosa secundário */
  --success: #10b981;      /* Verde */
  --danger: #ef4444;       /* Vermelho */
}
```

## 💡 Próximas Melhorias

- [ ] Backend com Node.js/Django
- [ ] Banco de dados (MongoDB/PostgreSQL)
- [ ] Sistema de pagamento (Stripe/Mercado Pago)
- [ ] Autenticação de usuários
- [ ] Histórico de pedidos
- [ ] Admin dashboard
- [ ] Email de confirmação
- [ ] Avaliações de produtos

## 📧 Contato

- **WhatsApp**: (34) 98431-5785
- **Email**: contato@jumastore.com

## 📄 Licença

Este projeto é open source e pode ser usado livremente.

---

**Desenvolvido com ❤️ para Juma Store**