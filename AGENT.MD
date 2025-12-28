# AGENT.md - Implementação de Sistema de Popups para CodeShop

## Visão Geral
Este documento descreve a implementação de um sistema de popups modular e altamente customizável para o projeto CodeShop. O sistema foi desenvolvido com foco em reusabilidade, acessibilidade e alinhamento com a identidade visual do projeto.

## Arquitetura do Sistema

### 1. **Componentes Principais**

#### a) `PopUpComponents.tsx`
- **Localização**: `/components/PopUpComponents.tsx`
- **Responsabilidade**: Componente React principal que renderiza o popup
- **Características**:
  - Suporte a múltiplos tamanhos (sm, md, lg)
  - Design com glassmorphism e efeitos de brilho
  - Animações suaves usando Tailwind CSS
  - Estrutura responsiva
  - Botões de ação customizáveis

#### b) `PopUpModel.tsx`
- **Localização**: `/components/model/PopUpModel.tsx`
- **Responsabilidade**: Define a interface TypeScript e valores padrão
- **Características**:
  - Interface `PopupProp` com todas as propriedades
  - Objeto `PopupModelDefault` com valores padrão
  - Tipagem forte para melhor experiência de desenvolvimento

#### c) `PopUp.tsx` (Página de Teste)
- **Localização**: `/src/pages/PopUp.tsx`
- **Responsabilidade**: Página de demonstração e testes
- **Características**:
  - Demonstração de uso do componente
  - Interface para testar diferentes configurações
  - Exemplo de implementação real

### 2. **Tecnologias Utilizadas**

#### Tailwind CSS
- **Configuração Extendida**: Foram adicionadas várias utilidades específicas:
  - **Cores personalizadas**: `glass`, `glow`, `surface`
  - **Animações**: `float`, `pulse-glow`, `slide-up`
  - **Gradientes**: `hero-glow`, `button-gradient`
  - **Classes para botões**: Shadows, transitions, effects

#### Lucide React
- **Ícones utilizados**: `X`, `Sparkles`, `Code`, `Zap`, `ArrowRight`
- **Vantagens**: Ícones consistentes, leves e customizáveis

#### TypeScript
- **Tipagem forte**: Garante segurança durante o desenvolvimento
- **Interfaces bem definidas**: Facilita a manutenção e extensão

### 3. **Recursos de Acessibilidade**

#### Implementados:
- **Fechamento por ESC**: Pressionar Escape fecha o popup
- **Fechamento por clique fora**: Clicar no backdrop fecha o popup
- **Labels ARIA**: Botão de fechar com `aria-label`
- **Gerenciamento de foco**: Foco mantido dentro do modal
- **Scroll bloqueado**: Impede scroll do body quando popup está aberto

#### Planejados para futuras versões:
- Suporte a navegação por teclado (Tab/Shift+Tab)
- Anúncio para leitores de tela
- Suporte a preferência de movimento reduzido

### 4. **Sistema de Estilização**

#### Design System Baseado em HSL
```css
/* Exemplo de cores no CSS variables */
--primary: 222.2 47.4% 11.2%;
--primary-foreground: 210 40% 98%;