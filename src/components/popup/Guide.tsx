import Popup from '@/components/PopUpComponents';
import { title } from 'process';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Guide({ isOpen, onClose }: Props) {
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title='Como a codeShop funciona'
      description='Venda código. Gere caixa. Evolua.'
      content='A codeShop conecta desenvolvedores a compradores reais. Você publica seus códigos, define licenças e recebe por cada venda, sem burocracia.'
      cardTitle1='Publique'
      cardContent1='Suba projetos, snippets, boilerplates ou soluções completas com descrição clara.'
      cardTitle2='Venda'
      cardContent2='A plataforma cuida da vitrine, pagamento e entrega digital do código.'
      textFooter='Foco total em desenvolvedores, não em marketplaces genéricos.'
    />
  );
}