
# Calculadora de Dólar e Medidas

Projeto desenvolvido em React com Vite para conversão de moedas (Real para Dólar) e medidas (centímetros e metros). Possui interface intuitiva, responsiva e fácil de usar, ideal para estudantes, viajantes e profissionais.

## Funcionalidades

- **Conversão de Moeda:**
  - Converta valores de Real para Dólar utilizando cotação informada pelo usuário.
- **Conversão de Medidas:**
  - Converta entre centímetros e metros, e vice-versa.
- **Interface Responsiva:**
  - Layout adaptável para desktop e dispositivos móveis.
- **Navegação Simples:**
  - Menu para acesso rápido à calculadora e à página "Sobre".
- **Banner Dinâmico:**
  - Carrossel de imagens relacionadas a dinheiro e dólar.

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [React Router DOM](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Estrutura do Projeto

```
src/
  App.jsx           # Componente principal e rotas
  pages/
    Home.jsx        # Página inicial com calculadora de dólar
    Sobre.jsx       # Informações sobre o projeto
    Layout.jsx      # Layout base (menu, banner, rodapé)
    NoPage.jsx      # Página de erro 404
  CalcDollar.jsx    # Conversor de Real para Dólar
  CalcMetros.jsx    # Conversor de metros para centímetros
  CalcCentimetros.jsx # Conversor de centímetros para metros
  Menu.jsx          # Menu de navegação
  Banner.jsx        # Carrossel de imagens
  Rodape.jsx        # Rodapé
  Titulo.jsx        # Título do site
public/
  dinheiro.jpg, dolar.jpg, dolar1.jpg, money.gif, cifrao.jpg
```

## Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## Demonstração

![Banner do projeto](public/dolar.jpg)

## Sobre

Calculadora online para conversão de moedas e medidas, com resultados instantâneos e interface amigável. Não requer instalação e funciona em qualquer dispositivo.

---
Desenvolvido por Maria Silva.
