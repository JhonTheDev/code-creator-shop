import Popup from '@/components/PopUpComponents';
import { title } from 'process';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Terms({ isOpen, onClose }: Props) {
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title= 'Termos de Uso'
      description= 'Regras para uma plataforma justa'
      content= 'Ao utilizar a codeShop, você concorda com as regras de uso, conduta e responsabilidade sobre os conteúdos publicados.'
      cardTitle1= 'Responsabilidade'
      cardContent1= 'O vendedor é responsável pelo código e pelas licenças definidas.'
      cardTitle2= 'Conduta'
      cardContent2= 'Conteúdos ilegais, copiados ou maliciosos não são permitidos.'
      textFooter= 'O uso da plataforma implica aceitação destes termos.'
      size="lg"
    />
  );
}