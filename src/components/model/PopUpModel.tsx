// components/model/PopUpModel.tsx
export interface PopupProp {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  content?: string;
  showIcon?: boolean;
  showFooter?: boolean;
  textFooter?: string;
  cardTitle1?: string;
  cardContent1?: string;
  cardTitle2?: string;
  cardContent2?: string;
  size?: 'sm' | 'md' | 'lg';
  showCloseButton?: boolean;
}

export const PopupModelDefault: PopupProp = {
  isOpen: false,
  onClose: () => {},
  size: 'md',
  title: 'Welcome to CodeShop',
  description: 'Get started with your coding journey today!',
  content: 'Welcome to CodeShop! Your ultimate destination for coding resources.',
  showIcon: true,
  showFooter: true,
  textFooter: 'Limited time offer • No credit card required',
  showCloseButton: true,
  cardTitle1: 'Your First Steps',
  cardContent1: 'Here are some tips to get you started with CodeShop.',
  cardTitle2: 'Your Second Steps',
  cardContent2: 'Here are some more tips to get you started with CodeShop.',
};

export default PopupModelDefault;