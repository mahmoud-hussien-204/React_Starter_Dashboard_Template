type ITheme = `${import('../enums/index.enum').EnumThemes}`;

type ILang = 'ar' | 'en';

type ILayout = `${import('../enums/index.enum').EnumDashboardLayouts}`;

interface IPageData {
  title: string;
  description?: string;
  keywords?: string[];
}
