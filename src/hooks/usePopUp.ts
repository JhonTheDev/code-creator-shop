// src/hooks/usePopUp.ts
import { useState, useCallback } from 'react';

export const usePopup = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openPopup = useCallback(() => setIsOpen(true), []);
  const closePopup = useCallback(() => setIsOpen(false), []);
  const togglePopup = useCallback(() => setIsOpen((prev) => !prev), []);

  return {
    isOpen,
    openPopup,
    closePopup,
    togglePopup,
  };
};

export const useMultiPopup = () => {
  const [openPopups, setOpenPopups] = useState<Record<string, boolean>>({});

  const openPopup = useCallback((key: string) => {
    setOpenPopups(prev => ({ ...prev, [key]: true }));
  }, []);

  const closePopup = useCallback((key: string) => {
    setOpenPopups(prev => ({ ...prev, [key]: false }));
  }, []);

  const isPopupOpen = useCallback((key: string) => {
    return !!openPopups[key];
  }, [openPopups]);

  return {
    openPopups,
    openPopup,
    closePopup,
    isPopupOpen,
  };
};