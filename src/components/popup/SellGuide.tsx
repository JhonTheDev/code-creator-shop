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
    title="Guia de Vendas"
    description="Aumente suas chances de conversão"
    content="Projetos bem descritos, organizados e documentados vendem mais. Pense como um produto, não apenas como código."
    cardTitle1="Descrição Clara"
    cardContent1="Explique o problema que o código resolve e para quem ele é."
    cardTitle2="Qualidade"
    cardContent2="Código limpo, README bem feito e exemplos aumentam confiança."
    textFooter="Venda valor, não apenas linhas de código."
    size="lg"
  />
  );
}