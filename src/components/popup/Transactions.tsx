import Popup from '@/components/PopUpComponents';
import { title } from 'process';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Transactions({ isOpen, onClose }: Props) {
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title= 'Transações e Pagamentos'
      description= 'Fluxo claro e seguro'
      content= 'As transações são processadas por parceiros de pagamento confiáveis. O repasse ao vendedor ocorre após a confirmação da compra.'
      cardTitle1= 'Pagamentos'
      cardContent1= 'Cartão, PIX ou outros métodos disponíveis no checkout.'
      cardTitle2= 'Repasse'
      cardContent2= 'Valores são liberados conforme o prazo operacional da plataforma.'
      textFooter= 'Transparência total em cada etapa da venda.'
      size="lg"
    />
  );
}