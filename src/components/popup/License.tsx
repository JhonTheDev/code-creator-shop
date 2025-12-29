import Popup from '@/components/PopUpComponents';
import { title } from 'process';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function License({ isOpen, onClose }: Props) {
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title='Licenciamento de Código'
      description='Controle total sobre o uso do seu produto'
      content='Cada projeto publicado pode possuir regras de uso específicas. O comprador adquire uma licença, não a autoria do código.'
      cardTitle1='Licença Padrão'
      cardContent1='Uso permitido conforme descrito pelo vendedor, sem redistribuição.'
      cardTitle2='Licenças Customizadas'
      cardContent2='Projetos podem incluir termos específicos para uso comercial ou interno.'
      textFooter='Leia sempre a licença antes de comprar ou vender.'
      size="lg"
    />
  );
}