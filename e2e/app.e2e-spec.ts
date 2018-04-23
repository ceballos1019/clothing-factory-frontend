import { AppPage } from './app.po';

describe('clothing-factory App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('app-root h1')).toEqual('Clothing Factory');
  });

  it('should navigate to product page by clicking on the link', () => {
   page.navigateTo('/');

   let navlink = page.getAllElements('a').get(1);
   navlink.click();

   expect(page.getParagraphText('h3')).toBe('Solicitud de productos')
 });

 it('should display required validation message', () => {
    page.navigateTo('/products');
    let name = page.getElement('#name');
    name.sendKeys('');
    expect(page.getParagraphText('.alert div')).toEqual('Por favor ingresa tu nombre');
  });
});
