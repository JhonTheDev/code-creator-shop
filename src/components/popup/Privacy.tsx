import Popup from '@/components/PopUpComponents';
import { title } from 'process';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Privacy({ isOpen, onClose }: Props) {
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title= 'Privacidade e Dados'
      description= 'Seus dados sob seu controle'
      content= 'Coletamos apenas informações necessárias para operação da plataforma, pagamentos e suporte. Seus dados são protegidos e tratados com responsabilidade.'
      cardTitle1= 'Dados Coletados'
      cardContent1= 'Nome, e-mail, dados de pagamento e informações técnicas mínimas.'
      cardTitle2= 'Segurança'
      cardContent2= 'Criptografia, boas práticas de mercado e acesso restrito.'
      textFooter= 'A privacidade é um pilar da codeShop.'
      size="lg"
    />
  );
}