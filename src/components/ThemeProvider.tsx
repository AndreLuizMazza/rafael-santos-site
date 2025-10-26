import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  Theme,
  initTheme, applyTheme, getStoredTheme, setStoredTheme,
  startSystemListener, stopSystemListener,
  startAutoScheduler, stopAutoScheduler,
} from '@/lib/theme';

type Ctx = { theme: Theme; setTheme: (t: Theme) => void; };
const ThemeContext = createContext<Ctx | undefined>(undefined);

export function useTheme(){
  const ctx = useContext(ThemeContext);
  if(!ctx) throw new Error('useTheme deve ser usado dentro de <ThemeProvider>');
  return ctx;
}

export default function ThemeProvider({ children }: { children: React.ReactNode }){
  const [theme, setThemeState] = useState<Theme>(() => getStoredTheme() ?? 'system');

  useEffect(()=>{ setThemeState(initTheme()); }, []);

  useEffect(()=>{
    stopSystemListener(); stopAutoScheduler();
    if(theme === 'system') startSystemListener(()=>applyTheme('system'));
    if(theme === 'auto')   startAutoScheduler(()=>applyTheme('auto'));
    applyTheme(theme);
    setStoredTheme(theme);
    return () => { stopSystemListener(); stopAutoScheduler(); };
  },[theme]);

  const value = useMemo(()=>({ theme, setTheme: (t: Theme) => setThemeState(t) }),[theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
