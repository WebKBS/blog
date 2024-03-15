'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Moon, SunMoon } from 'lucide-react';

export default function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [themeState, setThemeState] = useState(<SunMoon size={20} />);

  useEffect(() => {
    // resolveTheme가 바뀔 때마다 아이콘 변경

    if (resolvedTheme === 'dark') {
      setThemeState(<SunMoon size={20} />);
    } else {
      setThemeState(<Moon size={20} />);
    }
  }, [resolvedTheme]);

  const toggleTheme = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
      setThemeState(<Moon size={20} />);
    } else {
      setTheme('dark');
      setThemeState(<SunMoon size={20} />);
    }
  };

  return (
    <div>
      <Button
        size="icon"
        type="button"
        variant="secondary"
        onClick={toggleTheme}
        aria-label="색상 테마 변경"
        title="색상 테마 변경"
        className="w-9 h-9"
      >
        {themeState}
      </Button>
    </div>
  );
}
