// src/pages/PopUp.tsx
'use client';

import { useState } from 'react';
import Popup from '@/components/PopUpComponents';
import { Button } from '@/components/ui/button'; // Assumindo que você tem um componente Button
import { Rocket } from 'lucide-react';

export default function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Area de Testes
        </h1>
        <p className="text-muted-foreground mb-8">
          Essa é uma área de testes para o componente Popup.
        </p>

        <Button
          onClick={() => setIsPopupOpen(true)}
          className="flex items-center gap-2 animate-float duration-800"
        >
          License
        </Button>

        {/* Popup */}
        <Popup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          title="License"
          description="Review your license information."
          content="Here is your license information..."
          textFooter='Limited time offer • No credit card required'
          cardTitle1="License Details"
          cardContent1="Your license is valid until December 31, 2024."
          cardTitle2="Terms of Service"
          cardContent2="Your terms is valid until December 31, 2024."
          size="lg"
        />
      </div>
    </div>
  );
}