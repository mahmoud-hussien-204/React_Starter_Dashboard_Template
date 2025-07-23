type ITheme = `${import('../enums/index.enum').EnumThemes}`;

type ILang = 'ar' | 'en';

type ILayout = 'default';

interface IPageData {
  title: string;
  description?: string;
  keywords?: string[];
}
