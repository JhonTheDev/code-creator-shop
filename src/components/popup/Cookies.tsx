import Popup from '@/components/PopUpComponents';
import { title } from 'process';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Cookies({ isOpen, onClose }: Props) {
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title='Uso de Cookies'
      description='Transparência sobre dados e experiência'
      content='Utilizamos cookies para garantir funcionalidades essenciais, melhorar a performance da plataforma e entender como você interage com a codeShop. Nenhum dado sensível é vendido ou compartilhado com terceiros.'
      cardTitle1='Cookies Essenciais'
      cardContent1='Necessários para autenticação, segurança e funcionamento básico da plataforma.'
      cardTitle2='Cookies Analíticos'
      cardContent2='Nos ajudam a melhorar a experiência analisando padrões de uso de forma anonimizada.'
      textFooter='Você pode alterar suas preferências a qualquer momento.'
      size="lg"
    />
  );
}